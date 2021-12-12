import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/Register/Register";
import React from "react";
import Single from "./pages/single/Single"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
//Switch is replaced by Routes in updated version.  

function App() {
  const user = false;
  return (
    <Router>
      <TopBar/>
      <Routes>
          <Route exact path="/" element={<Home/>}>
          </Route>
          <Route path="/register" element={user ? <Home/> :<Register/>}>
          </Route>
          <Route path="/login" element={user ? <Home/> :<Login/>}>
          </Route>
          <Route path="/write" element={user ? <Write/>:<Register/>}>
          </Route>
          <Route path="/settings" element={user ? <Settings/>:<Register/>}>
          </Route>
          <Route path="/post/:postID" element={<Single/>}>
          </Route>
      </Routes>
    </Router>
  );
}

export default App;
