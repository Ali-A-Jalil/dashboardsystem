import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { BiSolidDashboard } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { FaProductHunt } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { GiHumanTarget } from "react-icons/gi";
import { LuListTodo } from "react-icons/lu";
import { BsClipboard2DataFill } from "react-icons/bs";
import { HiDocumentReport } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { IoMdLogOut } from "react-icons/io";
import { FaCreditCard } from "react-icons/fa";




const Sidebar = ({ isSidebarOpen }) => {

  const [activeTab, setActiveTab] = useState(0);
  const [isToggleSubmenu, setToggleSubmenu] = useState(false);

  const isOpenSubmenu = (index) => {
    setActiveTab(index);
    setToggleSubmenu(!isToggleSubmenu);
  };

  return (
    <>
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <ul>
          <li>

            <Button className={`w-100 ${activeTab === 0  && isToggleSubmenu === true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(0)}>
                <span className='icon'><BiSolidDashboard /></span>
                  Dashboard
                <span className='arrow'><IoIosArrowForward /></span>
            </Button>
            <div className={`sub-menuWrapper ${activeTab===0 && 
                isToggleSubmenu === true ? 'colapse' : 'colapsed'}`}>
                <ul className='sub-menu'>
                  <li><Link to='/'>Daily Dashboard</Link></li>
                  <li><Link to='/'>Monthly Dashboard</Link></li>
                  <li><Link to='/'>Chart Dashboard</Link></li>
                  <li><Link to='/'>Forecasts</Link></li>
                  <li><Link to='/'>Product Sales Overview</Link></li>
                </ul>
            </div>

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
                  <li><Link to='/' >Product List</Link></li>
                  <li><Link to='/'>Product View</Link></li>
                  <li><Link to='/'>Create Product</Link></li>
                </ul>
              </div>
            
          </li>
          <li>
            <Button className={`w-100 ${activeTab === 2 && isToggleSubmenu === true  ? 'active' : ''}`} onClick={()=>isOpenSubmenu(2)}>
                <span className='icon'><FaCartArrowDown /></span>
                  Order
                <span className='arrow'><IoIosArrowForward /></span>
            </Button>
            <div className={`sub-menuWrapper ${activeTab===2 && 
                isToggleSubmenu === true ? 'colapse' : 'colapsed'}`}>
                <ul className='sub-menu'>
                  <li><Link to='/'>Order List</Link></li>
                  <li><Link to='/'>Create Order</Link></li>
                </ul>
            </div>
            
          </li>
          <li>

            <Button className={`w-100 ${activeTab === 3 && isToggleSubmenu === true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(3)}>
                <span className='icon'><MdMessage /></span>
                  Messages
                <span className='arrow'><IoIosArrowForward /></span>
            </Button>
            <div className={`sub-menuWrapper ${activeTab===3 && 
                isToggleSubmenu === true ? 'colapse' : 'colapsed'}`}>
                <ul className='sub-menu'>
                  <li><Link to='/'>Messages List</Link></li>
                  <li><Link to='/'>New Messages</Link></li>
                  <li><Link to='/'>Old Messages</Link></li>
                </ul>
            </div>
          </li>
          <li>
            <Button className={`w-100 ${activeTab === 4 && isToggleSubmenu === true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(4)}>
                <span className='icon'><IoNotificationsSharp /></span>
                  Reminders
                <span className='arrow'><IoIosArrowForward /></span>
            </Button>
            <div className={`sub-menuWrapper ${activeTab===4 && 
                isToggleSubmenu === true ? 'colapse' : 'colapsed'}`}>
                <ul className='sub-menu'>
                  <li><Link to='/'>Today Reminders</Link></li>
                  <li><Link to='/'>Old Reminders</Link></li>
                  <li><Link to='/'>Upcoming Reminders</Link></li>
                  <li><Link to='/'>Overview Reminders</Link></li>
                </ul>
            </div>
          </li>
          <li>
            <Button className={`w-100 ${activeTab === 5 && isToggleSubmenu === true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(5)}>
                <span className='icon'><FaCreditCard /></span>
                  Finance
                <span className='arrow'><IoIosArrowForward /></span>
            </Button>
            <div className={`sub-menuWrapper ${activeTab===5 && 
                isToggleSubmenu === true ? 'colapse' : 'colapsed'}`}>
                <ul className='sub-menu'>
                  <li><Link to='/'>Expense</Link></li>
                  <li><Link to='/'>Recurring Expense</Link></li>
                  <li><Link to='/'>Invoices</Link></li>
                  <li><Link to='/'>Refund</Link></li>
                </ul>
            </div>
          </li>
          <li>
            <Button className={`w-100 ${activeTab === 6 && isToggleSubmenu === true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(6)}>
                <span className='icon'><FaFileInvoiceDollar /></span>
                  Invoices
                <span className='arrow'><IoIosArrowForward /></span>
            </Button>
            <div className={`sub-menuWrapper ${activeTab===6 && 
                isToggleSubmenu === true ? 'colapse' : 'colapsed'}`}>
                <ul className='sub-menu'>
                  <li><Link to='/'>Invoices List</Link></li>
                  <li><Link to='/'>Create Invoice</Link></li>
                </ul>
            </div>
          </li>
          <li>

              <Button className={`w-100 ${activeTab === 7 && isToggleSubmenu === true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(7)}>
                <span className='icon'><GiHumanTarget /></span>
                  HR Management
                <span className='arrow'><IoIosArrowForward /></span>
              </Button>
              <div className={`sub-menuWrapper ${activeTab===7 && 
                isToggleSubmenu === true ? 'colapse' : 'colapsed'}`}>
                <ul className='sub-menu'>
                  <li><Link to='/'>Employee</Link></li>
                  <li><Link to='/'>Employee Loan</Link></li>
                  <li><Link to='/'>Employee Payslip</Link></li>
                  <li><Link to='/'>Employee Salary</Link></li>
                  <li><Link to='/'>Employee Tax</Link></li>
                  <li><Link to='/'>Holidays</Link></li>
                  <li><Link to='/'>Leave</Link></li>
                  <li><Link to='/'>Payroll</Link></li>
                </ul>
            </div>
          </li>
          <li>
            <Button className={`w-100 ${activeTab === 8 && isToggleSubmenu === true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(8)}>
                <span className='icon'><LuListTodo /></span>
                  ListTodo
                <span className='arrow'><IoIosArrowForward /></span>
            </Button>
            <div className={`sub-menuWrapper ${activeTab===8 && 
                isToggleSubmenu === true ? 'colapse' : 'colapsed'}`}>
                <ul className='sub-menu'>
                  <li><Link to='/'>Tag</Link></li>
                  <li><Link to='/'>Task</Link></li>
                  <li><Link to='/'>Calendar</Link></li>
                  <li><Link to='/'>All Task List</Link></li>
                </ul>
            </div>
          </li>
          <li>
            <Link to='/' className='w-100'>
            <Button className={`w-100 ${activeTab === 9 && isToggleSubmenu === true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(9)}>
                <span className='icon'><BsClipboard2DataFill /></span>
                  Master Data
              </Button>
            </Link>
          </li>
          <li>
            <Link to='/' className='w-100'>
              <Button className={`w-100 ${activeTab === 10 && isToggleSubmenu === true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(10)}>
                <span className='icon'><HiDocumentReport /></span>
                  Reports
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