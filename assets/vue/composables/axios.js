import axios from "axios";
import { ElMessage } from 'element-plus'

export default function useAxios (){

    const post = async (url, param) => {
        let config;
        const token = localStorage.getItem('token')

        if(token){
            config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'multipart/form-data',
                    'Authorization': 'Bearer ' + token
                }
            }

        }else {
            config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'multipart/form-data'
                }
            }
        }

         try {
             return await axios.post(url, param, config)
         }catch (error){
            showError(error)
         }
    }

    const get = async(url) => {
        const token = localStorage.getItem('token')
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'multipart/form-data',
                'Authorization': 'Bearer ' + token
            }
        }
        
        try {
            return await axios.get(url, config)
        }catch (error){
           showError(error)
        } 
    }

    const patch = async(url,params) => {
        let config;
        const token = localStorage.getItem('token')

        if(token){
            config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'multipart/form-data',
                    'Authorization': 'Bearer ' + token
                }
            }

        }else {
            config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'multipart/form-data'
                }
            }
        }

        try {
            return await axios.patch(url, params, config)
        }catch (error){
           showError(error)
        }
    }

    const remove = async(url) => {
        const token = localStorage.getItem('token')
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'multipart/form-data',
                'Authorization': 'Bearer ' + token
            }
        }

        try {
            return await axios.delete(url, config)
        }catch (error){
           showError(error)
        }
    }

    const showError = (error) => {
        //console.log(error)
        const message = error.response.data.message
        if(Array.isArray(message)){
            message.forEach(msg => {
                ElMessage.error(msg)
            });
        }else{
            ElMessage.error(message)
        }
         //window.location.href = '/app/acceuil'
    }

    return {
        post,
        get,
        patch,
        remove
    }
}