import './App.css'

import React, { useState } from "react";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from './Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  const [mode,setMode] = useState('light'); //wheather dark mode enable or not
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-info');
  }

  const toggleMode=(cls)=>{
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+cls)
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743'
      showAlert("Dark Mode has been enabled","success")
      document.title=`TextUtils DarkMode`;
      setInterval(() => {
        document.title=`TextUtils Amezing Mode`;
      }, 2000);
      setInterval(() => {
        document.title=`install TextUtils Now`;
      }, 4200);
    }
    else
    {
    setMode('light');
    document.body.style.backgroundColor='white'
    showAlert("Light Mode has been enabled","success")
    document.title=`TextUtils LightMode`;
    }
  }
  const toggleModePink=()=>{
    if(mode==='light')
    {
      setMode('pink');
      document.body.style.backgroundColor='pink';
      showAlert("pink mode has been enabled","success");
      document.title=`TextUtils RedMode`;
      setInterval(() => {
        document.title=`TextUtils Amezing Mode`;
      }, 2000);
      setInterval(() => {
        document.title=`install TextUtils Now`;
      }, 4200);
    }
    else{
      setMode('light');
    document.body.style.backgroundColor='white'
    showAlert("Light Mode has been enabled","success")
    document.title=`TextUtils LightMode`;
    }
  }
  const toggleModeRed=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='red'
      showAlert("Red Mode has been enabled","success")
      document.title=`TextUtils RedMode`;
      setInterval(() => {
        document.title=`TextUtils Amezing Mode`;
      }, 2000);
      setInterval(() => {
        document.title=`install TextUtils Now`;
      }, 4200);
    }
    else
    {
    setMode('light');
    document.body.style.backgroundColor='white'
    showAlert("Light Mode has been enabled","success")
    document.title=`TextUtils LightMode`;
    }
  }
        return (
        <>
          {/* <Router> */}
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleModePink={toggleModePink} toggleModeRed={toggleModeRed} toggleMode={toggleMode} ></Navbar>
        {/* <Navbar></Navbar> */}
        <Alert Alert={alert}></Alert>
        <div className="container my-3" >
        {/* <Switch> */}
          {/* <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}></TextForm>
          </Route> */}
        {/* </Switch> */}
        <TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}></TextForm>
        {/* <About mode={mode}></About> */}

        </div>
        {/* </Router> */}
        </>
  );
}

export default App;
