import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import 'typeface-roboto';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ListRooms from './components/ListRooms/ListRooms';
import ButtonAdd from './components/ButtonAdd/ButtonAdd';
import DialogForm from './components/DialogForm/DialogForm';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import DialogFormAdd from "./components/DialogForm/DialogForm.add";

/**
 * Create a STORE
 * @type {Store<any, Action> & *}
 */
const store = createStore(rootReducer);

/**
 * General styles
 *
 * @param theme
 * @returns {{container: {flex: number}, button: {margin: *}}}
 */
const styles = theme => ({
    container: {
        flex: 1
    },
    button: {
        margin: theme.spacing.unit,
    },
});

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
        <Provider store={store}>
            <Grid className={classes.container}
                  container
                  direction="column"
                  justify="center"
                  alignItems="center">
                <ListRooms />
                <DialogForm />
                <ButtonAdd title={'Добавить'} />
            </Grid>
        </Provider>
    );
  }
}

/**
 * Typechecking for current props
 *
 * @type {{classes: *}}
 */
App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);







/**
 * *********
 * STORYBOOK
 * *********
 * This we describing current component for our stories book =)
 *
 */

storiesOf('Application', module)
    .add('Run', withInfo(``)(
        () => (
            <Provider store={store}>
                <Grid
                      container
                      direction="column"
                      justify="center"
                      alignItems="center">
                    <ListRooms />
                    <DialogForm />
                    <ButtonAdd title={'Добавить'} />
                </Grid>
            </Provider>
        )
    ));
storiesOf('Dialog', module)
    .add('Dialog window with a form', withInfo(``)(
        () => (
            <Provider store={store}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center">
                    <DialogForm open={true} />
                </Grid>
            </Provider>
        )
    ))
    .add('Button for adding new item in to form', withInfo(``)(
        () => (
            <Grid
                style={{paddingTop: 15}}
                container
                direction="column"
                justify="center"
                alignItems="center">
                <DialogFormAdd  classes={{button: {margin: 15}}} onClick={() => {}} />
            </Grid>
        )
    ));
storiesOf('Empty list', module)
    .add('Placeholder for list of rooms', withInfo(``)(
        () => (
            <Provider store={store}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center">
                    <ListRooms />
                </Grid>
            </Provider>
        )
    ));