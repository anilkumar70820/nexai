import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import management from '../assets/images/svg/file_management.svg'
import monitoring from '../assets/images/svg/monitoring.svg'

const UniqueFeature = () => {
    return (
        <section className='px-5 bg-black pt-5' id='nexchat'>
            <Container fluid className='unique_bg mt-lg-5'>
                <Container className='py-3'>
                    <h2 className='fs_xl fw-bold ff_recharge text-center text_ffffff mb-3' data-aos="fade-left" data-aos-duration="1000">Unique features</h2>
                    <p className='fs_xsm ff_poppins fw-normal text_ffffff opacity-75 text-center' data-aos="fade-right" data-aos-duration="1000">ability to engage in natural, fluent conversations <span className='d-md-block'>in over 15 languages,</span></p>
                    <div className='me-0 features_h overflow-y-scroll'>
                        <Row className='mt-5 pt-3 w-100 me-0'>
                            <Col md={6} className='d-flex justify-content-center justify-content-md-start mb-5 mb-md-0 ps-md-4'>
                                <div className='features_cards' data-aos="zoom-in" data-aos-duration="1000">
                                    <img className='mb-4' src={management} alt="management" />
                                    <h2 className='fs_xmd mb-2 ff_recharge fw-bold text_000000'>Remote Access and File Management</h2>
                                    <p className='mb-0 fs_xsm fw-normal text_0B0A0A ff_poppins'> Imagine you're at work, and you realize you forgot to bring an important file stored on your desktop computer at home. No worries! Simply open the Nexai app on your phone, initiate a call with Nexai, and request access to your computer. </p>
                                </div>
                            </Col>
                            <Col md={6}></Col>
                            <Col md={6}></Col>
                            <Col md={6} className='d-flex justify-content-md-end justify-content-center mt_90 mb-5 mb-md-0'>
                                <div className='features_cards' data-aos="zoom-in" data-aos-duration="1000">
                                    <img className='mb-4' src={monitoring} alt="monitoring" />
                                    <h2 className='fs_xmd mb-2 ff_recharge fw-bold text_000000'>Real-time Home <span className='d-block'>Monitoring</span> </h2>
                                    <p className='mb-0 fs_xsm fw-normal text_0B0A0A ff_poppins'>While you're out with your family, you may wonder if you remembered to turn off the stove. Thanks to Nexai, this is no longer a concern. Using the Nexai app, you can initiate a video call with Nexai and activate the mini drone stationed in your home.   </p>
                                </div>
                            </Col>
                            <Col md={6} className=' mt_90 justify-content-center justify-content-md-start d-flex mb-5 mb-md-0 ps-md-4'>
                                <div className='features_cards'>
                                    <img className='mb-4' src={management} alt="management" />
                                    <h2 className='fs_xmd mb-2 ff_recharge fw-bold text_000000'>Real-time Home Monitoring</h2>
                                    <p className='mb-0 fs_xsm fw-normal text_0B0A0A ff_poppins'> Imagine you're at work, and you realize you forgot to bring an important file stored on your desktop computer at home. No worries! Simply open the Nexai app on your phone, initiate a call with Nexai, and request access to your computer. </p>
                                </div>
                            </Col>
                            <Col md={6}></Col>
                            <Col md={6}></Col>
                            <Col md={6} className='d-flex justify-content-md-end justify-content-center mt_90  mb-4 mb-md-0'>
                                <div className='features_cards'>
                                    <img className='mb-4' src={management} alt="management" />
                                    <h2 className='fs_xmd mb-2 ff_recharge fw-bold text_000000'>Remote Access and File Management</h2>
                                    <p className='mb-0 fs_xsm fw-normal text_0B0A0A ff_poppins'> Imagine you're at work, and you realize you forgot to bring an important file stored on your desktop computer at home. No worries! Simply open the Nexai app on your phone, initiate a call with Nexai, and request access to your computer. </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Container>
        </section>
    )
}

export default UniqueFeature