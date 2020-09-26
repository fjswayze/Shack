
import React from 'react'; 

class InfoClickDropdown extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: false 
        }

        this.handleBlur = this.handleBlur.bind(this); 
        this.handleClick = this.handleClick.bind(this); 
    }   


    handleBlur(e){
        this.setState({show:false})
    }

    handleClick(){
        this.setState({show: !this.state.show})
    }

    render(){
        return(
            <div>
                <div
                className="info-click-dropdown-button"
                style={{position: 'relative'}}
                onBlur={this.handleBlur}
                onClick={this.handleClick}
                >
                    <i className="fas fa-caret-down"></i>
                {this.state.show ? (
                <div class="dropdown-div" >
                    <ul
                    className="dropdown"
                    onClick={e => e.stopPropagation()}
                    style={{ position: 'absolute', top: '100%'}}
                    >
                        <li onClick={() => this.props.logout()}>App Academy</li>
                        <li onClick={() => this.props.logout()}>Sign Out</li>
                    </ul>
                </div>
                ): null}
                </div>
            </div>
        )
    }

}

export default InfoClickDropdown; 
