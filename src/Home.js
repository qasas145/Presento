import React, { useEffect, useState } from "react"
import "bootstrap/scss/bootstrap.scss";
import 'bootstrap/dist/js/bootstrap.min.js';
import Modal from "react-awesome-modal"
// import PureCounter from '@srexi/purecounterjs';
// import './assets/vendor/purecounter/purecounter.js'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css'
import './assets/vendor/boxicons/css/boxicons.min.css'
import './assets/vendor/glightbox/css/glightbox.min.css'
import './assets/vendor/remixicon/remixicon.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import image from './assets/img/tabs-1.jpg'
import image1 from './assets/img/tabs-2.jpg'
import image2 from './assets/img/tabs-3.jpg'
import image3 from './assets/img/tabs-4.jpg'
import app1 from './assets/img/portfolio/portfolio-1.jpg'
import app2 from './assets/img/portfolio/portfolio-2.jpg'
import app3 from './assets/img/portfolio/portfolio-3.jpg'
import app4 from './assets/img/portfolio/portfolio-4.jpg'
import app5 from './assets/img/portfolio/portfolio-5.jpg'
import app6 from './assets/img/portfolio/portfolio-6.jpg'
import app7 from './assets/img/portfolio/portfolio-7.jpg'
import app8 from './assets/img/portfolio/portfolio-8.jpg'
import app9 from './assets/img/portfolio/portfolio-9.jpg'
import Isotope from 'isotope-layout'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

import "./Home.css"
import { Link } from "react-router-dom";
import hero from "./imgs/blog-1.jpg"
import client1 from "./imgs/clients/client-1.png"
import client2 from "./imgs/clients/client-2.png"
import client3 from "./imgs/clients/client-3.png"
import client4 from "./imgs/clients/client-4.png"
import client5 from "./imgs/clients/client-5.png"
import client6 from "./imgs/clients/client-6.png"
import client7 from "./imgs/clients/client-7.png"
import client8 from "./imgs/clients/client-8.png"
import AOS from "aos";
import "aos/dist/aos.css";
import Aos from "aos";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
AOS.init();
Aos.refresh();
const Home=()=>{
    const[visible, setVisible]=useState(false)
    const makeActiveEL=(el, className)=>{
        AOS.refresh()
        let activeEl=document.getElementsByClassName('filter-active')
        activeEl[0].classList.remove('filter-active')
        el.classList.add('filter-active')
        let els=document.getElementsByClassName('portfolio-item')
        let elsClassNames=document.getElementsByClassName(className)
        if (className=="all") {
            for (let el of els) {
                el.classList.add('activeEl')
            }
            for (el of els ) {
                el.classList.remove('notActive')
            }
        }
        else {
            for (el of els ) {
                el.classList.add('notActive')
                el.classList.remove('activeEl')
            }
            for (el of elsClassNames) {
                el.classList.add('activeEl')
                el.classList.remove('notActive')
            }
            Aos.refresh();
        }
    }
    const openModal=()=>{
        setVisible(true)
    }
    const closeModal=()=>{
        setVisible(false)
    }
    const scrollToTop=()=>{
        window.scrollTo(0, 0)
    }
    return (
        <div>
            <Navbar id="header" className="fixed-top w-100% bg-white">
                    <div className="row m-auto" style={{
                        position :"relative",
                        width :"100%"
                    }}>
                        <div className="col-2">
                            <NavbarBrand onClick={scrollToTop} className="text text-dark" style={{
                                fontSize :"30px",
                                fontWeight :"600",
                                cursor :"pointer"
                            }}>Presento<span className="text text-danger">.</span></NavbarBrand>
                        </div>
                        <div className="col-10 d-flex align-items-center justify-content-end">
                            <Nav className="position-relative w-100%" id="nav-l-l">
                                <NavItem id="large_watches"><NavLink  style={{fontSize :"16px",fontWeight :"500"}}>Home</NavLink></NavItem>
                                <NavItem id="large_watches"><NavLink  style={{fontSize :"16px",fontWeight :"500"}}>About</NavLink></NavItem>
                                <NavItem id="large_watches"><NavLink  style={{fontSize :"16px",fontWeight :"500"}}>protfollio</NavLink></NavItem>
                                <NavItem id="large_watches"><NavLink  style={{fontSize :"16px",fontWeight :"500"}}>Team</NavLink></NavItem>
                                <NavItem id="large_watches"><NavLink  style={{fontSize :"16px",fontWeight :"500"}}>Blog</NavLink></NavItem>
                                <UncontrolledDropdown id="large_watches" nav inNavbar>
                                    <DropdownToggle  style={{
                                        fontSize :"18px",
                                        fontWeight :"500"
                                    }} nav caret>
                                        Options
                                    </DropdownToggle>
                                    <DropdownMenu id="large_watches">
                                        <DropdownItem className="text-center border-bottom">Visit</DropdownItem>
                                        <DropdownItem className="text-center border-bottom">Buy</DropdownItem>
                                        <DropdownItem className="text-center">Store</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem id="large_watches"><NavLink  style={{fontSize :"18px",fontWeight :"500"}}>Contact</NavLink></NavItem>
                                <NavItem><button style={{
                                    textTransform :"capitalize"
                                }} className="btn btn-danger">get started</button></NavItem>
                                <NavItem id="small_watches"><NavLink><i style={{
                                    fontSize :"22px",
                                    textAlign :"center",
                                    cursor :"pointer",
                                }} onClick={openModal} className="fa fa-bars text text-dark" aria-hidden="true"></i></NavLink></NavItem>
                            </Nav>
                        </div>
                    </div>
            </Navbar>
            <div id="hero" className="d-flex position-relative w-100%" style={{
                marginTop :"80px",
                background:`linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${hero})`,
                backgroundPosition :"center right",
                backgroundSize :"cover",
                backgroundRepeat :"no-repeat"
            }}>
                <div className="container" data-aos="zoom-out" data-aos-delay="100">
                    <div className="row d-flex justify-content-start align-items-center" style={{
                        height :"581px"
                    }}>
                        <div id="t" className="col-lg-6" style={{
                            lineHeight :"80px"
                        }}>
                            <h1 className="text text-white">Bettter digital experience with Presento</h1>
                            <h4 className="text text-white" style={{
                                fontWeight :"400"
                            }}>We are team of talented designers making websites with Bootstrap</h4>
                            <Link to="/home" className="btn btn-danger" style={{
                                fontSize :"20px"
                            }}>Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-down" className="container" style={{
                zIndex:"1",
                position :"relative",
                height :"100px",
            }} id="container" >
                    <Swiper  id="img-slider" className="position-relative w-75% d-flex justify-content-center align-items-center"
                        scrollbar={{ draggable: true }}
                        slidesPerView={5}
                        spaceBetween={10}
                        navigation={{}}
                        pagination={{
                            clickable :"true",
                            el :".swiper-pagination",
                            type :"bullets",
                            bullets :'.swiper-pagination .swiper-pagination-bullet'
                        }}
                        onSwiper={(swiper) => console.log(swiper)}
                        style={{
                            display :"flex",
                            flexDirection :"row"
                        }}
                    >
                        <SwiperSlide ><img id="image_slide" src={client1}/></SwiperSlide>
                        <SwiperSlide><img id="image_slide" src={client2}/></SwiperSlide>
                        <SwiperSlide><img id="image_slide" src={client3}/></SwiperSlide>
                        <SwiperSlide><img id="image_slide" src={client4}/></SwiperSlide>
                        <SwiperSlide><img id="image_slide" src={client5}/></SwiperSlide>
                        <SwiperSlide><img id="image_slide" src={client6}/></SwiperSlide>
                        <SwiperSlide><img id="image_slide" src={client7}/></SwiperSlide>
                        <SwiperSlide><img id="image_slide" src={client8}/></SwiperSlide>
                    </Swiper>
                <div className="swiper-pagination position-relative w-100% d-flex justify-content-center align-items-center flex-row" style={{height :"40px"}}></div>
            </div>
            <section id="about" className="about section-bg">
                <div className="container" data-aos="fade-up" style={{zIndex :"1"}}>
                    <div className="row no-gutters">
                        <div className="col-lg-6" id="content_sec">
                            <h3 style={{paddingBottom :"20px"}}>Voluptatem dignissimos provident quasi</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>
                            <Link to="/home" style={{textDecoration :"none"}}><span>About Us</span><i className="bx bx-chevron-right"></i></Link>
                        </div>
                        <div id="content_data" className="col-lg-6">
                            <div className="row" id="content_data_row">
                                <div className="col-lg-6 col-md-6 col-sm-6 " id="content_data_row_col">
                                    <i className="fa fa-book" aria-hidden="true"></i>
                                    <h4>Corporis voluptates sit</h4>
                                    <p className="text text-muted" style={{fontSize :"14px"}}>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6"  id="content_data_row_col">
                                    <i class="fa fa-cube" aria-hidden="true"></i>
                                    <h4>Ullamco laboris nisi</h4>
                                    <p className="text text-muted" style={{fontSize :"14px"}}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6" id="content_data_row_col">
                                    <i className="fa fa-picture-o" aria-hidden="true"></i>
                                    <h4>Labore consequatur</h4>
                                    <p className="text text-muted" style={{fontSize :"14px"}}>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6" id="content_data_row_col">
                                    <i className="fa fa-bookmark-o" aria-hidden="true"></i>
                                    <h4>Beatae veritatis</h4>
                                    <p className="text text-muted" style={{fontSize :"14px"}}>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="counts">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-3 md-6">
                            <div className="count-box">
                                <i className="fa fa-smile-o" aria-hidden="true"></i>
                                <span data-purecounter-start="0" data-purecounter-end="231" className="purecounter">231</span>
                                <p className="text-dark">Happy Clients</p>
                            </div>
                        </div>
                        <div className="col-lg-3 md-6 mt-5 mt-lg-0">
                            <div className="count-box">
                                <i className="fa fa-sticky-note-o" aria-hidden="true"></i>
                                <span data-purecounter-start="0" data-purecounter-end="100" className="purecounter">100</span>
                                <p className="text-dark">Projects</p>
                            </div>
                        </div>
                        <div className="col-lg-3 md-6 mt-5 mt-lg-0">
                            <div className="count-box">
                                <i className="fa fa-headphones" aria-hidden="true"></i>
                                <span data-purecounter-start="0" data-purecounter-end="150" className="purecounter">150</span>
                                <p className="text-dark">Hours Of Support</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 mt-5 mt-lg-0">
                            <div className="count-box">
                                <i className="fa fa-user-o" aria-hidden="true"></i>
                                <span data-purecounter-start="0" data-purecounter-end="40" className="purecounter">40</span>
                                <p className="text-dark">Hard Workers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="tabs" id="tabs">
                <div className="container" data-aos="fade-up">
                    <ul className="nav nav-tabs row d-flex">
                        <li className="nav-item col-3"><Link to="/home" className="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1">
                            <i className="ri-gps-line"></i>
                            <h4 className="d-none d-lg-block">Modi sit est dela pireda nest</h4>
                        </Link></li>
                        <li className="nav-item col-3"><Link to="/home" className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
                            <i className="ri-body-scan-line"></i>
                            <h4 className="d-none d-lg-block">Unde praesenti mara setra le</h4>
                        </Link></li>
                        <li className="nav-item col-3"><Link to="/home" className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
                            <i className="ri-sun-line"></i>
                            <h4 className="d-none d-lg-block">Pariatur explica nitro dela</h4>
                        </Link></li>
                        <li className="nav-item col-3"><Link to="/home" className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
                            <i className="ri-store-line"></i>
                            <h4 className="d-none d-lg-block">Pariatur explica nitro dela</h4>
                        </Link></li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active show" id="tab-1">
                            <div style={{marginTop :"40px"}} className="row">
                                <div  data-aos="fade-up" data-aos-delay="100" className="ol-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                    <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                                    <p className="fst-italic text-dark">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                    </p>
                                    <ul>
                                        <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                        <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                        <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                                    </ul>
                                    <p>
                                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum
                                    </p>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay="200">
                                    <img src={image} className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="tab-2">
                            <div style={{marginTop :"40px"}} className="row" >
                                <div className="ol-lg-6 order-2 order-lg-1 mt-3 mt-lg-0" data-aos="fade-up" data-aos-delay="100">
                                    <h3>Neque exercitationem debitis soluta quos debitis quo mollitia officia est</h3>
                                    <p className="text-dark">
                                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum
                                    </p>
                                    <p className="fst-italic text-dark">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua.
                                    </p>
                                    <ul>
                                        <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                        <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                        <li><i className="ri-check-double-line"></i> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</li>
                                        <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 text-center">
                                    <img src={image1} alt="" className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                        <div style={{marginTop :"40px"}} className="tab-pane" id="tab-3">
                            <div className="row">
                                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                    <h3>Voluptatibus commodi ut accusamus ea repudiandae ut autem dolor ut assumenda</h3>
                                    <p className="text-dark">
                                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum
                                    </p>
                                    <ul>
                                    <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                    <li><i className="ri-check-double-line"></i> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</li>
                                    </ul>
                                    <p className="fst-italic">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua.
                                    </p>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 text-center">
                                    <img src={image2} alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                        <div style={{
                            marginTop :"40px"
                        }} className="tab-pane" id="tab-4">
                            <div className="row">
                                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                                    <h3>Omnis fugiat ea explicabo sunt dolorum asperiores sequi inventore rerum</h3>
                                    <p className="text-dark">
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum
                                    </p>
                                    <p className="fst-italic text-dark">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                    </p>
                                    <ul>
                                    <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                    <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 text-center">
                                    <img src={image3} alt="" className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{marginTop:"100px"}} className="services" id="services">
                <div className="container">
                    <div className="row" id="data-services" style={{paddingTop:"60px"}}>
                        <h2 className="text text-white" data-aos="fade-up" data-aos-delay="100">SERVICES</h2>
                        <span data-aos="fade-up" data-aos-delay="100"></span>
                        <p data-aos="fade-up" data-aos-delay="200" className="text-white">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.</p>
                    </div>
                    <div className="row" id="tabs_data">
                        <div className="col-lg-5" data-aos="fade-up" data-aos-delay="100" id="card">
                            <div className="row position-relative w-100%">
                                <div className="col-lg-2  icon-box">
                                    <i className="bi bi-briefcase"></i>
                                </div>
                                <div className="col-10" id="col-text">
                                    <h3 >Lorem Ipsum</h3>
                                    <p >Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5" id="card" data-aos="fade-up" data-aos-delay="200">
                            <div className="row">
                                <div className="col-lg-2 icon-box">
                                    <i class="bi bi-card-checklist"></i>
                                </div>
                                <div className="col-10" id="col-text">
                                    <h3>Dolor Sitema</h3>
                                    <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5" id="card" data-aos="fade-up" data-aos-delay="200">
                            <div className="row">
                                <div className="col-lg-2 icon-box">
                                    <i className="bi bi-bar-chart"></i>
                                </div>
                                <div className="col-10" id="col-text">
                                    <h3>Sed ut perspiciatis</h3>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5" id="card" data-aos="fade-up" data-aos-delay="200">
                            <div className="row">
                                <div className="col-lg-2 icon-box">
                                    <i className="bi bi-binoculars"></i>
                                </div>
                                <div className="col-10" id="col-text">
                                    <h3>Nemo Enim</h3>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5" id="card" data-aos="fade-up" data-aos-delay="200">
                            <div className="row">
                                <div className="col-lg-2 icon-box">
                                    <i className="bi bi-binoculars"></i>
                                </div>
                                <div className="col-10" id="col-text">
                                    <h3>Nemo Enim</h3>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5" id="card" data-aos="fade-up" data-aos-delay="200">
                            <div className="row">
                                <div className="col-lg-2 icon-box">
                                    <i className="bi bi-binoculars"></i>
                                </div>
                                <div className="col-10" id="col-text">
                                    <h3>Nemo Enim</h3>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-tittle">
                <div className="container">
                    <h2>Portfolio</h2>
                    <span></span>
                    <p className="text-dark">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.</p>
                </div>
            </section>
            <section data-aos="fade-up" data-aos-delay="100">
                <div className="col-lg-12 d-flex justify-content-center">
                    <ul className="d-flex flex-row" id="filter_list">
                        <li data-filter="*" className="list-unstyled text-uppercase filter-active" style={{fontWeight :"500", cursor :"pointer"}} onClick={(e)=>makeActiveEL(e.target, 'all')}>All</li>
                        <li data-filter=".filter-app" className=" list-unstyled text-uppercase" style={{fontWeight :"500", cursor :"pointer"}} onClick={(e)=>makeActiveEL(e.target, 'filter-app')}>App</li>
                        <li data-filter=".filter-card" className=" list-unstyled  text-uppercase" style={{fontWeight :"500", cursor :"pointer"}} onClick={(e)=>makeActiveEL(e.target, 'filter-card')}>Card</li>
                        <li data-filter=".filter-web" className=" list-unstyled text-uppercase" style={{fontWeight :"500", cursor :"pointer"}} onClick={(e)=>makeActiveEL(e.target, 'filter-web')}>Web</li>
                    </ul>
                </div>
            </section>
            <section className="section-portfolio">
                <div className="container">
                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src={app1} className="img-fluid" alt=""/>
                                <div className="portfolio-info">
                                    <h4>App 1</h4>
                                    <p>App</p>
                                    <div className="portfolio-links">
                                        <Link to="/home" className="protfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <img src={app2} className="img-fluid" alt=""/>
                                <div className="portfolio-info">
                                    <h4>Web 3</h4>
                                    <p>Web</p>
                                    <div className="portfolio-links">
                                        <Link to="/home" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src={app3} className="img-fluid" alt=""/>
                                <div className="portfolio-info">
                                    <h4>App 2</h4>
                                    <p>App</p>
                                    <div className="portfolio-links">
                                        <Link to="/home" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <img src={app4} className="img-fluid" alt=""/>
                                <div className="portfolio-info">
                                    <h4>Card 2</h4>
                                    <p>Card</p>
                                    <div className="portfolio-links">
                                        <Link to="/home" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <img src={app5} className="img-fluid" alt=""/>
                                <div className="portfolio-info">
                                    <h4>Web 2</h4>
                                    <p>Web</p>
                                    <div className="portfolio-links">
                                        <Link to="/home" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src={app6} className="img-fluid" alt=""/>
                                <div className="portfolio-info">
                                    <h4>App 3</h4>
                                    <p>App</p>
                                    <div className="portfolio-links">
                                        <Link to="/home" data-gallery="portfolioGallery" className="portfolio-lightbox" title=">App 3"><i className="bx bx-plus"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src={app7} className="img-fluid" alt=""/>
                                <div className="portfolio-info">
                                    <h4>App 3</h4>
                                    <p>App</p>
                                    <div className="portfolio-links">
                                        <Link to="/home" data-gallery="portfolioGallery" className="portfolio-lightbox" title=">App 3"><i className="bx bx-plus"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <img src={app8} className="img-fluid" alt=""/>
                                <div className="portfolio-info">
                                    <h4>Card 3</h4>
                                    <p>Card</p>
                                    <div className="portfolio-links">
                                        <Link to="/home" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <img src={app9} className="img-fluid" alt=""/>
                                <div className="portfolio-info">
                                    <h4>Web 3</h4>
                                    <p>Web</p>
                                    <div className="portfolio-links">
                                        <Link to="/home" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
            <section className="pricing">
                <div className="container">
                    <div data-aos="fade-up" className="section-tittle d-flex justify-contnet-center text-center align-items-center">
                        <h2>PRICING</h2>
                        <span></span>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.</p>
                    </div>
                    <div className="row " id="rw">
                           <div data-aos="fade-up" data-aos-delay="100" className="col-lg-4 col-md-6">
                               <div className="box" id="card-one">
                                    <h4>FREE</h4>
                                    <h3><sup>$</sup>0<span>/ month</span></h3>
                                    <p>Aida dere</p>
                                    <p>Nec feugiat nisl</p>
                                    <p>Nulla at volutpat dola</p>
                                    <p className="null">Pharetra massa</p>
                                    <p className="null">Massa ultricies mi</p>
                                    <Link to="/home">Buy Now</Link>
                               </div>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="200" className="col-lg-4 col-md-6 mt-4 mt-md-0">
                                <div className="bg-danger" id="card-one">
                                    <h4>BUSINESS</h4>
                                    <h3><sup>$</sup>19<span>/ month</span></h3>
                                    <p>Aida dere</p>
                                    <p>Nec feugiat nisl</p>
                                    <p>Nulla at volutpat dola</p>
                                    <p>Pharetra massa</p>
                                    <p className="null">Massa ultricies mi</p>
                                    <Link to="/home">Buy Now</Link>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="300" className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                                <div id="card-one">
                                    <h4>DEVELOPER</h4>
                                    <h3><sup>$</sup>29<span>/ month</span></h3>
                                    <p>Aida dere</p>
                                    <p>Nec feugiat nisl</p>
                                    <p>Nulla at volutpat dola</p>
                                    <p>Pharetra massa</p>
                                    <p>Massa ultricies mi</p>
                                    <Link to="/home">Buy Now</Link>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
            <section id="faq" className="faq">
                <div className="container">
                    <div className="section-tittle">
                        <h2>FREQUENTLY ASKED QUESTIONS</h2>
                        <span></span>   
                    </div>
                    <ul className="list-unstyled">
                        <li>
                            <Link to="/home" className="collapsed" to="/home" data-bs-toggle="collapse" data-bs-target="#nonsec1" aria-expanded="false" aria-controls="nonsec1">Non consectetur a erat nam at lectus urna duis?<i className="bx bx-chevron-down icon-show"></i></Link>
                            <div id="nonsec1" className="collapse">
                                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                            </div>
                        </li>
                        <li>
                            <Link className="collapsed" to="/home" data-bs-toggle="collapse" data-bs-target="#nonsec2">Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?<i className="bx bx-chevron-down icon-show"></i></Link>
                                <div id="nonsec2" className="collapse">
                                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                </div>
                        </li>
                        <li>
                            <Link className="collapsed" to="/home" data-bs-toggle="collapse" data-bs-target="#nonsec3">Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?<i className="bx bx-chevron-down icon-show"></i></Link>
                                <div id="nonsec3" className="collapse">
                                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                                </div>
                        </li>
                        <li>
                            <Link className="collapsed" to="/home" data-bs-toggle="collapse" data-bs-target="#nonsec4">Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?<i className="bx bx-chevron-down icon-show"></i></Link>
                                <div id="nonsec4" className="collapse">
                                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                </div>
                        </li>
                        <li>
                            <Link className="collapsed" to="/home" data-bs-toggle="collapse" data-bs-target="#nonsec5">Tempus quam pellentesque nec nam aliquam sem et tortor consequat?<i className="bx bx-chevron-down icon-show"></i></Link>
                                <div id="nonsec5" className="collapse">
                                    Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                                </div>
                        </li>
                        <li>
                            <Link className="collapsed" to="/home" data-bs-toggle="collapse" data-bs-target="#nonsec6">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?<i className="bx bx-chevron-down icon-show"></i></Link>
                                <div id="nonsec6" className="collapse">
                                    Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
                                </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div>
                                <h2 style={{fontSize :"28px", fontWeight :"600"}}>Presento<span>.</span></h2>
                                <ul className="first-ul">
                                    <li style={{fontSize :"14px"}} className="text-white">A108 Adam Street</li>
                                    <li style={{fontSize :"14px"}} className="text-white">New York, NY 535022</li>
                                    <li style={{fontSize :"14px"}} className="text-white">United States</li>
                                </ul>
                                <ul>
                                    <li className="text-white data"><span style={{fontSize :"16px"}}>Phone:</span> +1 5589 55488 55</li>
                                    <li className="text-white data"><span style={{fontSize :"16px"}}>Email :</span> info@example.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div>
                                <h2>Useful Links</h2>
                                <span></span>
                                <ul className="s-t-ul">
                                    <li><i className="bx bx-chevron-right text-white"></i>Home</li>
                                    <li><i className="bx bx-chevron-right text-white"></i>About us</li>
                                    <li><i className="bx bx-chevron-right text-white"></i>Services</li>
                                    <li><i className="bx bx-chevron-right text-white"></i>Terms of service</li>
                                    <li><i className="bx bx-chevron-right text-white"></i>Privacy policy</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div>
                                <h2>Our Services</h2>
                                <span></span>
                                <ul className="s-t-ul">
                                    <li><i className="bx bx-chevron-right text-white"></i>Web Design</li>
                                    <li><i className="bx bx-chevron-right text-white"></i>Web Development</li>
                                    <li><i className="bx bx-chevron-right text-white"></i>Product Management</li>
                                    <li><i className="bx bx-chevron-right text-white"></i>Marketing</li>
                                    <li><i className="bx bx-chevron-right text-white"></i>Graphic Design</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <h2>Join Our Newsletter</h2>
                            <span></span>
                            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                            <form>
                                <input className="form-control" type="text" />
                                <button className="btn btn-danger mt-2">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bottom-o-w">
                <div className="container">
                    <p>© Copyright <span>Presento</span>. All Rights Reserved Designed by <sub>BootstrapMade</sub></p>
                </div>
            </section>
            {/* this the part of the modals in that app */}
            <Modal visible={visible} width="400px"  onClickAway={closeModal}>
                <ul className="nav position-relative w-100 d-flex justify-content-center align-items-center flex-column" id="nav-ul">
                    <li style={{fontSize :"16px",fontWeight :"500"}} className="nav-item border-bottom position-relative w-100 d-flex justify-content-end"><Link to="/home" className="nav-link"><i onClick={closeModal} className="fa fa-times"  aria-hidden="true"></i></Link></li>
                    <li style={{fontSize :"16px",fontWeight :"500"}} className="nav-item border-bottom position-relative w-100 d-flex justify-content-center"><Link to="/home" className="nav-link">Home</Link></li>
                    <li style={{fontSize :"16px",fontWeight :"500"}} className="nav-item border-bottom position-relative w-100 d-flex justify-content-center"><Link to="/home" className="nav-link">About</Link></li>
                    <div class="dropdown nav-item w-100 border-bottom">
                        <center>
                            <button style={{fontSize :"16px",fontWeight :"500"}} class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Options
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link style={{fontSize :"16px",fontWeight :"500", textAlign: "center"}} to="/home" className="dropdown-item border-bottom" href="#">Visit</Link>
                                <Link style={{fontSize :"16px",fontWeight :"500", textAlign: "center"}} to="/home" className="dropdown-item border-bottom" href="#">Buy</Link>
                                <Link style={{fontSize :"16px",fontWeight :"500", textAlign: "center"}} to="/home" className="dropdown-item" href="#">Store</Link>
                            </div>
                        </center>
                    </div>
                    <li style={{fontSize :"16px",fontWeight :"500"}} className="nav-item border-bottom position-relative w-100 d-flex justify-content-center"><Link to="/home" className="nav-link">protfollio</Link></li>
                    <li style={{fontSize :"16px",fontWeight :"500"}} className="nav-item border-bottom position-relative w-100 d-flex justify-content-center"><Link to="/home" className="nav-link">Team</Link></li>
                    <li style={{fontSize :"16px",fontWeight :"500"}} className="nav-item border-bottom position-relative w-100 d-flex justify-content-center"><Link to="/home" className="nav-link">Contact</Link></li>
                    <li style={{fontSize :"16px",fontWeight :"500"}} className="nav-item"><Link to="/home" className="nav-link">Blog</Link></li>
                </ul>
            </Modal>
            {/* end of that part in that app */}
        </div>
    )
}
export default Home;