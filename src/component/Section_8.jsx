import axios from "axios";
import {Link}from 'react-router-dom';
import { FaFacebook, FaTwitter, FaSkype, FaLinkedin} from 'react-icons/fa';
import { useEffect, useState } from 'react';
export default function Section_8(){
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [userdata, setUserdata] = useState({Name:'',Email:'',Phone:'',Message:''});

  useEffect(() => {
    setUserdata({ Name: userName, Email: userEmail, Phone: userPhone, Message: userMessage });
  }, [userName, userEmail, userPhone, userMessage]);

  function sendData(event){
    axios.post("http://localhost:8000/Section_8_contact", userdata)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error("Axios Error:", error);
    });
  
  }
    return(
        <div id='contactus'>
        <div className="row">
        <div className="signin container">
        <div className="relative w-10/12 md:w-11/12 max-w-[1080px] mx-auto flex items-center justify-between">
                    <a className='cursor-pointer py-7 pr-7 ' to='/'>
                        <img src="./images/header-logo.png" width="45px" height="45px" alt="" />
                    </a>
                 
                    <ul className="lg:flex space-x-6 hidden "> 
                        <li
                            className="text-white font-Gotham py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                            <Link to ="/" className='text-decoration-none text-white'>Home</Link>
                            <div className="absolute bottom-0 w-full h-1 bg-primary hidden group-hover:block transition-all duration-200">
                            </div>
                        </li>
                        <li
                            className="text-white font-Gotham py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                            <Link to ="/Section_7" className='text-decoration-none text-white'>AboutUs</Link>
                            <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200">
                            </div>
                        </li>
                        <li
                            className="text-white font-Gotham py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                            <Link to ="/Section_4" className='text-decoration-none text-white'>Pages</Link>
                            <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200">
                            </div>
                        </li>
                        <li
                            className="text-white font-Gotham py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                            <Link to='/Section_2' className='text-decoration-none text-white'>Features</Link>
                        </li>
                        <li
                            className="text-white font-Gotham py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                            <Link to='/Section_3' className='text-decoration-none text-white'>Extensions</Link>
                        </li>
                        <li
                            className="text-white font-Gotham py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                            <Link to='/Section_6' className='text-decoration-none text-white'>Tutorials</Link>
                            <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200">
                            </div>
                        </li>
                        <li
                            className="text-white font-Gotham py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                            <Link to='/Section_8' className='text-decoration-none text-white'>ContactUs</Link>
                            <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200">
                            </div>
                        </li>
                        <li className="nav-item ms-5 mt-4">
                        <Link className="nav-link text-white active" aria-current="page" to="https://www.facebook.com/" target='_blank'>
                    <FaFacebook className="icon " />
                </Link>
              </li>
              <li className="nav-item ms-5 mt-4">
                        <Link className="nav-link text-white active" aria-current="page" to="https://twitter.com/" target='_blank'>
                    <FaTwitter className="icon " />
                </Link>
              </li>
              <li className="nav-item ms-5 mt-4">
                        <Link className="nav-link text-white active" aria-current="page" to="https://www.skype.com/en/" target='_blank'>
                    <FaSkype className="icon " />
                </Link>
              </li>
                        <li className="nav-item ms-5 mt-4">
                        <Link className="nav-link text-white active" aria-current="page" to="https://www.linkedin.com/in/geetanshi-pahuja-104470223/" target='_blank'>
                    <FaLinkedin className="icon " />
                </Link>
              </li>
                    </ul>
                    </div>
            <div className="signin-text row text-center">
                <h1>C</h1>
                <p>WE'D LOVE TO HEAR ABOUT YOUR PROJECT </p>
            </div>
            <div className="row flex justify-center items-center">
                  <div className="row my-5">
                    <div className="col">
                      <input type="text" className="form-control form-1 text-green" placeholder="Name"  value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
                    </div>
                    <div className="col">
                      <input type="text" className="form-control form-1" placeholder="Email" value={userEmail} onChange={(e)=>{setUserEmail(e.target.value)}}/>
                    </div>
                    <div className="col">
                      <input type="text" className="form-control form-1" placeholder="Phone" value={userPhone} onChange={(e)=>{setUserPhone(e.target.value)}}/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <textarea type="text" className="form-control form-1" placeholder="Message" value={userMessage} onChange={(e)=>{setUserMessage(e.target.value)}}></textarea>
                    </div>
                  </div>
                  <div className="row m-3">
                    <div className="col text-center">
                      <button className="submitbtn my-5" type="button" onClick={sendData}>SUBMIT</button>
                    </div>
                  </div>
               
            </div>
            </div>
        </div>
        </div>
    )
}