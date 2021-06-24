import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getOneUsersImg } from '../../store/imgpost'
import { getOneUsersText } from '../../store/textpost'
import { fetchUsers } from '../../store/user'
import { getOneUsersVideo } from '../../store/videopost'
import FollowButton from '../FollowButton'
import PostLayout from '../PostLayout/post'
import './User.css'

function User () {
const dispatch = useDispatch()
const [loaded, setLoaded] = useState(false)
const videoPosts = useSelector ((store) => Object.values(store.videoPost))
const textPosts = useSelector ((store) => Object.values(store.textPost))
const imgPosts = useSelector ((store) => Object.values(store.imgPost))
const users = useSelector ((store => Object.values(store.users)))
console.log(textPosts)
const {userId} = useParams()
let otherUser
{users.map(user=> {
  if(userId == user.id)
  otherUser = user
})}

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
  console.log(posts)

 useEffect(async() => {
   await dispatch(getOneUsersImg(userId))
   await dispatch(getOneUsersText(userId))
   await dispatch(getOneUsersVideo(userId))
   await dispatch(fetchUsers())
   await setLoaded(true)
 },[dispatch])

 return (
   <>
   {loaded && (
     <div className='user-page'>
      <div className='user-info-div'>
        <img className='user-avatar2' src={otherUser?.avatar} />
        <span className='user-username'>{otherUser?.username}</span>
        <FollowButton user={otherUser}/>
        <span className='user-info2'>{otherUser?.bio}</span>
      <div className='user-posts'>
      {posts.map(post => (
        <div className='post-layout'> 
        <PostLayout post={post}/>
        </div>
      ))}
      </div>
      </div>
    </div>
    )}
  </>
  )
}

export default User