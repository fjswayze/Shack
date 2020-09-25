import SplashHeaderContainer from "./splash_header_container"; 
import SplashFooter from "./splash_footer"; 
import SplashAnimationContainer from "./splash_animation_container"; 
import React from 'react'; 

const Splash = () => (
    <div>
        <SplashHeaderContainer /> 
        <SplashAnimationContainer/>
        <SplashFooter/>
    </div>
)
export default Splash; 