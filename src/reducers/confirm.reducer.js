import { confirmedConstansts } from "../actions/constants";

const initState = {
    confirm: [],
    loading: false,
    error: null
};


export default (state = initState, action) => {
    switch(action.type){
        case confirmedConstansts.GET_ALL_CONFIRMED_SUCCESS:
            state = {
                ...state,
                confirm: action.payload.confirm
            }
            break;
        }

        return state;

}