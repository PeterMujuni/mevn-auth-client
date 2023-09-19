import { defineStore } from 'pinia';
import { useApi } from '@/composables/useApi';
import type { IUser } from '@/interfaces/users';
import type { ILoginData, IRegisterData } from '@/interfaces/apis';

interface IState {
    user: IUser;
    accessToken: string;
}


export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            user: {} as IUser,
            accessToken: "" as string
        }
    },

    getters: {
        user: (state: IState) => state.user,
        isAuthenticated: (state: IState) => state.user.id ? true : false
    },

    actions: {
        async login(payload: ILoginData) {
            try {
                const {data} = await useApi.post(`/api/auth/login`, payload)
                this.accessToken = data.access_token
                return data
            } catch (error: Error | any) {
                throw error.response.message
            }
        },
        async register(payload: IRegisterData) {
            try {
                const {data} = await useApi.post(`/api/auth/register`, payload)
                return data
            } catch (error: Error | any) {
                throw error.response.message
            }
        },
        async getUser() {
            try {
                const {data} = await useApi.get(`/api/auth/user`)
                this.user = data
                return data
            } catch (error: Error | any) {
                throw error.response.message
            }
        },
        async logout() {
            try {
                const {data} = await useApi.post(`/api/auth/logout`)
                this.accessToken = ""
                this.user = {} as IUser
                return data
            } catch (error: Error | any) {
                throw error.response.message
            }
        },
        async refresh() {
            try {
                const {data} = await useApi.post(`/api/auth/refresh`)
                this.accessToken = data.access_token
                return data
            } catch (error: Error | any) {
                throw error.response.message
            }
        }
    }
})