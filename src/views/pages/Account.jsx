import React, { useState, useEffect } from 'react';
import { Row, Card } from 'reactstrap';
import Sun from '../../assets/images/sun.gif';
import World from '../../assets/images/world.gif';
import Cloud from '../../assets/images/cloud.gif';
import Whale from '../../assets/images/whale.gif';
import NumericLabel from 'react-pretty-numbers';

import Uploader from '../../vibe/components/Uploader';


export default function Account(props) {

    return (
        <Card body>
            
            <Uploader />

            <div className="text-center">
                <div className="m-b">
                    <img src={Sun} style={{ width: 180 }} className="b-circle" alt="profile" />
                </div>
            <div>
            <hr />
            <Row className="text-center m-b">
                <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', paddingLeft: '50px' }} className="align-middle">
                <img src={ World } alt="World" style={{ width: 70, paddingRight: '5px' }} ></img>

                <div className="text-muted" style={{ paddingBottom: '3px' }}>Months Earth Positive</div>
              </div>
          </Row>
          <hr />
        </div>
      </div>
    </Card>
  );
}
