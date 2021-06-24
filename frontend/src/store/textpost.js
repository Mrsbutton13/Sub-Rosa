import {csrfFetch} from './csrf'

const GET_TEXT_POSTS = 'textPost/getTextPosts'
const ADD_TEXT_POSTS = 'textPost/addTextPosts'

const getTextPosts =(textPost) => ({
  type: GET_TEXT_POSTS,
  textPost
})

const addTextPosts = (textPost) => ({
  type: ADD_TEXT_POSTS,
  textPost
}) 

export const setTextPost = () => async(dispatch) => {
  const res = await csrfFetch('/api/textPosts')
  const data = await res.json()
  dispatch(getTextPosts(data.textPost))
  return res
}

export const getOneUsersText = (userId) => async(dispatch) => {
  const res = await csrfFetch(`/api/textPosts/${userId}`)
  const data = await res.json()
  console.log(data)
  dispatch(getTextPosts(data.textPost))
  return res
}

export const createTextPost = (textPost) => async(dispatch) => {
  const response = await csrfFetch('/api/textPosts', {
    method: 'POST',
    body: JSON.stringify(textPost)
  })
  const data = await response.json()
  dispatch(addTextPosts(data.textPost))
  return response
}

function Reducer(state ={}, action) {
  let newState
  switch (action.type) {
    case GET_TEXT_POSTS:
     newState = {}
     action.textPost.forEach(post => {
       newState[post.id] = post
     })
     return newState
    case ADD_TEXT_POSTS:
      newState = {...state}
      newState['textPost'] = action.textPost
      return newState
    default:
      return state
  }
}

export default Reducer
