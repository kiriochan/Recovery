// state
import {get} from '../../request'
import api from "../../request/api";

const SET_HOME_DATA = 'home/set_home_data';

const initialState = {
    homeData: {}
};

// reducer
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_HOME_DATA:
            return {
                ...state,
                homeData: action.value
            }
        default :
            return state;
    }

    // return state;
};

const setHomeData = (value) => (
    {
        type: SET_HOME_DATA,
        value
    }
)

export const requestData = () => async (dispatch) => {
    let result = await get(api.SELL_URL);

    dispatch(setHomeData(result.data))
    console.log('result', result.data);

}

export const requestCategoryData = () => async (dispatch) => {
    let result = await get(api.SELL_URL);

    dispatch(setHomeData(result.data))
    console.log('result', result.data);

}