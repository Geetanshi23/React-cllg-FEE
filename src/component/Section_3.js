import React from 'react'
// import Front from './Front';
import {Link}from 'react-router-dom'
import { FaFacebook, FaTwitter, FaSkype, FaLinkedin} from 'react-icons/fa';
export default function Section_3() {
    return (
    
        <div id='pages'>
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
            <div className="w-100 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700  md:grid-cols-2">
            <section>
                    <div className="flex flex-row-reverse items-center bg-[#222222] w-100 fle-wrap">
                                <img src="./images/new-bt.png" className='w-[50%] h-full'/>                        
                                <div className='sm:w-100 w-50 mx-auto text-left p-[5rem]  '>

                                    <p class="ct-1 text-[15px]">June 4 2023 | In Culture</p>
                                    <h1 className='text-white sm:text-4xl text-3xl font-medium'>CUTOMIZATIONS</h1>

                                    <br />
                                    <p className='text-white '>We can create tailored plugins and widgets to enhance the functionality of your website, such as interactive forms, 
                                    social media integrations, or e-commerce tools.Protect your online assets with our advanced security solutions. 
                                    From firewall setup to security audits, we've got you covered.Build a thriving online community or offer premium content with our membership portal solutions, 
                                    complete with user management, subscription billing, and access control.</p>
                                </div>
                           
                    
                    </div>
                </section>
                {/* <figure className="flex flex-col order-3 sm:order-1 items-center justify-center pt-[1rem] sm:pt-0 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700 float-left-img">
                    <img src="./images/new-bt.png" alt="" />
                </figure> */}
                {/* <figure className="flex flex-col order-2  items-left justify-center pt-[1rem] md:pt-0 text-center bg-white  border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <div className='sm:w-[60%] w-[80%] mx-auto text-left  '>

                        <p class="ct-1 text-[15px]">June 4 2023 | In Culture</p>
                        <h1 className='text-black sm:text-4xl text-3xl font-medium'>AKITA INU DOG</h1>
                       
                        <br />
                        <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis amet magnam consequatur. Temporibus beatae voluptatum a quod aliquid eligendi, id exercitationem adipisci sit eum, dicta reiciendis recusandae velit. Corrupti quis aspernatur maxime veritatis repellendus itaque laboriosam aperiam perferendis voluptas ex, fuga ullam labore tempora quam!</p>
                    </div>
                    </figure> */}

                <section>
                    <div className="row flex items-center">
                        <div className="col-md-6">
                            <figure className="flex flex-col order-3 sm:order-1 items-center justify-center pt-[1rem] sm:pt-0 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700 float-left-img">
                                <img src="./images/new-bt.png" alt="" />
                            </figure>
                        </div>
                        <div className="col-md-6">
                            <figure className="flex flex-col order-2  items-left justify-center pt-[1rem] md:pt-0 text-center bg-white  border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                                <div className='sm:w-[60%] w-[80%] mx-auto text-left  '>

                                    <p class="ct-1 text-[15px]">June 4 2023 | In Culture</p>
                                    <h1 className='text-black sm:text-4xl text-3xl font-medium'>ENHANCEMENTS</h1>

                                    <br />
                                    <p className='text-black'> Enhance user engagement and customer service with AI-powered chatbots and virtual assistants. They can answer user queries and guide them through your site.Implement email marketing automation tools to nurture leads and engage with your audience through personalized and automated email campaigns.Stay ahead of the curve by optimizing your site for voice search, making it accessible to users via voice-activated devices.</p>
                                </div>
                            </figure>
                        </div>
                    </div>
                </section>

            </div>

        </div>
    )
}
