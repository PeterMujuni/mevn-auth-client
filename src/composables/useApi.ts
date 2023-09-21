import { useAuthStore } from '@/stores/auth';
import { axiosInstance, axiosPrivateInstance } from './../utils/axios';
import { watchEffect } from 'vue';
import type { AxiosInstance } from 'axios';

export const useApiPrivate = (): AxiosInstance => {
    
    const authStore = useAuthStore()

    watchEffect(() => {
        axiosPrivateInstance.interceptors.request.use(
            (config) => {
                if(!config.headers.Authorization) {
                    config.headers.Authorization = `Bearer ${authStore.accessToken}`
                }
                console.log("request sent");
                return config
            },
            (error) => Promise.reject(error)
        )
    
        axiosPrivateInstance.interceptors.response.use(
            (response) => {
                console.log("request sent");
                return response
            },
            async (error) => {
                const prevRequest = error?.config                
                if((error?.response?.status === 403 || error?.response?.status === 401) && !prevRequest.sent){
                    prevRequest.sent = true
                    try {
                        await authStore.refresh()
                        prevRequest.headers["Authorization"] = authStore.accessToken
                        return axiosInstance(prevRequest)
                    } catch (error) {
                        return Promise.reject(error)
                    }
                }
                return Promise.reject(error)
            }
        )
    })
    
    return axiosPrivateInstance
}

export const useApi = () => {
    return axiosInstance
}