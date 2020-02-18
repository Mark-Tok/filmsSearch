import {combineReducers} from 'redux';
import filmsReducer from './films/reducers';
import tagsReducer from './tags/reducers';

const rootRedecer = combineReducers({
    films: filmsReducer,
    tags:tagsReducer
}); 

export default rootRedecer;