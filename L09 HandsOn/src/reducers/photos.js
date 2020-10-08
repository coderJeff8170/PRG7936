const initialState = {
    photos: []
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case 'DATA_RECEIVED':
            return {
                ...state,
                photos: action.data
            }
        default:
            return state;
    }
};

export default reducer;