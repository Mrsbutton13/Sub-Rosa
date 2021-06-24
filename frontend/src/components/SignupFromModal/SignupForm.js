import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './SignupForm.css'
import * as sessionActions from '../../store/session'



function SignupForm () {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user)
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [bio, setBio] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [avatar, setAvatar] = useState(null);
    const [errors, setErrors] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(password === confirmPassword) {
            setErrors([])
            return dispatch(sessionActions.signup({ email, bio, username, password, avatar }))
                .catch(async (res) => {
                    const data = await res.json()
                    if(data && data.errors) setErrors(data.errors)
                })
        } else if (email && username && password && !(avatar)){
          return setErrors(['Please upload an Image'])
        }
        return setErrors(['Password fields must be the same. '])
    }

     const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) {
        setAvatar(file);
    } 
  };

    return (
      <>
        <div className='sr'>SR</div>
        <form className='sign-up' onSubmit={handleSubmit}>
          <ul>
              {errors.map((error, idx)=> 
              <li key={idx}>{error}</li>
              )}
          </ul>
          <label className='email-label'>
            Email:
          <input
              className='email-input'
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              </label>
          <label className='username-label'>
            Username:
          <input
              className='username-input'
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              />
              </label>
              <label className='username-label'>
            Bio:
          <input
              className='username-input'
              type='text'
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              />
              </label>
          <label className='password-label'>
            Password:
          <input
            className='password-input'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            </label>
          <label className='confirm-label'>
            Confirm Password:
          <input
            className='confirm-input'
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            />
          <label className='image-label'>
            Upload a profile image:
          </label>
            <input 
            className='image-input' 
            type='file' 
            accept='image/*' 
            onChange={updateFile} />
            </label>
          <button className='submit' type='submit'>Get Started</button>
        </form>
      </>
    )

}

export default SignupForm