import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import PostOverview from "./pages/PostOverview";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="app-bg">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="*" element={<PageNotFound />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/posts" element={<PostOverview />} />
          <Route exact path="/myProfile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
