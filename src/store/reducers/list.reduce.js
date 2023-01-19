export const listReduce = (state = [], action) => {
    if (action.type === 'ADD-TO_LIST') {
        if (!state.find(item => item.imdbID === action.payload.imdbID)) {
            return [...state, action.payload]
        }
        return state

    }
    return state
}