import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthState } from './slice/loginSlice'
import axios from 'axios';
import { post } from './apiService'

export default function Login() {

    let { isLoggedIn } = useSelector((state => state.LoginSlice))
    const dispatch = useDispatch()

    useEffect(() => {

    }, [])

    let login = () => {
        post({
            url: 'https://fakestoreapi.com/auth/login', payload: {
                username: "mor_2314",
                password: "83r5^_"
            }
        }).then((response) => {
            console.log(response)
            localStorage.setItem('token', response.data.token)
            dispatch(setAuthState(true))
        })
    }

    return (
        <>
            <button onClick={login}>Login</button>
        </>
    )
}
