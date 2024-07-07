import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Sign() {
    const [userData, setUserData] = useState({ email: '', password: '' });
    const navigate = useNavigate();
    async function sendData() {
        try {
            const response = await axios.post("http://localhost:8000/login_user", userData);
            if (response.status === 200) {
                let data = response.data;
                console.log(data.msg);

                if (data.msg === "Login successful") {
                    console.log(response.status);
                    navigate('/');
                } else {
                    console.log("Invalid credentials");
                    alert("invalid credentials");
                    // Handle invalid credentials, e.g., show an error message
                }
            } else {
                console.log("Unexpected response status:", response.status);
                // alert("Unexpected response status");
            }
        } catch (error) {
            console.error("Error during login:", error);
            if (error.response) {
                console.log("Error message from server:", error.response.data);
            } else if (error.request) {
                console.log("No response received from server");
            } else {
                console.log("Error setting up the request", error.message);
            }
        }
    }

    return (
        <div className="container1">
            <div className='aa'>
                <div className='tt'>
                    <label>Enter Email</label> <br />
                    <input type='email' onChange={e => { setUserData({ ...userData, email: e.target.value }) }} />
                </div>
                <div className='tt'>
                    <label>Enter Password</label> <br />
                    <input type='password' onChange={e => { setUserData({ ...userData, password: e.target.value }) }} />
                </div>
                <div className='tt'>
                    <input type='button' onClick={sendData} value="Sign" />
                </div>
            </div>
        </div>
    );
}
