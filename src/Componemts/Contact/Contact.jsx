import React from 'react'
import { Avatar, Dropdown, Navbar } from "flowbite-react";
"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import {  Textarea } from "flowbite-react";

function Contact() {
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
    
  </Navbar><br /> <br /><br />
  <h1 style={{textAlign:"center",fontSize:"40px",fontWeight:"bolder"}}>Contact Form</h1>
  <div style={{height:"500px"}}>
  <form className="flex max-w-md flex-col gap-4" style={{marginLeft:"35%",marginTop:"50px"}}>
  <div>
        <div className="mb-2 block">
          <Label style={{fontSize:"25px"}} htmlFor="password1" value=" Name:" />
        </div>
        <TextInput id="password1" type="text" placeholder='enter your name' required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label style={{fontSize:"25px"}} htmlFor="email1" value="Email:" />
        </div>
        <TextInput id="email1" type="email" placeholder="enter your email" required />
      </div>
      <div className="max-w-md">
      <div className="mb-2 block">
        <Label style={{fontSize:"20px"}} htmlFor="comment" value=" Message:" />
      </div>
      <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
    </div>
    <Button gradientDuoTone="pinkToOrange">Submit</Button>
    </form>
  </div>
  </div>
  )
}

export default Contact