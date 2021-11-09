import React from "react";
import classnames from "classnames";
import './styles.css'

import { General } from "./General";
import { About } from "./About"
import { Gallery } from "./Gallery";
import { Rewiews } from "./Reviews";
import { Contact } from './Contact';


interface ContentProps {
	mediaQueries: any;
	menuActive: boolean;

}

export const Content: React.FunctionComponent<ContentProps> = (props) => {

	const contentClassNames = classnames({
		'content': true,
		// 'content-no-scroll': props.menuActive,
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
			<Gallery mediaQueries={props.mediaQueries}></Gallery>
			<Rewiews mediaQueries={props.mediaQueries}></Rewiews>
			<Contact mediaQueries={props.mediaQueries}></Contact>
		</div>
		
	);
}