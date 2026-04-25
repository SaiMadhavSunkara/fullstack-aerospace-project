import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import Members from './pages/Members';
import Contact from './pages/Contact';
import MemberDetails from './pages/MemberDetails';
import ResumePage from './pages/ResumePage';
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Technologies from "./pages/Technologies";
import Login from "./pages/Login";


// ✅ This is INSIDE Router → safe to use useLocation
function AppContent() {
  const user = localStorage.getItem("user");
  const location = useLocation();

    if (!user && location.pathname !== "/login") {
    window.location.href = "/login";
  }


  return (
    <>
      {/* Hide navbar on login page */}
      {user && location.pathname !== "/login" && <Navbar />}

      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/members" element={user ? <Members /> : <Login />} />
        <Route path="/members/:name" element={<MemberDetails />} />
        <Route path="/members/:name/resume" element={<ResumePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/technologies" element={<Technologies />} />
      </Routes>
    </>
  );
}


// ✅ Main App wraps everything
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;