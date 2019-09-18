import React from 'react'
import {  MDBContainer } from "mdbreact";
const Footer = () => {
    return (
      <div className="saww">

          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: 2019
          </MDBContainer>

          </div>
        );
    }
export default Footer