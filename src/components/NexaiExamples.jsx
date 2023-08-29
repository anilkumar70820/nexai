import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from 'react-slick'
import ring from '../assets/images/svg/left_ring.svg'

const NexaiExamples = () => {
    var example = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        cssEase: "linear",
        autoplaySpeed: 0,
        pauseOnHover: false,
        speed: 2500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
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
    var example2 = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        cssEase: "linear",
        autoplaySpeed: 0,
        rtl: true,
        pauseOnHover: false,
        speed: 2500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
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
    var example3 = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        cssEase: "linear",
        autoplaySpeed: 0,
        pauseOnHover: false,
        speed: 2500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
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
        <section className='bg-black py-lg-5 pb-5 position-relative'>
            <img className='ai_example_ring d-sm-block d-none' src={ring} alt="ring" />
            <Container className='mt-lg-5 pt-lg-5'>
                <h2 className='headings text-center' data-aos="fade-left" data-aos-duration="1000">NexAi does all this. And more.</h2>
                <p className='paragraphs text-center mb-5 pb-5' data-aos="fade-right" data-aos-duration="1000">Nexai is an advanced home assistant that will revolutionize the way we interact with our smart devices at home. <span className='d-lg-block'>Powered by sophisticated artificial intelligence, it leverages blockchain technology to offer a secure and efficient </span>user experience.</p>
            </Container>
            <Slider {...example}>
                <div className=' ps-4 d-flex justify-content-center py-4'>
                    <div className='d-flex justify-content-center align-items-center ai_examples'>
                        <h2 className='fs_md fw-bold text_ffffff ff_recharge mb-0'>NexAi, Turn on <span className='d-block'>light</span></h2>
                    </div>
                </div>
                <div className=' ps-4 d-flex justify-content-center py-4'>
                    <div className='d-flex justify-content-center align-items-center ai_examples'>
                        <h2 className='fs_md fw-bold text_ffffff ff_recharge mb-0'>NexAi, set
                            <span className='d-block'>alarm of 5:00</span>am</h2>
                    </div>
                </div>
                <div className=' ps-4 d-flex justify-content-center py-4'>
                    <div className='d-flex justify-content-center align-items-center ai_examples'>
                        <h2 className='fs_md fw-bold text_ffffff ff_recharge mb-0'>NexAi, measure  <span className='d-block'>this table</span></h2>
                    </div>
                </div>
                <div className=' ps-4 d-flex justify-content-center py-4'>
                    <div className='d-flex justify-content-center align-items-center ai_examples'>
                        <h2 className='fs_md fw-bold text_ffffff ff_recharge mb-0'>NexAi, Turn on <span className='d-block'>music</span></h2>
                    </div>
                </div>
                <div className=' ps-4 d-flex justify-content-center py-4'>
                    <div className='d-flex justify-content-center align-items-center ai_examples'>
                        <h2 className='fs_md fw-bold text_ffffff ff_recharge mb-0'>NexAi, Turn on <span className='d-block'>torch</span></h2>
                    </div>
                </div>
            </Slider>
            <Slider {...example2}>
                <div className=' ps-4 d-flex justify-content-center py-4'>
                    <div className='d-flex justify-content-center align-items-center ai_examples'>
                        <h2 className='fs_md fw-bold text_ffffff ff_recharge mb-0'>NexAi, measure <span className='d-block'>this table</span></h2>
                    </div>
                </div>
                <div className=' ps-4 d-flex justify-content-center py-4'>
                    <div className='d-flex justify-content-center align-items-center ai_examples'>
                        <h2 className='fs_md fw-bold text_ffffff ff_recharge mb-0'>NexAi, trun on
                            <span className='d-block'>music</span></h2>
                    </div>
                </div>
                <div className=' ps-4 d-flex justify-content-center py-4'>
                    <div className='d-flex justify-content-center align-items-center ai_examples'>
                        <h2 className='fs_md fw-bold text_ffffff ff_recharge mb-0'>NexAi, trun on <span className='d-block'>light</span></h2>
                    </div>
                </div>
                <div className=' ps-4 d-flex justify-content-center py-4'>
                    <div className='d-flex justify-content-center align-items-center ai_examples'>
                        <h2 className='fs_md fw-bold text_ffffff ff_recharge mb-0'>NexAi, is the front<span className='d-block'>door locked?</span></h2>
                    </div>
                </div>
                <div className=' ps-4 d-flex justify-content-center py-4'>
                    <div className='d-flex justify-content-center align-items-center ai_examples'>
                        <h2 className='fs_md fw-bold text_ffffff ff_recharge mb-0'>NexAi, Turn on <span className='d-block'>TV</span></h2>
                    </div>
                </div>
            </Slider>
            <Slider {...example3}>
                <div className=' ps-4 d-flex justify-content-center py-4'>
                    <div className='d-flex justify-content-center align-items-center ai_examples'>
                        <h2 className='fs_md fw-bold text_ffffff ff_recharge mb-0'>NexAi, Turn on <span className='d-block'>TV</span></h2>
                    </div>
                </div>
                <div className=' ps-4 d-flex justify-content-center py-4'>
                    <div className='d-flex justify-content-center align-items-center ai_examples'>
                        <h2 className='fs_md fw-bold text_ffffff ff_recharge mb-0'>NexAi, trun on
                            <span className='d-block'>music</span></h2>
                    </div>
                </div>
                <div className=' ps-4 d-flex justify-content-center py-4'>
                    <div className='d-flex justify-content-center align-items-center ai_examples'>
                        <h2 className='fs_md fw-bold text_ffffff ff_recharge mb-0'>NexAi, trun on  <span className='d-block'>AC</span></h2>
                    </div>
                </div>
                <div className=' ps-4 d-flex justify-content-center py-4'>
                    <div className='d-flex justify-content-center align-items-center ai_examples'>
                        <h2 className='fs_md fw-bold text_ffffff ff_recharge mb-0'>NexAi, Turn on <span className='d-block'>music</span></h2>
                    </div>
                </div>
                <div className=' ps-4 d-flex justify-content-center py-4'>
                    <div className='d-flex justify-content-center align-items-center ai_examples'>
                        <h2 className='fs_md fw-bold text_ffffff ff_recharge mb-0'>NexAi, is front <span className='d-block'>door locked?</span></h2>
                    </div>
                </div>
            </Slider>
        </section>
    )
}

export default NexaiExamples