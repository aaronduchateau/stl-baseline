import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {CircularProgress} from 'material-ui/Progress';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    content: {
    	position: 'absolute',
    	zIndex: 10000000,
        width: '100%',
        height: '100%',
        backgroundColor: theme.palette.grey[50],
        top: '0px',
        left: '0px',
    },
    guts: {
    	zIndex: 10000001,
    	position: 'absolute',
    	left: 'calc(50% - 35px)',
    	top: '150px'
    },
});

class FullScreenLoader extends Component {

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.content}>
	            <div className={classes.guts}>
	             	<CircularProgress size={70} thickness={6} />
	             	<br/>
	             	<Typography type="body1" noWrap>
                         {'... loading'}
                    </Typography>
	            </div>
            </div>
        )
    }
}

FullScreenLoader.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(FullScreenLoader)