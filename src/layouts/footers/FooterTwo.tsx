"use client"
import Image from "next/image"
import Link from "next/link"
import { JSX } from "react";

import logo from "@/assets/imgs/logo/toth-logo-white.png"

interface DataType {
   id: number;
   icon: string;
   title: string;
   info: JSX.Element;
}

const contact_data: DataType[] = [
   {
      id: 1,
      icon: "fa-light fa-location-dot",
      title: "Service Area:",
      info: (<><p className="m-0">Nationwide Coverage, USA</p></>),
   },
   {
      id: 2,
      icon: "fa-light fa-phone-alt",
      title: "Phone:",
      info: (<><Link href="tel:8009887435">800&nbsp;988&nbsp;7435</Link></>),
   },
   {
      id: 3,
      icon: "fa-light fa-envelope",
      title: "Email:",
      info: (<><Link href="mailto:info@tothshield.com">info@tothshield.com</Link></>),
   },
   {
      id: 4,
      icon: "fa-light fa-clock",
      title: "Support Hours:",
      info: (<><p className="m-0">Mon - Fri: 9.00 AM - 6.00 PM ET</p></>),
   },
];

const FooterTwo = () => {
   return (
      <footer>
         <div className="footer-main bg-color-1 p-relative">
            <div className="footer-shape-1" style={{ backgroundImage: `url(/assets/imgs/footer/shape-f-1.png)` }}></div>
            <div className="footer-shape-3" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-50.png)` }}></div>
            <div className="footer-top section-space-medium">
               <div className="small-container">
                  <div className="row g-4">
                     <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                        <div className="footer-widget-1">
                           <figure className="image">
                              <Image src={logo} alt="" />
                           </figure>
                           <p className="mt-40 mb-40">Toth Shield keeps homeowners storm-ready with proactive roof monitoring, emergency tarping, and dedicated support teams.</p>
                           <div className="footer-socials p-relative">
                              <span><Link href="https://www.facebook.com/profile.php?id=100088916094011" target="_blank"><i className="fab fa-facebook-f"></i></Link></span>
                              <span><Link href="https://twitter.com" target="_blank"><i className="fab fa-twitter"></i></Link></span>
                              <span><Link href="#"><i className="fab fa-linkedin-in"></i></Link></span>
                              <span><Link href="https://www.youtube.com/@Bimini-Boating" target="_blank"><i className="fab fa-youtube"></i></Link></span>
                           </div>
                        </div>
                     </div>
                     <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                        <div className="footer-widget-2 pl-50">
                           <h4 className="mb-30 footer-title">Quick Links</h4>
                           <ul className="service-list">
                              <li><Link href="/">Home</Link></li>
                              <li><Link href="/#shields">Shields</Link></li>
                              <li><Link href="/become-a-pro">For Agents</Link></li>
                              <li><Link href="/become-a-vendor">Become a Vendor</Link></li>
                              <li><Link href="/contact">Contact Us</Link></li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                        <div className="footer-widget-2">
                           <h4 className="mb-30 footer-title">Membership Benefits</h4>
                           <ul className="service-list">
                              <li><Link href="/services">Roof Inspections</Link></li>
                              <li><Link href="/services">Storm Preparation</Link></li>
                              <li><Link href="/services">Damage Assessments</Link></li>
                              <li><Link href="/services">Emergency Tarping</Link></li>
                              <li><Link href="/services">Insurance Support</Link></li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                        <div className="footer-widget-4">
                           <h4 className="mb-20 footer-title">Contact Info</h4>
                           <ul className="footer-contact-info-widget p-relative">
                              {contact_data.map((item) => (
                                 <li key={item.id}>
                                    <div className="icon">
                                       <i className={item.icon}></i>
                                    </div>
                                    <div className="info-details">
                                       <h6 className="mb-10">{item.title}</h6>
                                       {item.info}
                                    </div>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="small-container">
               <div className="footer-bottom pt-30 pb-30 p-relative">
                  <div className="left-area">
                     <span>© 2025 <Link href="/">Toth Shield</Link>. All rights reserved.</span>
                  </div>
                  <div className="right-area">
                     <span><Link href="/terms-of-services">Terms & Conditions</Link></span>
                     <span><Link href="/privacy-policy">Privacy Policy</Link></span>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default FooterTwo
