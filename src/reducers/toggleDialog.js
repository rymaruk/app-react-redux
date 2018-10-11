/**
 * Action
 */
import { TOGGLE_DIALOG } from '../actions';

/**
 * Initial a default state
 * @type {{type: string, visible: boolean}}
 */
const initialState = {'type': TOGGLE_DIALOG, 'visible': false};

/**
 * REDUCER that returns a new object
 * with a parameter for showing a modal window
 *
 * @param state
 * @param action
 * @returns {*}
 */
const toggleDialog = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_DIALOG:
            return  Object.assign({}, {type: TOGGLE_DIALOG, 'visible': action.visible});
        default:
            return state
    }
};

export default toggleDialog;