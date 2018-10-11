import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { TOGGLE_DIALOG } from '../../actions/index';
import { connect } from 'react-redux';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

/**
 * Styles of component
 *
 * @param theme
 * @returns {{button: {margin: *}}}
 */
const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});

/**
 * Button for opening a modal window
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const ButtonAdd = (props) => {
    const {dispatch, classes, title} = props;
    return (
        <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={()=>{
                dispatch( {type: TOGGLE_DIALOG, visible: true} )
            }}
        >{title}</Button>
    );
};

/**
 * Typechecking for current props
 *
 * @type {{classes: *, dispatch: *, title: *}}
 */
ButtonAdd.propTypes = {
    classes: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};

/***
 * Connect is a `HOC`.
 * State and dispatch to the props of a component
 */
export default connect()( withStyles(styles)(ButtonAdd) );


/**
 * *********
 * STORYBOOK
 * *********
 * This we describing current component for our stories book =)
 *
 */
storiesOf('Buttons', module)
    .add('Button for opening a modal window', withInfo(``)(
        () => (
            <Grid
                style={{paddingTop: 15}}
                container
                direction="column"
                justify="center"
                alignItems="center">
            <Button
                variant="contained"
                color="primary"
                onClick={()=>{}}
            >Добавить</Button>
            </Grid>
        )
    ));

