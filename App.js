import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import React,{useState} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';



const App = () => {
  const [progress, setProgress] = useState(0)
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress}key="general" pageSize={6} country='in' category='general'/>}/>
          <Route exact path="/Business" element={<News setProgress={setProgress}key="business" pageSize={6} country='in' category='business'/>}/>
          <Route exact path="/Entertainment" element={<News setProgress={setProgress}key="entertainment" pageSize={6} country='in' category='entertainment'/>}/>
          <Route exact path="/General" element={<News setProgress={setProgress}key="general" pageSize={6} country='in' category='general'/>}/>
          <Route exact path="/Health" element={<News setProgress={setProgress}key="health" pageSize={6} country='in' category='health'/>}/>
          <Route exact path="/Science" element={<News setProgress={setProgress}key="science" pageSize={6} country='in' category='science'/>}/>
          <Route exact path="/Sports" element={<News setProgress={setProgress}key="sports" pageSize={6} country='in' category='sports'/>}/>
          <Route exact path="/Technology" element={<News setProgress={setProgress}key="technology" pageSize={6} country='in' category='technology'/>}/>
          
         
        </Routes>
        
        </Router>


        
      </div>
    )
  }
export default App

