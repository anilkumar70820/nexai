import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import facebook from '../assets/images/svg/facebook.svg'
import twitter from '../assets/images/svg/twitter.svg'
import telegram from '../assets/images/svg/telegram.svg'
const Footer = () => {
    return (
        <footer className='bg-black pt-5 footer_bg position-relative'>
            <div className="footer_ellipse blur_ellipse d-none d-sm-block"></div>
            <Container className='pt-lg-5 mt-lg-5'>
                <Row>
                    <Col md={7} className='mb-md-0 mb-5 mt-lg-5'>
                        <p className='fs_xsm fw-bold text_ffffff ff_recharge mb-3 pb-1 opacity-75'>Nullam viverra natoque amet et <span className='d-md-block'> sed scelerisque viverra fringilla</span> platea. Ullamcorper.</p>
                        <div className='d-flex gap-3'>
                            <a className=' social_link' href="https://www.facebook.com"><img src={facebook} alt="facebook" /></a>
                            <a className=' social_link' href="https://www.twitter.com"><img src={twitter} alt="twitter" /></a>
                            <a className=' social_link' href="https://www.telegram.com"><img src={telegram} alt="telegram" /></a>
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className='d-flex gap-5 justify-content-between'>
                            <div className='ms-lg-5'>
                                <h3 className='fs_sm fw-bold text_ffffff ff_recharge'>Quick links</h3>
                                <ul className='p-0'>
                                    <li className='mb-2 Link'><Link className='footer_links'>Home</Link></li>
                                    <li className='mb-2 Link'><Link className='footer_links'>Features</Link></li>
                                    <li className='mb-2 Link'><Link className='footer_links'>Marketplace</Link></li>
                                    <li className='mb-2 Link'><Link className='footer_links'>Tokens</Link></li>
                                    <li className='mb-2 Link'><Link className='footer_links'>NexChat</Link></li>
                                    <li className='Link'><Link className='footer_links'>About</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className='fs_sm fw-bold text_ffffff ff_recharge'>Information's</h3>
                                <ul className='p-0'>
                                    <li className='mb-2 Link'><Link className='footer_links'>Contact</Link></li>
                                    <li className='mb-2 Link'><Link className='footer_links'>Phone</Link></li>
                                    <li className='mb-2 Link'><Link className='footer_links'>terms</Link></li>
                                    <li className='Link'><Link className='footer_links'>Privacy</Link></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
                <hr className='text_ffffff mt-3 mb-3'/>
                <p className='footer_links text-center mb-0 pb-4 cursor_pointer'>@Copyright.nexai</p>
            </Container>
        </footer>
    )
}

export default Footer