"use client"
import BreadCrumb from "../common/BreadCrumb"
import HeaderOne from "@/layouts/headers/HeaderOne"
import FooterOne from "@/layouts/footers/FooterOne"
import Image from "next/image"
import HelpForm from "../homes/home-one/HelpForm"
import about_3 from "@/assets/imgs/toth/2.jpeg"
import about_4 from "@/assets/imgs/toth/3.jpeg"

const About = () => {
   const missionHighlights = [
      "Reliable Protection",
      "No Hidden Costs",
      "Trusted Security Process",
      "Commitment to Safety",
      "Easy to Use",
      "24x7 Support Services",
   ];

   const missionCards = [
      { id: 1, text: "Preventative maintenance helps catch small issues early." },
      { id: 2, text: "Alerting members of roof risks with priority repairs." },
      { id: 3, text: "Helping homeowners maintain value and strong roofs." },
      { id: 4, text: "Storing photos, reports, and documents in one portal." },
   ];

   return (
      <>
         <HeaderOne />
         <main>
            <BreadCrumb sub_title="About" title="About Toth Shield" />
            
            {/* Video Section */}
            <section className="section-space">
               <div className="small-container">
                  <div className="row align-items-center g-4">
                     <div className="col-lg-6">
                        <video 
                           controls 
                           className="w-100 rounded" 
                           poster="/assets/imgs/toth/video-poster.png"
                           style={{ maxHeight: '420px', objectFit: 'cover' }}
                        >
                           <source src="/assets/video/toth-about.mp4" type="video/mp4" />
                           Your browser does not support the video tag.
                        </video>
                     </div> 
                     <div className="col-lg-6 text-center text-lg-start">
                        <div className="d-inline-flex align-items-center gap-3 mb-15">
                          
                             
                       
                           <p className="section-sub-title text-uppercase mb-0" style={{ color: '#d2181e', letterSpacing: '1px' }}>
                              See the Power of Toth Shield in Action
                           </p>
                        </div>
                        <h2 className="section-title mb-20" style={{ color: '#000' }}>Toth Shield monitors severe weather in real time and alerts homeowners before damage strikes.</h2>
                        <p className="mb-0">
                           Watch how our technology helps prevent costly roof repairs and keeps your property protected year-round.
                        </p>
                     </div>
                  </div>
               </div>
            </section>

            {/* Mission Section */}
            <section className="section-space service-tab-section bg-color-1 p-relative is-dark text-white" style={{ position: 'relative', overflow: 'hidden' }}>
               <div className="bg-image" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-35.png)` }}></div>
               <div className="bg-shape-1" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-33.png)` }}></div>
               <div className="bg-shape-2" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-34.png)` }}></div>
               <div className="small-container" style={{ position: 'relative', zIndex: 2 }}>
                  <div className="row align-items-start g-5">
                     <div className="col-lg-6">
                        <div className="d-flex align-items-center gap-3 mb-20">
                           <span className="section-sub-title text-uppercase mb-0">Our Mission</span>
                           <span style={{ height: '2px', width: '80px', backgroundColor: '#fff', opacity: 0.4 }}></span>
                        </div>
                        <h2 className="section-title text-white mb-25">TOTH SHIELD Mission?</h2>
                        <p className="mb-30" style={{ color: 'rgba(255,255,255,0.75)' }}>
                           At Toth Shield, our mission is simple: to provide proactive roof protection that saves homeowners money, reduces insurance
                           claim stress, and keeps roofs in top condition. Unlike traditional roofers who only show up when there is a problem, Toth
                           Shield takes a proactive approach to roofing. We believe that homeownership should come with peace of mind, not unexpected
                           repair bills. With Toth Shield, you can focus on what matters most—your family, your home, and your future.
                        </p>

                        <div className="row g-3">
                      {missionHighlights.map((item) => (
                              <div className="col-6" key={item}>
                                 <div className="d-flex align-items-center gap-2">
                                    <span style={{ width: '8px', height: '8px', backgroundColor: '#fff', borderRadius: '50%', display: 'inline-block' }}></span>
                                    <span className="fw-semibold" style={{ color: '#cdd7ff' }}>{item}</span>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>

                     <div className="col-lg-6">
                        <div className="row g-4">
                           {missionCards.map((card) => (
                              <div className="col-12" key={card.id}>
                                 <div
                                    className="d-flex align-items-center bg-white rounded"
                                    style={{ padding: '32px 28px', boxShadow: '0 15px 45px rgba(5,32,60,0.15)', gap: '20px' }}
                                 >
                                    <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#05203c', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '22px', marginRight: '20px' }}>
                                       {card.id}
                                    </div>
                                    <p className="mb-0 fw-semibold text-dark">{card.text}</p>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* Company Intro Section */}
            <section className="section-space" style={{paddingTop: '70px !important'}}>
               <div className="small-container">
                  <div className="row g-4 mb-50">
                     <div className="col-md-5">
                        <Image
                           src={about_3}
                           alt="Toth Shield team"
                           className="w-100 rounded-3"
                           style={{ height: '320px', objectFit: 'cover' }}
                        />
                     </div>
                     <div className="col-md-7">
                        <Image
                           src={about_4}
                           alt="Toth Shield strategy"
                           className="w-100 rounded-3"
                           style={{ height: '320px', objectFit: 'cover' }}
                        />
                     </div>
                  </div>

                  <div className="row align-items-start g-5">
                     <div className="col-lg-6">
                        <div className="d-flex align-items-center gap-3 mb-15">
                           <span className="section-sub-title text-uppercase mb-0" style={{ letterSpacing: '2px' }}>
                              Get To Know Toth Shield
                           </span>
                           <span style={{ height: '2px', width: '60px', backgroundColor: '#0b2c4a', opacity: 0.3 }}></span>
                        </div>
                        <h2 className="section-title" style={{ fontSize: '40px', lineHeight: 1.2 }}>
                           A shield that values protection, innovation, and customer trust
                        </h2>
                     </div>
                     <div className="col-lg-6">
                        <p className="mb-20 text-muted" style={{ fontSize: '18px', lineHeight: 1.7 }}>
                           Toth Shield is a revolutionary roof protection membership program designed to help homeowners protect, maintain, and
                           extend the life of their roofs.
                        </p>
                        <p className="mb-20 text-muted" style={{ fontSize: '18px', lineHeight: 1.7 }}>
                           By combining regular inspections, storm tracking, emergency response, and exclusive membership credits, we ensure that
                           homeowners are always prepared for whatever nature throws their way.
                        </p>
                        <p className="text-muted" style={{ fontSize: '18px', lineHeight: 1.7 }}>
                           We believe that roof damage should never catch you off guard, and with Toth Shield, you can rest easy knowing that your
                           home is protected year-round.
                        </p>
                     </div>
                  </div>
               </div>
            </section>

            

            <HelpForm />
            
         </main>
         <FooterOne />
      </>
   )
}

export default About
