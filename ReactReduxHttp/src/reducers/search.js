const initialState = {
    repos: [],
    searchInput: ''
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'REPO_SEARCH_COMPLETED':
            return {
                ...state,
                repos: action.repos
            };
        case 'SEARCH_TEXT_CHANGED':
            return {
                ...state,
                searchInput: action.text
            };
        default:
            return state;
    }
};

export default reducer;