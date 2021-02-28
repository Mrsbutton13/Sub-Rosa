import { csrfFetch } from "./csrf"


const GET_USERS = 'users/GET_USERS'

const getUsers = (users) => ({
    type: GET_USERS,
    payload: users
})

export const fetchUsers = () => async(dispatch) => {
    const response = await csrfFetch('/api/dashboard')
    const data = await response.json()
    dispatch(getUsers(data.users))
    return response
}

const initialState = {}

function userReducer(state = initialState, action) {
    let newState
    switch (action.type) {
        case GET_USERS:
            newState = Object.assign({}, state)
            newState['users'] = action.payload
            return newState
        default:
            return state
    }
}

export default userReducer