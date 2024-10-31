import React, { useState } from 'react';

    const ChangePassword = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleChangePassword = () => {
        if (newPassword !== confirmPassword) {
        setMessage("Passwords do not match.");
        return;
        }

        // 
        if (currentPassword === 'userCurrentPassword') { // 
        // 
        setMessage("Password changed successfully.");
        } else {
        setMessage("Current password is incorrect.");
        }
    };

    return (
        <div className='change-password-container'>
            <div className="change-password">
                <h2> Change Password </h2>
                <input
                    type="password"
                    placeholder="Current Password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button onClick={handleChangePassword}>Change Password</button>
                {message && <p>{message}</p>}
            </div>
        </div>
    );
    };

export default ChangePassword;
