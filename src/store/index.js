import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import mine from './modules/mine'
import exchange from './modules/exchange'
import sell from './modules/sell'

const reducer = combineReducers({
    mine,
    exchange,
    sell
});

// 使用redux开发者工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 输出store
export default createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));