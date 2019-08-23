// state
import {get,post} from '../../request'
import api from "../../request/api";

const initialState = {

};

// reducer
export default (state = initialState, action)=>{
    return state;
};

export const test = (params) => async (dispatch) => {
    let result = await get(api.TEST);

    console.log('result',result);

}