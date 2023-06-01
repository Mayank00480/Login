import React,{useState} from 'react';
import './App.css';
import {FaFacebookF} from 'react-icons/fa';
import {BsLinkedin,BsInstagram} from 'react-icons/bs'
function App() {
  const [name ,setName] = useState(" ")
  const [password,setPassword] = useState(" ")
  function handleSubmit(){
   if(!name && !password)
   {
    alert('Enter name and password to continue')
   }
   else if(!name)
   {
    alert('Enter Name to continue')
   }
   else if(!password)
   {
    alert('Enter password to continue')
   }
  }
  return (
<div className = "main">
<div className = "left">
<div style ={{position : 'relative',top:'300px',fontStyle:'Arial',fontSize:'30px',display:'flex',left:'20px',color:'white'}}>
        <h1>100% Uptime😎</h1></div>
        <div style = {{fontWeight:'lighter', fontSize:'25px', color:'white',position:'relative',top:'300px',left:'20px'}}>Zero Infrastructure Management</div>
</div>
<div>
  <p style = {{fontWeight:'lighter',position:'relative' , top:'600px',color:'white',right:'550px'}}>aesthesia.com</p>
<p style ={{position:'relative',top:'575px',color:'white',right:'90px'}}><FaFacebookF/></p>
<p style ={{position:'relative',top:'560px',color:'white',right:'60px'}}><BsLinkedin/></p>
<p style ={{position:'relative',top:'545px',color:'white',right:'30px'}}><BsInstagram/></p>
</div>
   <div className ="w-full max-w-xs login">
      <div style ={{position : 'relative',bottom: '30px',fontStyle:'Arial',fontSize:'30px',display:'flex',left:'20px'}}>
        <h1>Welcome</h1> <h1 style = {{color:'green',marginLeft:'20px'}}>Back!</h1> </div>
        <div style={{position :'relative', bottom: '30px',left:'40px',fontWeight:'lighter'}}><p>glad to see you again</p></div>
  <form className ="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onClick={handleSubmit}>
    <div className ="mb-4">
      <label className ="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input className ="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your name" onChange={(e) => {setName(e.target.value)}}/>
 </div>
    <div className ="mb-6">
      <label className ="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input className ="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter Your Password " onChange={(e) => {setPassword(e.target.value)}}/>
    </div>
    <div className ="flex items-center justify-between">
      <button className ="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        LogIn
      </button>
      <a className ="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
  <p className ="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>
</div>  
  )}
export default App;
