import {csrfFetch} from './csrf'

const GET_VIDEO_POSTS = 'videoPost/getVideoPosts'
const ADD_VIDEO_POSTS = 'videoPost/addVideoPosts'

const getVideoPosts =(videoPost) => ({
  type: GET_VIDEO_POSTS,
  videoPost
})

const addVideoPosts = (videoPost) => ({
  type: ADD_VIDEO_POSTS,
  videoPost
}) 

export const setVideoPost = () => async(dispatch) => {
  const res = await csrfFetch('/api/videoPosts')
  const data = await res.json()
  dispatch(getVideoPosts(data.videoPost))
  return res
}
export const getOneUsersVideo = (userId) => async(dispatch) => {
  const res = await csrfFetch(`/api/videoPosts/${userId}`)
  const data = await res.json()
  dispatch(getVideoPosts(data.videoPost))
  return res
}

export const createVideoPost = (videoPost) => async(dispatch) => {
  const {body, video, userId} = videoPost
  const formData = new FormData()
  formData.append('body', body)
  formData.append('video', video)
  formData.append('userId', userId)
  const response = await csrfFetch('/api/videoPosts', {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: formData,
  })

  const data = await response.json()
  
  dispatch(addVideoPosts(data.videoPost))
  return response
}


function Reducer(state ={}, action) {
  let newState
  switch (action.type) {
    case GET_VIDEO_POSTS:
     newState = {}
     action.videoPost.forEach(post => {
       newState[post.id] = post
     })
     return newState
    case ADD_VIDEO_POSTS:
      newState = {...state}
      newState['videoPost'] = action.videoPost
      return newState
    default:
      return state
  }
}

export default Reducer