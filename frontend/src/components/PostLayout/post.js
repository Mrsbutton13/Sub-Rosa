import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { fetchPosts } from '../../store/post'
import { fetchUsers } from '../../store/user'
import './Post.css'


const PostLayout = () => {
    const dispatch = useDispatch()
    const posts = useSelector ((store) => store.posts.posts)
  
   const users = useSelector(state => state.users.users)
    console.log(users)

    useEffect(() => {
      dispatch(fetchUsers())
    }, [dispatch])

    useEffect (() => {
    dispatch(fetchPosts())
  },[dispatch])

    return (
        <>
          <div className='individual'>
              {users?.map((user, id) => {
                return (
                  <>
                    {posts?.map((post, id) =>{
                      if(user.id === post.userId){
                        return(
                          <>
                            <div key={user.id} className='username'>
                              <span>{user.username}</span>
                            </div>
                            <div key={post.id} className='pb'>
                              <div className='post-body' key={post.body}>{post.body}</div>
                            </div>
                          </>
                        )
                      } 
                    })}
                  </>      
                )
              })}
          </div>
        </>
    )
}

export default PostLayout