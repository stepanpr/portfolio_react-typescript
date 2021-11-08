import React, { useEffect } from 'react';
import classnames from 'classnames';

import './styles.css'
import Logo from './Logo';
import { ILink } from '../../interfaces/ILink'
// import logo from './logo.svg';
// import { ReactComponent as YourSvg } from './logo.svg';


interface HeaderProps {
	
	menuActive: boolean;
	setMenuActive: any;
	mediaQueries: any;
	menuItems: ILink[];
}

export const Header: React.FunctionComponent<HeaderProps> = (props) => {


	useEffect(() => {
		const handleEscPress = (event: any) => {
			if (event.keyCode === 27 && props.menuActive)
				props.setMenuActive(!props.menuActive);
		}
		window.addEventListener("keydown", handleEscPress);
		return () => {
		  window.removeEventListener("keydown", handleEscPress);
		};
	  });

	// useEffect(() => { 
	// 	const handleClick = () => props.menuActive ? props.setMenuActive(!props.menuActive) : 0;
	// 	window.addEventListener("click", handleClick);
	// 	return () => window.removeEventListener("click", handleClick);
	// });

	const headerClassNames = classnames({
		'header-x': true,
		'header-m': props.mediaQueries.isTabletOrMobile
	});

	const logoClassNames = classnames({
		'logo-x': true,
		'logo-m': props.mediaQueries.isTabletOrMobile,
		'logo-s': props.mediaQueries.isMobile,
	})

	const menuClassNames = classnames({
		'menu-x': true,
		'menu-m': props.mediaQueries.isTabletOrMobile,
		'menu-active': props.menuActive
	});
	const bbtnClassNames = classnames({
		'bbtn': true,
		'bbtn-visible': props.mediaQueries.isTabletOrMobile,
		'bbtn-rotated': props.menuActive && (props.mediaQueries.isTabletOrMobile || props.mediaQueries.isMobile),
		// 'bbtn-s': props.mediaQueries.isMobile,
	});
	const bbtnSpanClassNames = classnames({
		'bbtn__span': true,
		'bbtn__span-invisible': props.menuActive,
	});

	const underlineLinkClassName = classnames({
		'underlineLink': props.mediaQueries.isDesktopOrLaptop
	});
	console.log(props.menuActive , 'd343434343dd')

	// const containerClassNames = classnames({   !вариант с элементами хедера помещёнными в контейнер
	// 	'container-x': props.mediaQueries.isDesktopOrLaptop,
	// 	'container-m': props.mediaQueries.isTabletOrMobile,
	// 	'container-s': props.mediaQueries.isMobile,
	// });

	return (

		<div className={headerClassNames}>
			{/* <div className={containerClassNames}> - !вариант с элементами хедера помещёнными в контейнер */}
				{/* <div className="header-container"> -!вариант с элементами хедера помещёнными в контейнер */}

					<div className={logoClassNames}>
						{/* <Logo/> */}
						<span> Site Title</span>
					</div>


					<div className={bbtnClassNames} onClick={() => props.setMenuActive(!props.menuActive)}>
						<span className={bbtnSpanClassNames}/>
					</div>

					<div className={menuClassNames} onClick={(e)=> e.stopPropagation()}>
						
						<ul>
							{props.menuItems.map((menuItem: ILink, i: number) =>
								<li key={i.toString()} onMouseOver={()=> {console.log('move') }}>
									<a href={menuItem.href} onClick={() => props.setMenuActive(!props.menuActive)}>{menuItem.value}</a>
									 <span className={underlineLinkClassName}></span> 
									{/* <span className={underlineLinkClassName}></span> */}
									{/* <span className="material-icons">{menuItem.icon}</span> */}
								</li>
							)}
						</ul>
					</div>
					
				{/* </div> */}
			{/* </div> */}
		</div>
	);
}



