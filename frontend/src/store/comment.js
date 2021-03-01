import {csrfFetch} from './csrf'

const GET_COMMENTS = 'comments/GET_COMMENTS'
const ADD_COMMENT = 'comment/ADD_COMMENT'

const getComments = (comments) => ({
    type: GET_COMMENTS,
    payload: comments
})


const addComment = (comment) => ({
    type: ADD_COMMENT,
    payload: comment
})

export const createComment = (comment) => async(dispatch) => {
    const response = await csrfFetch('/api/dashboard', {
        method: 'POST',
        body: JSON.stringify(comment)
    })
    const data = await response.json()
    dispatch(addComment(data.comment))
    return response
}

export const fetchComments = () => async(dispatch) => {
    const response = await csrfFetch('/api/dashboard')
    const data = await response.json()
    dispatch(getComments(data.comments))
    return response
}


const initialState = {}

function commentReducer (state = initialState, action) {
    let newState 
    switch (action.type) {
        case GET_COMMENTS: 
            newState = Object.assign({}, state)
            newState['comments'] = action.payload
            return newState
        case ADD_COMMENT:
            newState = Object.assign({}, state)
            newState['comment'] = action.payload
            return newState
        default:
            return state
    }
}


export default commentReducer