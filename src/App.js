import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from './pages/Dashboard';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { useState } from 'react'

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return ( 
    <BrowserRouter>
      <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>
      <div className='main d-flex'>
        <div className='sidebarWrapper'>
          <Sidebar isSidebarOpen={isSidebarOpen}/>
        </div>
        <div className='content'>

          <Routes>
            <Route path='/' exact={true} element={<Dashboard/>} />
            <Route path='/dashboard' exact={true} element={<Dashboard/>} />
          </Routes>
        </div>
      </div>

    </BrowserRouter>

  );
}

export default App;
