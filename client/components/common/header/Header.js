import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import * as authService from '../../../services/authService';

const drawerWidth = 250;

const styles = theme => ({
    appBar: {
        backgroundColor: '#fafafa',
        position: 'absolute',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: '-15px'
    },
    logo: {
        width: '200px',
        height: '39px',
        marginLeft: '5px'
    },
    flex: {
        flex: 1
    }
});

class Header extends Component {

    logOut(e) {
        e.preventDefault();
        this.props.actions.logout();
    }

    render() {
        const {classes, navDrawerOpen, handleToggleDrawer, user} = this.props;

        return (
            <div> 
                <AppBar className={classNames(classes.appBar, navDrawerOpen && classes.appBarShift)}>
                    <Toolbar>
                        <IconButton color="default" aria-label="Menu" onClick={handleToggleDrawer}
                                    className={classes.menuButton}>
                            <MenuIcon />
                        </IconButton>
                        <img src="img/logo.png" className={classes.logo}/>
                        <Typography type="title" color="inherit" className={classes.flex}>

                        </Typography>
                        
                        <Button color="default" onClick={this.logOut.bind(this)}>Logout {user.firstName}</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired
};

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
    actions: bindActionCreators(Object.assign({}, authService), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header))