import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { BiSolidDashboard } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { FaProductHunt } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { IoNotificationsSharp } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { GiHumanTarget } from "react-icons/gi";
import { LuListTodo } from "react-icons/lu";
import { BsClipboard2DataFill } from "react-icons/bs";
import { HiDocumentReport } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { IoMdLogOut } from "react-icons/io";

const Sidebar = () => {

  const [activeTab, setActiveTab] = useState(0);
  const[isToggleSubmenu, setToggleSubmenu] = useState(false);
  const isOpenSubmenu = (index) => {
    setActiveTab(index);
    setToggleSubmenu(!isToggleSubmenu);
  }


  return (
    <>
      <div className='sidebar'>
        <ul>
          <li>
            <Link to='/' className='w-100'>
            <Button className={`w-100 ${activeTab === 0  && isToggleSubmenu === true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(0)}>
                <span className='icon'><BiSolidDashboard /></span>
                  Dashboard
                <span className='arrow'><IoIosArrowForward /></span>
              </Button>
            </Link>
          </li>
          <li>

            
              <Button className={`w-100 ${activeTab === 1  && isToggleSubmenu === true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(1)}>
                <span className='icon'><FaProductHunt /></span>
                  Products
                <span className='arrow'><IoIosArrowForward /></span>
              </Button>
              <div className={`sub-menuWrapper ${activeTab===1 && 
                isToggleSubmenu === true ? 'colapse' : 'colapsed'}`}>
                <ul className='sub-menu'>
                  <li><Link to='/'>Product List</Link></li>
                  <li><Link to='/'>Product View</Link></li>
                  <li><Link to='/'>Product Upload</Link></li>
                </ul>
              </div>
            
          </li>
          <li>
            <Link to='/' className='w-100'>
            <Button className={`w-100 ${activeTab === 2 && isToggleSubmenu === true  ? 'active' : ''}`} onClick={()=>isOpenSubmenu(2)}>
                <span className='icon'><FaCartArrowDown /></span>
                  Order
                <span className='arrow'><IoIosArrowForward /></span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to='/' className='w-100'>
            <Button className={`w-100 ${activeTab === 3 && isToggleSubmenu === true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(3)}>
                <span className='icon'><MdMessage /></span>
                  Messages
                <span className='arrow'><IoIosArrowForward /></span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to='/' className='w-100'>
            <Button className={`w-100 ${activeTab === 4 && isToggleSubmenu === true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(4)}>
                <span className='icon'><IoNotificationsSharp /></span>
                  Notifications
                <span className='arrow'><IoIosArrowForward /></span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to='/' className='w-100'>
            <Button className={`w-100 ${activeTab === 5 && isToggleSubmenu === true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(5)}>
                <span className='icon'><IoSettingsSharp /></span>
                  Settings
                <span className='arrow'><IoIosArrowForward /></span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to='/' className='w-100'>
            <Button className={`w-100 ${activeTab === 6 && isToggleSubmenu === true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(6)}>
                <span className='icon'><RiAccountPinCircleFill /></span>
                  Login
              </Button>
            </Link>
          </li>
          <li>
            <Link to='/' className='w-100'>
            <Button className={`w-100 ${activeTab === 7 && isToggleSubmenu === true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(7)}>
                <span className='icon'><RiAccountPinCircleFill /></span>
                  Sign In
              </Button>
            </Link>
          </li>
          <li>
            <Link to='/' className='w-100'>
            <Button className={`w-100 ${activeTab === 8 && isToggleSubmenu === true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(8)}>
                <span className='icon'><FaFileInvoiceDollar /></span>
                  Invoices
                <span className='arrow'><IoIosArrowForward /></span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to='/' className='w-100'>
              <Button className={`w-100 ${activeTab === 9 && isToggleSubmenu === true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(9)}>
                <span className='icon'><GiHumanTarget /></span>
                  HR
                <span className='arrow'><IoIosArrowForward /></span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to='/' className='w-100'>
            <Button className={`w-100 ${activeTab === 10 && isToggleSubmenu === true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(10)}>
                <span className='icon'><LuListTodo /></span>
                  ListTodo
                <span className='arrow'><IoIosArrowForward /></span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to='/' className='w-100'>
            <Button className={`w-100 ${activeTab === 11 && isToggleSubmenu === true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(11)}>
                <span className='icon'><BsClipboard2DataFill /></span>
                  Master Data
                <span className='arrow'><IoIosArrowForward /></span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to='/' className='w-100'>
            <Button className={`w-100 ${activeTab === 12 && isToggleSubmenu === true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(12)}>
                <span className='icon'><HiDocumentReport /></span>
                  Reports
                <span className='arrow'><IoIosArrowForward /></span>
              </Button>
            </Link>
          </li>
        </ul>


        <br/>
        <div className='logoutWrapper'>
          <div className='logoutBox'>
            <Button variant="contained"><IoMdLogOut /> Logout</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar