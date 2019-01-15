import React from 'react'
import {reaction} from 'mobx'
import {observer} from 'mobx-react'
import {Switch, Route, Link, withRouter} from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import queryString from 'query-string'

import Home from 'modules/Home'
import Search from 'modules/Search'

import store from 'store'

@hot
@withRouter
@observer
export default class App extends React.Component {
	handleChange = (e) => {
		const value = e.target.value
		value
			? this.props.history.push({
					pathname: '/search',
					search: queryString.stringify({
						q: value
					})
				})
			: this.props.history.push('/')
	}
	render() {
		const value = this.props.location.pathname === '/search' ? queryString.parse(this.props.location.search).q : ''

		return <div className="App">
			<div className="App__Header" onSubmit={this.handleSearch}>
				<Link to="/" className="App__Title">Twitter Search</Link>
				<input type="text" value={value} onChange={this.handleChange} className="App__Input"/>
			</div>
			<div className="App__Body">
				<Switch>
					<Route path="/search" component={Search}/>
					<Route path="/" component={Home}/>
				</Switch>
			</div>
		</div>
	}
}

import './index.styl'