import React from 'react'; 

class Header extends React.Component{
    render(){
        return(
            <div className="header-div"> 
                <div className="header-div-1"></div>
                <div className="header-div-2">
                    <i class="far fa-clock"></i>
                    <form className="header-div-2-parts">
                        < input type="text"/>
                    </form>
                    <i class="far fa-question-circle"></i>
                </div>

                <div className="modal">
                    <img className="profile" src={window.profileURL} />
                </div>
            </div>
        )
    }
}

export default Header