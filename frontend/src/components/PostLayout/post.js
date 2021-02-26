import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {  fetchPosts } from '../../store/post'


const PostLayout = () => {
    const {id}= useParams
    const dispatch = useDispatch()
    const posts = useSelector ((store) => Object.values(store.posts))
    const post = posts.find((post) => post.id.toString() === id)
    useEffect (() => {
    dispatch(fetchPosts())
  },[dispatch])
    let title
    if(post.textTitle) {
        title = post.textTitle
    } else if (post.videoText){
        title = post.videoText
    } else if(post.imgText) {
        title = post.imgText
    } else {
        title = post.linkText
    }
    let body
    if(post.textBody) {
        body = post.textBody
    } else if (post.video){
        body = post.video
    } else if(post.imgSrc) {
        body = post.imgSrc
    } else {
        body = post.link
    }
    return (
        <>
        <h2 className='post-title'>{title}</h2>
        <div className='post-body'>{body}</div>
        </>
    )
}

export default PostLayout