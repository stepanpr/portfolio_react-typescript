import React from 'react';
import { useMediaQuery } from 'react-responsive'

import {Header}  from './components/Header/';
import { Footer } from './components/Footer/';
import { Content } from  './components/Content/';

function App() {


	const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
	// const isBigScreen = useMediaQuery({ minWidth: 1824 });
	const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
	const isPortrait = useMediaQuery({ orientation: 'portrait' });
	const isRetina = useMediaQuery({ minResolution: '2dppx' });



	
  return (
	  <div>
		<div className={'headerAndContent'}>
			{/* <h1>Device Test!</h1> */}
			{/* {isDesktopOrLaptop && <p>You are a desktop or laptop</p>} */}
			{/* {isBigScreen && <p>You  have a huge screen</p>} */}
			{/* {isTabletOrMobile && <p>You are a tablet or mobile phone</p>} */}

			{/* <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p> */}
			{/* {isRetina && <p>You are retina</p>} */}

			<Header></Header>
			<Content></Content>
		</div>
		{/* <div> */}
		<Footer></Footer>
		{/* </div> */}
	</div>

  );
}

export default App;
