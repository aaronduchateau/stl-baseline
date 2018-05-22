import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {CircularProgress} from 'material-ui/Progress';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    content: {
        width: '100%',
        height: '100%',
        backgroundColor: theme.palette.grey[50],
    },
    guts: {
    	marginLeft: 'calc(50% - 35px)',
    	marginTop: '50px'
    },
});

class SwitchLoader extends Component {

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.content}>
	            <div className={classes.guts}>
	             	<CircularProgress size={35} thickness={4} />
	             	<br/>
	             	<Typography type="body1" noWrap>
                         {'... loading'}
                    </Typography>
	            </div>
            </div>
        )
    }
}

SwitchLoader.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(SwitchLoader)