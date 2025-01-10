import useAxios from '../modules/axios.js'

const { axiosPut, axiosPost } = useAxios()

export default function () {
    const checkToken = (email,token) => 
        new Promise((resolve,reject) => {
            axiosPost('/db/admin/check-token/'+email+'/'+token,{},(data) => {
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
            axiosPut('/db/admin/'+email+'/'+password+'/'+oldpassword,{},(data) => {
                if(data.rsp === 'ok'){
                    resolve(data)
                }else{
                    reject(data)
                }
            })
        })
    

    const login = (email,password) => 
        new Promise((resolve,reject) => {
            axiosPost('/db/admin/login/'+email+'/'+password,{},(data) => {
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