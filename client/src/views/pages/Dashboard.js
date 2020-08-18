import React, { useState, useEffect } from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';
import Profile from "./widgets/ProfileWidget";
import Flights from '../../assets/images/flights.gif';
import Straws from '../../assets/images/straws.gif';
import Bathtubs from '../../assets/images/bathtubs.gif';
import Car from '../../assets/images/car.gif';
import Coffee from '../../assets/images/coffee.gif';
import Plant from '../../assets/images/plant.gif';
import Tooltip from '../elements/tooltip';

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import NumericLabel from 'react-pretty-numbers';


let baseURL = 'https://rocky-basin-96559.herokuapp.com' || 'http://localhost:3003';

export default withAuthenticationRequired (function Dashboard () {

  let option = {
    'justification': 'L',
    'locales': 'en-US',
    'currency':false,
    'currencyIndicator': '',
    'percentage': false,
    'precision': 2,
    'wholenumber': null,
    'commafy': true,
    'cssClass': [''],
    'shortFormat': true,
    'shortFormatMinValue': 10000,
    'shortFormatPrecision': 1,
    'title': true
    };

    let noDecimal = {
      'justification': 'L',
      'locales': 'en-US',
      'currency':false,
      'currencyIndicator': '',
      'percentage': false,
      'precision': 0,
      'wholenumber': 'floor',
      'commafy': true,
      'cssClass': [''],
      'shortFormat': true,
      'shortFormatMinValue': 10000,
      'shortFormatPrecision': 1,
      'title': true
      };

  const { isAuthenticated, user } = useAuth0();
  const [userData, setData] = useState({});
  const [toggle, setToggle] = useState(1);

  const checkUser = () => {
      if (isAuthenticated)  {
          const authId = user.sub;
          const email = user.email;
          fetch(baseURL + '/api/user', {
              method: 'POST',
              body: JSON.stringify({ authId, email }),
              headers: {
                  'Content-Type': 'application/json'
              }
          }).then (res => res.json())
          .then (data => {
              setData(data)
              setToggle(0);
            }).catch(error => console.error({ 'Error': error }));
      }
  } 

  //Convert createdAt from DB to readable format to display in "member since"
  let months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December",
  ];

  let date = new Date(userData.createdAt);
  let day = date.getDate();
  let month = months[date.getMonth()];
  let year = date.getFullYear();

  let newDate = day+ ' ' +month+ ' ' +year

  //Check difference between today and the date above to display in "months earth positive"
  let now = new Date();

  let diffInMonths = (now.getFullYear() * 12 + now.getMonth()) - (date.getFullYear() * 12 + date.getMonth());

  // Calculate Tonnes of CO2 - ONCE PAYMENTS AND PLANS ARE SETUP THEY NEED TO BE ADDED INTO HERE FOR CORRECT CALC
  let totalCO2 = 0;
  let madsFootprint = 17;
  let yearlyCO2 = 17; // Need to multiply this by plan quantity once payments set up.
    
  //Business
    //Standard
    if (userData.plan == 'Standard') {
      let monthlyCO2 = madsFootprint/12;
      if (diffInMonths == 0) {
        totalCO2 = Math.round((monthlyCO2) * 100) / 100
      } else {
        totalCO2 = Math.round((diffInMonths * monthlyCO2) * 100) / 100
      }
    }
    
  // Calculate PLASTIC BOTTLES - ONCE PAYMENTS AND PLANS ARE SETUP THEY NEED TO BE ADDED INTO HERE FOR CORRECT CALC
  let totalPlasticBottles = 0;
    
  //Business
    //Standard
    if (userData.plan == 'Standard') {
      let monthlyBottles = 100;
      if (diffInMonths == 0) {
        totalPlasticBottles = monthlyBottles;
      } else {
        totalPlasticBottles = monthlyBottles * diffInMonths;
      }
    }
  
  //EQUIVALENTS
  
  //Calculate Flight Equivalent
    let avgRoundTrip = 932.7;
    let totalCO2Kg = totalCO2 * 1000;
    let flights = totalCO2Kg/avgRoundTrip;
  
  //Calculate Miles Driven Equivalent
    let avgMilesPerTonne = 2481;
    let miles = totalCO2 * avgMilesPerTonne;
  
  //Calculate Plant Base Living Equivalent
    let avgYearPlantBased = 0.8;
    let plantBased = totalCO2 * avgYearPlantBased;

  //Calculate straws equivalent
    let avgStrawWeight = 0.0005;
    let avgBottlesPerKg = 50;
    let straws = (totalPlasticBottles/avgBottlesPerKg)/avgStrawWeight;

  //Calculate Coffee Cups Equivalent
    let avgCoffeeCup = 0.0004;
    let coffeeCups = (totalPlasticBottles/avgBottlesPerKg)/avgCoffeeCup;
  
  //Calculate Bathtub Equivalent
    let avgBathTub = 520;
    let bathtubs = totalPlasticBottles/avgBathTub;

  useEffect(() => {
    console.log(userData)
    console.log(toggle)
      if (toggle == 1)  {
        checkUser();
      }
  });

      return (
        <div>
          <Row>
          <div className="home-hero" style={{ paddingLeft: '25px', paddingRight: '25px'}}>
                <h1 style={{ color: '#1a3066', paddingBottom: '0px'}}><strong>Welcome Back {userData.companyName}!</strong></h1>
                <h3 style={{ color: '#667380', paddingBottom: '20px'}}>You are having an amazing positive impact!</h3>
              </div>
          </Row>
          <Row>
            <Col md={6}>
              <Profile userData={userData}
                newDate={newDate}
                diffInMonths={diffInMonths}
                totalCO2={totalCO2}
                totalPlasticBottles={totalPlasticBottles}
                yearlyCO2={yearlyCO2}/>
            </Col>
            <Col md={3}>
              <Row><h5 style={{ color: '#667380', textAlign: 'center', width:'100%'}}>Your CO2 Offset is equivalent to:</h5></Row>
              <Row>
              <Card>
                <CardBody className="flex-column-center">
                  <img
                    src={Flights}
                    style={{ width: 100}}
                    alt="Flights"
                    aria-hidden={true}
                  />
                  <div className="m-l">
                    <h3 className="h3" style={{ color: '#1a3066' }}><strong><NumericLabel params={option}>{flights}</NumericLabel></strong></h3>
                    <p className="text-muted">
                      Roundtrip flights from London to Los Angeles worth of carbon saved.
                    </p>
                  </div>
                </CardBody>
              </Card>
              </Row>
              <Row>
              <Card>
              <CardBody className="flex-column-center">
                  <img
                    src={Car}
                    style={{ width: 100 }}
                    alt="Car"
                    aria-hidden={true}
                  />
                  <div className="m-l" style={{ color: '#1a3066', width: '100%' }}>
                    <h3 className="h3" style={{ color: '#1a3066', width: '100%' }}><strong><NumericLabel params={noDecimal}>{miles}</NumericLabel></strong></h3>
                    <p className="text-muted">
                      Miles driven in the average car.
                    </p>
                  </div>
                </CardBody>
              </Card>
              </Row>
              <Row>
              <Card>
                <CardBody className="flex-column-center">
                  <img
                    src={Plant}
                    style={{ width: 100 }}
                    alt="plant"
                    aria-hidden={true}
                  />
                  <div className="m-l">
                    <h3 className="h3" style={{ color: '#1a3066' }}><strong><NumericLabel params={option}>{plantBased}</NumericLabel></strong></h3>
                    <p className="text-muted">
                      Years worth of carbon savings from plant-based living.
                    </p>
                  </div>
                </CardBody>
              </Card>
              </Row>
            </Col>

            <Col md={3}>
              <Row><h5 style={{ color: '#667380', textAlign: 'center', width:'100%'}}>Your Plastic Offset is equivalent to:</h5></Row>
              <Row>
              <Card>
                <CardBody className="flex-column-center">
                  <img
                    src={Straws}
                    style={{ width: 100 }}
                    alt="Straws"
                    aria-hidden={true}
                  />
                  <div className="m-l">
                    <h3 className="h3" style={{ color: '#1a3066' }}><strong><NumericLabel params={noDecimal}>{straws}</NumericLabel></strong></h3>
                    <p className="text-muted">
                      Straws worth of plastic removed from landfill.                    </p>
                  </div>
                </CardBody>
              </Card>
              </Row>
              <Row>
              <Card>
                <CardBody className="flex-column-center">
                  <img
                    src={Coffee}
                    style={{ width: 100 }}
                    alt="Coffee"
                    aria-hidden={true}
                  />
                  <div className="m-l">
                    <h3 className="h3" style={{ color: '#1a3066' }}><strong><NumericLabel params={noDecimal}>{coffeeCups}</NumericLabel></strong></h3>
                    <p className="text-muted">
                      Disposable coffee cups worth of plastic saved from landfill.                    
                    </p>
                  </div>
                </CardBody>
              </Card>
              </Row>
              <Row>
              <Card>
                <CardBody className="flex-column-center">
                  <img
                    src={Bathtubs}
                    style={{ width: 100 }}
                    alt="Bathtubs"
                    aria-hidden={true}
                  />
                  <div className="m-l">
                    <h3 className="h3" style={{ color: '#1a3066' }}><strong><NumericLabel params={option}>{bathtubs}</NumericLabel></strong></h3>
                    <p className="text-muted">
                      Bathtubs of plastic bottles rescued from the sea.
                    </p>
                  </div>
                </CardBody>
              </Card>
              </Row>
            </Col>
          </Row>
        </div>
      );
    })
