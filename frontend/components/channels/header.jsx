import React from 'react'; 

class Header extends React.Component{
    render(){
        return(
            <div className="header-div"> 
                <div className="header-div-1"></div>
                <div className="header-div-2">
                    <p className="header-div-2-parts">C</p>
                    <form className="header-div-2-parts">
                        < input type="text"/>
                    </form>
                    <p className="header-div-2-parts">?</p>
                </div>
                <div className="modal">
                <p>P</p>
                </div>
            </div>
        )
    }
}

export default Header