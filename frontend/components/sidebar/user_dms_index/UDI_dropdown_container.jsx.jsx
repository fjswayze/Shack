import { connect } from 'react-redux';
import { openModal } from '../../../actions/modal_actions';
import React from 'react';
import { withRouter } from 'react-router-dom';

class UCIDropdown extends React.Component {
    constructor(props) {
        
        super(props);
        this.state = {
            show: false
        }
        this.handleBlur = this.handleBlur.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSpecialClick = this.handleSpecialClick.bind(this);
    }

    handleBlur(e) {

        this.setState({ show: false })
    }

    handleClick() {
        this.setState({ show: !this.state.show })
    }


    handleSpecialClick() {
        this.setState({ show: !this.state.show });
        this.props.openModal();
    }

    render() {
        return (
            <div >
                <button
                    className='info-click-dropdown-button'
                    style={{ position: 'relative' }}
                    onBlur={this.handleBlur}
                    onClick={this.handleClick}
                >
                    +
                    {this.state.show ? (
                        <div className="dropdown-div-UCI">
                            <ul
                                className="dropdown-UCI"
                                onClick={e => e.stopPropagation()}
                                style={{ position: "absolute", top: '100%' }}
                            >
                                <div className="create-channel" onClick={this.handleSpecialClick}>Open a direct message</div>
                            </ul>
                        </div>
                    ) : null}

                </button>
            </div>
        )
    }



}


const mSTP = (state) => ({

})

const mDTP = dispatch => ({
    openModal: () => dispatch(openModal('create-DM'))
})

export default withRouter(connect(mSTP, mDTP)(UCIDropdown)); 