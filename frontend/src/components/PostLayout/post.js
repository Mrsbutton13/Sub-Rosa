import './Post.css'
import FollowButton from '../FollowButton'

function PostLayout ({ post }) {
    return (
        <>
          <div className='individual'>
              <div className='post-div'>
                <img className='user-img' src={post?.User?.avatar}/>
                <div className='inner-post'>
                  <div className='username-div'>
                    <span className='username'>{post?.User?.username}</span>
                    <FollowButton user={post?.User}/>
                  </div>
                  <div className= 'post-body'>{post?.body}</div>
                  {post.img && (
                    <img className='post-img' src={post?.img}/>
                  )}
                  {post.video && (
                  <video className='post-video' controls preload muted>
                    <source src={post?.video} />
                  </video> 
                  )}
                <div className='post-source'>Source: {post?.User?.username}</div>
                </div>
              </div>
          </div>
        </>
    )
}

export default PostLayout