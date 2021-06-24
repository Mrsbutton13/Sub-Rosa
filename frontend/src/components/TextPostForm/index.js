import React, { useState } from 'react'
import {createTextPost, setTextPost} from '../../store/textpost'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import '../LoginFormModal/LoginForm.css'


function TextPostForm() {
  const history = useHistory()
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user)
  const userId = sessionUser.id 

  const[body, setBody] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const post = {
      body,
      userId,
    }
    dispatch(createTextPost(post))
    await dispatch(setTextPost())
    setBody('')
    history.push('/')
  }

  // const updateBody = (e) => {
  //   setBody(e.target.value)
  // }

  return (
    <>
    <div className='sr'>SR</div>
    <form className='login-form' onSubmit = {handleSubmit}>
      <input
      className='body-input'
      type='text'
      onChange={(e) => setBody(e.target.value)}
      placeholder='Add a Post. '
      />
      <button className='submitL'
      type='submit'>Post</button>
    </form>
    </>
  )
}

export default TextPostForm