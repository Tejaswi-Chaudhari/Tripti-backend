import React from 'react'
import "./donate.css";
import girl from "../../media/donate.jpg"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


function Donate() {
    return (

        <div className="container">
            <Row>
                <Col lg={8}>
                    <div className="leftside">
                        <h1 className="topic1">We need your help.</h1>
                        <h6 className="para">
                            As a nonprofit,we rely on donations to provide food and the kind of health care kids deserve: highly specialized,compassinate,family-centered and customized to the special health needs of children.
                        </h6>
                        <h5 className="para1">🙌100% of your donation will be spent on the kids and families that are counting on you.
                        </h5>


                        <a href='https://rzp.io/l/dkqGdj0F'>
                            <button type="button" className="btn btn-info button1">Donate Now</button>
                        </a>
                        <a href="https://celo-crypocurrency-demo.vercel.app/">
                            <button type="button" className="btn btn-info button1">Celo Donation</button>
                        </a>
                    </div>
                </Col>
                <Col lg={4}>
                    <div >
                        <img className="image-location" src={girl} />
                    </div>
                </Col>
            </Row>
        </div >
    )
}

export default Donate
