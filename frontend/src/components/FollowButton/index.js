import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { followUser, getFollow } from '../../store/follow'
import '../PostLayout/Post.css'


function FollowButton({ user }) {
  const history = useHistory()
  const dispatch = useDispatch()

  const currentUser = useSelector(store => store.session.user)
  
  const followId = user.id
  const userId = currentUser.id 

  const followOther = async(e) => {
    e.preventDefault()
    const follow = {
      followId,
      userId 
    }
    await dispatch(followUser(follow))
    await dispatch(getFollow())
    history.push('/')
  }

  return (
    <>
    <a className='follow' onClick={followOther}>Follow</a>
    </>
  )
}

export default FollowButton