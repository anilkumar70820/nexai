import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import header_logo from '../assets/images/png/logo.png'

const Hero = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    if (showNavbar) {
        document.body.classList.remove('overflow_hidden');
    } else {
        document.body.classList.add('overflow_hidden')
    }
    return (
        <section className='hero_bg_img min-vh-100 bg-black d-flex flex-column '>
            <header className='pt-3'>
                <Container>
                    <nav className='d-flex justify-content-between align-items-center'>
                        <img className='me-sm-5 pe-sm-5 me-2 cursor_pointer' src={header_logo} alt="logo" />
                        <ul className={`${showNavbar ? 'd-flex align-items-center gap-4 mb-0 nav_sm' : 'd-flex align-items-center gap-4 mb-0 nav_sm nav_show p-0'} `}>
                            <li><a href='#home' onClick={() => setShowNavbar(true)} className='nav_links Link'>Home</a></li>
                            <li><a href='#marketplace' onClick={() => setShowNavbar(true)} className='nav_links Link'>Marketplace</a></li>
                            <li><a href='#about' onClick={() => setShowNavbar(true)} className='nav_links Link'>About</a></li>
                            <li><a href='#nexchat' onClick={() => setShowNavbar(true)} className='nav_links Link'>NexChat</a></li>
                            <li><a href='#tokens' onClick={() => setShowNavbar(true)} className='nav_links Link'>Tokens</a></li>
                            <li><button onClick={() => setShowNavbar(true)} className='buttons d-lg-none'>Sign Up</button></li>
                            <span title="close" className="ms-4 close_nav text-white fw-bold fs-1 d-lg-none" onClick={() => setShowNavbar(true)}>&times;</span>
                        </ul>
                        <button className='buttons d-lg-block d-none'>Sign Up</button>
                        <span title="open"
                            className="d-inline d-lg-none fw-bold fs-1 text-white"
                            onClick={() => setShowNavbar(false)}>
                            &#9776; </span>
                    </nav>
                </Container>
            </header>
            <div className=' d-flex flex-grow-1 align-items-center ms-0 ms-sm-5'>
                <Container>
                    <h1 className='fs_2xl fw-bold ff_recharge text_ffffff mb-3'> <span className='text_02CDCF'>Nexai</span> is an <span className='d-lg-block'>advanced AI-</span>powered home <span className='d-lg-block'> assistant</span></h1>
                    <p className='fs_xsm fw-normal text_ffffff ff_poppins opacity-75 mb-5'>Etiam viverra nec libero a. A id id tempus molestie sed. Fringilla odio.</p>
                    <button className='buttons'>Know More</button>
                </Container>
            </div>
        </section>
    )
}

export default Hero