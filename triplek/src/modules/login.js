import useAxios from '../modules/axios.js'
import md5 from 'js-md5'
const { axiosPut, axiosPost } = useAxios()

export default function () {
    const checkToken = (email,token) => 
        new Promise((resolve,reject) => {
            axiosPost('/db/admin/check-token/'+md5(email)+'/'+token,{},(data) => {
                if(data.rsp === 'ok'){
                    resolve(data)
                }else{
                    reject(data)
                }
            },(data) => {
                reject(data)
            })
        })
    

    const updatePassword = (email,password,oldpassword) => 
        new Promise((resolve,reject) => {
            const enc_pw = password == "vue" ? password : md5(password)
            axiosPut('/db/admin/'+md5(email)+'/'+enc_pw+'/'+md5(oldpassword),{},(data) => {
                if(data.rsp === 'ok'){
                    resolve(data)
                }else{
                    reject(data)
                }
            })
        })
    

    const login = (email,password) => 
        new Promise((resolve,reject) => {
            axiosPost('/db/admin/login/'+md5(email)+'/'+md5(password),{},(data) => {
                if(data.rsp === 'ok'){
                    resolve(data)
                }else{
                    reject(data)
                }
            })
        })
    

    return {
        checkToken,
        updatePassword,
        login,
    }
}