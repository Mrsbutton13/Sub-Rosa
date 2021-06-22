import {csrfFetch} from './csrf'

const GET_TEXT_POSTS = 'textPosts/GET_TEXT_POSTS'
const ADD_TEXT_POSTS = 'textPosts/ADD_TEXT_POSTS'

const getTextPosts =(textPosts) => ({
  type: GET_TEXT_POSTS,
  textPosts
})

const addTextPosts = (textPosts) => ({
  type: ADD_TEXT_POSTS,
  textPosts
}) 

export const setTextPost = () => async(dispatch) => {
  const res = await csrfFetch('/api/textPosts')
  const data = await res.json()
  dispatch(getTextPosts(data.textPosts))
  return res
}

export const createTextPost = (textPosts) => async(dispatch) => {
  const {body} = textPosts
  const formData = new FormData()
  formData.append('body', body)
  const response = await csrfFetch('/api/textPosts', {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: formData,
  })

  const data = await response.json()
  dispatch(addTextPosts(data.textPosts))
  return response
}

function Reducer(state ={}, action) {
  let newState
  switch (action.type) {
    case GET_TEXT_POSTS:
     newState = {}
     action.textPosts.forEach(post => {
       newState[post.id] = post
     })
     return newState
    case ADD_TEXT_POSTS:
      newState = {...state}
      newState['textposts'] = action.textPosts
      return newState
    default:
      return state
  }
}

export default Reducer
