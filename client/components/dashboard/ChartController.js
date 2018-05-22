import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as chartService from '../../services/chartService';

// Import custom components
//import Dashboard from '../../components/dashboard/Dashboard';
//import FullScreenLoader from '../../components/common/loading/FullScreenLoader';

class ChartController extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        //const user = this.props.user;
        //if(user.firstName === null){
            this.props.actions.getExchanges();
        //}
    }

    render() {
        let isLoading = { this.props.exchanges };
        let exchanges = this.props.exchanges.exchanges;
        console.log('INCHART');
        console.log(this.props.exchanges);
        if (isLoading === true){
            return (
                <div>
                    loading...
                </div>
            )
        }
        if (exchanges !== null && isLoading === false){
            return (
                <div>
                    {exchanges.map(function(name, index){
                        return <div key={ index }>{name}</div>;
                    })}
                </div>
            )

        }
    }

}

//export default Me
/**
 * Map the state to props.
 */
const mapStateToProps = state => ({
    exchanges: state.exchanges
});

/**
 * Map the actions to props.
 */
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, chartService), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ChartController)