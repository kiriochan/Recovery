// duck mode

import api from '../../request/api'
import {post, get} from '../../request'
import 'whatwg-fetch'

// types
const CHANGE_LOGIN_TIP = 'user/change_login_tip';
const SET_LOGIN_STATUS = 'user/set_login_status';
const SET_USER_INFO = 'user/set_user_info';

// state
const initialState = {
    isLogin: false,
    loginTip: '发送验证码',
    userInfo: {}
};

// reducer
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
        case SET_USER_INFO:
            return {
                ...state,
                userInfo: action.value
            }
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

// 设置用户信息
const setUserInfo = (value)=>({
    type: SET_USER_INFO,
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
                dispatch(getChangeTipAction('重新发送'));
            }
            
        }, 1000);
    } catch (error) {
        dispatch(getChangeTipAction('重新发送'));
    }    
}

// 电话号码和验证码登录
export const requestLoginByCodeAction = (phone, code) => async (dispatch) => {
    try {
        let result = await post(api.LOGIN_BY_CODE_API, {phone, code});
        console.log(result);
        let action = setLoginStatusAction(true);
        dispatch(action);
        dispatch(setUserInfo(result.data));
    } catch (error) {
        console.log('登录失败');
    }
}

// 检查登录是否过期
export const requestCheckLoginAction = () => async (dispatch)=>{
    try {
        // 登录没有过期，设置登录状态
        let result = await get(api.CHECK_LOGIN_API);
        // 设置登录了的状态
        let action = setLoginStatusAction(true);
        dispatch(action);
        // 设置用户信息
        let userinfo = result.data;
        dispatch(setUserInfo(userinfo));
    } catch (error) {
        // 登录没有过期，设置登录状态为false
        let action = setLoginStatusAction(false);
        dispatch(action);        
    }
}

// 退出登录
export const requestLoginOut = ()=>async (dispatch)=>{
    // 移除session
    let result = await get(api.LOGOUT_API);
    console.log(result);
    // 设置登录状态
    dispatch(setLoginStatusAction(false));
    //
    dispatch(getChangeTipAction('重新发送'));
    // 清空用户数据
    dispatch(setUserInfo({}));
}
