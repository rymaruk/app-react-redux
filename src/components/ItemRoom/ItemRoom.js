import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import { DELETE_SAVED_ITEM_FORM } from "../../actions";

import { connect } from 'react-redux';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

/**
 * Styles fo current component
 *
 * @param theme
 * @returns {{paper: {margin: *}}}
 */
const styles = theme => ({
    paper: {
        margin: theme.spacing.unit,
    },
});

/**
 * The component of the saved item
 */
class ItemRoom extends React.Component {
    shouldComponentUpdate(){
        return true;
    }
    render(){
        const { classes, item, onDeleteItemForm } = this.props;

        return(
            <Paper className={classes.paper}>
                <ListItem>
                    <ListItemText style={{width: 30}} primary={item.type} />
                    <ListItemText primary={item.value} />
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Delete" onClick={() => {onDeleteItemForm(item.id)}}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </Paper>
        );
    }
}

/**
 * Typechecking for current props
 *
 * @type {{classes: *, item: *, onDeleteItemForm: *}}
 */
ItemRoom.propTypes = {
    classes: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
    onDeleteItemForm: PropTypes.func.isRequired,
};

/**
 * State for props
 *
 * @param state
 * @param props
 * @returns {{}}
 */
const mapStateToProps = (state, props) => ({});

/**
 * Dispatch for props
 *
 * @param dispatch
 * @returns {{onDeleteItemForm: onDeleteItemForm}}
 */
const mapDispatchToProps = dispatch => ({
    onDeleteItemForm: (id) => { dispatch({'type': DELETE_SAVED_ITEM_FORM, 'id': id}) },
});

/**
 * Connect is a `HOC`.
 * State and dispatch to the props of a component
 */
export default connect(mapStateToProps, mapDispatchToProps)( withStyles(styles)(ItemRoom) );



/**
 * *********
 * STORYBOOK
 * *********
 * This we describing current component for our stories book =)
 *
 */
storiesOf('Full list', module)
    .add('Item of list', withInfo(``)(
        () => (
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center">
            <List style={{width: 400, padding: 15}}>
                <Paper>
                    <ListItem>
                        <ListItemText style={{width: 30}} primary={'Twin'} />
                        <ListItemText primary={'2'} />
                        <ListItemSecondaryAction>
                            <IconButton aria-label="Delete" onClick={() => {}}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Paper>
            </List>
            </Grid>
        )
    ));