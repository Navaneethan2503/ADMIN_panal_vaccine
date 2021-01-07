import { bookingConstansts } from "../actions/constants";

const initState = {
    bookings: [],
    loading: false,
    error: null
};


export default (state = initState, action) => {
    switch(action.type){
        case bookingConstansts.GET_ALL_BOOKING_SUCCESS:
            state = {
                ...state,
                bookings: action.payload.bookings
            }
            break;
        }

        return state;

}