import { React, useState } from 'react'
import './needhelp.css'
import gif1 from "../../media/gif1.gif"
import blob4 from "../../media/blob4.svg"
import { Button, Form, Col, Image, Row } from "react-bootstrap";
import axios from 'axios';

const Needhelp = () => {
    const [help, setHelp] = useState({
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        latitude: localStorage.getItem('latitude'),
        longitude: localStorage.getItem('longitude')
    })

    const onInputChange = e => {
        setHelp({ ...help, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("https://triptifoundation.herokuapp.com/help", help);
        setHelp({
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: '',
        })
    }

    return (
        <div className="container-ele">
            <img src={blob4} alt="blob" className="needhelp-blob4"></img>
            <p className="needhelp-h">Need help?</p>
            <p className="needhelp-txt lead">When you are walking down the street, is there someone who is hungry?
                <br></br>We will be really happy to send help in the form of food to that person
                <br></br>Please drop in the address of that place
                <br></br>Remember, you are awesome and you did an amazing job helping us with our goal of <strong>#FeedIndia</strong>
            </p>
            <Row className="needhelp-row">
                <Col lg={4}>
                    <div className="img-container" >
                        <Image src={gif1} className="help-gif-el" alt="GIF here" />
                    </div>
                </Col>
                <Col lg={8}>
                    <div className="form-container">
                        <Form className="form-ele needhelp-el" onSubmit={e => onSubmit(e)}>
                            <Form.Group className="address1-el form-grp" controlId="formGridAddress1">
                                <Form.Label>Address line-1</Form.Label>
                                <Form.Control onChange={e => onInputChange(e)} value={help.address1} name="address1" type="address1" className="form-Control-el" placeholder="1234 Main St" required />
                            </Form.Group>


                            <Form.Group className="address2-el form-grp" controlId="formGridAddress2">
                                <Form.Label>Address line-2</Form.Label>
                                <Form.Control onChange={e => onInputChange(e)} value={help.address2} name="address2" type="address2" className="form-Control-el" placeholder="Apartment, studio, or floor" required />
                            </Form.Group>


                            <Row className="row-el">

                                <Form.Group className="form-grp" as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control onChange={e => onInputChange(e)} value={help.city} name="city" type="city" className="form-Control-el" required />
                                </Form.Group>


                                <Form.Group className="form-grp" as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control onChange={e => onInputChange(e)} value={help.state} name="state" type="state" className="form-Control-el" />
                                </Form.Group>


                                <Form.Group className="form-grp" as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control onChange={e => onInputChange(e)} value={help.zip} name="zip" type="zip" className="form-Control-el" required />
                                </Form.Group>

                            </Row>
                            <Button className="button-ele btn" variant="primary" type="submit">
                                Get my location
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Needhelp