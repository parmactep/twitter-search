import {observable, action} from 'mobx'

const API_URL = 'http://localhost:3080'

class Store {
	@observable tweets = []
	@action fetch(endpoint, search = '') {
		fetch(API_URL + endpoint + search)
			.then(response => {
				return response.json()
			})
			.then(json => {
				this.tweets = json
			})
	}
}

export default new Store()