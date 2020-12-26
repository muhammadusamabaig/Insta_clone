import './App.css';
import NavBar from './components/NavBar/Nav'
import Login from './components/Login/Login'
import Singup from './components/Sinup/Singup'
import Home from './components/Home/Home'
import Profile from './components/Profile/Profile'
import Post from './components/Post/Post'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
<BrowserRouter>
<NavBar/>

<Switch>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/post">
            <Post/>
          </Route>
          <Route exact path="/Singup">
            <Singup />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      
    </BrowserRouter>
    );
}

export default App;
