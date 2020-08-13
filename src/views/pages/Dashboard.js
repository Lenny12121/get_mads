  import React, { Component } from 'react';
  import bootstrapFeature from '../../assets/images/bootstrap-feature.svg';
  import { Card, CardBody, Row, Col } from 'reactstrap';
  import Profile from "./widgets/ProfileWidget";
  import Flights from '../../assets/images/flights.gif';
  import Straws from '../../assets/images/straws.gif';
  import Bathtubs from '../../assets/images/bathtubs.gif';
  import Car from '../../assets/images/car.gif';
  import Coffee from '../../assets/images/coffee.gif';
  import Plant from '../../assets/images/plant.gif';

  class Dashboard extends Component {
    render() {
      const heroStyles = {
        padding: '20px 0 40px',
        color: '#1a3066'
      };

      return (
        <div>
          <Row>
            <Col md={6}>
              <div className="home-hero" style={heroStyles}>
                <h1>Welcome Back (Company Name)!</h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={5}>
              <Profile />
            </Col>
            
            <Col md={3}>
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
                    <h3 className="h3" style={{ color: '#1a3066' }}><strong>29.6</strong></h3>
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
                    <h3 className="h3" style={{ color: '#1a3066', width: '100%' }}><strong>68,475.6</strong></h3>
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
                    <h3 className="h3" style={{ color: '#1a3066' }}><strong>22.1</strong></h3>
                    <p className="text-muted">
                      Years worth of carbon savings from plant-based living.
                    </p>
                  </div>
                </CardBody>
              </Card>
              </Row>
            </Col>

            <Col md={3}>
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
                    <h3 className="h3" style={{ color: '#1a3066' }}><strong>62,400</strong></h3>
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
                    <h3 className="h3" style={{ color: '#1a3066' }}><strong>7,800</strong></h3>
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
                    <h3 className="h3" style={{ color: '#1a3066' }}><strong>3</strong></h3>
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
    }
  }

  export default Dashboard;
