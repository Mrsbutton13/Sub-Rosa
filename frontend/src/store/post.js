const GET_POSTS = 'posts/GET_POSTS'

const getPosts = (posts) => ({
    type: GET_POSTS,
    payload: posts
})

export const fetchPosts = () => async(dispatch) => {
    const response = await fetch('/api/dashboard')
    const data = await response.json()
    dispatch(getPosts(data.posts))
    return response
}

const initialState = {}

function postReducer(state = initialState, action) {
    let newState
    switch (action.type) {
        case GET_POSTS:
            newState = Object.assign({}, state, {[action.payload]: action.payload})
            return newState
        default:
            return state
    }
}

export default postReducer