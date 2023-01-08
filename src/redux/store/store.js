import { combineReducers, createStore } from 'redux';
import { firstSearchValue } from '../reducers/firstsearch.reducer';
import { listReduce } from '../reducers/list.reduce';
import { moviesReducer } from "../reducers/reducer"

const reducers = combineReducers({
    movies: moviesReducer,
    list: listReduce,
    firstsearchLine : firstSearchValue
})

export const GlobalState = createStore(
    reducers
)