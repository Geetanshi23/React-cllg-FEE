import axios from 'axios';
import { useState } from 'react';
export default function Signup(){
    function getCurrentDateTime() {
                const now = new Date();
                const year = now.getFullYear();
                const month = `${(now.getMonth() + 1).toString().padStart(2, '0')}`;
                const day = `${now.getDate().toString().padStart(2, '0')}`;
                const hours = `${now.getHours().toString().padStart(2, '0')}`;
                const minutes = `${now.getMinutes().toString().padStart(2, '0')}`;
                return `${year}-${month}-${day}T${hours}:${minutes}`;
            }
    const[userdata,setUserData] = useState({name:'',email:'',password:'',dob:'',dor:'',datetime:getCurrentDateTime()});
    function sendData(){
        axios.post("http://localhost:8000/signup_user",userdata).then(response=>
        {
            if(response.status===200){
                let d = response.data;
                console.log(d.msg);
                console.log(response.status);
            }
        });
    }

    return(<>
    <div className='aa'>
    <div className='tt'>
        <label>Enter Name</label> <br />
        <input type='text' onChange={e=>{setUserData({...userdata,name:e.target.value})}} />
    </div>
    <div className='tt'>
        <label>Enter Email</label> <br />
        <input type='email' onChange={e=>{setUserData({...userdata,email:e.target.value})}} />
    </div>
    <div className='tt'>
        <label>Enter Password</label> <br />
        <input type='password' onChange={e=>{setUserData({...userdata,password:e.target.value})}} />
    </div>
    <div className='tt'>
        <label>Enter Date of Birth</label> <br />
        <input type='date' onChange={e=>{setUserData({...userdata,dob:e.target.value})}} />
    </div>
    <div className='tt'>
        <label>Enter Date of Registeration</label> <br />
        <input type='date' onChange={e=>{setUserData({...userdata,dor:e.target.value})}} />
    </div>
    <div className='tt'>
        <input type='button' onClick={sendData} value="Sign" />
    </div>
    </div>
        </>);
}     