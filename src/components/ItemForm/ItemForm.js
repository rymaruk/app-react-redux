import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';
import DeleteIcon from '@material-ui/icons/Delete';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';

import { connect } from 'react-redux';

import { DELETE_ITEM_FORM, CHANGE_VALUE_FORM, CHANGE_TYPE_FORM } from "../../actions";

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

/**
 * Styles for current a components
 *
 * @param theme
 * @returns object
 */
const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justify: 'space-between',
    },
    input: {
        margin: theme.spacing.unit,
    },
    button: {
        display: 'block',
        marginTop: theme.spacing.unit * 2,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
});

/**
 * Form element with fields
 */
class ItemForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        /**
         * Current props
         */
        const { classes, item, onDeleteItemForm, onChangeType, onChangeValue, disabled } = this.props;

        return(
            <div className={classes.container}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="uncontrolled-native">Выберите тип</InputLabel>
                    <NativeSelect
                        defaultValue={item.type}
                        onChange={event => {onChangeType({'id': item.id, 'list': event.target.value})}}
                    >
                        <option value={'Twin'}>Twin</option>
                        <option value={'Triple'}>Triple</option>
                        <option value={'Quadro'}>Quadro</option>
                    </NativeSelect>
                </FormControl>
                <Input
                    defaultValue={item.value}
                    className={classes.input}
                    onKeyUp={event => {onChangeValue({id: item.id, value: event.target.value})}}
                    inputProps={{
                        'type': 'number',
                        'min': '0',
                        'max': '99999',
                        'aria-label': 'Description',
                    }}
                />
                <IconButton onClick={() => onDeleteItemForm(item.id)}
                            disabled={disabled === 1}
                            className={classes.button}
                            aria-label="Delete"
                            color="secondary">
                    <DeleteIcon />
                </IconButton>
            </div>
        );
    }
}

/**
 * Typechecking for current props
 *
 * @type {{disabled: *, classes: *, item: *, onDeleteItemForm: *, onChangeType: *, onChangeValue: *}}
 */
ItemForm.propTypes = {
    disabled: PropTypes.number.isRequired,
    classes: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
    onDeleteItemForm: PropTypes.func.isRequired,
    onChangeType: PropTypes.func.isRequired,
    onChangeValue: PropTypes.func.isRequired,
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
 * @returns {{onDeleteItemForm: onDeleteItemForm, onChangeType: onChangeType, onChangeValue: onChangeValue}}
 */
const mapDispatchToProps = dispatch => ({
    onDeleteItemForm: (id) => { dispatch({'type': DELETE_ITEM_FORM, 'id': id}) },
    onChangeType: ({id, list}) => { dispatch({'type': CHANGE_TYPE_FORM, 'id': id, 'list': list}) },
    onChangeValue: ({id, value}) => { dispatch({'type': CHANGE_VALUE_FORM, 'id': id, 'value': value}) },
});

/**
 * Connect is a `HOC`.
 * State and dispatch to the props of a component
 */
export default connect(mapStateToProps, mapDispatchToProps)( withStyles(styles)(ItemForm) );




/**
 * *********
 * STORYBOOK
 * *********
 * This we describing current component for our stories book =)
 *
 */

storiesOf('Elemets of form', module)
    .add('Select', withInfo(``)(
        () => (
            <List>
                <ListItem style={{flex: 1, flexDirection: 'column'}}>
                    <div style={{
                        container: {
                            display: 'flex',
                            flexWrap: 'wrap',
                            justify: 'space-between',
                        }
                    }}>
                        <FormControl style={{
                            formControl: {
                                margin: 15,
                                width: 200,
                            }
                        }}>
                            <InputLabel htmlFor="uncontrolled-native">Тип</InputLabel>
                            <NativeSelect
                                defaultValue={1}
                                onChange={event => {
                                }}
                            >
                                <option value={'Twin'}>Twin</option>
                                <option value={'Triple'}>Triple</option>
                                <option value={'Quadro'}>Quadro</option>
                            </NativeSelect>
                        </FormControl>
                    </div>
                </ListItem>
            </List>
        )
    ))
    .add('Inputs', withInfo(``)(
        () => (
            <List>
                <ListItem style={{flex: 1, flexDirection: 'column'}}>
                    <div style={{
                        container: {
                            display: 'flex',
                            flexWrap: 'wrap',
                            justify: 'space-between',
                        }
                    }}>
                        <Input
                            defaultValue={1}
                            style={{input: {margin: 15}}}
                            onKeyUp={event => {}}
                            inputProps={{
                                'type': 'number',
                                'min': '0',
                                'max': '99999',
                                'aria-label': 'Description',
                            }}
                        />
                    </div>
                </ListItem>
            </List>
        )
    ))
    .add('Delete', withInfo(``)(
        () => (
            <List>
                <ListItem style={{flex: 1, flexDirection: 'column'}}>
                    <div style={{
                        container: {
                            display: 'flex',
                            flexWrap: 'wrap',
                            justify: 'space-between',
                        }
                    }}>
                        <IconButton onClick={() => {}}
                                    disabled={false}
                                    style={{
                                        button: {
                                            display: 'block',
                                            marginTop: 15,
                                        }
                                    }}
                                    aria-label="Delete"
                                    color="secondary">
                            <DeleteIcon/>
                        </IconButton>
                    </div>
                </ListItem>
            </List>
        )
    ));