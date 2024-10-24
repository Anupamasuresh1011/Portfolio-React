import React from 'react'
import { Avatar, Dropdown, Navbar } from "flowbite-react";

function Projects() {
  return (
    <div><Navbar className="navbar" fluid  style={{backgroundColor:"black",height:"80px"}} > 
    <Navbar.Brand href="#" >
    <div className="flex md:order-2">
      <Dropdown
        arrowIcon={false}
        inline
        label={
          <Avatar alt="User settings" img="https://cdn-icons-png.flaticon.com/512/4661/4661318.png" rounded />
        }
      >
        <Dropdown.Header>
          <span className="block text-sm ">Anupama Suresh</span>
          <span className="block truncate text-sm font-medium">anupamasureshapkd@gmail.com</span>
        </Dropdown.Header>
        
      </Dropdown>
      <Navbar.Toggle />
    </div>
      <span className="text-2xl font-bold text-white">Anupama Suresh</span>
    </Navbar.Brand>
    
  </Navbar> <br />
  <h1 style={{textAlign:"center",fontSize:"40px",fontWeight:"bolder"}}>My Services</h1>
  <div style={{height:"600px",display:"flex",marginTop:"30px"}}>
     <div style={{width:"25%",height:"550px",margin: "5px",padding: "13px",border: "double white 5px",backgroundColor:"black"}}>
      <img style={{width:"100%",height:"200px"}} src="https://www.creativedigitalinfotech.com/images/services/front-end-web-development-course-in-dehradun.jpg" alt="" />
      <div style={{backgroundColor:""}}>Brand
        <h1 style={{textAlign:"center",color:"white",fontSize:"25px"}}>FRONT-END</h1><br />
        <p style={{textAlign:"justify",color:"white"}}>
              
        Front-end development is the process of building components that interact with users. Examples are the user interface, buttons, user-entered data, websites, and user experience (UX) features. The front end aims at meeting user requirements and delivering a positive user experience.. Examples are the user interface, buttons, user-entered data, websites, and user experience (UX) features.
        </p>
      </div>
     </div>
     <div style={{width:"25%",height:"550px",margin: "5px",padding: "13px",border: "double white 5px",backgroundColor:"black"}}>
     <img style={{width:"100%",height:"200px"}} src="https://d26pm0riky5t4b.cloudfront.net/image/file/8920a89a-9eef-4c46-9ad0-b12ce6fcacbb.jpg" alt="" />
     <div> <br />
     <h1 style={{textAlign:"center",color:"white",fontSize:"25px"}}>BACK-END</h1><br />
     <p style={{textAlign:"justify",color:"white"}}>
     Back-end development means working on server-side software, which focuses on everything you can’t see on a website. Back-end developers ensure the website performs correctly, focusing on databases, back-end logic, application programming interface (APIs), architecture, and servers. They use code that helps browsers communicate with databases, store, understand, and delete data.
     </p>
     </div>
     </div>
     <div style={{width:"25%",height:"550px",margin: "5px",padding: "13px",border: "double white 5px",backgroundColor:"black"}}>
     <img style={{width:"100%",height:"200px"}} src="https://www.skillreactor.io/blog/wp-content/uploads/2024/05/Full-Stack-Developer.jpg" alt="" />
     <div><br />
     <h1 style={{textAlign:"center",color:"white",fontSize:"25px"}}>FULLSTACK</h1><br />
     <p style={{textAlign:"justify",color:"white"}}>
     A full-stack developer is a developer or engineer who can build both the front end and the back end of a website. The front end (the parts of a website a user sees and interacts with) and the back end (the behind-the-scenes data storage and processing) require different skill sets. Since full-stack developers are involved with all aspects of the development process, they must have expertise in both.
     </p>
     </div>
     </div>
     <div style={{width:"25%",height:"550px",margin: "5px",padding: "13px",border: "double white 5px",backgroundColor:"black"}}>
     <img style={{width:"100%",height:"200px"}} src="https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/oct/27oct/What-is-UI-UX-Design.jpg" alt="" />
     <div><br />
     <h1 style={{textAlign:"center",color:"white",fontSize:"25px"}}>UI/UX</h1><br />
     <p style={{textAlign:"justify",color:"white"}}>
     The UI/UX Design Specialization brings a design-centric approach to user interface and user experience design, and offers practical, skill-based instruction centered around a visual communications perspective,  in digital design, user interface (UI) refers to the interactivity, look, and feel of a product screen or web page, while user experience (UX) covers a user's overall experience with the product or website.
     </p>
     </div>
     </div>
</div>
    </div>
  )
}

export default Projects