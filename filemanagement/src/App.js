import MainBoady from "./component/main";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./component/login_signup/login";
import Register from "./component/login_signup/register";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<MainBoady />} />
      </Routes>
    </Router>
  );
}
