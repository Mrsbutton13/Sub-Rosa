import React, { useState } from 'react'
import {createTextPost, setTextPost} from '../../store/textpost'
import { useDispatch, useSelector } from 'react-redux'


function TextPostForm() {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user)
  const userId = sessionUser.id 
  console.log(userId)

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
  }

  // const updateBody = (e) => {
  //   setBody(e.target.value)
  // }

  return (
    <form className='post-form' onSubmit = {handleSubmit}>
      <input
      className='body-input'
      type='text'
      onChange={(e) => setBody(e.target.value)}
      placeholder='Add a Post. '
      />
      <button className='submit'
      type='submit'>Post</button>
    </form>
  )
}

export default TextPostForm