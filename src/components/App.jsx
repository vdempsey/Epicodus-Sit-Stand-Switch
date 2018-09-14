import React from 'react';
import SplashPage from './SplashPage';
import How from './How';
import Why from './Why';
import Contact from './Contact';
import Error404 from './Error404';
import UserProfileControl from './UserProfileControl';
import ExistingUser from './ExistingUser';
import LogInControl from './LogInControl';
import { Router, Route, hashHistory } from 'react-router';
import '../stylesheets/ui.scss';
import '../stylesheets/index.scss';



function App() {

    return(
      <div>
        <Router history={hashHistory}>
          <Route exact path='/' component={SplashPage} />
          <Route path='/How' component={How} />
          <Route path='/Why' component={Why} />
          <Route path='/Contact' component={Contact} />
          <Route path='/Register' component={UserProfileControl}/>
          <Route path='/UserProfileDisplay' component={UserProfileControl} />
          <Route path='/ExistingUser' component={ExistingUser} />
          <Route path='/LogIn' component={LogInControl} />
          <Route component={Error404} />
        </Router>
      </div>
    );

}



export default App;
