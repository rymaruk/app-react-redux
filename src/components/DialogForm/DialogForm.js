import React from "react";

import { withStyles } from "@material-ui/core/styles";

import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import ItemForm from '../ItemForm/ItemForm';

import DialogFormActions from './DialogForm.actions';
import DialogFormAdd from './DialogForm.add';

import {TOGGLE_DIALOG, ADD_ITEM_FORM, SAVE_ITEMS} from '../../actions/index'

import { connect } from 'react-redux';

const styles = theme => ({
    rootList: {
        flexGrow: 1
    },
    button: {
        margin: theme.spacing.unit,
    },
});

class DialogForm extends React.Component {

    /**
     * Life cycle
     * @returns {boolean}
     */
    shouldComponentUpdate () {
        return true;
    }

    render(){

        /**
         * Destructuring of a PROPS
         */
        const { classes, itemsForm, toggleDialog, onSave, onClose, onAddItemForm } = this.props;

        /**
         * DOM
         */
        return(
            <Dialog maxWidth={'lg'} onClose={onClose} aria-labelledby="simple-dialog-title" open={this.props.open || toggleDialog.visible}>

                <DialogTitle>
                    <Grid container
                          direction="row"
                          justify="space-between"
                          alignItems="center">
                        Структура номеров
                        <IconButton aria-label="Delete" onClick={onClose}>
                            <CloseIcon />
                        </IconButton>
                    </Grid>
                </DialogTitle>

                <DialogContent style={{padding: 0}}>

                    <form autoComplete="off">
                        <List>
                            <ListItem style={{flex: 1, flexDirection: 'column'}}>
                                {itemsForm.map((item, index) => <ItemForm key={item.id} item={item} disabled={itemsForm.length} />)}
                             </ListItem>
                        </List>
                    </form>

                    <DialogFormAdd  classes={classes} onClick={() => onAddItemForm(new Date().getTime())} />

                </DialogContent>

                <DialogFormActions classes={classes} onClose={onClose} onClick={()=>{onSave(itemsForm); onClose()}} />

            </Dialog>
        );
    }
}

/**
 * State for props
 *
 * @param state
 * @param props
 * @returns {{toggleDialog, itemsForm: DataTransferItemList | {id: number, type: number, value: number}[]}}
 */
const mapStateToProps = (state, props) => ({
    toggleDialog: state.toggleDialog,
    itemsForm: state.toggleItemForm.items
});

/***
 * Dispatch for props
 *
 * @param dispatch
 * @returns {{onSave: onSave, onClose: (function(): *), onAddItemForm: (function(*=): *)}}
 */
const mapDispatchToProps = dispatch => ({
    onSave: stack => { dispatch({'type': SAVE_ITEMS, 'stack': stack}) },
    onClose: () => dispatch({'type': TOGGLE_DIALOG, 'visible': false}),
    onAddItemForm: id => dispatch({'type': ADD_ITEM_FORM, 'id': id}),
});

/***
 * Connect is a `HOC`.
 * State and dispatch to the props of a component
 */
export default connect(mapStateToProps, mapDispatchToProps)( withStyles(styles)(DialogForm) );
