import Home from "./pages/home";
import {Navigate, Route, Routes} from "react-router-dom";
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from "./context/AuthContext";



function App() {
  const {authUser} = useAuthContext();

  return (
    <div className="flex justify-center items-center h-screen">
    <Routes>
      <Route path="/" element={authUser ? <Home /> : <Navigate to={"/Login"}/> } />
      <Route path="/SignUp" element={ authUser ? <Navigate to={"/"} /> : <SignUp/>} />
      <Route path="/Login" element={authUser ? <Navigate to={"/"} /> : <Login />} />
    </Routes>
    <Toaster/>
    </div>
  )
}

export default App
