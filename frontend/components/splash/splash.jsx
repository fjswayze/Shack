import SplashHeader from "./splash_header"; 
import SplashFooter from "./splash_footer"; 
import SplashAnimation from "./splash_animation"; 
import React from 'react'; 

const Splash = () => (
    <div>
        <SplashHeader /> 
        <SplashAnimation/>
        <SplashFooter/>
    </div>
)
export default Splash; 