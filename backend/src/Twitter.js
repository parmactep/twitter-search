const superagent = require('superagent');

const API_URL = 'https://api.twitter.com/1.1';
const API_KEY = '';
const API_SECRET = '';

const DEFAULT_USER_ID = 2244994945;
const ON_PAGE_COUNT = 20;

module.exports = class Twitter { //@TODO: Error handling
	constructor() {
		this._token = '';
		this._auth();
	}
	_auth() {
		const basic = Buffer.from(API_KEY + ':' + API_SECRET).toString('base64');
		return superagent
			.post('https://api.twitter.com/oauth2/token')
			.set('Authorization', 'Basic ' + basic)
			.send('grant_type=client_credentials')
			.then(res => {
				this._token = res.body.access_token;
			})
	}
	_sanitize(tweets) {
		return tweets.map(tweet => {
			return {
				'text': tweet.text,
				'created_at' : tweet.created_at,
				'author': tweet.user.name
			}
		});
	}
	_get(endpont, query) { //@TODO: this._auth when error
		return superagent
			.get(API_URL + endpont)
			.query(query)
			.set('Authorization', 'Bearer ' + this._token)
			.then(res => res.body);
	}
	home() {
		return this._get('/statuses/user_timeline.json', {
				user_id: DEFAULT_USER_ID,
				exclude_replies: true,
				count: ON_PAGE_COUNT
			})
			.then(body => {
				return this._sanitize(body);
			});
	}
	search(query) {
		return this._get('/search/tweets.json', {
				q: query,
				count: ON_PAGE_COUNT
			})
			.then(body => {
				return this._sanitize(body.statuses);
			});
	}
};
