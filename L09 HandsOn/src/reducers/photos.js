const initialState = {
    photos: []
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case 'DATA_RECEIVED':
            const truncated = action.data.splice(0, 50);
            return {
                ...state,
                photos: truncated
            }
        default:
            return state;
    }
};

export default reducer;