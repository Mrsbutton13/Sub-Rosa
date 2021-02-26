import React, { useEffect, useState } from 'react'
import * as sessionActions from '../../store/session'
import {useDispatch, useSelector} from 'react-redux'
import { fetchBlogs, fetchBlog } from '../../store/blog'




export default function Blog() {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchBlogs())
    }, [dispatch])

    
   
    
    
    return (
        <>
                
             <span className='username'></span>
            {/* <image className='backgroundImg'>
                <image className='profileImg'>
                
                </image>
            
            </image> */}
            <div className='title'>
            
            </div>
            <text className='description'>
           
            </text>
        </>
    )
}
