import React from "react";
import classnames from "classnames";
import './styles.css'

import { General } from "./General";
import { About } from "./About"
import { Contact } from './Contact';


interface ContentProps {
	mediaQueries: any;
}

export const Content: React.FunctionComponent<ContentProps> = (props) => {

	const contentClassNames = classnames({
		'content': true,
	});
	// const containerClassNames = classnames({
	// 	'container-x': props.mediaQueries.isDesktopOrLaptop,
	// 	'container-m': props.mediaQueries.isTabletOrMobile,
	// 	'container-s': props.mediaQueries.isMobile,
	// });

	return (
		<div className={contentClassNames}>
			<General mediaQueries={props.mediaQueries}></General>
			<About mediaQueries={props.mediaQueries}></About>
			<Contact mediaQueries={props.mediaQueries}></Contact>
		</div>
		
	);
}