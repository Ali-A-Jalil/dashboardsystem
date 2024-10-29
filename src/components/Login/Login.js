import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Img/8.webp'; 

const Login = ({ onLogin }) => {
  const [useremail, setUsermail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();


    // Check if the user is registered


    const registeredUsers = [
      {
        username: 'Ali Abdeljalil',
        nickname:'@aliabdeljalil101',
        useremail: 'aliabdelgalil101@gmail.com',
        password: '123456',
        img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        username: 'Hend Ali',
        nickname:'@hendali101',
        useremail: 'hendali101@gmail.com',
        password: '123456',
        img: 'https://plus.unsplash.com/premium_photo-1670884441012-c5cf195c062a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D'
      },
      {
        username: 'Khaled Al-Asar',
        nickname:'@khaledalasar101',
        useremail: 'khaledalasar101@gmail.com',
        password: '123456',
        img: 'https://mironcoder-hotash.netlify.app/images/avatar/01.webp'
      }
    ];

    const handleLogin = () => {
      const user = registeredUsers.find(
        (u) => u.useremail === useremail && u.password === password);

    if (user) {
    onLogin(user); // Call the onLogin prop
    navigate('/dashboard'); // Navigate to the dashboard page
  } else {
    setErrorMessage('Your email or password is incorrect');
    setTimeout(() => setErrorMessage(''), 3000);
  }
  };

  return (
    <div className="login-container">
      <div className="left-section"></div>
      <div className="right-section">
        <img src={logo} alt="Logo" />
        <h2> Start your day with a smile, we are your family, we are with you </h2>
        <input
          type="text"
          placeholder="Your Email"
          value={useremail}
          onChange={(e) => setUsermail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Login;
