/* Root reducer. Add additional reducers here */
import { combineReducers } from 'redux';
import tradeReducer from './tradeReducer';

export default combineReducers({
    trade: tradeReducer
})