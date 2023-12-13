import React from 'react'
import './Studentlogin.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Studentlogin = () => {
  
  // const navigate=useNavigate()
  // const [studentid,setStudentid]=useState('')
  // const [dob,setDob]=useState('')
  // // console.log(studentid);
  

  // const Login = async (e) => {
  //   e.preventDefault();
  
  //   try {
  
  //     const res = await axios.post("http://localhost:3041/college/studentlogin", {
  //       studentid: studentid,
  //       dob: dob,
  //     });
  
  //     const data = res.data;
  //     console.log(data);
  
  //     // Assuming you want to check for a successful status (2xx range) instead of specifically 404
  //     if (res.status >= 200 && res.status < 305) {
  //       const student_token = data.token;
  //       localStorage.setItem("token", JSON.stringify(student_token));
  //       // Assuming navigate is a function that handles navigation
  //       alert("successfull")
  //       navigate("/stafflogin");
  //     } else {
  //       // Handle other non-successful status codes
  //       alert("Login failed with status: " + res.status);
  //     }
  //   } catch (error) {
  //     // Handle network errors or other issues
  //     console.error("Error during login:", error);
  //     alert("Can't login. Please try again later.");
  //   }
  // };

  const navigate=useNavigate()
  const [studentid,setStudentid]=useState("");
  const [dob,setDob]=useState("");
  
  const Login = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:3041/college/studentlogin", {
      
      studentid: studentid,
      dob: dob
      });
  
      const data = response.data;
      console.log(data);
  
      if (response.status !== 404) {
      const student_token = data.token;
      localStorage.setItem("stud_token", JSON.stringify(student_token));
      success(setTimeout(()=>{
          navigate("/studenthome");
          alert("success")
      },3000));
      } else {
      alert(data.msg);
      }

    } catch (error) {
      alert("Student ID Or Date Of Birth Incorrect");
    }
  };
  
  
  const success = () =>
   toast.success("Login Succesfully Completed",{
      position: "top-right",
      autoClose:2500 ,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true, 
      draggable: true,
      progress: undefined, 
      theme: "dark",
   })

  
  return (
    <div>
       <div className="studentlogin-main">
        <div className="studentlogin-card">
            <div className="student-login-card-heading"><h4>Student Login</h4></div>
          <form action="" className='student-login-form'> 
          <div><input type="text" placeholder='std id' onChange={(e)=>setStudentid(e.target.value)}/></div>
            <div><input type="text"  placeholder='dob' onChange={(e)=>setDob(e.target.value)}/></div>
  
           <Link> <button onClick={Login}>Login</button></Link>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Studentlogin