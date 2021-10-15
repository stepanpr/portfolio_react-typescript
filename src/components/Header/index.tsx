import React from 'react';
import classnames from 'classnames';

import './styles.css'
import Logo from './Logo';
// import logo from './logo.svg';
// import { ReactComponent as YourSvg } from './logo.svg';


interface HeaderProps {
	
	mediaqQueries: any;
}

export const Header: React.FunctionComponent<HeaderProps> = (props) => {


	const headerClassNames = classnames({
		'header_minWidth_1224': true,
		'header_maxWidth_1224': props.mediaqQueries.isTabletOrMobile


	});

	const logoClassnames = classnames({
		'logo_minWidth_1224': true,
		'logo_maxWidth_1224': props.mediaqQueries.isTabletOrMobile
	})

	const menuClassnames = classnames({
		'menu_minWidth_1224': true,
		'menu_maxWidth_1224': props.mediaqQueries.isTabletOrMobile
	});

	return (
		<div className={headerClassNames}>
			{/* <div className={'header-container'}> */}

			<div className={logoClassnames}>
				<Logo/>
				<span> Site Header</span>
			</div>
				<ul className={menuClassnames}>
					<li>главная</li>
					<li>контакты</li>
				</ul>
			{/* </div> */}
		</div>
	);
}

// export default Header;


