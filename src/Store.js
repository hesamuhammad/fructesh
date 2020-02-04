import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import blog from './reducers/blog';
// import home from './reducers/home.reducer';

export default createStore(
    combineReducers({blog}),
    applyMiddleware(thunk)
)