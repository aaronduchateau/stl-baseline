import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';

// Import custom components
import Header from '../header/Header';
import MiniDrawer from '../drawer/MiniDrawer';
import Footer from '../footer/Footer';
import { withRouter } from "react-router-dom";

/*
const styles = theme => ({
    root: {
        width: '100%',
        height: 430,
        zIndex: 1,
        overflow: 'hidden',
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    content: {
        width: '100%',
        flexGrow: 1,
        backgroundColor: theme.palette.primary,
        padding: 24,
        height: 'calc(100% - 56px)',
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px)',
            marginTop: 64,
        },
    },
});
*/

const styles = (theme) => {
    console.log(theme);
    return {
    root: {
        width: '100%',
        height: 430,
        zIndex: 1,
        overflow: 'hidden',
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    content: {
        width: '100%',
        flexGrow: 1,
        backgroundColor: theme.palette.primary.dark,
        padding: 24,
        height: 'calc(100% - 56px)',
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px)',
            marginTop: 64,
        },
    },
}
};

class MainLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClickNavigate = (path) => {
        this.handleToggle();
        this.props.history.push(path);
    };

    render() {
        let {open} = this.state;
        const classes = this.props.classes;
        console.log(this.props.history);

        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <Header navDrawerOpen={open} handleToggleDrawer={this.handleToggle}/>
                    <MiniDrawer 
                      navDrawerOpen={open} 
                      onToggleDrawer={this.handleToggle}
                      onClickNavigate={this.handleClickNavigate}
                    />
                    <main className={classes.content}>
                        {this.props.children}
                    </main>
                </div>
                <Footer/>
            </div>
        )
    }

}

MainLayout.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.element
};

export default withRouter(withStyles(styles)(MainLayout))