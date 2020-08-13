import React from 'react';
import { Row, Card } from 'reactstrap';
import Sun from '../../../assets/images/sun.gif';
import World from '../../../assets/images/world.gif';
import Cloud from '../../../assets/images/cloud.gif';
import Whale from '../../../assets/images/whale.gif';

export default function ProfileWidget() {
  return (
    <Card body>
      <div className="text-center">
        <div className="m-b">
          <img src={Sun} style={{ width: 180 }} className="b-circle" alt="profile" />
        </div>
        <div>
          <h2 className="h3" style={{ color: '#1a3066' }}>Company Name</h2>
          <div className="h5 text-muted">Member Since: March 30, 2020</div>
          <hr />
          <Row className="text-center m-b">
              <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', paddingLeft: '50px' }} className="align-middle">
              <img src={ World } alt="World" style={{ width: 70, paddingRight: '5px' }} ></img>

              <h3 style={{ color: '#1a3066', paddingRight: '7px', paddingLeft: '7px' }}><strong>5</strong></h3>
              <div className="text-muted" style={{ paddingBottom: '3px' }}>Months Earth Positive</div>
              </div>
          </Row>
          <hr />
          <Row className="text-center m-b">
              <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', paddingLeft: '50px' }} className="align-middle">
              <img src={ Cloud } alt="World" style={{ width: 70, paddingRight: '5px' }} ></img>

              <h3 style={{ color: '#1a3066', paddingRight: '7px', paddingLeft: '7px' }}><strong>26.7</strong></h3>
              <div className="text-muted" style={{ paddingBottom: '3px' }}>Tonnes of CO2 removed</div>
              </div>
          </Row>
          <hr />
          <Row className="text-center m-b">
              <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', paddingLeft: '50px' }} className="align-middle">
              <img src={ Whale } alt="World" style={{ width: 70, paddingRight: '5px' }} ></img>

              <h3 style={{ color: '#1a3066', paddingRight: '7px', paddingLeft: '7px' }}><strong>1,560</strong></h3>
              <div className="text-muted" style={{ paddingBottom: '3px' }}>Plastic bottles prevented from entering the ocean</div>
              </div>
          </Row>
        </div>
      </div>
    </Card>
  );
}
