import React, { useEffect, useState } from 'react'
import './Studentview.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const ViewFullStudents = () => {
  const navigate=useNavigate()
    const [getStud,setStud]=useState([])
    const [username, setUsername] = useState("");

    useEffect(() => {
      const storedUsername = localStorage.getItem("username");
      if (storedUsername) {
        setUsername(JSON.parse(storedUsername));
      }
    }, []);

    const Logout = () => {
      const confirmed = window.confirm("Are you sure you want to log out?");
      if (confirmed) {
          localStorage.clear();
          navigate("/admin")
      }
     
    };

    const getAllstud=async()=>{
        const res=await axios.get("http://localhost:3041/college/getstudent")
        setStud(res.data)
        console.log(getStud);
        
        
      }
      useEffect(()=>{
        getAllstud() 
    } ,[])

    const deleteStud = async (id) => {
        try {
          const confirmed = window.confirm("Are you sure you want to delete this staff member?");
      
          if (confirmed) {
            const res = await axios.delete(`http://localhost:3041/college/deletestudent/${id}`);
            console.log("deleted", res.data);
            getAllstud();
          } 
        } catch (error) {
          console.log(error);
        }
      };
  
  return (
    <div>
      <div className="upper">
      <div className="upper-left"><div className=''><Link className='staffhome-back-btn' to='/staffhome'><i className="fa fa-angle-left" aria-hidden="true"></i>Back</Link></div></div>
      <div className="upper-right">
      <div className="mmm"><div className="admin-logoutt">
        <div className='span'><span><i className="fa fa-user" aria-hidden="true"></i>{username}</span></div>
        <div><button className="Btn" onClick={Logout}> Logout</button>
  
 
</div></div></div>
      </div>
     </div>
      <div className="studentfulldetails-main container">
        <h3 className='allstud-heading'>Full Students</h3>
     <div className="row">
    {
        getStud.map((data,index)=>
        <div className="col-lg-3" key={index}>
        <Link className='card-link' to={`/studentdetails/${data._id}`}>
        <div className="stud-card" >
         <div className="stud-dp"><img src={data.photo} alt="" /></div>
         <h3 className='card-heading'>{data.name}</h3>
         <p className='card-para'>{data.email}</p>
         {/* <p className='card-para'>{data.empid}</p> */}
         <div className="allstuds-delete-view-btns">
             {/* <Link className='allstuds-view-btn'>View</Link> */}
             <Link className='allstuds-delete-btn' to={`#${data._id}`} onClick={() => deleteStud(data._id)}>Delete</Link>
         </div>
     </div>
     </Link>
     </div>)
    }
     </div>
      </div>
    </div>
  )
}

export default ViewFullStudents
