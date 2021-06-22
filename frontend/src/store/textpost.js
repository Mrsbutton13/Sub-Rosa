import {csrfFetch} from './csrf'

const GET_TEXT_POSTS = 'textPost/GET_TEXT_POSTS'
const ADD_TEXT_POSTS = 'textPost/ADD_TEXT_POSTS'

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

// export const createTextPost = (textPost) => async(dispatch) => {
//   const {body, userId} = textPost
//   const formData = new FormData()
//   formData.append('body', body)
//   formData.append('userId', userId)
//   const response = await csrfFetch('/api/textPosts', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'multipart/form-data',
//     },
//     body: formData,
//   })

//   const data = await response.json()
//   console.log(data)
//   dispatch(addTextPosts(data.textPost))
//   return response
// }

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
