import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as chartService from '../../services/chartService';

// Import custom components
//import Dashboard from '../../components/dashboard/Dashboard';
//import FullScreenLoader from '../../components/common/loading/FullScreenLoader';

class CalendarController extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        //const user = this.props.user;
        //if(user.firstName === null){
            //this.props.actions.getExchanges();
        //}
    }

    render() {
        return (
            <div>
                calendar controller rendered <br/>
                calendar controller rendered <br/>
                calendar controller rendered <br/>
                calendar controller rendered <br/>
                calendar controller rendered <br/>
                calendar controller rendered <br/>
                calendar controller rendered <br/>
                calendar controller rendered <br/>
                calendar controller rendered <br/>
                calendar controller rendered <br/>
                calendar controller rendered <br/>
                calendar controller rendered <br/>
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
    actions: bindActionCreators(Object.assign({}, chartService), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarController)