const initialState = {
    lists: ['Elina'],
};

const listReducers = (state = initialState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'FETCH_DATA_SUCCESS':
            newState.lists = action.payload;
            return newState;
        default:
            return state;
    }
};

export default listReducers;