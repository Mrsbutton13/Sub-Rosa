import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import commentReducer from './comment';
import sessionReducer from './session';
import users from './user';
import videoPost from './videopost'
import textPost from './textpost'
import imgPost from './imgpost'
import follow from './follow'
import user from './currentUser'

const rootReducer = combineReducers({
  session: sessionReducer,
  users,
  videoPost,
  textPost,
  imgPost,
  follow,
  user
})


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;