import React, { useEffect } from 'react'
import './Users.css'
import { NavLink } from 'react-router-dom'
import FollowButton from '../FollowButton'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../store/user'

function UserCard ({user}) {
  const dispatch = useDispatch()
  const users = useSelector(store => Object.values(store.users))

  useEffect(async() => {
    await dispatch(fetchUsers())
  },[dispatch])

  return (
    <div className='user-card'>
      <div className='other-div'>
      <img className='blog-img' src={user?.avatar}/>
      <div className='user-info'>
        <NavLink className='user-page-link' to={`/users/${user?.id}`}>{user?.username}</NavLink>
        <span className='user-bio'>{user?.bio}</span>
      </div>
      </div>
      {users.map(person => (
        (person?.id == user?.id ? (
          <FollowButton user={user}/>
        ):null)
      ))}
    </div>
  )
}

export default UserCard