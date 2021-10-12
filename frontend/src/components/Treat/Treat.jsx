import {React, useState} from 'react'
import './treat.css'
import axios from 'axios';
import img1 from "../../media/img1.jpg"

import { Button, Form, Row, Col, Image, FloatingLabel } from "react-bootstrap";

const Treat = () => {

    const [treat, setTreat] = useState({
        firstname: '',
        lastname: '',
        email: '',
        reason: '',
        
    })

    const onInputChange = e => {
        setTreat({ ...treat, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("https://triptifoundation.herokuapp.com/Treatb", treat);
        alert('Submitted successfully')
        setTreat({
            firstname: '',
            lastname: '',
            email: '',
            reason: ''
            
        })
    }

    return (
        <div className="container-class">
            <h6>..</h6>

            <h1 className="h1-el">Share your special day! Give them a treat! </h1>
            <p className="treat-para">
                Although there are unlimited ideas to celebrate our special days like  birthday, anniversary, festivals, share your joyous moments by providing food to poor and hungry patients outside hospitals, as by seeking happiness for others, and find it for yourself !

                Celebrate your Birthday in a unique way.You can plan your special day along with your friends, family or colleagues by feeding the needy. Sharing gifts and spreading smiles with others is a cherishing experience! Share your Happiness!
            </p>

            <Form className="form-treat"
            onSubmit={e => onSubmit(e)}
            >

                <Form className="mb-3-el">
                    <Row>
                        <Col>
                            <Form.Control placeholder="First name" 
                            onChange={e => onInputChange(e)} value={treat.firstname} name="firstname" type="firstname" 
                            
                            />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Last name"
                             onChange={e => onInputChange(e)} value={treat.lastname} name="lastname" type="lastname" 
                            
                            />
                        </Col>
                    </Row>
                </Form>

                <Form.Group className="mb-3-el" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" 
                    onChange={e => onInputChange(e)} value={treat.email} name="email" type="email" 
                    />
                </Form.Group>
                <Form.Group className="mb-3-el" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Reason for treat</Form.Label>
                    <Form.Control as="textarea" rows={3} 
                     onChange={e => onInputChange(e)} value={treat.reason} name="reason" type="reason" 
                    />
                </Form.Group>





                <FloatingLabel className="mb-3-el" controlId="floatingTextarea2" label="">
                    Address where you will offer treat
                    <Form.Control
                        as="textarea"
                        placeholder="What will you donate?"
                        style={{ height: '100px' }}
                    />
                </FloatingLabel>

                <Button className="button-elemt" variant="primary" type="submit"
                    
                >
                    Submit
                </Button>

            </Form>
        </div>
    )
}

export default Treat