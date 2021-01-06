import React from 'react'; 

class SplashFooter extends React.Component{
    reload(){
        window.location.reload();
    }
    render(){
        return(
            <div className="footer">
                <img onClick={this.reload} src={window.shackURL} />

                <div id='add-space' className="footer-col-3">
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
                    <a className="personal-links" target="_blank" href="https://github.com/fjswayze">GitHub</a>
                    <br></br>
                    <a className="personal-links" target="_blank" href="https://www.linkedin.com/in/francis-swayze-729159133/">LinkedIn</a>
                    <br></br>
                    <a className='personal-links' target="_blank" href='https://angel.co/u/francis-swayze'>AngelList</a>
                    <br></br>
                    <a className='personal-links' target="_blank" href='https://fjswayze.github.io/'>Portfolio</a>
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
       
    }
}
export default SplashFooter; 