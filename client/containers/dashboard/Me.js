import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userService from '../../services/userService';

// Import custom components
//import Dashboard from '../../components/dashboard/Dashboard';
import FullScreenLoader from '../../components/common/loading/FullScreenLoader';

class Me extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
    	const user = this.props.user;
    	if(user.firstName === null){
    		this.props.actions.getMe();
    	}
    }

    render() {
        return (
            <div>
                {this.props.user.firstName === null ?
                    <FullScreenLoader /> :
                    <div>{this.props.children}</div>
                }
            </div>
        )
    }

}

//export default Me
/**
 * Map the state to props.
 */
const mapStateToProps = state => ({
    user: state.user
});

/**
 * Map the actions to props.
 */
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, userService), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Me)