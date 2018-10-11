/**
 * Actions
 */
import {
    ADD_ITEM_FORM,
    DELETE_ITEM_FORM,
    DELETE_SAVED_ITEM_FORM,
    CHANGE_VALUE_FORM,
    CHANGE_TYPE_FORM,
    SAVE_ITEMS
} from '../actions';

/**
 * Initial ITEMS
 * @type {{id: number, type: number, value: number}}
 */
let initialItem = {'id': new Date().getTime(), 'type': 'Twin', 'value': 0};

/**
 * Initial STATE
 * @type {{type: string, items: {id: number, type: number, value: number}[]}}
 */
let initialState = {'type': ADD_ITEM_FORM, 'items': [initialItem], 'saved': [] };

/**
 * REDUCER for items
 *
 * @param state
 * @param action
 * @returns {*}
 */
const toggleItemForm = (state = initialState, action) => {
    var _items = Object.assign([], state.items);
    switch (action.type) {

        /**
         * ADD new item
         */
        case ADD_ITEM_FORM:
            let _initialItem = Object.assign({}, initialItem);
            _initialItem.id = action.id;
            return Object.assign(
                {},
                {
                    'type': ADD_ITEM_FORM,
                    'items': [ ...state.items, _initialItem ],
                    'saved': [...state.saved]
                }
            );

        /**
         * REMOVE item form
         */
        case DELETE_ITEM_FORM:
            _items = _items.filter(obj => obj.id !== action.id);
            return Object.assign( {}, {'type': ADD_ITEM_FORM, 'items': [..._items], 'saved': [...state.saved]} );

        /**
         * REMOVE saved item form
         */
        case DELETE_SAVED_ITEM_FORM:
            let _saved = state.saved;
            _saved = _saved.filter(obj => obj.id !== action.id);
            return Object.assign( {}, {'type': DELETE_SAVED_ITEM_FORM, 'items': [..._items], 'saved': [..._saved]} );

        /**
         * CHANGE type
         */
        case CHANGE_TYPE_FORM:
            _items
                .filter(f => f.id === action.id)
                .map(obj => { obj.type = action.list });
            return Object.assign( {}, {'type': CHANGE_TYPE_FORM, 'items': [..._items], 'saved': [...state.saved]} );

        /**
         * CHANGE value
         */
        case CHANGE_VALUE_FORM:
            _items
                .filter(f => f.id === action.id)
                .map(obj => { obj.value = action.value });
            return Object.assign( {}, {'type': CHANGE_VALUE_FORM, 'items': [..._items], 'saved': [...state.saved]} );

        /**
         * SAVE stack
         */
        case SAVE_ITEMS:
            return Object.assign(
                {},
                {
                    'type': SAVE_ITEMS,
                    'items': [Object.assign({}, {'id': new Date().getTime(), 'type': 'Twin', 'value': 0})],
                    'saved': [ ...action.stack, ...state.saved ],
                    // 'saved': [ ...action.stack ],
                }
            );

        default:
            return state
    }
};

export default toggleItemForm;