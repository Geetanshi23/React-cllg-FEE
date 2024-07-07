import React from 'react'
import {Link}from 'react-router-dom'
import './Section_5.css'
import { FaFacebook, FaTwitter, FaSkype, FaLinkedin} from 'react-icons/fa';
export default function Section_5() {
  return (
    <div>
      <div className='mt-[90rem] sm:mt-[0]'>
      <nav className="bg-deepBlue">
          <div className="relative w-10/12 md:w-11/12 max-w-[1080px] mx-auto flex items-center justify-between">
                    <a className='cursor-pointer py-7 pr-7 ' to='/'>
                        <img src="./images/header-logo.png" width="45px" height="45px" alt="" />
                    </a>
                    <ul className="lg:flex space-x-6 hidden "> 
                        <li
                            className="text-black font-Gotham py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                            <Link to ="/" className='text-decoration-none text-black'>Home</Link>
                            <div className="absolute bottom-0 w-full h-1 bg-primary hidden group-hover:block transition-all duration-200">
                            </div>
                        </li>
                        <li
                            className="text-black font-Gotham py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                            <Link to ="/Section_7" className='text-decoration-none text-black'>AboutUs</Link>
                            <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200">
                            </div>
                        </li>
                        <li
                            className="text-black font-Gotham py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                            <Link to ="/Section_4" className='text-decoration-none text-black'>Pages</Link>
                            <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200">
                            </div>
                        </li>
                        <li
                            className="text-black font-Gotham py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                            <Link to='/Section_2' className='text-decoration-none text-black'>Features</Link>
                        </li>
                        <li
                            className="text-black font-Gotham py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                            <Link to='/Section_3' className='text-decoration-none text-black'>Extensions</Link>
                        </li>
                        <li
                            className="text-black font-Gotham py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                            <Link to='/Section_6' className='text-decoration-none text-black'>Tutorials</Link>
                            <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200">
                            </div>
                        </li>
                        <li
                            className="text-black font-Gotham py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                            <Link to='/Section_8' className='text-decoration-none text-black'>ContactUs</Link>
                            <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200">
                            </div>
                        </li>
                        <li className="nav-item ms-5 mt-4">
                        <Link className="nav-link text-black active" aria-current="page" to="https://www.facebook.com/" target='_blank'>
                    <FaFacebook className="icon " />
                </Link>
              </li>
              <li className="nav-item ms-5 mt-4">
                        <Link className="nav-link text-black active" aria-current="page" to="https://twitter.com/" target='_blank'>
                    <FaTwitter className="icon " />
                </Link>
              </li>
              <li className="nav-item ms-5 mt-4">
                        <Link className="nav-link text-black active" aria-current="page" to="https://www.skype.com/en/" target='_blank'>
                    <FaSkype className="icon " />
                </Link>
              </li>
                        <li className="nav-item ms-5 mt-4">
                        <Link className="nav-link text-black active" aria-current="page" to="https://www.linkedin.com/in/geetanshi-pahuja-104470223/" target='_blank'>
                    <FaLinkedin className="icon " />
                </Link>
              </li>
                    </ul>
                    </div>
                    </nav>
                    {/* <div className='signupform'>
                      <h2 className='signup'>Sign Up</h2>
                      <form className='register'>
                        <label for="name" className='labelcol'>Name:</label>
                        <input type="text" className='inputcol' id="name" name="name" required />
                          <label for="email" className='labelcol'>Email:</label>
                          <input type="email" className='inputcol' id="email" name="email" required />
                            <label for="password" className='labelcol'>Password:</label>
                            <input type="password" className='inputcol' id="password" name="password" required />
                            <p>Already had a account ? <a href='/Section_6'>Login</a></p>
                              <button className='submit' type="submit">Sign Up</button>
                        </form>
                     </div> */}
    <section className="bg-5 p-4 h-[500px] sm:h-[360px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mx-auto gap-4">
        <div className="bg-bl rounded-lg p-4 flex items-center">
          <img src="./images/copy-1.png" className="h-[60px] w-[60px] mr-4" alt="" />
          <p className="p-cl">We are a passionate team of digital experts, creative thinkers, and problem solvers. Our mission is to help businesses like yours thrive in the digital landscape. With a blend of creativity, innovation, and technology, we transform your ideas into reality.</p>
        </div>

        <div className="bg-bl rounded-lg p-4 flex items-center">
          <img src="./images/copy-1.png" className="h-[60px] w-[60px] mr-4" alt="" />
          <p className="p-cl">The digital realm is ever-evolving, and so are we. Join us on a journey of innovation, creativity, and digital transformation. Let's create the future together. Our team's expertise spans industries and technologies. We're prepared for any challenge.</p>
        </div>
      </div> 
    </section>
    </div>
    </div>
  )
}
