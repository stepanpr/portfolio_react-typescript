import React from "react";
import classnames from "classnames";

import './styles.css'


export const Content = () => {

	const contentClassNames = classnames({
		'content': true,
	});
	return (
		<div className={contentClassNames}>
			<div className={'container'}>

				content
			</div>
		</div>
	);
}