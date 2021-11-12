import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Posts from './components/posts/Posts';
import PostDetails from './components/posts/PostDetails';

// redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          
          <Routes>
            {/* primul ar fi HOME de la pagina */}
            <Route path='/index' element={<Landing />} />
            {/* redirectionare de la / spre /index */}
            <Route path='/' element={<Navigate replace to='/index' /> } />

            {/* <Route path='/'>
              <Redirect to='/welcome'></Redirect>
            </Route> */}
            {/* <Route path="/" element={<Welcome />} />    */}
            {/* <Route path="welcome/*" element={<Welcome />} /> */}

            <Route path="register/*" element={<Register />} />
            <Route path="login/*" element={<Login />} />
            <Route path="posts/*" element={<Posts />} />
            <Route path="posts/:postId" element={<PostDetails />} />
            
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
