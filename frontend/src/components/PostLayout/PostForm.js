import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPost } from '../../store/post'
import * as sessionActions from '../../store/session'


function PostForm() {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user)
  const userId = sessionUser.id
  
  const [body, setBody] = useState('')
  
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const post ={
      body,
      userId,
    }
  dispatch(createPost(post))
  setBody('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
      type='text'
      value={body}
      onChange={e=> setBody(e.target.value)}
      placeholder='Your post here'
      />
      <input type='submit' value='submit'/>
    </form>
  )
}


export default PostForm