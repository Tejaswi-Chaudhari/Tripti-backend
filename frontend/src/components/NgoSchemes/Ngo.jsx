import React from 'react'
import './ngo.css'
import logoNgo1 from "../../media/logoNgo1.jpg"
import logongo2 from "../../media/logongo2.jpg"
import logoNgo3 from "../../media/logoNgo3.jpg"
import logoNgo4 from "../../media/logoNgo4.jpg"
import logoNgo5 from "../../media/logoNgo5.jpg"

const Ngo = () => {
    return (
        <div class="ngo-container">
            <div>
                <h1 class="ngo-el">
                 NGOs battling hunger
                </h1>
            </div>

            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={logoNgo1} class="img-fluid rounded-start logo-el" alt="..."/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Akshaya Patra Foundation</h5>
                            <p class="card-text">The Akshaya Patra Foundation is an NGO that works to eliminate classroom hunger by implementing the Mid-Day Meal Scheme in the government government-aided schools.Since 2000, Akshaya Patra has been concerting all its efforts towards providing fresh and nutritious meals to children on every single school day.</p>
                            <prev class="card-text">For more information <a href="https://www.akshayapatra.org/" target="_blank" rel="noopener noreferrer">click here</a></prev>
                        </div>
                    </div>
                </div>
            </div>


            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={logongo2} class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Feeding India</h5>
                            <p class="card-text">Feeding India by Zomato continues to work towards its joint mission of ‘better food for more people’ and ‘zero hunger’ to take the dream of ending hunger a step closer to reality With a network of 26,000+ volunteers across 100+ cities in India,</p>
                            <prev class="card-text">For more information <a href="https://www.feedingindia.org/"  target="_blank" rel="noopener noreferrer">click here</a></prev>
                        </div>
                    </div>
                </div>
            </div>
            

            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={logoNgo3} class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">India Food Banking Network</h5>
                            <p class="card-text">The India Food Banking Network (IFBN) is evolving an ecosystem for food security interventions to support thousands of feeding programmes in India by bringing the government, private sector and NGOs together to fight hunger and malnutrition in India.</p>
                            <prev class="card-text">For more information <a href="https://www.indiafoodbanking.org/" target="_blank" rel="noopener noreferrer">click here</a></prev>
                        </div>
                    </div>
                </div>
            </div>


            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={logoNgo4} class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">MCKS Food for the Hungry Foundation Delhi</h5>
                            <p class="card-text">A world free from hunger
                                MCKS Food for the Hungry Foundation Delhi, is a not for profit organization works towards reaching out with food to the hungry and empowering them with skills to move from despair to hope.</p>
                            <prev class="card-text">For more information <a href="https://mcksfood.com/" target="_blank" rel="noopener noreferrer">click here</a></prev>
                        </div>
                    </div>
                </div>
            </div>


            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={logoNgo5} class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Smile Foundation</h5>
                            <p class="card-text">Smile Foundation is a national level development organisation directly benefitting over 400,000 children and their families every year, through 200 welfare projects on education, healthcare, livelihood and women empowerment, in more than 950 remote villages and slums across 25 states of India.Their initiative also aims to sensitize the teachers and families on the need of proper nutrition.</p>
                            <prev class="card-text">For more information <a href="https://www.smilefoundationindia.org/plate-half-full-uny/?utm_source=Google&utm_medium=Smart_ads&utm_campaign=hunger&utm_id=Unyscape&gclid=EAIaIQobChMIqpmq74i68wIVXJNmAh2PPAD5EAAYASAAEgIilfD_BwE" target="_blank" rel="noopener noreferrer">click here</a></prev>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Ngo