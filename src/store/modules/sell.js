// state
import {get} from '../../request'
import api from "../../request/api";

const SET_HOME_DATA = 'home/set_home_data';
const SET_CATEGORY_DATA = 'home/set_category_data';

const initialState = {
    homeData: {},
    category:{},
};

// reducer
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_HOME_DATA:
            return {
                ...state,
                homeData: action.value
            }
        case SET_CATEGORY_DATA:
            return {
                ...state,
                category:action.value
            }
        default :
            return state;
    }

    return state;
};

const setHomeData = (value) => (
    {
        type: SET_HOME_DATA,
        value
    }
)

const setCategoryData = (value) => (
    {
        type: SET_CATEGORY_DATA,
        value
    }
)

export const requestData = () => async (dispatch) => {
    let result = await get(api.SELL_URL);

    dispatch(setHomeData(result.data))
    console.log('result', result.data);

}

export const requestCategoryData = (params) => async (dispatch) => {
    let result = await get(api.SELL_CATEGORY, {
        "typeId": params.typeId,
        "id": params.id
    });
    dispatch(setCategoryData(result.data))
    console.log('result', result.data);

}