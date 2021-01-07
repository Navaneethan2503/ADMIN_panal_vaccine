import axios from "../helpers/axios"; 
import { bookingConstansts } from "./constants";

const getAllBooking = () => {
    return async dispatch => {

        dispatch({ type: bookingConstansts.GET_ALL_BOOKING_REQUEST });
        const res = await axios.get(`/getbooking`);
        console.log(res);
        if (res.status === 200) {

            const { booking } = res.data;

            dispatch({
                type: bookingConstansts.GET_ALL_BOOKING_SUCCESS,
                payload: { bookings : booking }
            });
        } else {
            dispatch({
                type: bookingConstansts.GET_ALL_BOOKING_FAILURE,
                payload: { error: res.data.error }
            });
        }


    }
}

export {
    getAllBooking
}