import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Nav from 'react-bootstrap/Nav'

const Footer = () => {
    return (

        <footer className="footer">
            <center>
     
                <Nav.Link href="/aboutus">
                    <p className="footer-p-txt">About us</p>
                    </Nav.Link>
                
            </center>
            <p className="footer-txt">Made with <FontAwesomeIcon color="red" icon={faHeart} /> by Tejaswi, Tejashri and Swarangi<br></br>All rights reserved © 2021 Hack Ninjas Team</p>
        </footer>
    )
}

export default Footer
