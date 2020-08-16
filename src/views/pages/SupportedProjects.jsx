import React from 'react';
import  { Card, CardBody, Row, Col } from 'reactstrap';

function SupportedProjects() {
    return (
        <div>

            <Row>

                <Col>
                    <Card>
                        <CardBody className="flex-column-center">
                            <img
                                src=""
                                style={{ width: 100}}
                                alt="Flights"
                                aria-hidden={true}
                            />
                            <div className="m-l">
                                <h3 className="h3" style={{ color: '#1a3066' }}><strong></strong></h3>
                                <p className="text-muted">
                                    Roundtrip flights from London to Los Angeles worth of carbon saved.
                                </p>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardBody className="flex-column-center">
                            <img
                                src=""
                                style={{ width: 100}}
                                alt="Flights"
                                aria-hidden={true}
                            />
                            <div className="m-l">
                                <h3 className="h3" style={{ color: '#1a3066' }}><strong></strong></h3>
                                <p className="text-muted">
                                    Roundtrip flights from London to Los Angeles worth of carbon saved.
                                </p>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        
        </div>
    )
}

export default SupportedProjects
