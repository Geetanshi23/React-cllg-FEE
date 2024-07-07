import React from 'react'
import {Link}from 'react-router-dom'
import { FaFacebook, FaTwitter, FaSkype, FaLinkedin} from 'react-icons/fa';
export default function Section_6(){
    return(
        <div id='extensions'>
        <div className='phone'>
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
                            <Link to='/Section_8' className='text-decoration-none text-white'>Contact us</Link>
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
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-6 text-white my-5'>
                        <h1>WALKTHROUGHS</h1>
                        <p>Welcome to our tutorials section, where we empower you with knowledge and insights to thrive in the digital realm. Our tutorials cover a wide range of topics, from web design and development to digital marketing and beyond. Whether you're a business owner, a marketer, or a fellow creative professional, our tutorials are designed to help you navigate the ever-evolving digital landscape.</p>
                        <div className="buttons my-4">
                            <div className="btn1">FULLY RESPONSIVE DESIGN</div>
                            <div className="btn2">HIGH QUALITY CODE</div>
                            <div className="btn3">DIFFERENT HEADERS & LAYOUT</div>
                            </div>
                    </div>
                    <div className='col-md-4 text-center my-5'>
                        <img className='img-fluid' src={require("../images/mobi-1.png")} alt='logo' />
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
} 