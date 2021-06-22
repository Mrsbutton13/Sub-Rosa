import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { createPost, fetchPosts } from '../../store/imgpost'
import * as sessionActions from '../../store/session'
import { Redirect } from 'react-router-dom'
import './Post.css'

function PostForm() {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user)
  const userId = sessionUser.id
  
  const [body, setBody] = useState('')
  const [errors, setErrors] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const post ={
      body,
      userId,
    }
  // dispatch(createPost(post))
  // dispatch(fetchPosts())
  setBody('')
  }

  return (
    <form className='post-form' onSubmit={handleSubmit}>
      <input
      className='body-input'
      type='text'
      value={body}
      onChange={e=> setBody(e.target.value)}
      placeholder='Your post here'
      />
      <button className='post-submit' type='submit' value='submit'>
        submit
        <Redirect to='/dashboard'/>
      </button>
    </form>
  )
}


export default PostForm