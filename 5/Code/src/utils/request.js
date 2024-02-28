import axios from "axios"


//创建一个axios对象
const http = axios.create({
    timeout: 5000
})

//设置请求的拦截器
http.interceptors.request.use(config => {
    // 在这里，可以配置请求头、token等信息
    return config
}, error => {
    console.log(error);
    return Promise.reject(error)
})


//设置响应的拦截器
http.interceptors.response.use(res => {
    //返回的响应数据
    /**
     * res是浏览器对请求响应的处理结果，res.status是http状态码，
     * 这是超文本传输协议响应状态的3位数字代码，在RFC 2616中规定好了
     * 只有在data里面的status才能自己规定判断
     */
    // console.log(res)
    // console.log(res.data)


    const data = res.data
    if (res.status == 200) {
        if (data.status == 1 || data.status == 1000) {
            return Promise.resolve(data)
        } else {
            // console.log(data)
            return Promise.reject(data)
        }
    }
}, error => {
    if (error.response.status) {
        switch (error.response.status) {
            case 404:
                alert("请求路径找不到！")
                break;
            case 500:
                alert("服务器内部错误！")
                break;
            default:
                break;
        }
    }
    return Promise.reject(error)
})

export default http
