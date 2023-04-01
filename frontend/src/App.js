import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import PostOverview from "./pages/PostOverview";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

function App() {
  function DynamicRouting() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      const userData = JSON.parse(localStorage.getItem("user"));
      if (userData) {
        dispatch({ type: "LOGIN_SUCCESS", payload: userData });
        navigate("/posts");
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        dispatch({ type: "LOGIN_ERROR" });
        navigate("/login");
      }
    }, []);
    return (
      <Routes>
        <Route exact path="*" element={<PageNotFound />} />
        <Route exact path="/" element={<PostOverview />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/posts" element={<PostOverview />} />
        <Route exact path="/myProfile" element={<Profile />} />
      </Routes>
    );
  }

  return (
    <div className="app-bg">
      <BrowserRouter>
        <Navbar />
        <DynamicRouting />
      </BrowserRouter>
    </div>
  );
}

export default App;
