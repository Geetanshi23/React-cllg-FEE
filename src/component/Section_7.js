import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaSkype, FaLinkedin } from 'react-icons/fa';
export default function Section_7() {
    const [teamData, setTeamData] = useState([]);
    const [newTeamMember, setNewTeamMember] = useState({ name: '', position: '' });
    useEffect(() => {
        const fetchTeamData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/team");
                setTeamData(response.data);
            } catch (error) {
                console.error("Error fetching team data: ", error);
            }
        };
        fetchTeamData();
    }, []);

    return (
        <div>
            <div className="container">
                <div className="team">
                    <div className="relative w-10/12 md:w-11/12 max-w-[1080px] mx-auto flex items-center justify-between">
                        <a className='cursor-pointer py-7 pr-7 ' to='/'>
                            <img src="./images/header-logo.png" width="45px" height="45px" alt="" />
                        </a>
                        <ul className="lg:flex space-x-6 hidden ">
                            <li
                                className="text-black font-Gotham py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                                <Link to="/" className='text-decoration-none text-black'>Home</Link>
                                <div className="absolute bottom-0 w-full h-1 bg-primary hidden group-hover:block transition-all duration-200">
                                </div>
                            </li>
                            <li
                                className="text-black font-Gotham py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                                <Link to="/Section_7" className='text-decoration-none text-black'>AboutUs</Link>
                                <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200">
                                </div>
                            </li>
                            <li
                                className="text-black font-Gotham py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
                                <Link to="/Section_4" className='text-decoration-none text-black'>Pages</Link>
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
                    <div className="row">
                        <div className="team-text col-md-12 text-center relative">
                            <h1 className="start-50 absolute">T</h1>

                            <h3 className="mt-5" >OUR TEAM</h3>
                            <p className="my-5">"Empowering our company's online presence through innovative solutions and creative expertise."</p>

                        </div>
                    </div>
                    <div className="team-images1 row text-center">
                        <div className="team-images col-md-3">
                            <img className="text img-fluid" src={require("../images/Lay-1.png")} width="250" height="40" />
                            <figcaption><span class="names">JOHN SNOW</span><br />
                                CEO</figcaption>
                        </div>
                        <div className="team-images col-md-3">
                            <img className="img-fluid" src={require("../images/l-2.png")} width="250" height="40" />
                            <figcaption><span class="names">LADY SANSA</span><br />
                                COO</figcaption>
                        </div>
                        <div className="team-images col-md-3">
                            <img className="img-fluid" src={require("../images/l-3.png")} width="250" height="40" />
                            <figcaption><span class="names">DAVID SMITH</span><br />
                                CMO</figcaption>
                        </div>
                        <div className="team-images col-md-3">
                            <img className="img-fluid" src={require("../images/l-4.png")} width="250" height="40" />
                            <figcaption><span class="names">JOHN KEATS</span><br />
                                CFO</figcaption>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}