import React, { useEffect, useState } from 'react'
import * as sessionActions from '../../store/session'
import { Redirect } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { fetchDashboards, } from '../../store/dashboard'
import {  fetchPosts } from '../../store/post'
import PostLayout from '../PostLayout/post'

function Dashboard () {

  const dispatch = useDispatch()
  const dashboards = useSelector((store) => Object.values(store.dashboards))
  const posts = useSelector((store) => Object.values(store.posts))
  const sessionUser = useSelector(state => state.session.user)

  useEffect(() => {
    dispatch(fetchDashboards())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchPosts())
  },[dispatch])

  if(!sessionUser) {
    return <Redirect to='/'/>
  }

  return(
    <>
      <div className='main-container'>
        <div className='hfa'>
          <ul className='posts'>
            {posts.map((post) => {
              <div key={post}>
                <PostLayout/>
              </div> 
            })}
          </ul>
        </div>
      </div>
    </>
    )
}

export default Dashboard