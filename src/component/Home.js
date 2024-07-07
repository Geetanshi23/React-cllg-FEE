import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Front from './component/Front';
// import Nav from './Nav';
import Section_2 from './component/Section_2';
import Section_3 from './component/Section_3';
import Section_4 from './component/Section_4';
import Section_5 from './component/Section_5';
import Section_6 from './component/Section_6';
import Section_7 from './component/Section_7';
import Section_8 from './component/Section_8';
import Section_9 from './component/Section_9';
import Login from './Login';
import Signup from './Signup';
import {Link} from "react-router-dom";
const Home = () =>{
  return (
    <>
    <Front/>
    {/* <Nav/> */}
    <Section_2/>
    <Section_3/>
    <div className='mt-[-3rem]'>
    <Section_4/>
    <Section_5/>
    <Section_6/>
    <Section_7/>
    <Section_8/>
    <Section_9/>
    <Login/>
    <Signup/>
    </div>
    </>
  );
}

export default App;
