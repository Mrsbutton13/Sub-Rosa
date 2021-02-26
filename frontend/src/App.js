import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import * as sessionActions from './store/session'
import Navigation from './components/Navigation'
import SplashPage from './components/SplashLandingPage';
import Dashboard from './components/Dashboard';
import Blog from './components/BlogModal/Blog';




function App() {
  const dispatch = useDispatch()
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true))
  }, [dispatch])

  return isLoaded && (
    <>
    <Navigation isLoaded={isLoaded} />
    {isLoaded && (
      <Switch>
        <Route exact path='/'>
        <SplashPage isLoaded={isLoaded}/>
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
        <Route path='/blog'>
          <Blog/>
        </Route>
        <Route path='/blog/:id'>
          <Blog/>
        </Route>
      </Switch>
      )}
    </>
  );
}

export default App;
