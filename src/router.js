import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/home.jsx";
// import About from "./Components/About.jsx";
import Blog from "./Components/Blog.jsx";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
     
        <Switch>
             <Route path="/" exact>
                 <Home/>
            </Route>
           {/* <Route path="/about">
                 <About/>
          </Route> */}
           <Route path="/blog">
                 <Blog/>
          </Route>
        </Switch>
   
    </BrowserRouter>
  );
}

export default Router;
