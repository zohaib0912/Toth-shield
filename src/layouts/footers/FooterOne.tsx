"use client"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

import logo_1 from "@/assets/imgs/logo/toth-logo-white.png"
// import Lightbox from "yet-another-react-lightbox"
// import { useState } from "react"

const FooterOne = () => {

//    const [open, setOpen] = useState(false)
//    const [index, setIndex] = useState(0)

//    const handleOpen = (i: number) => {
//       setIndex(i)
//       setOpen(true)
//    }

//    const slides = gallery_data.map((img) => ({
//       src: img.src,
//    }))

   return (
      <>
         <footer>
            <div className="footer-main bg-color-1 p-relative">
               <div className="footer-shape-1" style={{ backgroundImage: `url(/assets/imgs/footer/shape-f-1.png)` }}></div>
               <div className="footer-shape-2" style={{ backgroundImage: `url(/assets/imgs/footer/shape-f-2.png)` }}></div>
               <div className="footer-top section-space-medium">
                  <div className="small-container">
                     <div className="row g-4">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                           <div className="footer-widget-1">
                              <figure className="image">
                                 <Image src={logo_1} alt="" />
                              </figure>
                              <p className="mt-40 mb-30">
                                 Toth Shield delivers proactive roof monitoring, storm preparation, and homeowner support
                                 so you never have to worry about the next weather alert.
                              </p>
                              <div className="working-hours">
                                 <h6 className="text-white mb-20">Member Support</h6>
                                 <ul className="text-white">
                                    <li>Phone: <span className="fw-lighter">800&nbsp;988&nbsp;7435</span></li>
                                    <li>Email: <span className="fw-lighter">info@tothshield.com</span></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                           <div className="footer-widget-2 pl-50">
                              <h4 className="mb-30 footer-title">Quick Links</h4>
                              <ul className="service-list">
                                 <li><Link href="/">Home</Link></li>
                                 <li><Link href="/#shields">Shields</Link></li>
                                 <li><Link href="/become-a-pro">For Agents</Link></li>
                                 <li><Link href="/free-hail-report">Free Hail Report</Link></li>
                                 <li><Link href="/contact">Contact Us</Link></li>
                              </ul>
                           </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                           <div className="footer-widget-2 pl-50">
                              <h4 className="mb-30 footer-title">Membership Benefits</h4>
                              <ul className="service-list">
                                 <li><Link href="/services">Roof Health Reports</Link></li>
                                 <li><Link href="/services">Emergency Tarping</Link></li>
                                 <li><Link href="/services">Storm Monitoring</Link></li>
                                 <li><Link href="/services">Insurance Support</Link></li>
                                 <li><Link href="/services">Agent Portal Access</Link></li>
                              </ul>
                           </div>
                        </div>
                        {/* <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                           <div className="footer-widget-4 pr-30">
                              <h4 className="mb-20 footer-title mb-30">Our Gallery</h4>
                              <div className="footer-gallery p-relative">
                                 {gallery_data.map((gallery, i) => (
                                    <a
                                       key={i}
                                       onClick={() => handleOpen(i)}
                                       className="popup-image"
                                       style={{ padding: 0, border: "none", background: "transparent", cursor: "pointer" }}
                                    >
                                       <Image src={gallery} alt={`Gallery image ${i + 1}`} />
                                    </a>
                                 ))}
                              </div>
                           </div>
                        </div> */}
                     </div>
                  </div>
               </div>
               <div className="small-container">
                  <div className="footer-bottom pt-30 pb-30">
                     <div className="left-area p-relative">
                        <span>© 2025 <Link href="/">Toth Shield</Link>. All rights reserved.</span>
                     </div>
                     <div className="footer-socials p-relative">
                        <span><Link href="https://www.facebook.com/profile.php?id=100088916094011" target="_blank"><i className="fab fa-facebook-f"></i></Link></span>
                        <span><Link href="https://twitter.com" target="_blank"><i className="fab fa-twitter"></i></Link></span>
                        <span><Link href="#"><i className="fab fa-linkedin-in"></i></Link></span>
                        <span><Link href="https://www.youtube.com/@Bimini-Boating" target="_blank"><i className="fab fa-youtube"></i></Link></span>
                     </div>
                     <div className="right-area p-relative">
                        <span><Link href="/terms-of-services">Terms & Conditions</Link></span>
                        <span><Link href="/privacy-policy">Privacy Policy</Link></span>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
         {/* <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={slides}
            index={index}
            on={{
               view: ({ index }) => setIndex(index),
            }}
         /> */}
      </>
   )
}

export default FooterOne
