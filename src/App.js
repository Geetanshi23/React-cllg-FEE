import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Front from './component/Front';
// import Nav from './component/Nav';
import Section_2 from './component/Section_2';
import Section_3 from './component/Section_3';
import Section_4 from './component/Section_4';
import Section_5 from './component/Section_5';
import Section_6 from './component/Section_6';
import Section_7 from './component/Section_7';
import Section_8 from './component/Section_8';
import Section_9 from './component/Section_9';
import Login from './component/Login';
import Signup from './component/Signup';
function App() {
  return (
    <>
    {/* <Front/>
    <Section_2/>
    <Section_3/>
    <div className='mt-[-3rem]'>
    <Section_4/>
    <Section_5/>
    <Section_6/>
    <Section_7/>
    <Section_8/>
    <Section_9/>
    </div> */}
    <Router>
      <Routes>
      <Route path="/" element={<Front />}/>
      {/* <Route path='/Nav' element={<Nav />}/> */}
      <Route path="/Section_2" element={<Section_2 />}/>
      <Route path="/Section_3" element={<Section_3 />}/>
      <Route path="/Section_4" element={<Section_4 />}/>
      <Route path="/Section_5" element={<Section_5 />}/>
      <Route path="/Section_6" element={<Section_6 />}/>
      <Route path="/Section_7" element={<Section_7 />}/>
      <Route path="/Section_8" element={<Section_8 />}/>
      <Route path="/Section_9" element={<Section_9 />}/>
      <Route path='/Login' element={<Login></Login>}/>
      <Route path='/Signup' element={<Signup></Signup>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
