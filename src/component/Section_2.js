import React from 'react'
import {Link}from 'react-router-dom'
import { FaFacebook, FaTwitter, FaSkype, FaLinkedin} from 'react-icons/fa';
export default function Section_2() {
    return (
        <div id='features'>
         <div class="wrapper-2 relative ">
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
            <p class=" text-center pt-[4rem] W">W</p>
            {/* <h2 style={{fontfamily: 'Gotham', className ='headline-1'}}>WE ARE AN AWESOME AGENCY</h2> */}

            <h2 style={{ fontFamily: 'Roboto Condensed' }} className="headline-1">
                WE ARE AN AWESOME AGENCY
            </h2>

            <div class="grid md:grid-cols-4 gap-3 mt-[8rem] ml-[8rem] max-w-[1200px]     relative  sm:mx-auto pt-4 ">
                <div class="bg-items lg:ml-[7rem]">
                    <img src="./images/smar-1.png" alt="" />
                    <h2 style={{ fontFamily: 'Gotham', fontSize: '18px', marginTop: '1rem', color: 'rgb(255, 255, 255)' }}>
                    WEB DESIGN
                    </h2>
                    {/* <p
        style="font-family: 'Gotham', sans-serif;  color: rgb(255, 255, 255);width: 258px;text-align: center; margin-left: -4rem;  font-size: 15px;margin-top:1.5rem;line-height: 1.6rem;">
        Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacinia bibendum nulla sed consectetur.</p> */}
                    <p style={{
                        fontFamily: 'Gotham, sans-serif',
                        color: 'rgb(255, 255, 255)',
                        width: '258px',
                        textAlign: 'center',
                        marginLeft: '-4rem',
                        fontSize: '15px',
                        marginTop: '1.5rem',
                        lineHeight: '1.6rem'
                    }}>
                        We craft stunning websites that are not just visually appealing but also function flawlessly. 
                    </p>

                </div>

                <div className="bg-items lg:ml-[6rem]">
                    <img src="./images/smar-1.png" alt="" />
                    <h2 style={{ fontFamily: 'Gotham, sans-serif', fontSize: 18 + 'px', marginTop: 1 + 'rem', color: 'rgb(255, 255, 255)' }}>
                    CONTENT CREATION
                    </h2>
                    <p style={{ fontFamily: 'Gotham, sans-serif', color: 'rgb(255, 255, 255)', width: 258 + 'px', textAlign: 'center', marginLeft: -4 + 'rem', fontSize: 15 + 'px', marginTop: 1.5 + 'rem', lineHeight: 1.6 + 'rem' }}>
                    Our team creates captivating and shareable content that keeps your audience coming back for more.
                    </p>
                </div>

                <div className="bg-items lg:ml-[4rem]">
                    <img src="./images/smar-1.png" alt="" />
                    <h2 style={{ fontFamily: 'Gotham, sans-serif', fontSize: 18 + 'px', marginTop: 1 + 'rem', color: 'rgb(255, 255, 255)' }}>
                    SECURITY
                    </h2>
                    <p style={{ fontFamily: 'Gotham, sans-serif', color: 'rgb(255, 255, 255)', width: 258 + 'px', textAlign: 'center', marginLeft: -4 + 'rem', fontSize: 15 + 'px', marginTop: 1.5 + 'rem', lineHeight: 1.6 + 'rem' }}>
                    Assure clients about data encryption and best practices to protect against cyber threats.
                    </p>
                </div>
                <div className="bg-items lg:ml-[4rem]">
                    <img src="./images/smar-1.png" alt="" />
                    <h2 style={{ fontFamily: 'Gotham, sans-serif', fontSize: 18 + 'px', marginTop: 1 + 'rem', color: 'rgb(255, 255, 255)' }}>
                        SCALABILITY
                    </h2>
                    <p style={{ fontFamily: 'Gotham, sans-serif', color: 'rgb(255, 255, 255)', width: 258 + 'px', textAlign: 'center', marginLeft: -4 + 'rem', fontSize: 15 + 'px', marginTop: 1.5 + 'rem', lineHeight: 1.6 + 'rem' }}>
                    Highlight how websites are designed accommodating increased traffic and additional features.
                    </p>
                </div>


            </div>
        </div>
         </div>
    )
}
