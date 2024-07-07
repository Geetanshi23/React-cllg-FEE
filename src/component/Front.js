import React from 'react'
import {Link}from 'react-router-dom'
import { FaFacebook, FaTwitter, FaSkype, FaLinkedin} from 'react-icons/fa';
import './front.css'
export default function Front() {

    function NavToggler(){
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-toggle");

        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    return (
        
        <div className="wrapper">
            <nav className="bg-deepBlue">
                <div className="stick relative w-10/12 md:w-11/12 max-w-[1080px] mx-auto flex items-center justify-between">
                    <a className='cursor-pointer py-7 pr-7 ' href='/'>
                        <img src="./images/header-logo.png" width="45px" height="45px" alt="" />
                    </a>
                    <ul className="lg:flex space-x-6  hidden"> 
                        <li
                            className="text-white font-Gotham py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                            <Link href="/" className='text-decoration-none text-white'>Home</Link>
                            <div className="absolute bottom-0 w-full h-1 bg-primary hidden group-hover:block transition-all duration-200">
                            </div>
                        </li>
                        <li
                            className="text-white font-Gotham py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                            <Link to="/Section_7" className='text-decoration-none text-white'>AboutUs</Link>
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
                        <li
                            className="text-white font-Gotham py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                            <Link to='/Login' className='text-decoration-none text-white'>Login</Link>
                            <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200">
                            </div>
                        </li>
                        <li
                            className="text-white font-Gotham py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                            <Link to='/Signup' className='text-decoration-none text-white'>Signup</Link>
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
              <li></li>
                    </ul>
                    {/* <button
            className="navbar-toggler hamburger "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}

          <div className='hamburger d-md-none d-block position-absolute top-8 right-10' onClick={NavToggler}>
            <span className='bar'></span><span className='bar'></span><span className='bar'></span>
          </div>    
                </div>

                <div className='bg-black bg-opacity-50 nav-toggle '>
                    <ul className="position-absolute space-x-6 bg-black bg-opacity-50 w-100
                    
                    l
                    
                    
                    ;
                    ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"> 
                        <li
                            className="text-white font-Gotham py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                            <Link href="/" className='text-decoration-none text-white'>Home</Link>
                            <div className="absolute bottom-0 w-full h-1 bg-primary hidden group-hover:block transition-all duration-200">
                            </div>
                        </li>
                        <li
                            className="text-white font-Gotham py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                            <Link to="/Section_7" className='text-decoration-none text-white'>AboutUs</Link>
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
                        <li
                            className="text-white font-Gotham py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                            <Link to='/Login' className='text-decoration-none text-white'>Login</Link>
                            <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200">
                            </div>
                        </li>
                        <li
                            className="text-white font-Gotham py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                            <Link to='/Signup' className='text-decoration-none text-white'>Signup</Link>
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

                <h1 className="creatives" style={{ fontfamily: 'Gotham' }}>CREATIVES</h1>
        
                <div className="scroll">
                    <p className="sc-down">Scroll Down</p>
                    <Link to="Section_5"><img src="./images/down-arrow.png" width="40px"
                        style={{ color: 'white', marginleft: 1.1 + 'rem', margintop: -0.3 + 'rem' }} alt="" />
                    </Link>
                </div>
            </nav>
        </div>
    )
}
