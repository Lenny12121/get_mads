import React from 'react';
import { withAuthenticationRequired } from "@auth0/auth0-react";
import  { Card, CardBody, Row, Col } from 'reactstrap';
import Malawi from '../../assets/images/Malawi.jpg';
import Water from '../../assets/images/water.jpg';
import Trees from '../../assets/images/trees.jpg';
import Chile from '../../assets/images/electricity.jpg';



function SupportedProjects() {
    return (
        <div>
            <Row>
                <div className="home-hero">
                    <h1 style={{ color: '#1a3066', paddingBottom: '20px', paddingLeft: '25px', paddingRight: '25px'}}><strong>Projects That Fight The Madness </strong>
                    </h1>
                </div>
            </Row>
            <Row>
                <Col className="projectCard">
                    <a href="https://www.getmads.com/journal/un-project-9933-improved-cook-stoves-in-malawi" target="_blank" rel="noopener noreferrer">
                    <Card className="movingCard">
                        <CardBody className="flex-column-center" style={{ padding: '0px' }}>
                            <img className="projectsImage"
                                src={Malawi}
                                alt="Cookstoves in Malawi"
                                aria-hidden={true}
                            />
                            <div className="m-l"  style={{marginLeft:'0px'}}>
                                <h3 className="h3" style={{ color: '#1a3066' }}><strong>UN Project 9933: Improved Cook Stoves in Malawi</strong></h3>
                                <p className="text-muted">
                                    Helping rural families switch to safer, cleaner, more efficient cookstoves.
                                </p>
                            </div>
                        </CardBody>
                    </Card>
                    </a>
                </Col >
                <Col className="projectCard">
                <a href="https://www.getmads.com/journal/the-plastic-bank-turning-plastic-pollution-into-empowering-income" target="_blank" rel="noopener noreferrer">
                    <Card className="movingCard">
                        <CardBody className="flex-column-center" style={{ padding: '0px' }}>
                            <img className="projectsImage"
                                src={Water}
                                alt="Plastic Bank"
                                aria-hidden={true}
                            />
                            <div className="m-l"  style={{marginLeft:'0px'}}>
                                <h3 className="h3" style={{ color: '#1a3066' }}><strong>UN Plastic Bank: Transforming Plastic Waste Into Value
                                </strong></h3>
                                <p className="text-muted">
                                    Fighting ocean pollution by ethically recovering & recycling ocean-bound plastics.
                                </p>
                            </div>
                        </CardBody>
                    </Card>
                    </a>
                </Col >
                <Col className="projectCard">
                <a href="https://www.getmads.com/journal/un-project-5016-reforestation-in-rural-india" target="_blank" rel="noopener noreferrer">
                    <Card className="movingCard">
                        <CardBody className="flex-column-center" style={{ padding: '0px' }}>
                            <img className="projectsImage"
                                src={Trees}
                                alt="Planting trees in India"
                                aria-hidden={true}
                            />
                            <div className="m-l" style={{marginLeft:'0px'}}>
                                <h3 className="h3" style={{ color: '#1a3066' }}><strong>UN UN Project 5016: Reforestation in Rural India</strong></h3>
                                <p className="text-muted">
                                    Supporting reforestation projects and economic opportunity in rural East India.
                                </p>
                            </div>
                        </CardBody>
                    </Card>
                    </a>
                </Col>
            </Row>

            <Row>
                <Col className="projectCard">
                    <a href="https://www.getmads.com/journal/un-project-6848-hydroelectric-energy-in-chile" target="_blank" rel="noopener noreferrer">
                        <Card className="movingCard">
                            <CardBody className="flex-column-center" style={{ padding: '0px' }}>
                                <img className="projectsImage"
                                    src={Chile}
                                    alt="Hydroelectricity Chile"
                                    aria-hidden={true}
                                />
                                <div className="m-l"  style={{marginLeft:'0px'}}>
                                    <h3 className="h3" style={{ color: '#1a3066' }}><strong>UN Project 6848: Hydroelectric Energy in Chile</strong></h3>
                                    <p className="text-muted">
                                        Transitioning Chile to Renewable Energy with Hydroelectric Power.
                                    </p>
                                </div>
                            </CardBody>
                        </Card>
                        </a>
                    </Col>
            </Row>
        
        </div>
    )
}

export default withAuthenticationRequired (SupportedProjects)
