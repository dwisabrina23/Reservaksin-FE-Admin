import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import { GiLoveInjection } from 'react-icons/gi'
import { AiOutlineFieldTime } from 'react-icons/ai'
import { CgUserList } from 'react-icons/cg'
import { FaHospitalAlt } from 'react-icons/fa'
import './CardStatistik.css'

function CardStatistik() {
    return (
        // <div>
        <Container className='container-content'>
            <Row style={{width: '100%'}}>
                <Col style={{ marginTop:'2rem'}} md>
                    <Card className='card-style'>
                        {/* <Card.Header>Header</Card.Header> */}
                        <Card.Body className='card-style-body'>
                            <Row>
                                <Col className='col-icon' sm={1}>
                                    <div className='icon-circle'>
                                        {/* <div> */}
                                        <GiLoveInjection size={30} className='icon-style' />
                                        {/* </div> */}
                                    </div>
                                </Col>
                                <Col className='col-text' sm={2}>
                                    <span className='col-text-span'>Vaksin</span>
                                    <p className='col-text-p'>220</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>

                <Col style={{ marginTop:'2rem'}} md>
                    <Card className='card-style'>
                        {/* <Card.Header>Header</Card.Header> */}
                        <Card.Body className='card-style-body'>
                            <Row>
                                <Col className='col-icon' sm={1}>
                                    <div className='icon-circle'>
                                        {/* <div> */}
                                        <AiOutlineFieldTime size={36} className='icon-style' />
                                        {/* </div> */}
                                    </div>
                                </Col>
                                <Col className='col-text' sm={2}>
                                    <span className='col-text-span'>Session</span>
                                    <p className='col-text-p'>220</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>

                <Col style={{ marginTop:'2rem'}} md>
                    <Card className='card-style'>
                        {/* <Card.Header>Header</Card.Header> */}
                        <Card.Body className='card-style-body'>
                            <Row>
                                <Col className='col-icon' sm={1}>
                                    <div className='icon-circle'>
                                        {/* <div> */}
                                        <CgUserList size={33} className='icon-style' />
                                        {/* </div> */}
                                    </div>
                                </Col>
                                <Col className='col-text' sm={2}>
                                    <span className='col-text-span'>Pendaftar</span>
                                    <p className='col-text-p'>220</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>

                <Col style={{ marginTop:'2rem'}} md>
                    <Card className='card-style'>
                        {/* <Card.Header>Header</Card.Header> */}
                        <Card.Body className='card-style-body'>
                            <Row>
                                <Col className='col-icon' sm={1}>
                                    <div className='icon-circle'>
                                        {/* <div> */}
                                        <FaHospitalAlt size={33} className='icon-style' />
                                        {/* </div> */}
                                    </div>
                                </Col>
                                <Col className='col-text' sm={2}>
                                    <span className='col-text-span'>Faskes</span>
                                    <p className='col-text-p'>220</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container>
        // </div>
    )
}

export default CardStatistik
