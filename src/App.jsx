import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Body/Home/Home'
import AdminLogin from './Components/Body/AdminLogin/AdminLogin'
import StaffLogin from './Components/Body/StaffLogin/StaffLogin'
import StaffReg from './Components/Body/StaffReg/StaffReg'
import Adminpannel from './Components/Body/Adminpannel/Adminpannel'
import Adminreg from './Components/Body/Adminreg/Adminreg'
import Adminhome from './Components/Body/Adminhome/Adminhome'
import Studentreg from './Components/Body/Studentreg/Studentreg'
import Studentlogin from './Components/Body/Studentlogin/Studentlogin'
import Staffhome from './Components/Body/Staffhome/Staffhome'
import Allstafflist from './Components/Body/Allstafflist/Allstafflist'
import Staffedit from './Components/Body/StaffEdit/Staffedit'
import Staffdetails from './Components/Body/Staffdetails/Staffdetails'
import StaffForgotusername from './Components/staffForgoteusername/StaffForgotusername'
import StaffForgotPwd from './Components/StaffForgotPwd/StaffForgotPwd'
import ViewFullStudents from './Components/Body/studentsview/Studentsview'
import StudentDetails from './Components/Body/studentfulldetails/Studentdetails'
import StudentEdit from './Components/Body/Editstudent/Editsttudent'
import Index from './Components/Body/index'
import StudentHome from './Components/Body/studenthome/Studenthome'




function App() {
  return (
    <>
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
      <Route path='/home' Component={Home}/>
      <Route path='/adminlogin' Component={AdminLogin}/>
      <Route path='/stafflogin' Component={StaffLogin}/>
      <Route path='/staffreg' Component={StaffReg}/>
      <Route path='/adminregister' Component={Adminreg}/>
      <Route path='/adminpannel' Component={Adminpannel}/>
      <Route path='/adminhome' Component={Adminhome}/>
      <Route path='/studentreg' Component={Studentreg}/>
      <Route path='/studentlogin' Component={Studentlogin}/>
      <Route path='/staffhome' Component={Staffhome}/>
      <Route path='/allstafflist' Component={Allstafflist}/>
      <Route path='/staffdetails/:id' Component={Staffdetails}/>
      <Route path='/staffforgotusername' Component={StaffForgotusername}/>
      <Route path='/staffedit/:id' Component={Staffedit}/>
      <Route path='/staffforgotpwd' Component={StaffForgotPwd}/>
      <Route path='/studentsview' Component={ViewFullStudents}/>
      <Route path='/studentdetails/:id' Component={StudentDetails}/>
      <Route path='/studentEdit/:id' Component={StudentEdit}/>
      <Route path='/' Component={Index}/>
      <Route path='/studenthome' Component={StudentHome}/>
      
      
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
