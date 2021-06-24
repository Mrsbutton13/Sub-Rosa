import React, { useState } from 'react'
import {createVideoPost, setVideoPost} from '../../store/videopost'
import { useDispatch, useSelector } from 'react-redux'


function VideoPostForm() {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user)
  const userId = sessionUser.id 

  const[body, setBody] = useState('')
  const [video, setVideo] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const post = {
      body,
      video,
      userId,
    }
    dispatch(createVideoPost(post))
    await dispatch(setVideoPost())
    setBody('')
    setVideo('')
  }

  const updateBody = (e) => {
    setBody(e.target.value)
  }

  const updateVideo = (e) => {
    const file = e.target.files[0]
    if(file){
      setVideo(file)
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
      accept='video/*'
      onChange={updateVideo}
      />
      <button className='submit'
      type='submit'>Post</button>
    </form>
  )
}

export default VideoPostForm