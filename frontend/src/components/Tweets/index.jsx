import React from 'react'

import Tweet from 'components/Tweet'

const renderTweet = (tweet, key) => <Tweet key={key} {...tweet}/>

export default function Tweets (props) {
	return <div className="_Tweets">
		{props.tweets.map(renderTweet)}
	</div>
}

import './index.styl'