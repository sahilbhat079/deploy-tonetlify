import './App.css';
import React, { useState} from 'react'
import Navbar from './component/Navbar';
import Newscom from './component/Newscom';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default function App () {
 const apikey=process.env.REACT_APP_API_NEWS_KEY;
   const [progress,Setprogres]=useState(0);
 const setProgress=(progress)=>{
    Setprogres(progress);
  }

    return (<>
    <LoadingBar
    color='#f11946'
    height= {3}
    progress={progress} />

      <Router basename='/deploy-tonetlify'>
      <Navbar></Navbar>
      <Routes>
  <Route exact path="/" element={<Newscom setProgress={setProgress}    apikey={apikey}  key="general" country="in" category="general"/>}></Route>
  <Route exact path="/sports" element={<Newscom setProgress={setProgress}   apikey={apikey}  key="sports" country="in" category="sports"/>}></Route>
  <Route exact path="/health" element={<Newscom setProgress={setProgress}   apikey={apikey}  key="health" country="in" category="health"/>}></Route>
  <Route exact path="/science" element={<Newscom setProgress={setProgress}    apikey={apikey} key="science" country="in" category="science"/>}></Route>
  <Route exact path="/technology" element={<Newscom setProgress={setProgress}   apikey={apikey}  key="technology" country="in" category="technology"/>}></Route>
  <Route  exact path="/entertainment" element={<Newscom setProgress={setProgress}    apikey={apikey} key="entertainment" country="in" category="entertainment"/>}/>
<Route  exact path="/business" element={<Newscom setProgress={setProgress}    apikey={apikey} key="business" country="in" category="business"/>}>
            
          </Route>
          
      </Routes>

    </Router>
    </>
    )
  }
