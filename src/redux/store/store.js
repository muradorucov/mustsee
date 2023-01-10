import { combineReducers, createStore } from 'redux';
import { listReduce } from '../reducers/list.reduce';
import { moviesReducer } from "../reducers/reducer"

const reducers = combineReducers({
    movies: moviesReducer,
    list: listReduce
})

export const GlobalState = createStore(
    reducers
)
