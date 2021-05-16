import React from 'react';
import mainiImage from '../../src/images/main.png';
import badge from '../../src/images/badge.png';

const Content = () => {
    return (
        <div class="relative h-full">
           
<img src={mainiImage} class="mx-auto pt-20 sm:pt-0"	style={{height: "80vh"},{width: "80vh"}}/>
<h2 class="hidden sm:block absolute top-0 right-0  pt-24 pr-20 md:pr-40 lg:pr-72 xl:pr-72  text-4xl"> Try for <br />free </h2>
<h1 class="fixed bottom-10 left-10 text-4xl sm:text-6xl md:text-7xl">The <br />best <br />shave<br />of your life.  </h1>
<img src={badge} class="fixed bottom-10 right-10 "	style={{height: "70px"},{width: "70px"}}/>
</div>
        
    )
}

export default Content

