import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import NavBar from './components/NavBar';
import HomeContainer from './containers/HomeContainer';
import PhysicianContainer from './containers/PhysicianContainer';

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={NavBar} >
        <IndexRoute component={HomeContainer} />
        <Route path='/physicians' component={PhysicianContainer}/>
      </Route>
    </Router>
  )
}

export default App;
