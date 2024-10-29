import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Login from './components/Login/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleLogin = (user) => {
    setLoggedInUser(user);
    setIsLoggedIn(true);
  };

  return (
    <BrowserRouter>
      {isLoggedIn && <Header user={loggedInUser} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />}
      <div className='main d-flex'>
        {isLoggedIn && (
          <div className='sidebarWrapper'>
            <Sidebar isSidebarOpen={isSidebarOpen} />
          </div>
        )}
        <div className='content'>
          <Routes>
            <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />} />
            <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
