import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Ai from '../assets/images/png/ai_img.png'

const AiAssistant = () => {
  return (
    <section className='bg_040404 py-5 position-relative overflow-hidden' id='home'>
      <div className="ai_assistant_ellipse blur_ellipse d-sm-block d-none"></div>
      <Container className='mb-lg-3 mt-lg-5 pt-lg-5'>
        <Row className=' align-items-center'>
          <Col lg={6} className='mb-5 mb-lg-0' data-aos="zoom-in" data-aos-duration="1000">
            <div className='position-relative'><img className='w-100' src={Ai} alt="ai_img" />
            <div className='ai_assistant_ellipse2 blur_ellipse_ai'></div></div>
          </Col>
          <Col lg={6} className='d-flex justify-content-lg-end'>
            <div>
              <h2 className='headings mb-3' data-aos='fade-left' data-aos-duration="1000">Ai-Powered Home <span className='d-lg-block'>Assistant</span> </h2>
              <p className='paragraphs mb-0' data-aos='fade-left' data-aos-duration="1000">Nexai is an advanced AI-powered home assistant that brings <span className='d-lg-block'>the future to your fingertips. With its ability to engage in natural,</span> fluent conversations in over 15 languages,</p>
              <p className='paragraphs mb-0' data-aos='fade-left' data-aos-duration="1000">Nexai offers an incredibly futuristic experience. It can take the <span className='d-lg-block'> initiative to ask about your day, schedule meetings, provide</span> timely reminders</p>
              <p className='paragraphs mb-4 pb-3' data-aos='fade-left' data-aos-duration="1000"><span className='d-lg-block'>assist with cooking by suggesting ingredients, track your </span>fitness and nutrition goals, and even handle bill payments.</p>
              <div data-aos="fade-left" data-aos-duration="1000"><button className='buttons'>Learn More</button></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AiAssistant