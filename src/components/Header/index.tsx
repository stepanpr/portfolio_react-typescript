import React from 'react';
import classnames from 'classnames';

import './styles.css'
import Logo from './Logo';
// import logo from './logo.svg';
// import { ReactComponent as YourSvg } from './logo.svg';


interface HeaderProps {
	
	menuActive: boolean;
	setMenuActive: any;
	mediaqQueries: any;
	menuItems: any;
}

export const Header: React.FunctionComponent<HeaderProps> = (props) => {


	const headerClassNames = classnames({
		'header-x': true,
		'header-m': props.mediaqQueries.isTabletOrMobile
	});

	const logoClassnames = classnames({
		'logo-x': true,
		'logo-m': props.mediaqQueries.isTabletOrMobile,
		'logo-s': props.mediaqQueries.isMobile,
	})

	const menuClassnames = classnames({
		'menu-x': true,
		'menu-m': props.mediaqQueries.isTabletOrMobile,
		'menu-active': props.menuActive
	});
	const bbtnClassnames = classnames({
		'bbtn-x': true,
		'bbtn-m': props.mediaqQueries.isTabletOrMobile,
	});
	console.log(props.menuActive , 'd343434343dd')

	return (
		<div className={headerClassNames}>
			{/* <div className={'header-container'}> */}

			<div className={logoClassnames}>
				{/* <Logo/> */}
				<span> Site Header</span>
			</div>


			<div className={bbtnClassnames} onClick={() => props.setMenuActive(!props.menuActive)}>
				<span/>
			</div>

			<div className={menuClassnames}>
				
				<ul>
					{props.menuItems.map((menuItem: any) =>
						<li>
							<a href={menuItem.href}>{menuItem.value}</a>
							{/* <span className="material-icons">{menuItem.icon}</span> */}
						</li>
					)}
				</ul>
			</div>


			{/* </div> */}
		</div>
	);
}



