import React, { useState, useReducer, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive'

import {Header}  from './components/Header/';
import { Footer } from './components/Footer/';
import { Content } from  './components/Content/';

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

	const menuItems = [{value: 'главная', href: '#', icon: 'anchor'}, {value: 'контакты', href: '#', icon: 'anchor'},];
	const [menuActive, setMenuActive] = useState(false);
	// const [responsive, setResponsive] = useState({
	// 	isDesktopOrLaptop: useMediaQuery({ minWidth: 1224 }),
	// 	isTabletOrMobile: useMediaQuery({ maxWidth: 1224 })
	// })
	// React.useEffect(() => {
	//   }, []);
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

	console.log(menuActive , 'ddddddddddddd')
  return (
	  <div className={'main'}>
			<div className={menuActive && !mediaQueries.isDesktopOrLaptop ? 'blur' : ''}/>
			

		{/* <div className={'headerAndContent'}> */}
			{/* <h1>Device Test!</h1> */}
			{/* {mediaQueries.isDesktopOrLaptop && <p>You are a desktop or laptop</p>} */}
			{/* {isBigScreen && <p>You  have a huge screen</p>} */}
			{/* {mediaQueries.isTabletOrMobile && <p>You are a tablet or mobile phone</p>} */}

			{/* <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p> */}
			{/* {isRetina && <p>You are retina</p>} */}
			
			{/* {responsive.isDesktopOrLaptop && <p>You are a desktop or laptop</p>} */}

			<Header menuActive={menuActive} setMenuActive={setMenuActive} mediaqQueries={mediaQueries} menuItems={menuItems}/>
			<Content mediaQueries={mediaQueries} />
			<Footer mediaQueries={mediaQueries} />

	</div>

  );
}

export default App;
