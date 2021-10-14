import React from 'react';
import classnames from 'classnames';

import './styles.css'


export const Header = () => {


	const headerClassNames = classnames({
		'header': true,
	});

	const logoClassnames = classnames({
		'logo': true,
	})

	const menuClassnames = classnames({
		'menu': true,
	});

	return (
		<div className={headerClassNames}>
			<div className={logoClassnames}><h1>Portfolio</h1></div>
			<div className={menuClassnames}>Menu</div>	
		</div>
	);
}

// export default Header;


