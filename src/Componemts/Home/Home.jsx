import React from "react";
import { Link } from 'react-router-dom';
import { useEffect } from "react";
"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Button } from "flowbite-react";
import About from "../About/About";

export function Home({ toggleTheme, isDarkTheme }) {
  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkTheme]);
  return (
    <div >
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
      <Navbar.Collapse>
        <Navbar.Link href="#" active className="text-2xl">
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="/projects" className="text-2xl  text-white">Services</Navbar.Link>
        <Navbar.Link as={Link} to="/services" className="text-2xl  text-white">Projects</Navbar.Link>
        <Navbar.Link as={Link} to="/contact" className="text-2xl  text-white">Contact</Navbar.Link>
        <Button color="light" onClick={toggleTheme}>
            {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
          </Button>
      </Navbar.Collapse>
    </Navbar>

     <About/>
    </div>
  
  );
}
export default Home