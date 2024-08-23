import Home from "./pages/home";
import {Route, Routes} from "react-router-dom";
import SignUp from './pages/SignUp';
import Login from './pages/Login';

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
    </div>
  )
}

export default App
