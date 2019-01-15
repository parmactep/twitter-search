import React from 'react'
import moment from 'moment'

export default function (props) {
	return <div className="_Tweet">
		<div className="_Tweet__Header">
			<div className="_Tweet__Author">
				{props.author}
			</div>
			<div className="_Tweet__Date">
				{moment(new Date(props.created_at)).format('HH:mm MM.DD.YYYY')}
			</div>
		</div>
		<div className="_Tweet__Text">
			{props.text}
		</div>
	</div>
}

import './index.styl'