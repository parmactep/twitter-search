import React from 'react'
import {observer} from 'mobx-react'

import Tweet from 'components/Tweet'
import Tweets from 'components/Tweets'

import store from 'store'

@observer
export default class extends React.Component {
	componentDidMount() {
		store.fetch('/search', this.props.location.search)
	}
	componentDidUpdate(prevProps) {
		prevProps.location.key !== this.props.location.key
			&& store.fetch('/search', this.props.location.search)
	}
	render() {
		return <Tweets tweets={store.tweets}/>
	}
}