import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/Img/8.webp";
import Button from '@mui/material/Button';
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineMenuOpen } from "react-icons/md";
import Search from '../Search/Search';
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FaRegBell } from "react-icons/fa6";

import { useState } from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import { FaShieldHalved } from "react-icons/fa6";
import { Divider } from '@mui/material';
import { HiOutlineDotsVertical } from "react-icons/hi";



const Header = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpenMyNotification, setIsOpenMyNotification] = useState(false);
    const openMyAcc = Boolean(anchorEl);
    const openNatification = Boolean(isOpenMyNotification);

    const handleOpenMyAccDr = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleCloseMyAccDr = () => {
      setAnchorEl(null);
    };


    


    const handleOpenMyNotification = () => {
        setIsOpenMyNotification(true);
    };
    const handleCloseMyNotification = () => {
        setIsOpenMyNotification(false);
    };


return (
    <header className="header d-flex align-items-center">
        <div className="container-fluid w-100">
            <div className="row d-flex align-items-center">
                {/* logo */}
                <div className="col-sm-2">
                    <Link to="/" className="logo d-flex align-items-center">
                        <img src={logo} alt="logo" />
                        <span className="ml-2">TRUST GROUP</span>
                    </Link>
                </div>


                <div className="menuPart col-sm-3  d-flex align-items-center pl-4">
                    <Button className='rounded-circle mr-3'><MdOutlineMenuOpen /></Button>
                    <Search />
                </div>


                <div className="menuPartTwo col-sm-7  d-flex align-items-center justify-content-end ">
                    <Button className='rounded-circle mr-3'><MdOutlineLightMode /></Button>
                    <Button className='rounded-circle mr-3' onClick={handleOpenMyAccDr } ><GrLanguage /></Button>

                    <Button className='rounded-circle mr-3' onClick={handleOpenMyAccDr }  ><IoCartOutline  />

                    </Button>

                    <Button className='rounded-circle mr-3' onClick={handleOpenMyAccDr} ><HiOutlineMail />

                    </Button>

                    <div className='myNotificationWrapper position-relative'>
                        <Button className='rounded-circle mr-3' onClick={handleOpenMyNotification}><FaRegBell /></Button>
                        <Menu
                                            anchorEl={isOpenMyNotification}
                                            className='myNotification dropdown-list'
                                            id="notification-menu"
                                            open={openNatification}
                                            onClose={handleCloseMyNotification}
                                            onClick={handleCloseMyNotification}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                                            <div className='head pl-3 pb-0'>
                                                <h4>Order (12)</h4>
                                            </div>
                                            <Divider className='mb-1' />

                                            <div className='Scroll'>
                                                <MenuItem onClick={handleCloseMyNotification}>
                                                    <div className="d-flex ">

                                                        <div>
                                                            <div className="userImg">
                                                                <span className='rounded-circle'>
                                                                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="user" />
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="userInfo">
                                                            <h4>
                                                                <span>
                                                                    <b>Mahmudul </b>
                                                                    added to his favorite list
                                                                    <b> Leather belt steve madden</b>
                                                                </span>
                                                            </h4>
                                                            <p className='text-sky mb-0'>few seconds ago</p>
                                                        </div>
                                                        <div className='dotList d-flex'>
                                                            <HiOutlineDotsVertical />
                                                        </div>
                                                    </div>
                                                
                                                </MenuItem>

                                                <MenuItem onClick={handleCloseMyNotification}>
                                                    <div className="d-flex ">

                                                        <div>
                                                            <div className="userImg">
                                                                <span className='rounded-circle'>
                                                                    <img src="	https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="user" />
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="userInfo">
                                                            <h4>
                                                                <span>
                                                                    <b>Mahmudul </b>
                                                                    added to his favorite list
                                                                    <b> Leather belt steve madden</b>
                                                                </span>
                                                            </h4>
                                                            <p className='text-sky mb-0'>few seconds ago</p>
                                                        </div>

                                                    </div>
                                                
                                                </MenuItem>

                                                <MenuItem onClick={handleCloseMyNotification}>
                                                    <div className="d-flex ">

                                                        <div>
                                                            <div className="userImg">
                                                                <span className='rounded-circle'>
                                                                    <img src="https://plus.unsplash.com/premium_photo-1729017566977-c1670d157362?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D" alt="user" />
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="userInfo">
                                                            <h4>
                                                                <span>
                                                                    <b>Mahmudul </b>
                                                                    added to his favorite list
                                                                    <b> Leather belt steve madden</b>
                                                                </span>
                                                            </h4>
                                                            <p className='text-sky mb-0'>few seconds ago</p>
                                                        </div>

                                                    </div>
                                                
                                                </MenuItem>

                                                <MenuItem onClick={handleCloseMyNotification}>
                                                    <div className="d-flex ">

                                                        <div>
                                                            <div className="userImg">
                                                                <span className='rounded-circle'>
                                                                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXZhdGFyfGVufDB8fDB8fHww" alt="user" />
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="userInfo">
                                                            <h4>
                                                                <span>
                                                                    <b>Mahmudul </b>
                                                                    added to his favorite list
                                                                    <b> Leather belt steve madden</b>
                                                                </span>
                                                            </h4>
                                                            <p className='text-sky mb-0'>few seconds ago</p>
                                                        </div>

                                                    </div>
                                                
                                                </MenuItem>

                                                <MenuItem onClick={handleCloseMyNotification}>
                                                    <div className="d-flex ">

                                                        <div>
                                                            <div className="userImg">
                                                                <span className='rounded-circle'>
                                                                    <img src="https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QXZhdGFyfGVufDB8fDB8fHww" alt="user" />
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="userInfo">
                                                            <h4>
                                                                <span>
                                                                    <b>Mahmudul </b>
                                                                    added to his favorite list
                                                                    <b> Leather belt steve madden</b>
                                                                </span>
                                                            </h4>
                                                            <p className='text-sky mb-0'>few seconds ago</p>
                                                        </div>

                                                    </div>
                                                
                                                </MenuItem>

                                                <MenuItem onClick={handleCloseMyNotification}>
                                                    <div className="d-flex ">

                                                        <div>
                                                            <div className="userImg">
                                                                <span className='rounded-circle'>
                                                                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QXZhdGFyfGVufDB8fDB8fHww" alt="user" />
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="userInfo">
                                                            <h4>
                                                                <span>
                                                                    <b>Mahmudul </b>
                                                                    added to his favorite list
                                                                    <b> Leather belt steve madden</b>
                                                                </span>
                                                            </h4>
                                                            <p className='text-sky mb-0'>few seconds ago</p>
                                                        </div>

                                                    </div>
                                                
                                                </MenuItem>

                                                <MenuItem onClick={handleCloseMyNotification}>
                                                    <div className="d-flex ">

                                                        <div>
                                                            <div className="userImg">
                                                                <span className='rounded-circle'>
                                                                    <img src="https://plus.unsplash.com/premium_photo-1670884441012-c5cf195c062a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D" alt="user" />
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="userInfo">
                                                            <h4>
                                                                <span>
                                                                    <b>Mahmudul </b>
                                                                    added to his favorite list
                                                                    <b> Leather belt steve madden</b>
                                                                </span>
                                                            </h4>
                                                            <p className='text-sky mb-0'>few seconds ago</p>
                                                        </div>

                                                    </div>
                                                
                                                </MenuItem>
                                            </div>

                                            <div className='pl-3 pr-3 w-100 pt-2 pb-1'>
                                                <Button className='btn-blue w-100' >View All Notifications</Button>
                                            </div>


                        </Menu>
                    </div>


                    <div className='myAccWrapper '>
                        <Button className="myAcc d-flex align-items-center" onClick={handleOpenMyAccDr }>
                            <div className="userImg">
                                <span className='rounded-circle'>
                                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="user" />
                                </span>
                            </div>

                            <div className="userInfo">
                                <h4>Ali Abdeljalil</h4>
                                <p className='mb-0'>@abdeljalil</p>
                            </div>
                            
                        </Button>

                        <Menu
                                        anchorEl={anchorEl}
                                        id="account-menu"
                                        open={openMyAcc}
                                        onClose={handleCloseMyAccDr}
                                        onClick={handleCloseMyAccDr}
                                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                                        <MenuItem onClick={handleCloseMyAccDr}>
                                        <ListItemIcon>
                                            <PersonAdd fontSize="small" />
                                        </ListItemIcon>
                                        My account
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseMyAccDr}>
                                        <ListItemIcon>
                                            <FaShieldHalved fontSize="small" />
                                        </ListItemIcon>
                                        Reset Password
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseMyAccDr}>
                                        <ListItemIcon>
                                            <Logout fontSize="small" />
                                        </ListItemIcon>
                                        Logout
                                        </MenuItem>
                        </Menu>
                    </div>
                </div>
            </div>

        </div>
    </header>
  )
}

export default Header