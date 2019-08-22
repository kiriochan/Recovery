
import api from '../../request/api'
import {post, get} from '../../request/request'

const CHANGE_LOGIN_TIP = 'user/change_login_tip';
const SET_LOGIN_STATUS = 'user/set_login_status';

const initialState = {
    isLogin: true,
    loginTip: '获取',
    userInfo: {}
};

export default (state = initialState, action)=>{
    switch (action.type) {
        case CHANGE_LOGIN_TIP:
            return {
                ...state,
                loginTip: action.value
            };
        case SET_LOGIN_STATUS:
            return {
                ...state,
                isLogin: action.value
            };
        default:
            return state;
    }
};

// 同步action
// 设置登录提示框的文字
const getChangeTipAction = (value)=>({
    type: CHANGE_LOGIN_TIP,
    value
})
// 设置登录状态
const setLoginStatusAction = (value)=>({
    type: SET_LOGIN_STATUS,
    value
})



// 异步actions 
// 发送验证码
export const requestSendCodeAction = (phone) => async (dispatch) => {
    try {
        // 异步操作,发送请求
        await post(api.SEND_CODE_API, {
            phone
        });
        // 设置显示的信息
        let time = 60;
        //倒计时
        dispatch(getChangeTipAction((time--)+'s'));
        let timer = setInterval(() => {
            
            dispatch(getChangeTipAction((time--)+'s'));

            if(time < 0){
                //倒计时完成，重新发送
                clearInterval(timer);
                dispatch(getChangeTipAction('重发'));
            }
            
        }, 1000);
    } catch (error) {
        dispatch(getChangeTipAction('失败'));
    }    
}

// 电话号码和验证码登录
export const requestLoginByCodeAction = (phone, code) => async (dispatch) => {
    try {
        await post(api.LOGIN_BY_CODE_API, {phone, code});
        let action = setLoginStatusAction(true);
        dispatch(action);
    } catch (error) {
        console.log('登录失败');
    }
}

// 检查登录是否过期
export const requestCheckLoginAction = () => async (dispatch)=>{
    try {
        // 登录没有过期，设置登录状态
        await get(api.CHECK_LOGIN_API);
        let action = setLoginStatusAction(true);
        dispatch(action);
    } catch (error) {
        // 登录没有过期，设置登录状态为false
        let action = setLoginStatusAction(false);
        dispatch(action);        
    }
}

