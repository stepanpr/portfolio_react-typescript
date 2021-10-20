import React, { useState, useReducer, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive'

import { Header }  from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Content } from  './components/Content/Content';

import { ILink } from './interfaces/ILink'

/* Viewport hook (можно использовать вместо 'react-responsive') */
const useViewport = () => {
	const [width, setWidth] = React.useState(window.innerWidth);
  
	React.useEffect(() => {
	  const handleWindowResize = () => setWidth(window.innerWidth);
	  window.addEventListener("resize", handleWindowResize);
	  return () => window.removeEventListener("resize", handleWindowResize);
	}, []);

	return { width };
  }

const App: React.FunctionComponent = () => {

	const menuItems: ILink[] = [{value: 'главная', href: '#'}, {value: 'about', href: '#'}, {value: 'контакты', href: 'https://sberbank.ru'},];
	const [menuActive, setMenuActive] = useState(false);

	const { width } = useViewport();
	console.log(width);
	
	const mediaQueries = { 
		isDesktopOrLaptop: useMediaQuery({ minWidth: 1224 }), 
		isTabletOrMobile: useMediaQuery({ maxWidth: 1224 }),
		isMobile: useMediaQuery({ maxWidth: 720 }),
		isBigScreen: useMediaQuery({ minWidth: 1824 }),
		isPortrait: useMediaQuery({ orientation: 'portrait' }),
		isRetina: useMediaQuery({ minResolution: '2dppx' })
	};

	console.log(mediaQueries.isDesktopOrLaptop, ' : ', mediaQueries.isTabletOrMobile);

	
  return (
	  <div className={'main'} onClick={()=> menuActive ? setMenuActive(!menuActive) : 0}>
			<div className={menuActive && !mediaQueries.isDesktopOrLaptop ? 'blur' : ''}/>
			

		{/* <div className={'headerAndContent'}> */}
			<Header menuActive={menuActive} setMenuActive={setMenuActive} mediaQueries={mediaQueries} menuItems={menuItems}/>
			<Content mediaQueries={mediaQueries} />
			<Footer mediaQueries={mediaQueries} />

	</div>

  );
}

export default App;
