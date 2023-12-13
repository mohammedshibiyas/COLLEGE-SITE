import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

const Student_Home = () => {


  const navigate = useNavigate()

  const Logout = () => {
    localStorage.clear();
    navigate("/Student_login")
  }

  const [admission_id, setadmission_id] = useState("");
  useEffect(() => {
    const storedadmission_id = localStorage.getItem("admission_id");
    if (storedadmission_id) {
      setadmission_id(JSON.parse(storedadmission_id));
    }
  }, []);

   const[student,setStudent]=useState('')

  const FullData = async () => {
    try { 
      const key= localStorage.key(0);
      const value=JSON.parse(localStorage.getItem(key));
      const res = await axios.get(`http://localhost:3041/college/getdetsilsloginedstudent`, { headers: {Authorization: `Bearer ${value}` }});
      setStudent(res.data.task);
      console.log(student.fullname);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    FullData();
  }, []);










  return (
    <div>

      <div className="main-section">
      </div>
      <nav className="navbar-main navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <div className="nav-gifts">{student.fullname}</div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse nav-main" id="navbarNav">

            <div>
              <Link className='nav-link active' id='' to={"#"}><span>HOME</span></Link>
            </div>
            <div>
              <Link className='nav-link active' to={"#"}><span>ABOUT</span></Link>
            </div>
            <div>
              <a className="nav-link active" href="#"><span>INFO</span></a>
            </div>
            <div>
              <a className="nav-link active" href="#"><span>SHOP</span></a>
            </div>
            <div>
              <Link className='nav-link active' to={"#"}><span>CONTACT US</span></Link>
            </div>


            <div>
              <a className="nav-link active" href="#"><span><i className="fa fa-user" aria-hidden="true"></i></span></a>
            </div>



            <Link className='nav-link active' to={"/Student_login"}><span>LOGIN</span></Link>

            <div><a className="nav-link active" href="#"><span><i className="fa fa-shopping-bag"
              aria-hidden="true"></i></span></a></div>


            <div> <a className="nav-link active" href="#"><span><i className="fa fa-search" aria-hidden="true"></i></span></a>
            </div>


          </div>
        </div>
      </nav>




      <div className='Staff-name-only-home'>
        <i className="fa fa-user" aria-hidden="true"></i><span>{student.fullname}</span>
        <button className='btn-log-student' onClick={Logout}>Logout</button>

      </div>



      <div className="whole-data">
                <div className="Main-edit-student">
                    <div className="signup-staff">
                        <form >
                            <div className='head-staff'><h4>Student View</h4></div>
                            <div className="form-group12-staffs">


                                <label htmlFor="username" id='label-staff'></label>
                                <input type="text" id="empi" name="admission_id"  placeholder='Emp-id' value={student.admission_id}  required />

                                <label htmlFor="username" id='label-staff'></label>
                                <input type="text" id="name" name="fullname" placeholder='Fullname' value={student.username}  required />
                            </div>

                            <div className="form-group12-staffs">
                                <label htmlFor="username" id='label-staff'></label>
                                <input type="text" id="username" name="phonenumber"  placeholder='PH:NO' value={student.phonenumber}   required />

                                <label htmlFor="username" id='label-staff'></label>
                                <input type="text" id="email" name="email"  placeholder='Email' required />
                            </div>

                            <div className="form-group12-staffs">
                                <label htmlFor="username" id='label-staff'></label>
                                <input type="text" id="phone" name="adress" placeholder='Adress'  required />

                                <label htmlFor="username" id='label-staff'></label>
                                <input type="text" id="designation" name="semester" placeholder='Semster'  required />
                            </div>

                            <div className="form-group12-staffs">
                                <label htmlFor="username" id='label-staff'>  </label>
                                <input type="text" id="phone" name="batch" placeholder='Batch' required />

                                <label htmlFor="username" id='label-staff'></label>
                                <input type="text" id="designation" name="date" placeholder='DOB'  required />
                            </div>

                            <div className="form-group12-staffs">
                                <label htmlFor="username" id='label-staff'></label>
                                <input type="text" id="phone" name="course" placeholder='Course'  required />

                                <label htmlFor="username" id='label-staff'></label>
                                <input type="text" id="designation" name="attendance" placeholder='attandance'  required />


                            </div>

                            <div className='internal_edit'>
                                <label htmlFor="username" id=''>Internal mark : </label>
                                <div className='input_edit_student'>
                                    <input type="text" id="phone" name="Internal_physics" placeholder='Internal Physics'  required />
                                    <input type="text" id="phone" name="Internal_maths" placeholder='Internal Physics'   required />
                                    <input type="text" id="phone" name="Internal_chemistry" placeholder='Internal Physics'  required />
                                </div>
                                <label htmlFor="username" id=''>Test mark : </label>

                                <div className='input_edit_student'>
                                    <input type="text" id="phone" name="Test_physics" placeholder='Internal Physics'  required />
                                    <input type="text" id="phone" name="Test_maths" placeholder='Internal Physics' required />
                                    <input type="text" id="phone" name="Test_chemistry" placeholder='Internal Chemistry' required />
                                </div>


                            </div>

                            <div className="form-group12-staffs-last">


                             


                                <label htmlFor="username" id='label-staff'></label>
                                <div className='images-edit'>

                                    <img src="" alt="" />
                                    <input type="file" id="change-photo-edit" name="photo" placeholder='changephoto' required />
                                </div>




                            </div>

                            <button id='btn-staff' >Submit</button>
                        </form>
                    </div>
                </div>
            </div>







    </div>
  )
}

export default Student_Home