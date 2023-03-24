import { FC, PropsWithChildren, useEffect, useReducer } from 'react';
import { AuthContext, AuthReducer } from './index';
import { IUser } from '@/interfaces/users';
import { tesloApi } from 'services';
import Cookies from 'js-cookie';
import axios from 'axios';
export interface AuthState {
    isLoggedIn: boolean;
    user?: IUser;

}
const AUTH_INITIAL_STATE: AuthState = {
    isLoggedIn: false,
    user: undefined
}
export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, AUTH_INITIAL_STATE)

    const loginUser = async (email: string, password: string): Promise<boolean> => {
        try {
            const { data } = await tesloApi.post('/auth/login', { email, password })
            const { token, user } = data;

            Cookies.set('token', token)
            dispatch({ type: '[Auth] - Login', payload: user });
            return true;

        } catch ({error}) {
            return false;
        }
    }

    const registerUser = async (name: string, email: string, password: string): Promise<{ hasError: boolean; message?: string }> => {
        try {
            const { data } = await tesloApi.post('/user/register', { name, email, password })
            const { token, user } = data;

            Cookies.set('token', token)
            dispatch({ type: '[Auth] - Login', payload: user });
            return {
                hasError: false
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return {
                    hasError: true,
                    message: error.response?.data.message
                }
            } else {
                return {
                    hasError: true,
                    message: 'No se pudo crear este usuario - intente de nuevo'
                }
            }
        }
    }
    useEffect(() => {
        checkToken()
    }, [])
    const checkToken = async () => {
        if (!Cookies.get('token')) return;
        try {
            const { data } = await tesloApi.get('/user/validate-token');
            const { token, user } = data
            if (!token) return false
            dispatch({ type: '[Auth] - Login', payload: user })
        } catch (error) {
            Cookies.remove('token')
        }
    }
    const logout = async () => {
        Cookies.remove('token')
        Cookies.remove('cart')
        dispatch({ type: '[Auth] - Logout' })
    }
    return (
        <AuthContext.Provider
            value={{
                ...state,
                //methods
                loginUser,
                registerUser,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}