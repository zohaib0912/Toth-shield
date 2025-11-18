"use client"
import NavMenu from "./Menu/NavMenu"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react";
import UseSticky from "@/hooks/UseSticky";
import Offcanvas from "./Menu/Offcanvas";
import HeaderTwoTop from "./Menu/HeaderTwoTop";

import logo from "@/assets/imgs/logo/toth-logo.png";

const HeaderThree = () => {

   const { sticky } = UseSticky();
   const [offCanvas, setOffCanvas] = useState<boolean>(false);

   return (
      <>
         <header>
            <HeaderTwoTop />
            <div id="header-sticky" className={`header-area ${sticky ? "sticky" : ""}`}>
               <div className="large-container">
                  <div className="mega-menu-wrapper">
                     <div className="header-main">
                        <div className="header-left">
                           <div className="header-logo">
                              <Link href="/">
                                 <Image src={logo} alt="header logo" />
                              </Link>
                           </div>
                        </div>
                        <div className="header-right d-flex justify-content-end">
                           <div className="mean__menu-wrapper d-none d-lg-block">
                              <div className="main-menu">
                                 <nav id="mobile-menu">
                                    <NavMenu />
                                 </nav>
                                 <div className="header__hamburger ml-50 d-none">
                                    <button type="button" className="hamburger-btn offcanvas-open-btn">
                                       <span>01</span>
                                       <span>01</span>
                                       <span>01</span>
                                    </button>
                                 </div>
                              </div>
                           </div>
                           <div className="header-action d-none d-xl-inline-flex gap-5">
                              <div className="header-link">
                                 <Link className="primary-btn-1 btn-hover" href="/contact">
                                    GET A QUOTE &nbsp; | <i className="icon-right-arrow"></i>
                                    <span style={{ top: "147.172px", left: "108.5px" }}></span>
                                 </Link>
                              </div>
                           </div>
                           <div className="header-action">
                              <div className="header-link-1">
                                 <div className="icon">
                                    <i className="fal fa-phone-volume"></i>
                                 </div>
                                 <div className="content">
                                    <span>Call Us Now</span>
                                    <h6><Link href="tel:8009887435">800&nbsp;988&nbsp;7435</Link></h6>
                                 </div>
                              </div>
                           </div>
                           <div className="header__hamburger d-xl-none my-auto">
                              <div className="sidebar__toggle">
                                 <a className="bar-icon" onClick={() => setOffCanvas(true)} style={{ cursor: "pointer" }}>
                                    <i className="fa-light fa-bars-sort"></i>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <Offcanvas style={false} offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
      </>
   )
}

export default HeaderThree
