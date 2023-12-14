import React from 'react'
import './Styles.css'
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
         {/* <Link to='#'> <button id='About'>About us</button></Link> */}
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
                  <p class="about_text">The OSE Junior Summer School provides a memorable experience for students from all over the world, blending first-class English language tuition with masses of fun in a unique environment.

Now in its seventeenth year the Summer School has been hugely successful, gaining an international reputation and each year attracting hundreds of students from across the world.</p>
                  <div class="read_bt"><a href="#">Read More</a></div>
               </div>
               <div class="col-md-6">
                  <div class="about_img"><img src="/about.jpg"/></div>
               </div>
            </div>
         </div>
      </div>
        </div>

        {/* courses */}

        <section id="offerd-courses">
      <div className="courses-main">
       <div className="offerd-heading"> <h1>Courses</h1>
       <p>Institution offers Post Graduate and Under Graduate programmes in various subjects</p></div>
       <div className="list">
        <div className="list-sub">
          <p>BCOM CO-OPERATION</p>
        </div>
        <div className="list-sub">
          <p>BCOM FINANCE</p>
        </div>
        <div className="list-sub">
          <p>B COM COMPUTER APPLICATION</p>
        </div>
        <div className="list-sub">
          <p>BBA</p>
        </div>
      </div>
      <div className="list">
        <div className="list-sub">
          <p>BA ENGLISH</p>
        </div>
        <div className="list-sub">
          <p>BA ECNOMICS</p>
        </div>
        <div className="list-sub">
          <p>BCA</p>
        </div>
        <div className="list-sub">
          <p>BCS PHYSICS</p>
        </div>
      </div>
      <div className="list">
        <div className="list-sub">
          <p>MA ENGLISH</p>
        </div>
        <div className="list-sub">
          <p>MCOM FINANCE</p>
        </div>
      </div>
      </div>

      
  </section>
       
       {/* blog */}

       <div class="blog_section layout_padding">
         <div class="container">
            <div class="row">
               <div class="col-sm-12">
                  <h1 class="blog_taital">Our Blog</h1>
                  <p class="blog_text">It is a long established fact that a reader will be distracted by the readable content of a page</p>
               </div>
            </div>
            <div class="blog_section_2 layout_padding">
               <div class="row">
                  <div class="col-md-6">
                     <div class="blog_taital_1">Our Blog</div>
                     <p class="ipsum_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                     <div class="readmore_bt"><a href="#">Read More</a></div>
                  </div>
                  <div class="col-md-6">
                     <div class="blog_img"><img src="/blog-img.png"/></div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* contact */}

      <div class="contact_section layout_padding">
      <div class="container">
            <div class="row">
               <div class="col-sm-12">
                  <h1 class="contact_taital">Contact Us</h1>
                  <p class="blog_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
               </div>
            </div>
         </div>

         <div class="container-fluid">
            <div class="contact_section_2">
               <div class="row">
                  <div class="col-md-6 padding_left_0">
                     <div class="map_main">
                        <div class="map-responsive">
                           {/* <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="600" height="500" frameborder="0" style="border:0; width: 100%;" allowfullscreen=""></iframe> */}
                        </div>
                     </div>
                  </div>
                  <div class="col-md-6">
                     <div class="mail_section_1">
                        <input type="text" class="mail_text" placeholder="Name" name="Name"/>
                        <input type="text" class="mail_text" placeholder="Phone Number" name="Phone Number"/> 
                        <input type="text" class="mail_text" placeholder="Email" name="Email"/>
                        <textarea class="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
                        <div class="send_bt"><a href="#">SEND</a></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

     

       






        {/* footer */}

        <div class="footer_section layout_padding">
         <div class="container">
            <div class="row">
               <div class="col-lg-3 col-sm-6">
                  <h3 class="useful_text">About</h3>
                  <p class="footer_text">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation u</p>
               </div>
               <div class="col-lg-3 col-sm-6">
                  <h3 class="useful_text">Menu</h3>
                  <div class="footer_menu">
                     <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="courses.html">Courses</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="contact.html">Contact</a></li>
                     </ul>
                  </div>
               </div>
               <div class="col-lg-3 col-sm-6">
                  <h1 class="useful_text">Useful Link</h1>
                  <p class="dummy_text">Adipiscing Elit, sed do Eiusmod Tempor incididunt </p>
               </div>
               <div class="col-lg-3 col-sm-6">
                  <h1 class="useful_text">Contact Us</h1>
                  <div class="location_text">
                     <ul>
                        <li>
                           <a href="#">
                           <i class="fa fa-map-marker" aria-hidden="true"></i><span class="padding_left_10">Address : Loram Ipusm</span>
                           </a>
                        </li>
                        <li>
                           <a href="#">
                           <i class="fa fa-phone" aria-hidden="true"></i><span class="padding_left_10">Call : +01 1234567890</span>
                           </a>
                        </li>
                        <li>
                           <a href="#">
                           <i class="fa fa-envelope" aria-hidden="true"></i><span class="padding_left_10">Email : demo@gmail.com</span>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>






            </div>

            

            
  )
}

export default Index
