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

	// const [responsive, setResponsive] = useState({
	// 	isDesktopOrLaptop: useMediaQuery({ minWidth: 1224 }),
	// 	isTabletOrMobile: useMediaQuery({ maxWidth: 1224 })
	// })
	// React.useEffect(() => {
	//   }, []);
	const { width } = useViewport();
	console.log(width);
	

	const isDesktopOrLaptop: boolean = useMediaQuery({ minWidth: 1224 });
	// const isBigScreen = useMediaQuery({ minWidth: 1824 });
	const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
	// const isPortrait = useMediaQuery({ orientation: 'portrait' });
	// const isRetina = useMediaQuery({ minResolution: '2dppx' });

	// console.log(responsive.isDesktopOrLaptop);


  return (
	  <div className={'main'}>
		{/* <div className={'headerAndContent'}> */}
			{/* <h1>Device Test!</h1> */}
			{/* {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}   */}
			{/* {isBigScreen && <p>You  have a huge screen</p>} */}
			{/* {isTabletOrMobile && <p>You are a tablet or mobile phone</p>} */}

			{/* <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p> */}
			{/* {isRetina && <p>You are retina</p>} */}
			
			{/* {responsive.isDesktopOrLaptop && <p>You are a desktop or laptop</p>} */}

			<Header isDesctopOrLaptop={isDesktopOrLaptop} isTabletOrMobile={isTabletOrMobile}/>
			<Content></Content>
			<Footer></Footer>

	</div>

  );
}

export default App;
