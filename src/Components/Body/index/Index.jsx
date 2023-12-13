import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <div>
     

<div class="main-nav">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#"></a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse all-items " id="navbarNav">
                   <div>
                        <a class="nav-link active" aria-current="page" href="#"><span>HOME</span> </a>
                    </div>
                     
                      <div>
                        <a class="nav-link" href="./templates/shop.html">SHOP</a>
                      </div>
                        
                     <div>
                        <a class="nav-link" href="./templates/whyus.html">WHY US</a>
                     </div>
                       
                    <div>
                        <a class="nav-link" href="./templates/testimonial.html">TESTIMONAL</a>
                    </div>
                       
                     <div>
                        <a class="nav-link" href="./templates/contactus.html">CONTACT US</a>
                     </div>
                     <div class="login">
                        <i class="fa fa-user" aria-hidden="true"><a href="">LOGIN</a></i>
                     </div>
                     <div class="bag">
                        <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                        <i class="fa fa-search" aria-hidden="true"></i>
                     </div>
                 
                       
                   
                  </div>
                </div>
              </nav>
        </div>

      {/* banner */}

        <div className="container-fluid banner">

            {/* <img src="/pic1.jpg" alt="" /> */}

            <h2>School Of Oxford</h2>
          <div className="para">
          <p>The University of Oxford is a collegiate research university in Oxford, England. There is evidence of teaching as early as 1096, making it the oldest university in the English-speaking world and the world's second-oldest university in continuous operation. </p>
        <div className="btns">
        <Link to='/studentlogin'> <button>Lets start</button></Link>
         <Link to='#'> <button id='About'>About us</button></Link>
        </div>

          </div>


        
        </div>


        {/* about */}

        <div className="container about">
          <div class="about_section layout_padding">
         <div class="container">
            <div class="row">
               <div class="col-md-6">
                  <div class="about_taital">About Us</div>
                  <p class="about_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-o</p>
                  <div class="read_bt"><a href="#">Read More</a></div>
               </div>
               <div class="col-md-6">
                  <div class="about_img"><img src="/close-up-hands-holding-diplomas-caps.jpg"/></div>
               </div>
            </div>
         </div>
      </div>
        </div>






            </div>

            

            
  )
}

export default Index
