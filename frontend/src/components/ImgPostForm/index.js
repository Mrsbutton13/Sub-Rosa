import React, { useState } from 'react'
import {createImgPost, setImgPost} from '../../store/imgpost'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './PostForm.css'
import '../LoginFormModal/LoginForm.css'

function ImagePostForm() {
  const history = useHistory()
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user)
  const userId = sessionUser.id 

  const[body, setBody] = useState('')
  const [img, setImg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const post = {
      body,
      img,
      userId,
    }
    dispatch(createImgPost(post))
    await dispatch(setImgPost())
    setBody('')
    setImg('')
    history.push('/')
  }

  const updateBody = (e) => {
    setBody(e.target.value)
  }

  const updateImage = (e) => {
    const file = e.target.files[0]
    if(file){
      setImg(file)
    }
  }

  return (
    <>
    <div className='sr'>SR</div>
    <form className='login-form' onSubmit = {handleSubmit}>
      <input
      className='body-input'
      type='text'
      value={body}
      onChange={updateBody}
      placeholder='Add a Caption'
      />
      <input
      className='file-input'
      type='file'
      accept='image/*'
      onChange={updateImage}
      />
      <button className='submitL'
      type='submit'>Post</button>
    </form>
    </>
  )
}

export default ImagePostForm