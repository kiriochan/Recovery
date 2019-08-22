// state
import ajax from "../../request/index";
import {get} from "../../request/index1";
import api from "../../request/api";

const initialState = {

};

// reducer
export default (state = initialState, action)=>{
    return state;
};

export const test = (params) => async (dispatch) => {
    console.log('params',params);
    // https://develop.suhuishou.com/home?
        // timestamp=1566463008&
        // partner_id=1001&Ip=113.92.94.77
        // &sign=4b55cddb77c89c0ee380e874afad03a1
    let result = await ajax(api.TEST,{
        timestamp:params.timestamp,
        partner_id:params.partner_id,
        Ip:params.Ip,
        sign:params.sign,
    });

    console.log('result',result);

}