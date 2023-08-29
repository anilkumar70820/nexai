import React from 'react'
import {Container } from 'react-bootstrap'
import ring from '../assets/images/svg/right_ring.svg'

const Utility = () => {
    return (
        <section className='bg-black py-lg-5 position-relative'>
            <img className='utility_ring d-sm-block d-none' src={ring} alt="ring" />
            <div className="blur_ellipse utility_ellipse d-sm-block d-none"></div>
            <Container className='pt-5 my-lg-5'>
                <div className=' d-flex flex-lg-row flex-column justify-content-between align-items-center mt-lg-5'>
                    <h2 className='headings mb-4 mb-lg-0' data-aos="fade-right" data-aos-duration="2000"><span className='d-block text_ffffff'>Ready to get started</span>
                        Talk to us Today </h2>
                        <div data-aos="fade-left" data-aos-duration="2000"><button className='buttons d-block'>Get Started</button></div>
                </div>
            </Container>
        </section>
    )
}

export default Utility