// state
import {get} from '../../request'
import api from "../../request/api";


const SET_EXCHANGE_DATA ='exchange/set_exchange_data';

const initialState = {
    exchangeData:[]
};

// reducer
export default (state = initialState, action)=>{
    switch (action.type) {
        case SET_EXCHANGE_DATA:
            return{
                ...state,
                exchangeData:action.value
            }
        default:
            return state;
    }
    
};

const setExchangeData =(value)=>({
    type:SET_EXCHANGE_DATA,
    value
})

export const requestExchangeData = () => async (dispatch) => {
    let result = await get(api.EXCHANGE_URL);

    // console.log('exchange',result);
    // console.log('result',result.data);
    
    dispatch(setExchangeData(result.data))

};
// export const requestDatailData = () =>async(dispatch)=>{

// }
