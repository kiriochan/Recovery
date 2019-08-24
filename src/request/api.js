// 发送电话号码验证码的接口
const SEND_CODE_API = '/poxyA/api/user/login/send_phone_code';


// 根据电话号码和验证码登录的接口
const LOGIN_BY_CODE_API = '/poxyA/api/user/login/login_by_code';

// 检查登录是否过期
const CHECK_LOGIN_API = '/poxyA/api/user/check_login';

//退出登录接口
const LOGOUT_API = '/poxyA/api/user/logout'


const SELL_URL = '/poxyA/api/home/home';
const SELL_CATEGORY = '/poxyA/api/home/category'
const EXCHANGE_URL = '/poxyA/api/exchange/exchange'

//商品详情


export default {
    // SEND_CODE_API,
    SELL_URL,
    EXCHANGE_URL,
    SEND_CODE_API,
    LOGIN_BY_CODE_API,
    CHECK_LOGIN_API,
    LOGOUT_API,
    SELL_CATEGORY

}