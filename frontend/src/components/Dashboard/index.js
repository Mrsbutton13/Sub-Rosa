import React, { useEffect, useState } from 'react'
import * as sessionActions from '../../store/session'
import { Redirect, useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { fetchUsers } from '../../store/user'
import { setTextPost } from '../../store/textpost'
import { setImgPost } from '../../store/imgpost'
import { setVideoPost } from '../../store/videopost'
import {fetchUser} from '../../store/currentUser'
import VideoPostModal from '../VideoPostModal'
import TextFormModal from '../TextPostModal'
import ImageFormModal from '../ImgFormModal'
import PostLayout from '../PostLayout/post'
import UserCard from '../Users'
import './Dashboard.css'


function Dashboard () {
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false)
  const sessionUser = useSelector(state => state.session.user)
  const videoPosts = useSelector ((store) => Object.values(store.videoPost))
  const textPosts = useSelector ((store) => Object.values(store.textPost))
  const imgPosts = useSelector ((store) => Object.values(store.imgPost))
  const users = useSelector((store) => Object.values(store.users))
  const currentUser = useSelector(store => store.user.user)

  const userPosts = []
  if(videoPosts.length > 0) {
    {videoPosts.map(post => {
      userPosts.push(post)
    })}
  }
  
  if(textPosts.length > 0) {
    {textPosts.map(post => {
      userPosts.push(post)
    })}
  }
  
  if(imgPosts.length > 0) {
    {imgPosts.map(post => {
      userPosts.push(post)
    })}
  }

  const posts = userPosts.sort((a,b) => a.createdAt < b.createdAt ? 1: -1)

  useEffect(async() => {
    await dispatch(fetchUsers())
    await dispatch(fetchUser())
    await dispatch(setVideoPost())
    await dispatch(setImgPost())
    await dispatch(setTextPost())
    await setLoaded(true)
  }, [dispatch])

  if(!sessionUser) {
    return <Redirect to='/'/>
  }

  return(
    <>
    {loaded && (
      <div className='main-container'>
      <div className='post-container'>
      <div className= 'add-post-outer'>
      <div className='add-post-inner'>
        <img className='user-img' src={currentUser.avatar}/>
        <div className='add-post'>
           <TextFormModal/>
           <ImageFormModal/>
           <VideoPostModal/>
      </div>
        </div>
      </div>
      <div className='posts'>
        {posts.map(post => (
          <PostLayout post={post}/>
        ))}
      </div>
      </div>
      <div className='users-container'>
        <span className='check-out'>Check out these blogs</span>
        <span className='blog-span'>
          <hr/>
        </span>
        <div className='user-cards'>
        {users.map(user => (
          <UserCard user={user} />
          ))}
        </div>
      </div>
    </div>
  )}
  </>    
    )
}

export default Dashboard