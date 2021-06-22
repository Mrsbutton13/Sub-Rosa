import {csrfFetch} from './csrf'

const GET_IMG_POSTS = 'imgPosts/GET_IMG_POSTS'
const ADD_IMG_POSTS = 'imgPosts/ADD_IMG_POSTS'

const getImgPosts =(imgPosts) => ({
  type: GET_IMG_POSTS,
  imgPosts
})

const addImgPosts = (imgPosts) => ({
  type: ADD_IMG_POSTS,
  imgPosts
}) 

export const setImgPost = () => async(dispatch) => {
  const res = await csrfFetch('/api/imgPosts')
  const data = await res.json()
  dispatch(getImgPosts(data.imgPosts))
  return res
}

export const createImgPost = (imgPosts) => async(dispatch) => {
  const {body, img} = imgPosts
  const formData = new FormData()
  formData.append('body', body)
  formData.append('img', img)
  const response = await csrfFetch('/api/imgPosts', {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: formData,
  })

  const data = await response.json()
  dispatch(addImgPosts(data.imgPosts))
  return response
}

function Reducer(state ={}, action) {
  let newState
  switch (action.type) {
    case GET_IMG_POSTS:
     newState = {}
     action.imgPosts.forEach(post => {
       newState[post.id] = post
     })
     return newState
    case ADD_IMG_POSTS:
      newState = {...state}
      newState['imgPosts'] = action.imgPosts
      return newState
    default:
      return state
  }
}

export default Reducer