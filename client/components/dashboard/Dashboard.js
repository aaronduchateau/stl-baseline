import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import ChartController from './ChartController';
import CalendarController from './CalendarController';

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: theme.spacing.unit * 3,
        backgroundColor: 'none',
    }),
    frame: {
        //position: 'relative',
        display: 'flex',
        minHeight: '100%',
        maxHeight: 'calc(100vh - 64px)'
    },
    left: {
        flex: '0 1 50%',
        //minHeight: 'calc(100vh - 64px)',
        maxWidth: '50%',
        minWidth: '50%',
        color: 'white !important'
    },
    right: {
        flex: '0 1 50%',
        //minHeight: 'calc(100vh - 64px)',
        maxWidth: '50%',
        minWidth: '50%',
        flexWrap: 'wrap',
        alignItems: 'flexStart',
    },
    halfContainers: {
        flex: '0 0 100%',
        maxHeight: '50%',
        minHeight: '50%',
        maxWidth: '100%',
        overflow: 'hidden',
    },
});

const Dashboard = props => {
    const classes = props.classes;
    return (
        <div className={classes.frame}>
            <div className={classes.left}>
                <Typography type="body1" noWrap>
                    {'You think water moves fast? You should see ice.'}
                </Typography>
            </div>
            <div className={classes.right}>
                <div className={classes.halfContainers}>
                    <ChartController />
                </div>
                <div className={classes.halfContainers}>
                    <CalendarController />
                </div>
            </div>
        </div>
    )
};

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard)