import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
function Footer() {
  return (
    <div style={{height:"160px", backgroundColor:"black"}}>
      <h1 className='text-center' style={{color:"gray",fontSize:"25px"}}>Connect with Me</h1><br />
      <h1 className='text-center' style={{color:"gray",fontSize:"15px"}}><FontAwesomeIcon icon={faEnvelope} style={{marginRight: "10px"}} />anupamasureshapkd@gmail.com</h1>
      <h1 className='text-center' style={{color:"gray",fontSize:"15px"}}><FontAwesomeIcon icon={faPhone} style={{marginRight: "10px"}} />7994088650</h1><br />
      <center><a className='cpy' style={{color:"gray",fontSize:"15px"}}>Copyright @ All rights are reserved.com</a></center>
    </div>
  )
}

export default Footer