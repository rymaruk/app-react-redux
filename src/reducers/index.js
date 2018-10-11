import { combineReducers } from 'redux'
/**
 * Import REDUCERS
 */
import toggleDialog from './toggleDialog'
import toggleItemForm from './toggleItemForm'

/**
 * CombineReducers
 *
 * We take every REDUCER and collect (combine) into a single state object
 *
 */
export default combineReducers({
    toggleDialog,
    toggleItemForm,
})