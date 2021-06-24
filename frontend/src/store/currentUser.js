import { csrfFetch } from "./csrf"

const GET_USER = 'user/getUser'

const getUser = (user) => ({
  type: GET_USER,
  user
})


export const fetchUser = () => async(dispatch) => {
  const res = await csrfFetch('/api/users/user')
  const data = await res.json()
  dispatch(getUser(data.user))
  console.log(data)
  return res
}

const initialState = {user: null}

function Reducer(state = initialState, action) {
    let newState
    switch (action.type) {
        case GET_USER:
            newState ={}
            newState['user'] = action.user
            return newState
        default:
            return state
    }
}

export default Reducer