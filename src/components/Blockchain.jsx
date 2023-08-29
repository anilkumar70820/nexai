import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from 'react-slick'
import hexagon_1 from '../assets/images/png/hexagon_1.png'
import hexagon_2 from '../assets/images/png/hexagon_2.png'
import hexagon_3 from '../assets/images/png/hexagon_3.png'
import hexagon_4 from '../assets/images/png/hexagon_4.png'

const Blockchain = () => {
    var blockchain = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        cssEase:"linear",
        pauseOnHover: false,
        speed: 2500,
        autoplaySpeed:0,
        slidesToShow: 2.999,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2.1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2.01,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                }
            },
        ]
    }
    return (
        <section className='bg-black overflow-hidden py-5' id='marketplace'>
            <Container className='mt-lg-5 pt-lg-5'>
                <h2 className='headings text-center mb-3' data-aos="zoom-in" data-aos-duration="1000">Blockchain & AI technology</h2>
                <p className='paragraphs text-center mb-5 pb-5' data-aos="fade-right" data-aos-duration="1000">Nexai is an advanced home assistant that will revolutionize the way we interact with our smart devices at home. Powered by <span className='d-lg-block'> sophisticated artificial intelligence, it leverages blockchain technology to offer a secure and efficient user experience.</span></p>
                <h3 className='ff_recharge fs_xmd text_ffffff fw-bold text-center mb-5 pb-3' data-aos="fade-left" data-aos-duration="1000">By building the software on blockchain, Nexai provides <span className='d-lg-block'>the following advantages</span></h3>
                <Slider {...blockchain} className='blockchain'>
                    <div className=' d-flex justify-content-center' data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200">
                        <img className='width_sm_100 cursor_pointer' src={hexagon_1} alt="blockchain" />
                    </div>
                    <div className='mt-lg-5 pt-lg-5 d-flex justify-content-center' data-aos="fade-down" data-aos-duration="2000" data-aos-delay="500">
                        <img className='pt-lg-3 width_sm_100 cursor_pointer' src={hexagon_2} alt="blockchain" />
                    </div>
                    <div className=' d-flex justify-content-center' data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800">
                        <img className='width_sm_100 cursor_pointer' src={hexagon_3} alt="blockchain" />
                    </div>
                    <div className='mt-lg-5 pt-lg-5 d-flex justify-content-center' data-aos="fade-down" data-aos-duration="2000" data-aos-delay="1100">
                        <img className='pt-lg-3 width_sm_100 cursor_pointer' src={hexagon_4} alt="blockchain" />
                    </div>
                </Slider>
            </Container>
        </section>
    )
}

export default Blockchain