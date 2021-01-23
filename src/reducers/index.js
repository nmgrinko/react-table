
const reducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_JSON":
            return { ...state, loading: true };
        case "JSON_RECEIVED":
            return { ...state, props: action.data, loading: false };
        default:
            return state;
    }
};
   
export default reducer;
   


