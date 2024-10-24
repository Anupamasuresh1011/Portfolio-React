import React from 'react'
import { Avatar, Dropdown, Navbar } from "flowbite-react";
"use client";

import { Card } from "flowbite-react";

function Services() {
  return (
    <div>
      <Navbar className="navbar" fluid  style={{backgroundColor:"black",height:"80px"}} > 
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
    
  </Navbar>
      <div > <br />
      <h1 style={{textAlign:"center",fontSize:"40px",fontWeight:"bolder"}}>My Projects</h1><br />

      <div style={{display:"flex",marginLeft:"100px"}}>

        <div style={{width:"30%",height:"500px",margin: "5px",padding: "13px",border: "double white 5px",backgroundColor:"black"}}>
        <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="./travel.png"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Travel Blog Website
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
       A Travel blogging website created using HTML,CSS,Bootsrap for writing travel blogs ,searching and booking for destinations
      </p>
    </Card><br />
    <a style={{color:"white",fontSize:"25px",textDecoration:"underline",marginLeft:"20px"}} href="https://anupamasuresh1011.github.io/travel-blog/">Go to Website</a>

        </div>

        <div style={{width:"30%",height:"500px",margin: "5px",padding: "13px",border: "double white 5px",backgroundColor:"black"}}>
        <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="./food.png"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Food Delivery Website
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
           A Food delivery website created using HTML,CSS,Bootsrap for food ordering from near resturants
      </p>
    </Card><br />
    <a style={{color:"white",fontSize:"25px",textDecoration:"underline",marginLeft:"20px"}} href="https://anupamasuresh1011.github.io/fooddelivery/">Go to Website</a>

        </div>

        <div style={{width:"30%",height:"500px",margin: "5px",padding: "13px",border: "double white 5px",backgroundColor:"black"}}>
        <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="./furniture.png"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Furniture Shop Website
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
       A Furniture shop website created using HTML,CSS,Bootsrap for shopping furniture online
      </p>
    </Card><br />
    <a style={{color:"white",fontSize:"25px",textDecoration:"underline",marginLeft:"20px"}} href="https://anupamasuresh1011.github.io/Furnitureshop/">Go to Website</a>

        </div>
       
      </div><br />

      <div style={{display:"flex",marginLeft:"100px"}}>

        <div style={{width:"30%",height:"500px",margin: "5px",padding: "13px",border: "double white 5px",backgroundColor:"black"}}>
        <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="./animal.png"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Animal Care Website
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        A Animal care website created using HTML,CSS,Bootsrap for animal care blogs and animal welfare functionalities
      </p>
    </Card><br />
    <a style={{color:"white",fontSize:"25px",textDecoration:"underline",marginLeft:"20px"}} href="https://anupamasuresh1011.github.io/animalorg/">Go to Website</a>

        </div>

        <div style={{width:"30%",height:"500px",margin: "5px",padding: "13px",border: "double white 5px",backgroundColor:"black"}}>
        <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="./banking.png"
      
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Simple Banking System
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        A simple banking system created using HTML,CSS,Bootstrap,Javascript for cash deposite and withdrawel
      </p>
    </Card><br />
     <a style={{color:"white",fontSize:"25px",textDecoration:"underline",marginLeft:"20px"}} href=" https://anupamasuresh1011.github.io/Banking-System/">Go to Website</a>
        </div>

        <div style={{width:"30%",height:"500px",margin: "5px",padding: "13px",border: "double white 5px",backgroundColor:"black"}}>
        <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="./portfolio.png"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Portfolio Website
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        My Portfolio website including my personal and professional details created using HTML,CSS,Bootsrap,Flowbite
      </p>
    </Card><br />
    <a className="link" style={{color:"white",fontSize:"25px",textDecoration:"underline",marginLeft:"20px"}} href="https://anupamasuresh1011.github.io/Portfolio/">Go to Website</a>

        </div>
       
      </div>
      </div> <br /><br />
    </div>
  )
}

export default Services