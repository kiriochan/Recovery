// 发送电话号码验证码的接口
const SEND_CODE_API = '/api/user/login/send_phone_code';

// 根据电话号码和验证码登录的接口
const LOGIN_BY_CODE_API = '/api/user/login/login_by_code';

// 检查登录是否过期
const CHECK_LOGIN_API = '/api/user/check_login';

export default {
    SEND_CODE_API,
    LOGIN_BY_CODE_API,
    CHECK_LOGIN_API
}