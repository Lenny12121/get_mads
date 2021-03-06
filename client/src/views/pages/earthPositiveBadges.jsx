import React from 'react';
import { withAuthenticationRequired } from "@auth0/auth0-react";
import  { Card, CardBody, Row, Col } from 'reactstrap';
import { Check } from 'react-feather';
import Modal from '../elements/Modals';
import ModalDark from '../elements/ModalLight';
import ModalLight from '../elements/ModalDarkDynamic';
import ModalDarkRight from '../elements/ModalDarkRight';
import ModalLightRight from '../elements/ModalLightRight';
import ModalDarkRightBottom from '../elements/ModalDarkRightBottom';

function EarthPositiveBadges() {
    return (
        <div>
            <Row>
                <div className="home-hero">
                    <h1 style={{ color: '#1a3066', paddingBottom: '0px', paddingLeft: '25px', paddingRight: '25px'}}><strong>Earth Positive Badges</strong>
                    </h1>
                    <h3 style={{ color: '#667380', paddingBottom: '30px', paddingLeft: '25px', paddingRight: '25px'}}>Show the world your commitment to fighting the climate madness.</h3>
                </div>
            </Row>
            <Row>
            <Col md={6}>
                <Card className="thinCard" style={{ minHeight:'0px', flexDirection:'row' }}>
                    <CardBody style={{ padding: '0px' }}>
                        <h3 className="h3" style={{ color: '#1a3066', textAlign:'center', paddingBottom:'5px' }}><strong>How It Works</strong></h3>
                        <hr />
                        <Row className='centerRow'>
                            <div className="flexCenter">
                                <div className="circle">
                                    1
                                </div>
                                <p className="centerText" style={{color:'#667380'}}>
                                    Choose the badge you would like to display
                                </p>
                            </div>
                        </Row>
                        <hr />
                        <Row className='centerRow'>
                            <div className="flexCenter">
                                <div className="circle">
                                    2
                                </div>
                                <p className="centerText" style={{color:'#667380'}}>
                                    Copy the code
                                </p>
                            </div>
                        </Row>
                        <hr />
                        <Row className='centerRow'>
                            <div className="flexCenter">
                                <div className="circle">
                                    3
                                </div>
                                <p className="centerText" style={{color:'#667380'}}>
                                    Add the code into your website footer or onto any page
                                </p>
                            </div>
                        </Row>
                        <hr />
                        <Row className='centerRow'>
                            <div className="flexCenter">
                                <div className="circle">
                                    <Check />
                                </div>
                                <p className="centerText" style={{color:'#667380'}}>
                                    Display the badge & share your impact with the world!
                                </p>
                            </div>
                        </Row>                        
                    </CardBody>
                </Card>
            </Col>
            <Col md={3}>
            <Row>
                <Card className="movingCard">
                    <CardBody className="flex-column-center">
                        <img
                            //NEED TO ADD DYNAMIC WIDGET FROM API
                            src='https://lh3.googleusercontent.com/d/1RTnhaLxzOq_P_fnlt2HiLk0huw-2zScU'
                            style={{ width: '110%'}}
                            alt="Dark Badge"
                            aria-hidden={true}
                        />
                        <div className="m-l">
                            <Modal />
                        </div>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card className="movingCard" style={{backgroundColor:'#5d5d5d'}}>
                    <CardBody className="flex-column-center">
                        <img
                            //NEED TO ADD DYNAMIC WIDGET FROM API
                            src='https://lh3.googleusercontent.com/d/1RTnhaLxzOq_P_fnlt2HiLk0huw-2zScU'
                            style={{ width: '110%'}}
                            alt="Light Badge"
                            aria-hidden={true}
                        />
                        <div className="m-l">
                            <ModalDark />
                        </div>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card className="movingCard">
                    <CardBody className="flex-column-center">
                        <img
                            //NEED TO ADD DYNAMIC WIDGET FROM API
                            src='https://lh3.googleusercontent.com/d/1RTnhaLxzOq_P_fnlt2HiLk0huw-2zScU'
                            style={{ width: '110%'}}
                            alt="Dark Badge"
                            aria-hidden={true}
                        />
                        <div className="m-l">
                            <ModalLight />
                        </div>
                    </CardBody>
                </Card>
            </Row>
            </Col>
            <Col md={3}>
                <Row>
                    <Card className="movingCard" style={{backgroundColor:'#5d5d5d'}}>
                        <CardBody className="flex-column-center">
                            <img
                                //NEED TO ADD DYNAMIC WIDGET FROM API
                                src='https://lh3.googleusercontent.com/d/1RTnhaLxzOq_P_fnlt2HiLk0huw-2zScU'
                                style={{ width: '110%'}}
                                alt="Light Badge"
                                aria-hidden={true}
                            />
                            <div className="m-l">
                                <ModalDarkRight />
                            </div>
                        </CardBody>
                    </Card>
                </Row>
                <Row>
                <Card className="movingCard">
                    <CardBody className="flex-column-center">
                        <img
                            //NEED TO ADD DYNAMIC WIDGET FROM API
                            src='https://lh3.googleusercontent.com/d/1RTnhaLxzOq_P_fnlt2HiLk0huw-2zScU'
                            style={{ width: '110%'}}
                            alt="Dark Badge"
                            aria-hidden={true}
                        />
                        <div className="m-l">
                            <ModalLightRight />
                        </div>
                    </CardBody>
                </Card>
            </Row>
            <Row>
                <Card className="movingCard" style={{backgroundColor:'#5d5d5d'}}>
                    <CardBody className="flex-column-center">
                        <img
                            //NEED TO ADD DYNAMIC WIDGET FROM API
                            src='https://lh3.googleusercontent.com/d/1RTnhaLxzOq_P_fnlt2HiLk0huw-2zScU'
                            style={{ width: '110%'}}
                            alt="Light Badge"
                            aria-hidden={true}
                        />
                        <div className="m-l">
                            <ModalDarkRightBottom />
                        </div>
                    </CardBody>
                </Card>
            </Row>
            </Col>
        </Row>
        </div>
    )
}

export default withAuthenticationRequired (EarthPositiveBadges)
