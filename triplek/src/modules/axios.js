import {axios} from '@bundled-es-modules/axios'
import { ref } from 'vue'

export default function () {
    const communicating = ref(false)
    const BASE_URL = 'http://ec2-18-118-9-3.us-east-2.compute.amazonaws.com:8000'
    const createURL = (url) => {
        return url.startsWith('http') ? url : BASE_URL + url
    }

    const checkResult = (resp, onSuccess, onFailed) => {
        console.log('checkResult', resp.data)
        if (resp.status === 200 && resp.data.rsp === 'ok') {
            if (onSuccess) {
                onSuccess(resp.data)
            } else {
                if (onFailed) {
                    onFailed(resp.data)
                }
            }
        } else {
            if (onFailed) {
                onFailed(resp.data)
            }
        }
    }
    const axiosGet = async(URL,onSuccess = null, onFailed = null) => {
        communicating.value = true
        axios.get(createURL(URL)).then((resp) => {
            checkResult(resp,onSuccess,onFailed)
        })
    }

    const axiosPost = async(URL,data,onSuccess = null, onFailed = null) => {
            
        communicating.value = true
        axios.post(createURL(URL),data).then((resp) => {
            console.log(URL,'axiosPost',resp)
            checkResult(resp,onSuccess,onFailed)
        })
    }

    const axiosPut = async(URL,data,onSuccess = null, onFailed = null) => { 
        communicating.value = true
        axios.put(createURL(URL),data).then((resp) => {
            checkResult(resp,onSuccess,onFailed)
        })
    }
    
    return {
        communicating,
        axiosGet,
        axiosPost,
        axiosPut,
    }
    
}