import React from 'react'
import './govtschemes.css'
import cor1 from "../../media/cor1.jpg"
import cor2 from "../../media/cor2.jpg"
import cor3 from "../../media/cor3.jpg"

import { Carousel, Card, Button, Form, Col, Image } from "react-bootstrap";

const Govtschemes = () => {
    return (
        <div className="main-container">

            <div>
                <Carousel >
                    <Carousel.Item>
                        <img
                            className="car-img d-block w-100"
                            src={cor1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1 className="govt-head">Zero Hunger</h1>
                            <p>Sustainable Development aims to achieve "zero hunger"</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="car-img d-block w-100"
                            src={cor2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h1 className="govt-head">We rise by lifting others</h1>
                            <p>"If you can't feed a hundred people, then feed just one." -Mother Teresa</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="car-img d-block w-100"
                            src={cor3}
                            alt="Third slide"
                        />

                        <Carousel.Caption className="cap-el">
                            <h1 className="govt-head">Bring a smile!</h1>
                            <p>Though they smile, they smile out of a deep pain within.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                {/* <hr/> */}
            </div>

            <div className="contain-2">
                <p className="para-el">
                    India accords high priority to the issue of hunger and malnutrition and is implementing several schemes to improve food situation in the country. India is using technology and data to solve its acute malnutrition and hunger problems. The Food and Agriculture Organization (FAO) estimates that 194.4 million people in India (about 14% of the total population) are undernourished. The government has accorded high priority to the issue of undernutrition and is implementing  several programmes which have potential to improve the current nutritional situation in India. Some of them are as follows:


                </p>



            </div>


            <div className="contain-3">
                <Card style={{ width: '18rem' }} className="card-scheme">
                    <Card.Body>
                        <Card.Title>Midday Meal Scheme
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">PM-POSHAN Scheme</Card.Subtitle>
                        <Card.Text>
                            The Midday Meal Scheme is a school meal programme that provides every child within the age group of six to fourteen years studying in classes I to VIII who enrols and attends the school shall be provided with a hot cooked meal, free of charge every day except on school holidays. Studies found that midday meals leave a long-lasting impact.
                        </Card.Text>

                        <Card.Link href="https://en.wikipedia.org/wiki/Midday_Meal_Scheme">Read more</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="card-scheme">
                    <Card.Body>
                        <Card.Title>Indira Gandhi Matritva Sahyog Yojna (IGMSY)</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Pradhan Mantri Matri Vandana Yojana</Card.Subtitle>
                        <Card.Text>
                            The scheme aims to contribute to a better enabling environment by providing cash incentives for improved health and nutrition to pregnant and lactating mothers.
                            It is being implemented by the Ministry of Women and Child Development
                        </Card.Text>

                        <Card.Link href="https://wcd.nic.in/schemes/maternity-benefit-programme">Read more</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="card-scheme">
                    <Card.Body>
                        <Card.Title>National Nutritional policy 1993
                        </Card.Title>

                        <Card.Text>
                            The National Nutrition Policy (NNP) was adopted under the aegis of the Ministry of Women and Child Development.The strategy of NNP was a multi-sectoral strategy for eradicating malnutrition and achieving optimum nutrition for all.

                        </Card.Text>

                        <Card.Link href="https://wcd.nic.in/sites/default/files/nnp_0.pdf">Read more</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="card-scheme">
                    <Card.Body>
                        <Card.Title>National Nutrition Mission</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">POSHAN Abhiyaan</Card.Subtitle>
                        <Card.Text>
                            National Nutrition Mission (POSHAN Abhiyaan) seeks to ensure a “malnutrition free India” by 2022.POSHAN Abhiyaan which is India’s flagship program, envisages improving nutritional outcomes for children, adolescents, pregnant women and lactating mothers, is a step in the right direction.
                        </Card.Text>
                        <Card.Link href="https://vikaspedia.in/health/nrhm/national-health-programmes-1/national-nutrition-mission">Read more</Card.Link>

                    </Card.Body>
                </Card>


            </div>
        </div>







    )
}

export default Govtschemes