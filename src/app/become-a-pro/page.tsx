"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import Wrapper from "@/layouts/Wrapper";
import Counter from "@/components/homes/home-one/Counter";
import Testimonial from "@/components/homes/home-one/Testimonial";
import HelpForm from "@/components/homes/home-one/HelpForm";

const BecomeAPro = () => {
    const router = useRouter();
    const [isMobile, setIsMobile] = useState(false);
    const [isLaptop, setIsLaptop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsMobile(width <= 768);
            // Treat typical laptop widths as between tablets and large desktops.
            setIsLaptop(width > 768 && width <= 1440);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

   

    return (
        <Wrapper>
            <HeaderOne />
            <main>
                {/* Hero Section - Full Width Video Background */}
                <section
                    className="p-relative"
                    style={{
                        height: isMobile ? 'auto' : '100vh',
                        minHeight: isMobile ? 'auto' : '600px',
                        padding: isMobile ? '140px 0 80px' : undefined,
                        overflow: 'hidden',
                        zIndex: 1,
                    }}
                >
                    {/* Background Video */}
                    <video 
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                        className="position-absolute w-100 h-100"
                        style={{ 
                            top: 0, 
                            left: 0, 
                            objectFit: 'cover',
                            zIndex: -2
                        }}
                    >
                        <source src="/assets/video/harboursheild.mp4" type="video/mp4" />
                    </video>
                    
                    {/* Dark Overlay */}
                    <div className="position-absolute w-100 h-100" style={{ 
                        top: 0, 
                        left: 0, 
                        backgroundColor: 'rgba(16, 32, 57, 0.85)',
                        zIndex: -1
                    }}></div>
                    
                    {/* Content */}
                    <div
                        className="position-relative h-100 d-flex align-items-center"
                        style={{
                            zIndex: 1,
                            alignItems: isLaptop ? "flex-end" : "center",
                            paddingTop: isLaptop ? "180px" : undefined,
                        }}
                    >
                        <style dangerouslySetInnerHTML={{__html: `
                            .section-sub-title.text-white::before {
                                display: none !important;
                            }
                            .section-sub-title.text-white {
                                margin-left: 0 !important;
                            }
                        `}} />
                        <div className="small-container">
                            <div className="row justify-content-center">
                                <div className="col-xxl-11 col-xl-11 col-lg-12">
                                    <div
                                        className="text-center"
                                        style={{
                                            maxWidth: '1100px',
                                            margin: '0 auto',
                                            padding: isMobile ? '0 16px' : undefined,
                                        }}
                                    >
                                        {/* Headline */}
                                        <h1
                                            className="section-title text-white mb-20"
                                            style={{
                                                fontSize: isMobile ? '2.6rem' : '4rem',
                                                fontWeight: 700,
                                                marginTop: isMobile ? '24px' : '90px',
                                                lineHeight: 1.2,
                                            }}
                                        >
                                            Harbor Shield 360
                                        </h1>
                                        <h1
                                            className="section-title text-white mb-20"
                                            style={{
                                                fontSize: isMobile ? '2.2rem' : '3rem',
                                                fontWeight: 500,
                                                lineHeight: 1.2,
                                            }}
                                        >
                                            Your Agency&apos;s Proactive Protection Platform
                                        </h1>
                                        
                                        {/* Subheadline */}
                                        <p
                                            className="text-white mb-40"
                                            style={{
                                                fontSize: isMobile ? '1rem' : '18px',
                                                maxWidth: '900px',
                                                margin: isMobile ? '0 auto 24px' : '0 auto 40px',
                                                lineHeight: 1.6,
                                                textAlign: 'center',
                                            }}
                                        >
                                            White-label storm monitoring, emergency response, and client portal for your entire book of business—under your brand, in under 24 hours.
                                        </p>
                                        
                                        
                                        {/* CTA Buttons */}
                                        <div
                                            className="d-flex gap-3 flex-wrap justify-content-center mb-40"
                                            style={{ width: '100%' }}
                                        >
                                            <button 
                                                onClick={() => router.push("/contact")} 
                                                className="primary-btn-1 btn-hover"
                                                style={{
                                                    width: isMobile ? '100%' : 'auto',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                Book a 15-Min Demo &nbsp; | <i className="icon-right-arrow"></i>
                                                <span style={{ top: "147.172px", left: "108.5px" }}></span>
                                            </button>
                                            <button 
                                                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} 
                                                className="primary-btn-4 btn-hover"
                                                style={{
                                                    width: isMobile ? '100%' : 'auto',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                Watch 2-Min Overview &nbsp; | <i className="icon-right-arrow"></i>
                                                <span style={{ top: "147.172px", left: "108.5px" }}></span>
                                            </button>
                                            <button 
                                                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} 
                                                className="primary-btn-4 btn-hover"
                                                style={{
                                                    width: isMobile ? '100%' : 'auto',
                                                    textAlign: 'center',
                                                }}
                                            >
                                               Agent Login &nbsp; | <i className="icon-right-arrow"></i>
                                                <span style={{ top: "147.172px", left: "108.5px" }}></span>
                                            </button>
                                        </div>
                                        
                                        {/* Quick Stats */}
                                        <div
                                            className="row g-4 mt-60 pt-40"
                                            style={{ 
                                                borderTop: '1px solid rgba(255,255,255,0.2)',
                                                paddingTop: isMobile ? '24px' : '40px',
                                            }}
                                        >
                                            <div className="col-md-4" style={{ textAlign: isMobile ? 'center' : 'left' }}>
                                                <h2 className="mb-10 text-white" style={{ 
                                                    fontSize: isMobile ? '32px' : '42px',
                                                    fontWeight: 700
                                                }}>
                                                    10–15%
                                                </h2>
                                                <p className="text-white mb-0" style={{ 
                                                    fontSize: isMobile ? '0.95rem' : '16px'
                                                }}>
                                                    Churn Reduction
                                                </p>
                                            </div>
                                            <div className="col-md-4" style={{ textAlign: isMobile ? 'center' : 'left' }}>
                                                <h2 className="mb-10 text-white" style={{ 
                                                    fontSize: isMobile ? '32px' : '42px',
                                                    fontWeight: 700
                                                }}>
                                                    24 Hours
                                                </h2>
                                                <p className="text-white mb-0" style={{ 
                                                    fontSize: isMobile ? '0.95rem' : '16px'
                                                }}>
                                                    Setup Time
                                                </p>
                                            </div>
                                            <div className="col-md-4" style={{ textAlign: isMobile ? 'center' : 'left' }}>
                                                <h2 className="mb-10 text-white" style={{ 
                                                    fontSize: isMobile ? '32px' : '42px',
                                                    fontWeight: 700
                                                }}>
                                                    100%
                                                </h2>
                                                <p className="text-white mb-0" style={{ 
                                                    fontSize: isMobile ? '0.95rem' : '16px'
                                                }}>
                                                    White-Label Branding
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                {/* <section id="benefits" className="section-space">
                    <div className="small-container">
                        <div className="text-center mb-60">
                            <span className="section-sub-title">The Solution</span>
                            <h2 className="section-title mt-10">Toth Shield: Your Complete Solution</h2>
                            <p className="mt-20">
                                A comprehensive roof protection program that creates new revenue streams while 
                                providing exceptional value to your clients.
                            </p>
                        </div>
                        <div className="row g-4">
                            {features.map((feature, index) => (
                                <div key={index} className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                                    <div className="features-box-area p-relative">
                                        <div className="icon-box">
                                            <i className={feature.icon}></i>
                                        </div>
                                        <h5 className="mt-20 mb-10">{feature.title}</h5>
                                        <p>{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-60 bg-color-1 p-40 rounded">
                            <h3 className="mb-30 text-center">What You&apos;ll Receive as a Partner</h3>
                            <div className="row">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="col-lg-6 mb-20">
                                        <div className="d-flex align-items-start">
                                            <i className="icon-check-circle mr-15 text-primary"></i>
                                            <p>{benefit}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* How It Works Section */}
                <section id="how-it-works" className="section-space" style={{paddingTop: '70px !important', paddingBottom: '70px !important'}}>
                    <style dangerouslySetInnerHTML={{__html: `
                       
                        .how-it-works-section .section-sub-title {
                            margin-left: 0 !important;
                        }
                    `}} />
                    <div className="small-container how-it-works-section">
                        <div className="text-center mb-60">
                            <span className="section-sub-title">How It Works</span>
                            <h2 className="section-title mt-10">How Harbor Shield 360 Works for Your Agency</h2>
                            <p className="mt-20" style={{ fontSize: '18px', maxWidth: '800px', margin: '20px auto 0' }}>
                                We handle the technology. You get the credit for proactive protection.
                            </p>
                        </div>
                        <div className="row g-4">
                            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                                <div className="features-box-area p-relative" style={{border: '1px solid #ea1826'}}>
                                    <div className="icon-box">
                                        <i className="icon-tag"></i>
                                    </div>
                                    <h5 className="mt-20 mb-10">We White-Label the <br /> Platform</h5>
                                    <p>We seamlessly apply your logo, colors, and full brand identity—transforming the platform into your own in-house solution.</p>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                                <div className="features-box-area p-relative" style={{border: '1px solid #ea1826'}}>
                                    <div className="icon-box">
                                        <i className="icon-team"></i>
                                    </div>
                                    <h5 className="mt-20 mb-10">We Onboard Your Book of Business</h5>
                                    <p>Import your client list and instantly give every policyholder access to alerts and the portal.</p>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                                <div className="features-box-area p-relative" style={{border: '1px solid #ea1826'}}>
                                    <div className="icon-box">
                                        <i className="icon-tag"></i>
                                    </div>
                                    <h5 className="mt-20 mb-10">You Deliver Proactive Protection</h5>
                                    <p>Clients receive branded alerts, storm reports, and emergency support—while you track it all.</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-40">
                            <button onClick={() => router.push("/contact")} className="primary-btn-1 btn-hover">
                                Book a 15-Min Demo &nbsp; | <i className="icon-right-arrow"></i>
                                <span style={{ top: "147.172px", left: "108.5px" }}></span>
                            </button>
                        </div>
                    </div>
                </section>

                

                {/* What Your Clients Experience Section */}
                <section className="service-tab-section section-space bg-color-1 p-relative is-dark">
                    <div className="bg-image" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-35.png)` }}></div>
         <div className="bg-shape-1" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-33.png)` }}></div>
         <div className="bg-shape-2" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-34.png)` }}></div>
                    <div className="small-container">
                        <div className="row align-items-center">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                                <div className="p-relative" style={{ paddingRight: '60px', paddingTop: '20px' }}>
                                    <div className="mb-20">
                                        <span className="section-sub-title" style={{ color: '#fff', fontSize: '16px', fontWeight: 600, textTransform: 'uppercase' }}>
                                            What Your Clients Experience
                                        </span>
                                    </div>
                                    <h2 className="section-title mt-10 mb-20" style={{ color: '#fff', fontSize: '36px', fontWeight: 700 }}>
                                        What Your Clients See (And Why They Stay With You)
                                    </h2>
                                    <p className="mb-30" style={{ fontSize: '16px', lineHeight: '1.7', color: '#fff' }}>
                                        To your clients, Harbor Shield 360 feels like a dedicated protection app built by your agency.
                                    </p>
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-start gap-3 mb-30">
                                                <div className="icon-box" style={{ 
                                                    width: '60px', 
                                                    height: '60px', 
                                                    border: '2px solid #ea1826', 
                                                    borderRadius: '50%',
                                                    display: 'flex', 
                                                    alignItems: 'center', 
                                                    justifyContent: 'center',
                                                    flexShrink: 0
                                                }}>
                                                    <i className="bi bi-exclamation-lg" style={{ fontSize: '28px', color: '#ea1826' }}></i>
                                                </div>
                                                <div>
                                                    <h5 className="mb-10" style={{ fontSize: '18px', fontWeight: 700, color: '#fff' }}>
                                                        Real-Time Storm Alerts
                                                    </h5>
                                                    <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#fff', margin: 0 }}>
                                                        Address-level hail and wind alerts, not generic weather warnings.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-start gap-3 mb-30">
                                                <div className="icon-box" style={{ 
                                                    width: '60px', 
                                                    height: '60px', 
                                                    border: '2px solid #ea1826', 
                                                    borderRadius: '50%',
                                                    display: 'flex', 
                                                    alignItems: 'center', 
                                                    justifyContent: 'center',
                                                    flexShrink: 0
                                                }}>
                                                    <i className="bi bi-telephone" style={{ fontSize: '28px', color: '#ea1826' }}></i>
                                                </div>
                                                <div>
                                                    <h5 className="mb-10" style={{ fontSize: '18px', fontWeight: 700, color: '#fff' }}>
                                                        One-Tap Emergency Button
                                                    </h5>
                                                    <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#fff', margin: 0 }}>
                                                        Home damage, car accidents, theft, and more—one button, your brand.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-start gap-3 mb-30">
                                                <div className="icon-box" style={{ 
                                                    width: '60px', 
                                                    height: '60px', 
                                                    border: '2px solid #ea1826', 
                                                    borderRadius: '50%',
                                                    display: 'flex', 
                                                    alignItems: 'center', 
                                                    justifyContent: 'center',
                                                    flexShrink: 0
                                                }}>
                                                    <i className="bi bi-file-earmark-text" style={{ fontSize: '28px', color: '#ea1826' }}></i>
                                                </div>
                                                <div>
                                                    <h5 className="mb-10" style={{ fontSize: '18px', fontWeight: 700, color: '#fff' }}>
                                                        Guided Documentation
                                                    </h5>
                                                    <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#fff', margin: 0 }}>
                                                        Step-by-step prompts to capture photos, videos, and details for smoother claims.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-start gap-3 mb-30">
                                                <div className="icon-box" style={{ 
                                                    width: '60px', 
                                                    height: '60px', 
                                                    border: '2px solid #ea1826', 
                                                        borderRadius: '50%',
                                                    display: 'flex', 
                                                    alignItems: 'center', 
                                                    justifyContent: 'center',
                                                    flexShrink: 0
                                                }}>
                                                    <i className="bi bi-people" style={{ fontSize: '28px', color: '#ea1826' }}></i>
                                                </div>
                                                <div>
                                                    <h5 className="mb-10" style={{ fontSize: '18px', fontWeight: 700, color: '#fff' }}>
                                                        Branded Client Portal
                                                    </h5>
                                                    <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#fff', margin: 0 }}>
                                                        All their alerts, documents, and contact info in one place.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                                <div className="p-relative" style={{ backgroundColor: '#fff', padding: '40px' }}>
                                    <figure className="image w-100" style={{ margin: 0 }}>
                                        <Image 
                                            src="/assets/imgs/project/Insurance.jpg" 
                                            alt="Client Experience" 
                                            width={600} 
                                            height={700}
                                            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                        />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What Your Agency Gets Section */}
                <section className="section-space p-relative" style={{ paddingTop: '70px !important', paddingBottom: '120px !important' }}>
                    <style dangerouslySetInnerHTML={{__html: `
                        .agency-gets-section .team-area-box {
                            transition: none !important;
                        }
                        .agency-gets-section .team-area-box:hover {
                            transform: none !important;
                        }
                        .agency-gets-section .team-area-box figure.image:before {
                            display: none !important;
                        }
                        .agency-gets-section .team-area-box:hover figure.image:before {
                            display: none !important;
                        }
                    `}} />
                    <div className="small-container agency-gets-section">
                        <div className="text-center mb-60">
                            <span className="section-sub-title" style={{ color: '#ea1826' }}>What Your Agency Gets</span>
                            <h2 className="section-title mt-10" style={{ color: '#102039' }}>
                                What Your Agency Gets Behind the Scenes
                            </h2>
                        </div>
                        <div className="row g-4 position-relative" style={{ alignItems: 'stretch' }}>
                            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 position-relative">
                                <div className="team-area-box p-relative" style={{ 
                                    backgroundColor: '#fff', 
                                    
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                                    padding: '30px',
                                    height: '100%',
                                    minHeight: '350px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'none',
                                    transform: 'none'
                                }}>
                                    <figure className="image w-img p-relative mb-20" style={{ textAlign: 'center' }}>
                                        <div style={{ 
                                            width: '120px', 
                                            height: '120px', 
                                            margin: '0 auto',
                                          borderRadius: '50%',
                                            border: '3px solid #ea1826',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: '#fff'
                                        }}>
                                            <i className="fa fa-cogs" style={{ fontSize: '50px', color: '#ea1826' }}></i>
                                        </div>
                                    </figure>
                                    <div className="content" style={{ textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <div className="author-info" style={{ textAlign: 'center', width: '100%' }}>
                                            <h5 className="mb-5" style={{ fontSize: '18px', fontWeight: 700, color: '#102039', textAlign: 'center' }}>
                                                Retention <br /> Engine
                                            </h5>
                                            <span style={{ 
                                                color: '#ea1826', 
                                                fontSize: '14px',
                                                fontWeight: 600,
                                                display: 'block',
                                                marginBottom: '10px',
                                                borderBottom: '2px solid #ea1826',
                                                paddingBottom: '5px',
                                                width: 'fit-content',
                                                margin: '0 auto 10px'
                                            }}>
                                                Stay in front of <br /> clients all year <br /> with meaningful,<br />  proactive touchpoints.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {/* Arrow */}
                                <div className="d-none d-xxl-block" style={{ 
                                    position: 'absolute',
                                    right: '-20px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    zIndex: 10
                                }}>
                                    <i className="icon-right-arrow" style={{ fontSize: '30px', color: '#ea1826' }}></i>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 position-relative">
                                <div className="team-area-box p-relative" style={{ 
                                    backgroundColor: '#fff', 
                                    
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                                    padding: '30px',
                                    height: '100%',
                                    minHeight: '350px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'none',
                                    transform: 'none'
                                }}>
                                    <figure className="image w-img p-relative mb-20" style={{ textAlign: 'center' }}>
                                        <div style={{ 
                                            width: '120px', 
                                            height: '120px', 
                                            margin: '0 auto',
                                            borderRadius: '50%',
                                            border: '3px solid #ea1826',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: '#fff'
                                        }}>
                                            <i className="fa fa-eye" style={{ fontSize: '50px', color: '#ea1826' }}></i>
                                        </div>
                                    </figure>
                                    <div className="content" style={{ textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <div className="author-info" style={{ textAlign: 'center', width: '100%' }}>
                                            <h5 className="mb-5" style={{ fontSize: '18px', fontWeight: 700, color: '#102039', textAlign: 'center' }}>
                                                Claims <br /> Visibility
                                            </h5>
                                            <span style={{ 
                                                color: '#ea1826', 
                                                fontSize: '14px',
                                                fontWeight: 600,
                                                display: 'block',
                                                marginBottom: '10px',
                                                borderBottom: '2px solid #ea1826',
                                                paddingBottom: '5px',
                                                width: 'fit-content',
                                                margin: '0 auto 10px'
                                            }}>
                                                Track incidents from <br /> first alert through <br /> resolution with <br /> a single dashboard.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {/* Arrow */}
                                <div className="d-none d-xxl-block" style={{ 
                                    position: 'absolute',
                                    right: '-20px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    zIndex: 10
                                }}>
                                    <i className="icon-right-arrow" style={{ fontSize: '30px', color: '#ea1826' }}></i>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 position-relative">
                                <div className="team-area-box p-relative" style={{ 
                                    backgroundColor: '#fff', 
                                  
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                                    padding: '30px',
                                    height: '100%',
                                    minHeight: '350px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'none',
                                    transform: 'none'
                                }}>
                                    <figure className="image w-img p-relative mb-20" style={{ textAlign: 'center' }}>
                                        <div style={{ 
                                            width: '120px', 
                                            height: '120px', 
                                            margin: '0 auto',
                                            borderRadius: '50%',
                                            border: '3px solid #ea1826',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: '#fff'
                                        }}>
                                            <i className="fa fa-dollar-sign" style={{ fontSize: '50px', color: '#ea1826' }}></i>
                                        </div>
                                    </figure>
                                    <div className="content" style={{ textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <div className="author-info" style={{ textAlign: 'center', width: '100%' }}>
                                            <h5 className="mb-5" style={{ fontSize: '18px', fontWeight: 700, color: '#102039', textAlign: 'center' }}>
                                                New Revenue Opportunities
                                            </h5>
                                            <span style={{ 
                                                color: '#ea1826', 
                                                fontSize: '14px',
                                                fontWeight: 600,
                                                display: 'block',
                                                marginBottom: '10px',
                                                borderBottom: '2px solid #ea1826',
                                                paddingBottom: '5px',
                                                width: 'fit-content',
                                                margin: '0 auto 10px'
                                            }}>
                                                Upsell premium protection, deductible financing, and vendor services.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {/* Arrow */}
                                <div className="d-none d-xxl-block" style={{ 
                                    position: 'absolute',
                                    right: '-20px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    zIndex: 10
                                }}>
                                    <i className="icon-right-arrow" style={{ fontSize: '30px', color: '#ea1826' }}></i>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 position-relative">
                                <div className="team-area-box p-relative" style={{ 
                                    backgroundColor: '#fff', 
                                  
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                                    padding: '30px',
                                    height: '100%',
                                    minHeight: '350px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'none',
                                    transform: 'none'
                                }}>
                                    <figure className="image w-img p-relative mb-20" style={{ textAlign: 'center' }}>
                                        <div style={{ 
                                            width: '120px', 
                                            height: '120px', 
                                            margin: '0 auto',
                                            borderRadius: '50%',
                                            border: '3px solid #ea1826',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: '#fff'
                                        }}>
                                            <i className="fa fa-star" style={{ fontSize: '50px', color: '#ea1826' }}></i>
                                        </div>
                                    </figure>
                                    <div className="content" style={{ textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <div className="author-info" style={{ textAlign: 'center', width: '100%' }}>
                                            <h5 className="mb-5" style={{ fontSize: '18px', fontWeight: 700, color: '#102039', textAlign: 'center' }}>
                                                Clear Differentiation
                                            </h5>
                                            <span style={{ 
                                                color: '#ea1826', 
                                                fontSize: '14px',
                                                fontWeight: 600,
                                                display: 'block',
                                                marginBottom: '10px',
                                                borderBottom: '2px solid #ea1826',
                                                paddingBottom: '5px',
                                                width: 'fit-content',
                                                margin: '0 auto 10px'
                                            }}>
                                                Offer something big-name carriers and direct writers don&rsquo;t: a branded protection platform.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

               

                {/* White-Label Branding Section */}
                <section className="section-space p-relative" style={{ paddingTop: '0px !important', paddingBottom: '100px !important' }}>
                    <div className="small-container">
                    <div className="text-center mb-30">
                            <span className="section-sub-title" style={{ color: '#ea1826' }}>White Label Branding</span>
                            <h1 className="section-title mb-20" style={{ fontSize: '48px', fontWeight: 700, color: '#102039', marginTop:'30px' }}>
                                        Your Brand. Our Technology.
                                    </h1>
                        </div>
                        <div className="row align-items-center">
                            {/* Left Column - Images */}
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 mb-40 mb-md-0" style={{ height: '100%' }}>
                                <div className="p-relative h-100 d-flex flex-column">
                                    {/* Two Images Side by Side */}
                                    <div className="row g-3 mb-20 flex-grow-1" style={{ minHeight: 0 }}>
                                        {/* Left Image */}
                                        <div className="col-6 d-flex flex-column">
                                            <figure className="image w-100 flex-grow-1" style={{ margin: 0 }}>
                                                <Image 
                                                    src="/assets/imgs/project/2.jpg" 
                                                    alt="White-Label Branding" 
                                                    width={300} 
                                                    height={400}
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                />
                                            </figure>
                                        </div>
                                        
                                        {/* Right Image */}
                                        <div className="col-6 d-flex flex-column">
                                            <figure className="image w-100 mb-20 flex-grow-1" style={{ margin: 0 }}>
                                                <Image 
                                                    src="/assets/imgs/project/1.jpg" 
                                                    alt="Branding Technology" 
                                                    width={300} 
                                                    height={400}
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                />
                                            </figure>
                                            
                                            {/* Experience Box Below Right Image */}
                                            <div style={{
                                                backgroundColor: '#fff',
                                                padding: '30px',
                                              
                                                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                                                borderBottom: '3px solid #ea1826',
                                                textAlign: 'center'
                                            }}>
                                                <h2 style={{ 
                                                    fontSize: '64px', 
                                                    fontWeight: 700, 
                                                    color: '#102039',
                                                    lineHeight: '1',
                                                    marginBottom: '10px',
                                                    WebkitTextStroke: '2px #102039',
                                                    WebkitTextFillColor: 'transparent'
                                                }}>24+</h2>
                                                <p style={{ 
                                                    fontSize: '18px', 
                                                    color: '#102039',
                                                    fontWeight: 600,
                                                    margin: 0
                                                }}>Hours Setup Time</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Right Column - Content */}
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                                <div className="p-relative ps-lg-5">
                                    {/* Headline */}
                                    
                                 
                                    
                                    {/* Copy */}
                                    <p className="mb-40" style={{ fontSize: '16px', lineHeight: '1.7', color: '#666' }}>
                                        Harbor Shield 360 runs in the background. Your clients see your logo, your colors, and your name on every alert, email, and portal screen.
                                    </p>
                                    
                                    {/* Feature Boxes - 4 boxes in 2x2 grid */}
                                    <div className="row g-3 mb-40">
                                        <div className="col-lg-6">
                                            <div style={{
                                                backgroundColor: '#ea1826',
                                                padding: '25px',
                                               
                                                textAlign: 'center',
                                                minHeight: '140px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                                <i className="fa fa-palette" style={{ fontSize: '36px', color: '#fff', marginBottom: '15px' }}></i>
                                                <p style={{ fontSize: '16px', fontWeight: 600, color: '#fff', margin: 0 }}>
                                                    Custom logo, colors, and domain
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div style={{
                                                backgroundColor: '#ea1826',
                                                padding: '25px',
                                               
                                                textAlign: 'center',
                                                minHeight: '140px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                                <i className="fa fa-envelope-open" style={{ fontSize: '36px', color: '#fff', marginBottom: '15px' }}></i>
                                                <p style={{ fontSize: '16px', fontWeight: 600, color: '#fff', margin: 0 }}>
                                                    Branded emails, SMS, and push notifications
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div style={{
                                                backgroundColor: '#ea1826',
                                                padding: '25px',
                                               
                                                textAlign: 'center',
                                                minHeight: '140px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                                <i className="fa fa-mobile-alt" style={{ fontSize: '36px', color: '#fff', marginBottom: '15px' }}></i>
                                                <p style={{ fontSize: '16px', fontWeight: 600, color: '#fff', margin: 0 }}>
                                                    Agency-branded client portal and mobile app
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div style={{
                                                backgroundColor: '#ea1826',
                                                padding: '25px',
                                               
                                                textAlign: 'center',
                                                minHeight: '140px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                                <i className="fa fa-handshake" style={{ fontSize: '36px', color: '#fff', marginBottom: '15px' }}></i>
                                                <p style={{ fontSize: '16px', fontWeight: 600, color: '#fff', margin: 0 }}>
                                                    Optional co-branding with carriers or partners
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    
                                    {/* CTA Button */}
                                    <button onClick={() => router.push("/contact")} className="primary-btn-1 btn-hover" style={{
                                        backgroundColor: '#ea1826',
                                        color: '#fff',
                                        border: 'none',
                                        padding: '15px 40px',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                     
                                        cursor: 'pointer',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '10px'
                                    }}>
                                        GET A FREE ESTIMATE &nbsp; <i className="icon-right-arrow" style={{ color: '#fff' }}></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                 {/* Emergency Button Flow Section */}
                 <section className="section-space p-relative" style={{ paddingTop: '0px !important', paddingBottom: '100px !important' }}>
                    <style dangerouslySetInnerHTML={{__html: `
                        .emergency-flow-section .work-process-box {
                            transition: none !important;
                        }
                        .emergency-flow-section .work-process-box:hover {
                            transform: none !important;
                        }
                        .emergency-flow-section .work-process-box .icon-box:before {
                            display: none !important;
                        }
                    `}} />
                    <div className="small-container emergency-flow-section">
                        <div className="text-center mb-60">
                            <span className="section-sub-title">Emergency Button Flow</span>
                            <h2 className="section-title mt-10">The Emergency Button: From Panic to Protected in 60 Seconds</h2>
                            <p className="mt-20" style={{ fontSize: '18px', maxWidth: '900px', margin: '20px auto 0', lineHeight: '1.7' }}>
                                When something goes wrong, your clients don&rsquo;t search for a policy number. They tap your agency&rsquo;s emergency button—and Harbor Shield 360 does the rest.
                            </p>
                        </div>
                        <div className="row g-4 position-relative justify-content-center" style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <div className="col-xxl-2 col-xl-2 col-lg-4 col-md-6 col-sm-6 position-relative" style={{ flex: '1 1 auto', minWidth: '200px', maxWidth: '240px' }}>
                                <div className="work-process-box text-center" style={{ 
                                    backgroundColor: '#fff',
                                   
                                    padding: '40px 30px',
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                                    height: '100%',
                                    transition: 'none',
                                    transform: 'none'
                                }}>
                                    <div className="icon-box p-relative" style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                                        <div style={{
                                            width: '80px',
                                            height: '80px',
                                            borderRadius: '50%',
                                            backgroundColor: '#ea1826',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto'
                                        }}>
                                            <i className="fa fa-phone" style={{ fontSize: '36px', color: '#fff' }}></i>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#102039', margin: 0 }}>
                                            Client taps the emergency button.
                                        </p>
                                    </div>
                                </div>
                                {/* Arrow */}
                                {!isMobile && (
                                    <div
                                        style={{
                                            position: 'absolute',
                                            right: '-15px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            zIndex: 10,
                                        }}
                                    >
                                        <i className="icon-right-arrow" style={{ fontSize: '24px', color: '#ea1826' }}></i>
                                    </div>
                                )}
                            </div>
                            <div className="col-xxl-2 col-xl-2 col-lg-4 col-md-6 col-sm-6 position-relative" style={{ flex: '1 1 auto', minWidth: '200px', maxWidth: '240px' }}>
                                <div className="work-process-box text-center" style={{ 
                                    backgroundColor: '#fff',
                                  
                                    padding: '40px 30px',
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                                    height: '100%',
                                    transition: 'none',
                                    transform: 'none'
                                }}>
                                    <div className="icon-box p-relative" style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                                        <div style={{
                                            width: '80px',
                                            height: '80px',
                                         
                                            borderRadius: '50%',
                                            backgroundColor: '#ea1826',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto'
                                        }}>
                                            <i className="fa fa-camera" style={{ fontSize: '36px', color: '#fff' }}></i>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#102039', margin: 0 }}>
                                            App guides them to capture photos, video, and details.
                                        </p>
                                    </div>
                                </div>
                                {/* Arrow */}
                                {!isMobile && (
                                    <div
                                        style={{
                                            position: 'absolute',
                                            right: '-15px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            zIndex: 10,
                                        }}
                                    >
                                        <i className="icon-right-arrow" style={{ fontSize: '24px', color: '#ea1826' }}></i>
                                    </div>
                                )}
                            </div>
                            <div className="col-xxl-2 col-xl-2 col-lg-4 col-md-6 col-sm-6 position-relative" style={{ flex: '1 1 auto', minWidth: '200px', maxWidth: '240px' }}>
                                <div className="work-process-box text-center" style={{ 
                                    backgroundColor: '#fff',
                                 
                                    padding: '40px 30px',
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                                    height: '100%',
                                    transition: 'none',
                                    transform: 'none'
                                }}>
                                    <div className="icon-box p-relative" style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                                        <div style={{
                                            width: '80px',
                                            height: '80px',
                                        
                                            backgroundColor: '#ea1826',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto',
                                            borderRadius: '50%',
                                        }}> 
                                            <i className="fa fa-envelope" style={{ fontSize: '36px', color: '#fff' }}></i>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#102039', margin: 0 }}>
                                            Your agency gets an instant incident notification.
                                        </p>
                                    </div>
                                </div>
                                {/* Arrow */}
                                {!isMobile && (
                                    <div
                                        style={{
                                            position: 'absolute',
                                            right: '-15px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            zIndex: 10,
                                        }}
                                    >
                                        <i className="icon-right-arrow" style={{ fontSize: '24px', color: '#ea1826' }}></i>
                                    </div>
                                )}
                            </div>
                            <div className="col-xxl-2 col-xl-2 col-lg-4 col-md-6 col-sm-6 position-relative" style={{ flex: '1 1 auto', minWidth: '200px', maxWidth: '240px' }}>
                                <div className="work-process-box text-center" style={{ 
                                    backgroundColor: '#fff',
                                
                                    padding: '40px 30px',
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                                    height: '100%',
                                    transition: 'none',
                                    transform: 'none'
                                }}>
                                    <div className="icon-box p-relative" style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                                        <div style={{
                                            width: '80px',
                                            height: '80px',
                                        
                                            backgroundColor: '#ea1826',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto',
                                            borderRadius: '50%',
                                        }}>
                                            <i className="fa fa-users" style={{ fontSize: '36px', color: '#fff' }}></i>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#102039', margin: 0 }}>
                                            You loop in preferred contractors and adjusters if needed.
                                        </p>
                                    </div>
                                </div>
                                {/* Arrow */}
                                {!isMobile && (
                                    <div
                                        style={{
                                            position: 'absolute',
                                            right: '-15px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            zIndex: 10,
                                        }}
                                    >
                                        <i className="icon-right-arrow" style={{ fontSize: '24px', color: '#ea1826' }}></i>
                                    </div>
                                )}
                            </div>
                            <div className="col-xxl-2 col-xl-2 col-lg-4 col-md-6 col-sm-6 position-relative" style={{ flex: '1 1 auto', minWidth: '200px', maxWidth: '240px' }}>
                                <div className="work-process-box text-center" style={{ 
                                    backgroundColor: '#fff',
                                
                                    padding: '40px 30px',
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                                    height: '100%',
                                    transition: 'none',
                                    transform: 'none'
                                }}>
                                    <div className="icon-box p-relative" style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                                        <div style={{
                                            width: '80px',
                                            height: '80px',
                                          
                                            backgroundColor: '#ea1826',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto',
                                            borderRadius: '50%',
                                        }}>
                                            <i className="fa fa-check-circle" style={{ fontSize: '36px', color: '#fff' }}></i>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#102039', margin: 0 }}>
                                            Everything is packaged and ready for the carrier.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing & ROI Section */}
                <section className="section-space p-relative" style={{paddingTop: '0px !important', paddingBottom: '100px !important' }}>
                    <div className="small-container">
                        <div className="text-center mb-40">
                            <span className="section-sub-title" style={{ color: '#ea1826', textTransform: 'uppercase', letterSpacing: '1px' }}>Pricing & ROI</span>
                            <h2 className="section-title mt-10" style={{ color: '#102039', fontSize: '42px' }}>
                                Simple Pricing. Clear ROI.
                            </h2>
                            <p className="mt-20" style={{ fontSize: '16px', color: '#666', maxWidth: '640px', margin: '0 auto' }}>
                                One flat monthly price. Unlimited clients. Unlimited alerts.
                            </p>
                        </div>

                        <div className="row g-4 align-items-stretch">
                            {/* Pricing Card */}
                            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-12">
                                <div style={{
                                    backgroundColor: '#fff',
                               
                                    boxShadow: '0 10px 30px rgba(16, 32, 57, 0.08)',
                                    padding: '40px',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <div className="d-flex align-items-center justify-content-between mb-20">
                                        <div>
                                            <p style={{ textTransform: 'uppercase', fontSize: '14px', fontWeight: 600, color: '#ea1826', marginBottom: '6px' }}>
                                                Harbor Shield 360
                                            </p>
                                            <h3 style={{ fontSize: '26px', fontWeight: 700, margin: 0, color: '#102039' }}>
                                                Agency Plan
                                            </h3>
                                        </div>
                                        <div style={{
                                            backgroundColor: '#ffede5',
                                            color: '#ea1826',
                                            padding: '6px 16px',
                                        
                                            fontSize: '14px',
                                            fontWeight: 600
                                        }}>
                                            Flat Rate
                                        </div>
                                    </div>

                                    <div className="mb-30">
                                        <span style={{ fontSize: '48px', fontWeight: 700, color: '#102039' }}>$750</span>
                                        <span style={{ color: '#666', marginLeft: '6px', fontSize: '16px' }}>/month per agency</span>
                                    </div>

                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, flexGrow: 1 }}>
                                        {[
                                            'Unlimited clients',
                                            'White-label branding',
                                            'Agent dashboard + client portal',
                                            'Storm alerts + emergency button',
                                            'Priority support'
                                        ].map((item, idx) => (
                                            <li key={idx} className="d-flex align-items-start gap-2 mb-15" style={{ color: '#102039', fontSize: '15px' }}>
                                                <i className="fa fa-check-circle" style={{ color: '#ea1826', marginTop: '4px' }}></i>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button onClick={() => router.push("/contact")} className="primary-btn-1 btn-hover mt-30" style={{ width: 'auto', alignSelf: 'flex-start' }}>
                                        Book Pricing Call &nbsp; | <i className="icon-right-arrow"></i>
                                    </button>
                                </div>
                            </div>

                            {/* ROI Callout */}
                            <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-12">
                                <div style={{
                                    backgroundColor: '#102039',
                                    color: '#fff',
                               
                                    padding: '40px',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                                }}>
                                    <div className="mb-30">
                                        <p style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', color: '#ffba9d', marginBottom: '10px' }}>
                                            Example ROI
                                        </p>
                                        <h3 style={{ fontSize: '28px', fontWeight: 700, margin: 0, color: '#fff' }}>
                                            Keep 10 more clients this year and Harbor Shield 360 pays for itself 3× over.
                                        </h3>
                                    </div>

                                    <div className="row g-3 mb-30">
                                        <div className="col-md-6">
                                            <div style={{
                                                backgroundColor: 'rgba(255,255,255,0.08)',
                                              
                                                padding: '20px',
                                                height: '100%'
                                            }}>
                                                <p style={{ margin: 0, fontSize: '14px', color: '#ffba9d' }}>Scenario</p>
                                                <p style={{ margin: '8px 0 0', fontSize: '16px', lineHeight: '1.6', color: '#fff' }}>
                                                    500-client agency × 10% churn = 50 lost clients/year.
                                                    <br />
                                                    Avg commission per client: <strong>$570/year</strong>.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div style={{
                                                backgroundColor: 'rgba(255,255,255,0.08)',
                                               
                                                padding: '20px',
                                                height: '100%'
                                            }}>
                                                <p style={{ margin: 0, fontSize: '14px', color: '#ffba9d' }}>Lost Revenue</p>
                                                <p style={{ margin: '8px 0 0', fontSize: '22px', fontWeight: 700, color: '#fff' }}>
                                                    $28,500/year
                                                </p>
                                                <p style={{ margin: 0, fontSize: '14px', color: '#d9e3f8' }}>
                                                    (50 clients × $570)
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{
                                        backgroundColor: '#ea1826',
                                       
                                        padding: '25px',
                                        color: '#fff'
                                    }}>
                                        <p style={{ margin: 0, fontSize: '18px', fontWeight: 600, color: '#fff' }}>
                                            Retain just 10 of those clients and you protect $5,700 in revenue—more than 3× the Harbor Shield investment.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who It's For Section */}
                <section className="section-space p-relative" style={{ paddingTop: '0px !important', paddingBottom: '100px !important' }}>
                    <div className="small-container">
                        <div className="text-center mb-50">
                            <span className="section-sub-title" style={{ color: '#ea1826', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Who It’s For
                            </span>
                            <h2 className="section-title mt-10" style={{ color: '#102039' }}>
                                Built for Independent Agencies Who
                            </h2>
                        </div>
                        <div className="row g-4">
                            {[
                                {
                                    title: 'Are Tired of Competing on Price',
                                    copy: 'You want to win and keep clients based on value, not just quotes.',
                                    icon: 'fa fa-scale-balanced'
                                },
                                {
                                    title: 'Want to Be the First Call in a Crisis',
                                    copy: 'You want clients to think of you before they think of their carrier.',
                                    icon: 'fa fa-phone-volume'
                                },
                                {
                                    title: 'Want Real Touchpoints Between Renewals',
                                    copy: 'You want to show up with help, not just bills.',
                                    icon: 'fa fa-hand-holding-heart'
                                }
                            ].map((card, index) => (
                                <div key={index} className="col-xxl-4 col-xl-4 col-lg-4 col-md-12">
                                    <div style={{
                                        backgroundColor: '#fff',
                                       
                                        border: '1px solid #e5e7eb',
                                        padding: '30px',
                                        height: '100%',
                                        boxShadow: '0 15px 30px rgba(16,32,57,0.08)',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                                    }}>
                                        <div style={{
                                            width: '64px',
                                            height: '64px',
                                          
                                            backgroundColor: '#ea1826',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '20px',
                                            color: '#fff',
                                            fontSize: '28px'
                                        }}>
                                            <i className={card.icon}></i>
                                        </div>
                                        <h4 style={{ fontSize: '20px', color: '#102039', marginBottom: '12px' }}>
                                            {card.title}
                                        </h4>
                                        <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.7, margin: 0 }}>
                                            {card.copy}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Testimonial />

                {/* Ecosystem & Integrations Section */}
                <section className="section-space p-relative" style={{ paddingTop: '70px !important' , paddingBottom: '70px !important' }}>
                    <div className="small-container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <span className="section-sub-title" style={{ color: '#ea1826', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    Ecosystem & Integrations
                                </span>
                                <h2 className="section-title mt-10" style={{ color: '#102039', fontSize: '42px', marginBottom: '20px' }}>
                                    Part of a Bigger Protection Ecosystem
                                </h2>
                                <p style={{ fontSize: '16px', color: '#666', marginBottom: '30px', maxWidth: '620px' }}>
                                    Harbor Shield 360 connects your agency to the partners and tools that help you protect clients even better.
                                </p>
                                <div className="row g-3">
                                    {[
                                        'Works alongside your existing AMS and CRM',
                                        'Accurate alerts from weather data',
                                        'Connects with contractors for faster repairs',
                                        'Built to support future carrier integrations'
                                    ].map((bullet, index) => (
                                        <div key={index} className="col-sm-6">
                                            <div className="d-flex align-items-center gap-3">
                                                <div style={{
                                                    width: '34px',
                                                    height: '34px',
                                                  borderRadius: '50%',
                                                    backgroundColor: '#ea1826',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: '#fff',
                                                    fontSize: '11px',
                                                    boxShadow: '0 4px 12px rgba(255,107,53,0.3)'
                                                }}>
                                                    <i className="fa fa-check"></i>
                                                </div>
                                                <p style={{ margin: 0, color: '#102039', fontSize: '15px' }}>{bullet}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button onClick={() => router.push("/contact")} className="primary-btn-1 btn-hover mt-35" style={{ padding: '14px 32px', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                                    Learn More &nbsp; <i className="icon-right-arrow"></i>
                                </button>
                            </div>
                            <div className="col-lg-5">
                                <div style={{ position: 'relative' }}>
                                    <Image 
                                        src="/assets/imgs/project/Insurance.jpg"
                                        alt="Ecosystem Integrations"
                                        width={500}
                                        height={600}
                                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '20px',
                                        right: '-20px',
                                        backgroundColor: '#102039',
                                        color: '#fff',
                                        padding: '20px 30px',
                                      
                                        boxShadow: '0 10px 30px rgba(16,32,57,0.3)'
                                    }}>
                                        <p style={{ margin: 0, fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', color: '#ffba9d' }}>
                                            Connected Agencies
                                        </p>
                                        <h4 style={{ margin: '8px 0 0', fontSize: '28px', fontWeight: 700, color: '#fff' }}>
                                            150+
                                        </h4>
                                        <p style={{ margin: 0, fontSize: '14px', color: '#d9e3f8' }}>
                                            Already powering proactive protection
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                
                <Counter style={false} />
                <HelpForm />

               
            </main>
            <FooterOne />
        </Wrapper>
    );
};

export default BecomeAPro;

