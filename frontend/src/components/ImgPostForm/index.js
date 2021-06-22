import React, { useState } from 'react'
import {createImgPost, setImgPost} from '../../store/imgpost'
import { useDispatch, useSelector } from 'react-redux'


function ImagePostForm() {
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
    <form className='post-form' onSubmit = {handleSubmit}>
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
      <button className='submit'
      type='submit'>Post</button>
    </form>
  )
}

export default ImagePostForm