import React from 'react'; 

const SplashFooter = () => (
    <div className="footer">
        <img  src={window.shackURL} />   

     
      
       
        <div className="footer-col-3">
            <h3>COVID READS</h3>
            <p>Feel Free</p>
            <p>Disgrace</p>
            <p>I am Dynamite!</p>
            <p>Out of Sheer Rage</p>
        </div>
        <div className="footer-col-4">
            <h3>CONTACT ME</h3>
            <p>fjswayze@vassar.edu</p>
        </div>
        <div className="footer-col-2">
            <h3>LINKS</h3>
            <a className="personal-links" href="https://github.com/fjswayze"><p>GitHub</p></a>
            <a className="personal-links" href="https://www.linkedin.com/in/francis-swayze-729159133/">LinkedIn</a>
            <p>AngelList</p>
        </div>
        <div className="footer-col-1">
            <h3>SKILLS</h3>
            <p>Ruby</p>
            <p>Ruby on Rails</p>
            <p>JavaScript</p>
            <p>SQL</p>
            <p>React</p>
            <p>HTML</p>
            <p>CSS</p>
        </div>
   
    </div>
)

export default SplashFooter; 