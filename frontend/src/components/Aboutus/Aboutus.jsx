import { React } from 'react'

import './aboutus.css'
import gif1 from "../../media/gif1.gif"
import { Button, Form, Col, Image, Row } from "react-bootstrap";


const Aboutus = () => {
    return (
        <div >
            <div class="about-section">
               
                <div class="inner-container">
                    <h1 class="head-ele">About Us</h1>
                    <p class="text-el">
                    We are a small group of students trying to help the people to connect to the people who are starving for food. We want people to know various schemes government is providing to eradicate hunger issue. If you are one of the persons who are looking to donate, you can use this medium.
                    </p>
                   

<span class="email">Ask your question by email
    <a class="email" href="mailto:triptifoundation885@gmail.com"><i class="icon-email"></i>triptifoundation885@gmail.com</a>
    </span>
                </div>
            </div>
        </div>
    )
}

export default Aboutus