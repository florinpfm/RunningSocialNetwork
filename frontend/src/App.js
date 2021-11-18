import './App.css';
import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Home from './components/home/Home';
import Users from './components/users/Users';
import Posts from './components/posts/Posts';
import CreateProfile from './components/profile/CreateProfile';
import EditProfile from './components/profile/EditProfile';
import PrivateRoute from './components/routing/PrivateRoute';

// redux
import { Provider } from 'react-redux';
import store from './store';
import setTokenHeaderInfo from './utils/setTokenHeaderInfo';
import { loadUser } from './actions/actionsAuth';


const App = () => {
  useEffect(() => {
    if (localStorage.token) {
      setTokenHeaderInfo(localStorage.token);
    }
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Alert />
          <Switch>
						<Route exact path="/register" component={Register} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/users" component={Users} />
						<Route exact path="/posts" component={Posts} />
						<PrivateRoute 
              exact 
              path="/account" 
              component={Home} 
            />
						<PrivateRoute
							exact
							path="/create-profile"
							component={CreateProfile}
						/>
						<PrivateRoute 
              exact 
              path="/edit-profile" 
              component={EditProfile} 
            />
					</Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
