import {csrfFetch} from './csrf'

const GET_IMG_POSTS = 'imgPost/GET_IMG_POSTS'
const ADD_IMG_POSTS = 'imgPost/ADD_IMG_POSTS'

const getImgPosts =(imgPost) => ({
  type: GET_IMG_POSTS,
  imgPost
})

const addImgPosts = (imgPost) => ({
  type: ADD_IMG_POSTS,
  imgPost
}) 

export const setImgPost = () => async(dispatch) => {
  const res = await csrfFetch('/api/imgPosts')
  const data = await res.json()
  dispatch(getImgPosts(data.imgPost))
  return res
}

export const createImgPost = (imgPost) => async(dispatch) => {
  const {body, img, userId} = imgPost
  const formData = new FormData()
  formData.append('body', body)
  formData.append('img', img)
  formData.append('userId', userId)
  const response = await csrfFetch('/api/imgPosts', {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: formData,
  })

  const data = await response.json()
  dispatch(addImgPosts(data.imgPost))
  return response
}

function Reducer(state ={}, action) {
  let newState
  switch (action.type) {
    case GET_IMG_POSTS:
     newState = {}
     action.imgPost.forEach(post => {
       newState[post.id] = post
     })
     return newState
    case ADD_IMG_POSTS:
      newState = {...state}
      newState['imgPost'] = action.imgPost
      return newState
    default:
      return state
  }
}

export default Reducer