import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import about_ai from '../assets/images/png/about_ai.png'

const AboutAi = () => {
    return (
        <section className='bg-black px-sm-5 px-2 pb-3 pt-lg-5 overflow-hidden' id='about'>
            <Container fluid className='about_ai_bg about_ai_bg2 py-5 mt-lg-5'>
                <Container>
                    <Row className='py-lg-5 my-lg-5 align-items-center'>
                        <Col xl={6} className='mb-5 mb-lg-0'>
                            <h2 className='headings mb-3' data-aos="fade-right" data-aos-duration="2000">What is NexAi?</h2>
                            <p className='paragraphs mb-2' data-aos="fade-right" data-aos-duration="2000">Beyond its convenience, Nexai revolutionizes the way you interact with <span className='d-lg-block'>your home environment. It enhances productivity, efficiency, and </span>overall well-being. From managing your schedules to transforming <span className='d-lg-block'>the way you experience smart living, Nexai opens up a world of</span> possibilities.</p>
                            <p className='paragraphs mb-4 pb-3' data-aos="fade-right" data-aos-duration="2000">Nexai's software can be installed on all your smart devices, including <span className='d-lg-block'>smartphones, computers, smart TVs, and kitchen appliances. It acts</span> as a centralized control hub, allowing you to manage and interact <span className='d-lg-block'> with all your devices seamlessly. Whether it's adjusting the</span>temperature, turning on appliances, or even accessing files on your <span className='d-lg-block'> home computer from anywhere, Nexai empowers you with effortless</span> control.</p>
                            <div data-aos="fade-right" data-aos-duration="2000"><button className='buttons'>Learn More</button></div>
                        </Col>
                        <Col xl={6}>
                            <div className='d-flex justify-content-center position-relative' data-aos="zoom-in" data-aos-duration="2000">
                                <img className='w-75 width_sm_100' src={about_ai} alt="Ai" />
                                <div className="blur_ellipse about_ellipse d-sm-block d-none"></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>)
}

export default AboutAi