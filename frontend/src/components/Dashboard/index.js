import React, { useEffect, useState } from 'react'
import * as sessionActions from '../../store/session'
import { Redirect, useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { fetchDashboards, } from '../../store/dashboard'
import {  fetchPosts } from '../../store/post'
import PostFormModal from '../PostLayout'
import PostLayout from '../PostLayout/post'
import './Dashboard.css'


function Dashboard () {

  const dispatch = useDispatch()
  const dashboards = useSelector((store) => Object.values(store.dashboards))
  const posts = useSelector((store) => store.posts.posts)
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
        <div className='add-post'>
            <PostFormModal/>
        </div>
      <main className='posts'>
          <PostLayout/>
      </main>
      </div>
    </>
    )
}

export default Dashboard