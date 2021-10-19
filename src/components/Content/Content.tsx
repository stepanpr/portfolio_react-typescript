import React from "react";
import classnames from "classnames";

import './styles.css'

interface ContentProps {
	mediaQueries: any;
}

export const Content: React.FunctionComponent<ContentProps> = (props) => {

	const contentClassNames = classnames({
		'content': true,
	});
	const containerClassNames = classnames({
		'container-x': props.mediaQueries.isDesktopOrLaptop,
		'container-m': props.mediaQueries.isTabletOrMobile,
		'container-s': props.mediaQueries.isMobile,
	});

	return (
		<div className={contentClassNames}>
			<div className={containerClassNames}>
				<p>sdsdsdsdsdsdsdsd</p> 
				<p>sdsdsdsdsdsdsdsd</p> 
				<p>sdsdsdsdsdsdsdsd</p> 
				<p>sdsdsdsdsdsdsdsd</p> 
				<p>sdsdsdsdsdsdsdsd</p> 
				<p>sdsdsdsdsdsdsdsd</p> 
				
				
			</div>
		</div>
	);
}