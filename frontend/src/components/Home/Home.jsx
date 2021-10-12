import { React, useEffect } from 'react'
import './home.css'
import home1 from '../../media/Home.gif'
import blob1 from '../../media/blob1.svg'
import blob2 from '../../media/blob2.svg'
import blob3 from '../../media/blob3.svg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CountUp from 'react-countup';



const Home = () => {

    return (
        <div>
            <img src={blob1} alt="blob" className="home-blob1"></img>
            <img src={blob2} alt="blob" className="home-blob2"></img>
            <img src={blob3} alt="blob" className="home-blob3"></img>
            <Container>
                <Row>
                    <Col className="home-left">
                        <h1 className="home-h">Tripti</h1>
                        <p className="home-txt">We strongly believe that food is a <strong>Necessity</strong> and not a <strong>luxury</strong></p>
                        <p className="home-txt1">We are glad that you joined us in our mission to <strong>#FeedIndia</strong></p>
                    </Col>
                    <Col>
                        <img src={home1} alt="img" className="home-img1"></img>
                    </Col>
                </Row>
            </Container>

            <div>
                <div class="container">
                    <div class="row ">
                        <div class="col-xl-6 col-lg-8 line-div">
                            <h2 class="head-text">Key facts about hunger in India</h2>

                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <div class="line-steps ">
                                <div class="line-step">
                                    <div class="line-content">
                                        <div class="inner-circle"></div>
                                        <p class="h6 mt-3 mb-1">14%</p>
                                        <p class="h6 text-muted mb-0 mb-lg-0">Total population is undernourished</p>
                                    </div>
                                </div>
                                <div class="line-step">
                                    <div class="line-content">
                                        <div class="inner-circle"></div>
                                        <p class="h6 mt-3 mb-1">20%</p>
                                        <p class="h6 text-muted mb-0 mb-lg-0">Children under 5 are underweight</p>
                                    </div>
                                </div>
                                <div class="line-step">
                                    <div class="line-content">
                                        <div class="inner-circle"></div>
                                        <p class="h6 mt-3 mb-1">34.7%</p>
                                        <p class="h6 text-muted mb-0 mb-lg-0">Children under 5 years of age are stunted</p>
                                    </div>
                                </div>
                                <div class="line-step">
                                    <div class="line-content">
                                        <div class="inner-circle"></div>
                                        <p class="h6 mt-3 mb-1">51.4%</p>
                                        <p class="h6 text-muted mb-0 mb-lg-0">Women in the reproductive age are anaemic</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
