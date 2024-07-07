import React from 'react'
import {Link}from 'react-router-dom'
import { FaFacebook, FaTwitter, FaSkype, FaLinkedin} from 'react-icons/fa';
export default function Section_4() {
    return (
        <div id='tutorials'>
          <div className="wrapper-3 relative">
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
                            <Link to='/Section_8' className='text-decoration-none text-black'>Contact us</Link>
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
        <p className="text-center pt-[1] W-B">B</p>
        <h2 style={{ fontWeight:'400', color: 'black' , fontFamily:'Gotham' }} className="headline-1">
          LET'S BLOG
        </h2>
        <p className="text-center mt-[8rem] ptext-1">We love clean design and advanced digital solutions</p>
        <div className="grid sm:ml-[4.5rem] grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-[8rem]  max-w-[1300px] mx-auto pt-4">
          <div className="text-center flex flex-col items-center sm:ml-0 md:ml-[5.5rem] nimo">
            <img src="./images/sol-1.png"  alt="" />
            <h3 className='h3-2 blueHeading'>CONTENT MARKETING</h3>
            <p className="w-[300px] h3-2-1">
            Learn how to write blog posts that will interest your readers and improve your SEO. 
            We offer advice on content planning, authoring, and promotion.
            </p>
          </div>
          <div className="text-center flex flex-col items-center sm:ml-0 md:ml-[5.5rem] nimo-2">
            <img src="./images/sol-2.png"  alt="" />
            <h3 className='h3-2 blueHeading'>SOCIAL MEDIA MARKETING</h3>
            <p className="w-[300px] h3-2-1">
            We offer a detailed tutorial on building a powerful social media presence, covering platform selection, content creation, and engagement tactics.
            </p>
          </div>
          <div className="text-center flex flex-col items-center sm:ml-0 md:ml-[5.5rem] nimo">
            <img src="./images/sol-3.png" alt="" />
            <h3 className='h3-2 blueHeading'>VIDEO MARKETING</h3>
            <p className="w-[300px] h3-2-1">
            Discover the power of video marketing and how to create engaging video content for your website and social media channels.
            </p>
          </div>
          <div className="text-center flex flex-col items-center sm:ml-0 md:ml-[5.5rem] nimo-2">
            <img src="./images/sol-3.png" alt="" />
            <h3 className='h3-2 blueHeading'>PAY-PER-CLICK MARKETING</h3>
            <p className="w-[300px] h3-2-1">
            We explain how to create and manage successful ad campaigns on platforms like Google Ads and Facebook.
            </p>
          </div>
        </div>
        </nav>
      </div>
        </div>
    )
}
