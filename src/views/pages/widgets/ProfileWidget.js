import React, { useState, useEffect } from 'react';
import { Row, Card } from 'reactstrap';
import Sun from '../../../assets/images/sun.gif';
import World from '../../../assets/images/world.gif';
import Cloud from '../../../assets/images/cloud.gif';
import Whale from '../../../assets/images/whale.gif';

export default function ProfileWidget(props) {

  const [calcs, setcalcs] = useState({});

  const docalcs = () =>  {
    
  //Convert createdAt from DB to readable format to display in "member since"
  }
  let months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December",
  ];

  let date = new Date(props.userData.createdAt);
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
    
  //Business
    //Standard
    if (props.userData.plan == 'Standard') {
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
    if (props.userData.plan == 'Standard') {
      let monthlyBottles = 100;
      if (diffInMonths == 0) {
        totalPlasticBottles = Math.round((monthlyBottles) * 100) / 100
      } else {
        totalPlasticBottles = Math.round((monthlyBottles) * 100) / 100
      }
    }


  // useEffect(() => {
  //   if (props.userData.createdAt)  {
  //     checkCO2()
  //   }
  // });



  return (
    <Card body>
      <div className="text-center">
        <div className="m-b">
          <img src={Sun} style={{ width: 180 }} className="b-circle" alt="profile" />
        </div>
        <div>
          <h2 className="h3" style={{ color: '#1a3066' }}>{props.userData.companyName}</h2>
          <div className="h5 text-muted">Member Since: {newDate}</div>
          <hr />
          <Row className="text-center m-b">
              <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', paddingLeft: '50px' }} className="align-middle">
              <img src={ World } alt="World" style={{ width: 70, paddingRight: '5px' }} ></img>

              <h3 style={{ color: '#1a3066', paddingRight: '7px', paddingLeft: '7px' }}><strong>{diffInMonths}</strong></h3>
              <div className="text-muted" style={{ paddingBottom: '3px' }}>Months Earth Positive</div>
              </div>
          </Row>
          <hr />
          <Row className="text-center m-b">
              <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', paddingLeft: '50px' }} className="align-middle">
              <img src={ Cloud } alt="World" style={{ width: 70, paddingRight: '5px' }} ></img>

              <h3 style={{ color: '#1a3066', paddingRight: '7px', paddingLeft: '7px' }}><strong>{totalCO2}</strong></h3>
              <div className="text-muted" style={{ paddingBottom: '3px' }}>Tonnes of CO2 removed</div>
              </div>
          </Row>
          <hr />
          <Row className="text-center m-b">
              <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', paddingLeft: '50px' }} className="align-middle">
              <img src={ Whale } alt="World" style={{ width: 70, paddingRight: '5px' }} ></img>

               <h3 style={{ color: '#1a3066', paddingRight: '7px', paddingLeft: '7px' }}><strong>{totalPlasticBottles}</strong></h3>
              <div className="text-muted" style={{ paddingBottom: '3px' }}>Plastic bottles prevented from entering the ocean</div>
              </div>
          </Row>
        </div>
      </div>
    </Card>
  );
}
