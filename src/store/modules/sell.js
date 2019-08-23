// state
import ajax from "../../request/index";
import api from "../../request/api";

const initialState = {

};

// reducer
export default (state = initialState, action)=>{
    return state;
};

export const test = (params) => async (dispatch) => {
    let result = await ajax(api.TEST);

    console.log('result',result);

}