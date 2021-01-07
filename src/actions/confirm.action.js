import axios from "../helpers/axios"; 
import { confirmedConstansts } from "./constants";

const getAllConfirmed = () => {
    return async dispatch => {

        dispatch({ type: confirmedConstansts.GET_ALL_CONFIRMED_REQUEST });
        const res = await axios.get(`/getconfirmed`);
        console.log(res);
        if (res.status === 200) {

            const { confirmed } = res.data;

            dispatch({
                type: confirmedConstansts.GET_ALL_CONFIRMED_SUCCESS,
                payload: { confirm : confirmed }
            });
        } else {
            dispatch({
                type: confirmedConstansts.GET_ALL_CONFIRMED_FAILURE,
                payload: { error: res.data.error }
            });
        }


    }
}

export {
    getAllConfirmed
}