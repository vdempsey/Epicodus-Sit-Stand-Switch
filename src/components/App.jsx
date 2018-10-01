import React from 'react';
import SplashPage from './SplashPage';
import How from './How';
import Why from './Why';
import Contact from './Contact';
import Error404 from './Error404';
import UserProfileControl from './UserProfileControl';
import LogInControl from './LogInControl';
import LogInForm from './LogInForm';
import RegisterForm from './RegisterForm';
import Schedule from './Schedule';
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
          <Route path='/RegisterForm' component={RegisterForm} />
          <Route path='/UserProfileDisplay' component={UserProfileControl} />
          <Route path='/LogIn' component={LogInControl} />
          <Route path='/LogInForm' component={LogInControl} />
          <Route path='/LogInAgain' component={LogInControl} />
          <Route path='/Schedule' component={Schedule} />
          <Route component={Error404} />
        </Router>
      </div>
    );

}



export default App;
