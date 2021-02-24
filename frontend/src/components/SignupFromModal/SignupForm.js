import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as sessionActions from '../../store/session'



function SignupForm () {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user)
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [image, setImage] = useState(null);
    const [errors, setErrors] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(password === confirmPassword) {
            setErrors([])
            return dispatch(sessionActions.signup({ email, username, password, image }))
                .catch(async (res) => {
                    const data = await res.json()
                    if(data && data.errors) setErrors(data.errors)
                })
        }
        return setErrors(['Password fields must be the same. '])
    }

     const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

    return (
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx)=> 
                <li key={idx}>{error}</li>
                )}
            </ul>
            <label>
                Email
                <input
                type='text'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </label>
            <label>
                Username
                <input
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            </label>
            <label>
                Password
                <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </label>
            <label>
                Confirm Password
                <input
                type='password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            </label>
            <label>
                Upload a profile image. 
                <input type='file' onChange={updateFile} />
            </label>
            <button type='submit'>Get Started</button>
        </form>
    )

}

export default SignupForm