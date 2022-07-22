import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch ,NavLink} from "react-router-dom";


const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};
function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={linkStyles}
        /* add prop for activeStyle */
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Login
      </NavLink>
      <NavLink
        to="/message"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Message
      </NavLink>
      <NavLink
        to="/signup"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        SignUp
      </NavLink>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

function About(){
  return(
    <div>
      <h1>This is my about compotent ! </h1>
    </div>
  )
}

function Login(){
  return(
    <div>
      <h1>Login</h1>
      <form>
        <div>
        <input type="text" name="username" placeholder="Username"/>
        </div>
        <div>
        <input  type="password" name="password" placeholder="Password"/>
        </div>
        <div>
        <input type="submit" value="submit"/>
        </div>
      
      </form>
    </div>
  )

}
function Message(){
  return(
    <div>
      <h1>Message me</h1>
    </div>
  )
}
function SignUp(){
  return(
    <div>
      <h1>sign me up</h1>
    </div>
  )
}
function App() {
return (
<div>
  <NavBar/>
  <Switch>
  
  <Route path="/about">
  <About/>
   </Route>
   <Route   path="/login">
   <Login />
   <Route path="/message">
    <Message/>
   </Route>
   <Route path="/signup">
    <SignUp/>
   </Route>
    </Route>
    <Route  path="/">
 <Home />
  </Route>
    </Switch></div>
  )
}

ReactDOM.render(  <BrowserRouter>
  <NavBar />
  <Switch>
    <Route exact path="/about">
      <About />
    </Route>
    <Route exact path="/login">
      <Login />
    </Route>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/message">
      <Message/>
    </Route>
    <Route exact path="/signup">
      <SignUp/>
    </Route>
  </Switch>
</BrowserRouter>,  document.getElementById("root"));
