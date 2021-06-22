import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
// import { fetchPosts } from '../../store/post'
import { fetchUsers } from '../../store/user'
import {fetchComments} from '../../store/comment'
import './Post.css'


const PostLayout = () => {
  const dispatch = useDispatch()
  // const posts = useSelector ((store) => store.posts.posts)
  const users = useSelector(state => state.users.users)
  const comments = useSelector(state => state.comments.comments)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  useEffect (() => {
  // dispatch(fetchPosts())
  },[dispatch])

  useEffect(() => {
    dispatch(fetchComments())
  }, [dispatch])

    // return (
    //     <>
    //       <div className='individual'>
    //           {users && users?.map((user, id) => {
    //             return (
    //               <>
    //                 {posts && posts?.map((post, id) =>{
    //                   if(user.id === post.userId){
    //                     return(
    //                       <>
    //                         <div key={user.id} className='username-div'>
    //                           <span className='username'>{user.username}</span>
    //                         </div>
    //                         <div key={post.id} className='pb'>
    //                           <div className='post-body' key={post.body}>{post.body}</div>
    //                         </div>
    //                         <div>
    //                         {comments && comments?.map((comment, id) => {
    //                           if(comment.id === post.commentId)
    //                           return <>
    //                             <div className='comment' key={comment.body}>{comment.body}</div>
    //                           </>
    //                         })}
    //                         </div>
    //                       </>
    //                     )
    //                   } 
    //                 })}
    //               </>      
    //             )
    //           })}
    //       </div>
    //     </>
    // )
}

export default PostLayout