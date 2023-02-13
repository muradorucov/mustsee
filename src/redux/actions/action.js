export const getMovies = (payload) => {
    return { type: 'ADD-TO_DATA_STORE', payload: payload }
}


export const addToList = (payload) => {
    return { type: 'ADD-TO_LIST', payload: payload }
}

export const removeToList = (payload) => {
    return { type: 'REMOVE-TO_LIST', payload: payload }
}

export const listIsEmpty = () => {
    return { type: 'ALL_LIST_EMPTY' }
}

export const searchIntialValueAction = (payload) => {
    return { type: 'CHANGE_FIRTS_SEARCH_VALUE',payload:payload }
}