import { csrfFetch } from './csrf';


const LOGIN_USER = 'session/loginUser';
const LOGOUT_USER = 'session/logoutUser';

const loginUser = (user) => {
  return {
    type: LOGIN_USER,
    payload: user,
  };
};

const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      credential,
      password,
    }),
  });
 
  const data = await response.json();
  dispatch(loginUser(data.user));
  return response;
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOGIN_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case LOGOUT_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

export const restoreUser = () => async dispatch => {
  const response = await csrfFetch('/api/session');
  const data = await response.json();
  dispatch(loginUser(data.user));
  return response;
}

export const signup = (user) => async (dispatch) => {
  const {avatar, username, email, password} = user
  const formData = new FormData()
  formData.append("username", username);
  formData.append("email", email);
  formData.append("password", password);

  if(avatar) formData.append('avatar', avatar)
  const response = await csrfFetch(`/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  });

  const data = await response.json()
  console.log(data)
  dispatch(loginUser(data.user))
  return response
}



export const logout = () => async (dispatch) => {

  const response = await csrfFetch('/api/session', {
    method: 'DELETE',
  })
  dispatch(logoutUser())
  return response
} 

export default sessionReducer