import 'whatwg-fetch'

export const get = async (url, params = {}) => {
    try {
        // 处理参数
        let paramsStr = '';
        Object.entries(params).forEach(([key, value], index) => {
            paramsStr += (index === 0) ? '?' : '&';
            paramsStr += `${key}=${encodeURIComponent(value)}`;
        })
        // 发送请求,得到响应对象
        let response = await fetch(`${url}${paramsStr}`);
        // 解析数据，当成文本解析
        let result = await response.json();
        // 解析完成，得到结果
        if (result.code === 0) {
            return result;
        } else {
            throw result;
        }
    } catch (error) {
        throw error;
    }
}

export const post = async (url, params = {}) => {
    try {
        // 发送请求
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });
        // 接收到响应，处理数据
        let result = await response.json();
        if (result.code === 0) {
            return result;
        } else {
            throw result;
        }
    } catch (error) {
        throw error;
    }
}

export default {
    get,
    post
}