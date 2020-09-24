
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
                <buton
                style={{position: 'relative'}}
                onBlur={this.handleBlur}
                onClick={this.handleClick}
                >
                    ∨
                {this.state.show ? (
                <div >
                    <ul
                     className="dropdown"
                    onClick={e => e.stopPropagation()}
                    style={{ position: 'absolute', top: '100%'}}
                    >
                        <li>App Academy</li>
                        <li onClick={() => this.props.logout()}>Sign Out</li>
                    </ul>
                </div>
                ): null}
                </buton>
            </div>
        )
    }

}

export default InfoClickDropdown; 
