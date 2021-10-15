import React from "react";
import classnames from 'classnames';

import './styles.css'

export const Footer = () => {


	const footerClassNames = classnames({
		'footer': true,
	});
	return (
			<div className={footerClassNames}>
				<div className={'container'}>

				footer
				</div>
			</div>
	);
}