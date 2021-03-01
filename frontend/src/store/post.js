import { csrfFetch } from "./csrf"

const GET_POSTS = 'posts/GET_POSTS'
const ADD_POST = 'post/ADD_POST'

const getPosts = (posts) => ({
    type: GET_POSTS,
    payload: posts
})

const addPost = (post) => ({
    type: ADD_POST,
    payload: post
})

export const createPost =(post) => async(dispatch) => {
    const response = await csrfFetch('/api/dashboard',{
        method: 'POST',
        body: JSON.stringify(post)
    })
    const data = await response.json()
    dispatch(addPost(data.post))
    return response
} 

export const fetchPosts = () => async(dispatch) => {
    const response = await csrfFetch('/api/dashboard')
    const data = await response.json()
    dispatch(getPosts(data.posts))
    return response
}
const initialState = {}

function postReducer(state = initialState, action) {
    let newState
    switch (action.type) {
        case GET_POSTS:
            newState = Object.assign({}, state)
            newState['posts'] = action.payload
            return newState
        case ADD_POST:
            newState = Object.assign({}, state)
            newState['post'] = action.payload
            return newState
        default:
            return state
    }
}

export default postReducer