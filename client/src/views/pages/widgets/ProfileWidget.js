import React from 'react';
import { Row, Card, Col } from 'reactstrap';
import Sun from '../../../assets/images/sun.gif';
import World from '../../../assets/images/world.gif';
import Cloud from '../../../assets/images/cloud.gif';
import Whale from '../../../assets/images/whale.gif';
import NumericLabel from 'react-pretty-numbers';
import Tooltip from '../../elements/tooltip';
import TooltipCO2 from '../../elements/tooltipCO2';
import TooltipPlastic from '../../elements/tooltipPlastic';
import { Loader } from '../../../vibe';

export default function ProfileWidget(props) {

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
      'wholenumber': null,
      'commafy': true,
      'cssClass': [''],
      'shortFormat': true,
      'shortFormatMinValue': 10000,
      'shortFormatPrecision': 1,
      'title': true
      };

  return (
    <Card body>
      <div className="text-center">
        <div className="m-b">
          {
            props.toggle === 1
            ? <Loader type="puff"/>
            : <img src={ props.userData.imageURL ? props.userData.imageURL : Sun} style={{ width: 180 }} className="b-circle" alt="profile" />
          }
        </div>
        <div>
          {
            props.toggle === 1
            ? <Loader type="puff"/>
            : <h2 className="h3" style={{ color: '#1a3066' }}>{props.userData.companyName}</h2>
          }
          {
            props.toggle === 1
            ? <Loader type="puff"/>
            : <div className="h5 text-muted">Member Since: {props.newDate}</div>
          }
          <hr />
          <Row className="text-center m-b">
            <Col>
              <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', paddingLeft: '50px' }} className="align-middle">
              <img src={ World } alt="World" style={{ width: 70, paddingRight: '5px' }} ></img>
              {
                props.toggle === 1
                ? <Loader type="puff"/>
                : <h3 style={{ color: '#1a3066', paddingRight: '7px', paddingLeft: '7px' }}><strong>{props.diffInMonths}</strong></h3>
              }
              <div className="text-muted" style={{ paddingBottom: '3px' }}>Months Earth Positive</div>
              </div>
            </Col>
            <Col md={3} style={{ textAlign: 'left', display: 'flex', alignItems: 'center' }}>
              <Tooltip />
            </Col>
          </Row>
          <hr />
          <Row className="text-center m-b">
            <Col>
              <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', paddingLeft: '50px' }} className="align-middle">
              <img src={ Cloud } alt="World" style={{ width: 70, paddingRight: '5px' }} ></img>

              <h3 style={{ color: '#1a3066', paddingRight: '7px', paddingLeft: '7px' }}><strong><NumericLabel params={option}>{props.totalCO2}</NumericLabel></strong></h3>
              <div className="text-muted" style={{ paddingBottom: '3px' }}>Tonnes of CO2 removed</div>
              </div>
            </Col>
            <Col md={3} style={{ textAlign: 'left', display: 'flex', alignItems: 'center' }}>
              <TooltipCO2 yearlyCO2={props.yearlyCO2}/>
            </Col>
          </Row>
          <hr />
          <Row className="text-center m-b">
            <Col>
              <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', paddingLeft: '50px' }} className="align-middle">
              <img src={ Whale } alt="World" style={{ width: 70, paddingRight: '5px' }} ></img>

              <h3 style={{ color: '#1a3066', paddingRight: '7px', paddingLeft: '7px' }}><strong><NumericLabel params={noDecimal}>{props.totalPlasticBottles}</NumericLabel></strong></h3>
              <div className="text-muted" style={{ paddingBottom: '3px' }}>Plastic bottles prevented from entering the ocean</div>
              </div>
            </Col>
            <Col md={3} style={{ textAlign: 'left', display: 'flex', alignItems: 'center' }}>
              <TooltipPlastic yearlyCO2={props.yearlyCO2}/>
            </Col>
          </Row>
        </div>
      </div>
    </Card>
  );
}
