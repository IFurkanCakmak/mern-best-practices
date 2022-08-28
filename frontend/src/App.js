import Home from "./pages/home/Home"
import NavBar from "./components/navbar/NavBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  const user=false;
  return (
   <Router>
    <NavBar/>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/register" element={user ? <Home/> :<Register/>}/>
    <Route exact path="/login" element={user ? <Home/> :<Login/>}/>
    <Route path="/write" element={user ? <Write/> :<Register/>}/>
    <Route path="/settings" element={<Settings/>}/>
    <Route path="/post/:postId" element={<Single/>}/>
    </Routes>
   </Router>
  
  );
}

export default App;
