import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/profile";
import Gallery from "../pages/gallery";
// import Wallet from "../pages/Wallet";
// import OtherPage from "../pages/OtherPage";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/gallery" element={<Gallery />} />
        {/* <Route path="/wallet" element={<Wallet />} />
        <Route path="/other" element={<OtherPage />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
