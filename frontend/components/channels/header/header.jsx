import React from 'react'; 
import ProfileDropdownContainer from './profile_dropdown_container'
class Header extends React.Component{
    render(){
        return(
            <div className="header-div"> 
                <div className="header-div-1"></div>
                <div className="header-div-2">
                    <i className="far fa-clock"></i>
                    <form className="header-div-2-parts">
                        < input type="text"/>
                    </form>
                    <i className="far fa-question-circle"></i>
                </div>

                <div className="modal">
                    <ProfileDropdownContainer/> 
                </div>
            </div>
        )
    }
}

export default Header