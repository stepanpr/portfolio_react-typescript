import React from "react";
import classnames from 'classnames';

import './styles.css'

interface FooterProps {
	mediaQueries: any;
}

export const Footer: React.FunctionComponent<FooterProps> = (props) => {


	const footerClassNames = classnames({
		'footer': true,
	});
	const containerClassNames = classnames({
		'container-x': props.mediaQueries.isDesktopOrLaptop,
		'container-m': props.mediaQueries.isTabletOrMobile,
		'container-s': props.mediaQueries.isMobile,
	});

	return (
			<div className={footerClassNames}>
				<div className={containerClassNames}>

				footer
				</div>
			</div>
	);
}