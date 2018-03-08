import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import HomeIcon from 'material-ui-icons/Home';
import PersonIcon from 'material-ui-icons/Person';
import SettingsIcon from 'material-ui-icons/Settings';
import HelpIcon from 'material-ui-icons/Help';
import NotificationsIcon from 'material-ui-icons/Notifications';
import LocalTaxiIcon from 'material-ui-icons/LocalTaxi';

const drawerWidth = 250;

const styles = theme => ({
    drawerPaper: {
        position: 'relative',
        height: 'auto',
        maxWidth: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        width: 60,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    drawerInner: {
        // Make the items inside not wrap when transitioning:
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        height: 56,
        [theme.breakpoints.up('sm')]: {
            height: 64,
        },
    }
});

const MiniDrawer = (props) => {

    let {navDrawerOpen} = props;
    const classes = props.classes;

    return (
        <Drawer
            type="permanent"
            classes={{
                paper: classNames(classes.drawerPaper, !navDrawerOpen && classes.drawerPaperClose),
            }}
            open={navDrawerOpen}
            onClose={()=>{props.onToggleDrawer();}}
        >
            <div className={classes.drawerHeader}/>
            <Divider />
            <List>
                <ListItem button onClick={() => {props.onClickNavigate("/dashboard");}}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard"/>
                </ListItem>
                <ListItem button onClick={() => {props.onClickNavigate("/users");}}>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Users"/>
                </ListItem>
                <ListItem button onClick={() => {props.onClickNavigate("/products");}}>
                    <ListItemIcon>
                        <LocalTaxiIcon />
                    </ListItemIcon>
                    <ListItemText primary="Products"/>
                </ListItem>
                <ListItem button onClick={() => {props.onClickNavigate("/notifications");}}>
                    <ListItemIcon>
                        <NotificationsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Notifications"/>
                </ListItem>
                <ListItem button onClick={() => {props.onClickNavigate("/settings");}}>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Settings"/>
                </ListItem>
                <Divider/>
                <ListItem button onClick={() => {props.onClickNavigate("/help");}}>
                    <ListItemIcon>
                        <HelpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Help"/>
                </ListItem>
            </List>
        </Drawer>
    )
};

MiniDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    navDrawerOpen: PropTypes.bool,
    onToggleDrawer: PropTypes.func.isRequired,
    onClickNavigate: PropTypes.func.isRequired
};

export default withStyles(styles)(MiniDrawer)