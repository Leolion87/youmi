import axios from 'axios'
import qs from 'qs'
import config from './config'

const service = axios.create(config)

// get 传参格式化
service.interceptors.request.use(
    config => {
        if (config.method === 'post') config.data = qs.stringify(config.data)
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
// 返回结果处理
service.interceptors.response.use(
    res => {
        // 这里可根据实际情况做一些操作
        return res
    },
    error => {
        return Promise.reject(error)
    }
)

export default {
    // post function
    post (url, data) {
        return service({
            method: 'post',
            url,
            data
        })
    },
    // get function
    get (url, data) {
        return service({
            method: 'get',
            url,
            params: data
        })
    },
    // delete function
    delete (url, data) {
        return service({
            method: 'delete',
            url,
            params: data
        })
    }
}