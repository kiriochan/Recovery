import 'whatwg-fetch'

export const get = async (url, params = {})=>{
    try {
        let paramsStr = '';
        Object.entries(params).forEach(([key, value], index)=>{
            paramsStr += (index === 0) ? '?' : '&';
            paramsStr += `${key}=${encodeURIComponent(value)}`;
        })

        let response = await fetch(`${url}${paramsStr}`);

        let result = await response.json();

        if(result.code === 0){
            return result;
        }else{
            throw result;
        }
    } catch (error) {
        throw error;
    }
}

export const post = async (url, params = {})=>{
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });

        let result = await response.json();
        if(result.code === 0){
            return result;
        }else{
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