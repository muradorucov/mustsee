export const listReduce = (state = [], action) => {
    if (action.type === 'ADD-TO_LIST') return [...state, action.payload]
    return state
}