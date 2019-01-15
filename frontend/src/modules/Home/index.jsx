import React from 'react'
import {observer} from 'mobx-react'

import Tweets from 'components/Tweets'

import store from 'store'

@observer
export default class Home extends React.Component {
	componentDidMount() {
		store.fetch('/home')
	}
	render() {
		return <Tweets tweets={store.tweets}/>
	}
}