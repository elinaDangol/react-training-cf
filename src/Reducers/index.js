export const initialState = {
    lists: ['Elina'],
    // isLoading : false,
};

const listReducers = (state = initialState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'FETCH_DATA_SUCCESS':
            newState.lists = action.payload;
            return newState;
        case 'ADD_HERO':
            newState.lists = [...newState.lists, action.payload]
            return newState;
        case 'IN_PROGRESS':
        newState.isLoading = true; 
        return newState;
        default:
            return state;
    }
};

export default listReducers;
