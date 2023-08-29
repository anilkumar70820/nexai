import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import nexai_token from '../assets/images/png/nexai_token.png'
import ring from '../assets/images/svg/right_ring.svg'
const NexaiToken = () => {
    return (
        <section className='bg-black pt-5 position-relative' id='tokens'>
            <div className="blur_ellipse tokens_ellipse d-sm-block d-none"></div>
            <div className="blur_ellipse tokens_ellipse2 d-sm-block d-none"></div>
            <img className='ai_token_ring' src={ring} alt="ring" />
            <Container className='mt-lg-5 pt-lg-5'>
                <h2 className='headings text-center mb-5' data-aos="fade-left" data-aos-duration="2000">NexAI Token & utility</h2>
                <Row className='align-items-center'>
                    <Col lg={5}>
                        <div className='d-flex justify-content-center' data-aos="zoom-in" data-aos-duration="2000"><img className='w-100' src={nexai_token} alt="Nexai_Token" /></div>
                    </Col>
                    <Col lg={7} className='h_512 overflow-y-scroll'>
                        <div className="timeline_container d-flex flex-column gap-5">
                            <div className='ms-5 ps-5 position-relative'>
                                <div className='timeline_dots'></div>
                                <h2 className='text_ffffff ff_recharge fw-bold fs_md mb-3' data-aos="fade-left" data-aos-duration="2000">Purchasing Nexai Products</h2>
                                <p className='paragraphs' data-aos="fade-left" data-aos-duration="2000">Nex AI tokens will be the primary currency for acquiring Nexai's <span className='d-lg-block'> extensive range of software solutions, hardware devices, including</span> drones and sensors, and other smart home products available on <span className='d-lg-block'>the Nexai marketplace. Users can confidently make purchases </span>using Nex tokens, enjoying the convenience and flexibility of a <span className='d-lg-block'>token-based payment system.</span></p>
                            </div>
                            <div className='ms-5 ps-5 position-relative'>
                                <div className='timeline_dots'></div>
                                <h2 className='text_ffffff ff_recharge fw-bold fs_md mb-3' data-aos="fade-left" data-aos-duration="2000">Accessing Exclusive Content</h2>
                                <p className='paragraphs' data-aos="fade-left" data-aos-duration="2000">By holding Nex AI tokens, users will gain privileged access to<span className='d-lg-block'>exclusive content within the Nexai platform. These tokens will</span> unlock premium features, advanced functionalities, and<span className='d-lg-block'>specialized services, enabling users to fully explore and enjoy the </span>enhanced capabilities of Nexai's ecosystem.</p>
                            </div>                 
                            <div className='ms-5 ps-5 position-relative'>
                                <div className='timeline_dots'></div>
                                <h2 className='text_ffffff ff_recharge fw-bold fs_md mb-3'>Purchasing Nexai Products</h2>
                                <p className='paragraphs'>Nex AI tokens will be the primary currency for acquiring Nexai's <span className='d-lg-block'> extensive range of software solutions, hardware devices, including</span> drones and sensors, and other smart home products available on <span className='d-lg-block'>the Nexai marketplace. Users can confidently make purchases </span>using Nex tokens, enjoying the convenience and flexibility of a <span className='d-lg-block'>token-based payment system.</span></p>
                            </div>
                            <div className='ms-5 ps-5 position-relative'>
                                <div className='timeline_dots'></div>
                                <h2 className='text_ffffff ff_recharge fw-bold fs_md mb-3'>Accessing Exclusive Content</h2>
                                <p className='paragraphs'>By holding Nex AI tokens, users will gain privileged access to<span className='d-lg-block'>exclusive content within the Nexai platform. These tokens will</span> unlock premium features, advanced functionalities, and<span className='d-lg-block'>specialized services, enabling users to fully explore and enjoy the </span>enhanced capabilities of Nexai's ecosystem.</p>
                            </div>                 
                            <div className='ms-5 ps-5 position-relative'>
                                <div className='timeline_dots'></div>
                                <h2 className='text_ffffff ff_recharge fw-bold fs_md mb-3'>Purchasing Nexai Products</h2>
                                <p className='paragraphs'>Nex AI tokens will be the primary currency for acquiring Nexai's <span className='d-lg-block'> extensive range of software solutions, hardware devices, including</span> drones and sensors, and other smart home products available on <span className='d-lg-block'>the Nexai marketplace. Users can confidently make purchases </span>using Nex tokens, enjoying the convenience and flexibility of a <span className='d-lg-block'>token-based payment system.</span></p>
                            </div>
                            <div className='ms-5 ps-5 position-relative'>
                                <div className='timeline_dots'></div>
                                <h2 className='text_ffffff ff_recharge fw-bold fs_md mb-3'>Accessing Exclusive Content</h2>
                                <p className='paragraphs'>By holding Nex AI tokens, users will gain privileged access to<span className='d-lg-block'>exclusive content within the Nexai platform. These tokens will</span> unlock premium features, advanced functionalities, and<span className='d-lg-block'>specialized services, enabling users to fully explore and enjoy the </span>enhanced capabilities of Nexai's ecosystem.</p>
                            </div>                 
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default NexaiToken