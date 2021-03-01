import React, { useState } from 'react'
import * as sessionActions from '../../store/session'
import { useDispatch, useSelector } from 'react-redux'
import './LoginForm.css'


function LoginForm() {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const [credential, setCredential] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors([])
        return dispatch(sessionActions.login({ credential, password}))
        .catch(async (res) => {
            const data = await res.json()
            if(data && data.errors) setErrors(data.errors)
        })
    }
    const handleDemoSubmit = (e) => {
        e.preventDefault()
        dispatch(sessionActions.login({credential: 'Demo-lition', password: 'password'}))
    }

    return (
        <>
        <div className='sr'>SR</div>
        <form  className='login-form' onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => 
                <li key={idx}>{error}</li>)}
            </ul>
            <label >
                Username or Email:
                <input
                    className='email-input'
                    type='text'
                    value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                    required
                />
            </label>
            <label >
                Password: 
                <input 
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            <button className='submitL' type="submit">Log In</button>
            <label className='explore'>
            Not sure? Explore our site!
            </label>
            <button className='demo' type="button" onClick={handleDemoSubmit}>Demo</button>
        </form>
        </>
    )
}

export default LoginForm