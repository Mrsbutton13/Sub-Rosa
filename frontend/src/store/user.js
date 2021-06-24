import { csrfFetch } from "./csrf"


const GET_USERS = 'users/getUsers'


const getUsers = (users) => ({
    type: GET_USERS,
    users
})


export const fetchUsers = () => async(dispatch) => {
    const response = await csrfFetch('/api/users')
    const data = await response.json()
    dispatch(getUsers(data.users))
    return response
}



const initialState = {}

function Reducer(state = initialState, action) {
    let newState
    switch (action.type) {
        case GET_USERS:
            newState = {}
            action.users.forEach(user => {
                newState[user.id] = user
            })
            return newState
        default:
            return state
    }
}

export default Reducer