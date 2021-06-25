import { csrfFetch } from "./csrf"

const ADD_FOLLOW = 'follow/addFollow'
const SET_FOLLOW = 'follow/setFollow'

const addFollow = (follow) => ({
  type: ADD_FOLLOW,
  follow
})

const setFollow = (follow) => ({
  type: SET_FOLLOW,
  follow
})

export const getFollow = () => async(dispatch) => {
  const res = await csrfFetch('/api/follows')
  const data = await res.json()
  dispatch(setFollow(data.follow))
  return res 
}

export const followUser = (follow) => async(dispatch) => {
  const {followId, userId} = follow
  const res = await csrfFetch('/api/follows', {
    method: 'POST',
    body: JSON.stringify({
      followId,
      userId
    })
  })
  const data = await res.json()
  dispatch(addFollow(data.follow))
  return res
}

const initialState = {follow: null}
function Reducer(state=initialState, action) {
  let newState
  switch(action.type) {
    case SET_FOLLOW:
     newState = {}
     action.follow.forEach(person => {
       newState[person.id] = person
     })
      return newState
    case ADD_FOLLOW:
      newState = {...state}
      newState['follow'] = action.follow
      return newState
    default:
      return state
  }
}

export default Reducer