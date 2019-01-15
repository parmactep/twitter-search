const path = require('path');
const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

const Twitter = require('./twitter');
const twitter = new Twitter();

app.get('/home', (req, res, next) => {
	twitter.home()
		.then(data => {
			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify(data));
		});
});

app.get('/search', (req, res, next) => {
	twitter.search(req.query.q)
		.then(data => {
			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify(data));
		});
});

app.all('*', (req, res)=>{
	res.status(400).send()
});

app.listen(3080);