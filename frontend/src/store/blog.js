import { csrfFetch } from "./csrf"

const GET_BLOG = 'blog/GET_BLOG'
const GET_BLOGS = 'blog/GET_BLOGS'

const getBlog = (blog) => ({
    type: GET_BLOG,
    payload: blog
})

const getBlogs = (blogs) => ({
    type: GET_BLOGS,
    payload: blogs
})

export const fetchBlogs =() => async(dispatch) => {
    const response = await fetch('/api/blog') 
    const data = await response.json()
    dispatch(getBlogs(data.blogs))
    return response
}

export const fetchBlog = (id) => async (dispatch) => {
    const response = await fetch(`/api/blog/${id}`)
    const data = await response.json()
    dispatch(getBlog(data.blog))
    return response
}

const initialState = {}

function blogReducer(state = initialState, action) {
    let newState
    switch (action.type) {
        case GET_BLOGS:
           newState = Object.assign({}, state, {[action.payload]: action.payload})
            return newState
        case GET_BLOG:
            newState = Object.assign({}, state, {[action.payload.id]: action.payload})
            return newState
        default:
            return state
    }
}

export default blogReducer