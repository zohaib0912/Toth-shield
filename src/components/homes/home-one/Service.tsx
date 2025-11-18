"use client"
import Link from "next/link"
import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

import bronze_img from "@/assets/imgs/toth/bronze-shield.png"
import silver_img from "@/assets/imgs/toth/silver-shield.png"
import gold_img from "@/assets/imgs/toth/gold-shield.png"
import platinum_img from "@/assets/imgs/toth/platinum-shield.png"

interface TabData {
   icon: string;
   title: string;
}
const tab_title: TabData[] = [
   {
      icon: "icon-roof-7",
      title: "Bronze Shield",
   },
   {
      icon: "icon-roof-2",
      title: "Silver Shield",
   },
   {
      icon: "icon-roof-8",
      title: "Gold Shield",
   },
   {
      icon: "icon-roof-4",
      title: "Platinum Shield",
   },
];

interface DataType {
   id: number;
   thumb: StaticImageData;
   title: string;
   desc: string;
   list: string[];
}

const service_data: DataType[] = [
   {
      id: 1,
      thumb: bronze_img,
      title: "Bronze Shield",
      desc: "Perfect for homeowners who want annual inspections, a roof health report, and discounted repair rates.",
      list: [
         "1 Annual Roof Inspection",
         "Membership Credits Of $100/year",
         "Roof Health Report",
         "Customer Portal Access",
         "Discounted Pricing On Other Services",
         "On-Call Moisture Inspection",
      ],
   },
   {
      id: 2,
      thumb: silver_img,
      title: "Silver Shield",
      desc: "Enhanced protection with storm monitoring and emergency response services.",
      list: [
         "Includes all features in Bronze Shield",
         "2 Annual Roof Inspection",
         "Storm Preparation Services",
         "Emergency Tarping Up to $250",
         "Membership Credits Of $200/year",
         "Assessment By Insurance Agents",
         "Priority Service",
      ],
   },
   {
      id: 3,
      thumb: gold_img,
      title: "Gold Shield",
      desc: "The ultimate protection plan with full coverage for roof maintenance and storm response.",
      list: [
         "Includes all features in Silver Shield",
         "3 Annual Roof Inspection",
         "Emergency Tarping Up to $500",
         "Membership Credits Of $500/year",
         "VIP Scheduling",
      ],
   },
   {
      id: 4,
      thumb: platinum_img,
      title: "Platinum Shield",
      desc: "The ultimate protection plan with full coverage for roof maintenance and storm response.",
      list: [
         "Includes all features in Gold Shield",
         "4 Annual Roof Inspection",
         "Comprehensive Roof Health Report",
         "Emergency Tarping Up to $1000",
         "Membership Credits Of $1000/year",
         "Drone Thermal Imaging for Leak Detection",
         "Personalized Storm Damage Monitoring",
         "24/7 Emergency Response Service",
         "1 Free Gutter Cleaning & 1 Seasonal Service per Year",
      ],
   },
];

interface PropType {
   style: boolean;
}

const Service = ({ style }: PropType) => {

   const [activeTab, setActiveTab] = useState(0);
   const [mobileActiveTab, setMobileActiveTab] = useState<number | null>(null);
   const [isMobile, setIsMobile] = useState(false);
   const [isLaptop, setIsLaptop] = useState(false);

   useEffect(() => {
      const handleResize = () => {
         const width = window.innerWidth;
         setIsMobile(width <= 768);
         setIsLaptop(width > 768 && width <= 1440);
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);

   useEffect(() => {
      if (!isMobile) {
         setMobileActiveTab(null);
      }
   }, [isMobile]);

   // Handle tab click event
   const handleTabClick = (index: number) => {
      if (isMobile) {
         setMobileActiveTab(index);
      } else {
         setActiveTab(index);
      }
   };

   const currentActiveTab = isMobile ? mobileActiveTab : activeTab;

   return (
      <section 
         className={`service-tab-section section-space bg-color-1 p-relative ${style ? "is-dark" : ""}`}
         style={{
            paddingTop: isMobile ? "50px" : isLaptop ? "60px" : "90px",
            marginTop: isMobile ? "40px" : isLaptop ? "50px" : "70px",
            paddingBottom: isMobile ? "40px" : isLaptop ? "60px" : undefined
         }}
      >
         <div className="bg-image" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-35.png)` }}></div>
         <div className="bg-shape-1" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-33.png)` }}></div>
         <div className="bg-shape-2" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-34.png)` }}></div>
         <div className="small-container">
            <div className="service-tab-title-area mb-70">
               <div className="title-box wow fadeInLeft" data-wow-delay=".5s">
                  <span className="section-sub-title">MEMBERSHIP PLANS</span>
                  <h3 className="section-title mt-10 text-white p-relative">Choose the Shield<br />That Fits Your Home</h3>
               </div>
               {/* <Link className="primary-btn-4 btn-hover mt-20" href="/shields">
                  view shields &nbsp; | <i className="icon-right-arrow"></i>
                  <span style={{ top: "147.172px", left: "108.5px" }}></span>
               </Link> */}
            </div>

            <div className="row" style={isMobile ? { flexDirection: "column" } : undefined}>
               <div className="col-xxl-4 col-xl-4 col-lg-4" style={isMobile ? { order: 2, marginTop: "30px" } : undefined}>
                  <div className="service-tab-btn-area wow fadeInLeft" data-wow-delay="500ms">
                     <ul
                        className="nav nav-tabs"
                        id="myTab"
                        role="tablist"
                        style={
                           isMobile
                              ? { display: "flex", flexWrap: "wrap", gap: "12px" }
                              : isLaptop
                                 ? { maxWidth: "320px" }
                                 : undefined
                        }
                     >
                        {tab_title.map((tab, index) => (
                           <li key={index} className="nav-item" role="presentation">
                              <a
                                 className={`nav-link ${currentActiveTab === index ? "active" : ""}`}
                                 onClick={() => handleTabClick(index)}
                                 id="modified-roofing-tab"
                                 style={{
                                    cursor: "pointer",
                                    minWidth: isMobile ? "calc(50% - 6px)" : undefined,
                                    textAlign: isMobile ? "center" : undefined,
                                    ...(isLaptop ? { padding: "14px 24px", fontSize: "18px" } : {}),
                                 }}
                              >
                                 <div className="icon-box" style={isLaptop ? { fontSize: "34px", marginBottom: "8px" } : undefined}>
                                    <i className={tab.icon}></i>
                                 </div>
                                 {tab.title}
                              </a>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

               <div
                  className="col-xxl-8 col-xl-8 col-lg-8"
                  style={{
                     marginLeft: isMobile ? "0" : isLaptop ? "-25px" : "-60px",
                     order: isMobile ? 1 : undefined,
                  }}
               >
                  <div className="service-tab-details-area">
                     <div className="tab-content" id="myTabContent">
                        {service_data.map((item, index) => (
                           <div key={item.id} className={`tab-pane fade ${currentActiveTab === index ? 'show active' : ''}`} id="modified-roofing-tab-pane">
                              <div
                                 className="service-tab-content p-relative"
                                 style={
                                    isLaptop
                                       ? {
                                          maxWidth: "800px",
                                          margin: "0 auto",
                                          padding: "32px 28px"
                                       }
                                       : undefined
                                 }
                              >
                                 {!style && <div className="tab-bg-shape" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-32.png)` }}></div>}
                                 <figure
                                    className="image p-relative"
                                    style={{
                                       display: "flex",
                                       justifyContent: "center",
                                       marginBottom: isMobile ? "20px" : undefined,
                                       padding: isLaptop ? "0 30px" : undefined,
                                    }}
                                 >
                                    <Image
                                       src={item.thumb}
                                       alt=""
                                       style={{
                                          width: isMobile ? "70%" : isLaptop ? "58%" : "auto",
                                          height: isMobile || isLaptop ? "auto" : "100%",
                                          maxHeight: isMobile ? "220px" : isLaptop ? "280px" : undefined,
                                          objectFit: "contain",
                                       }}
                                       sizes={
                                          isMobile
                                             ? "(max-width: 768px) 70vw"
                                             : isLaptop
                                                ? "(max-width: 1440px) 55vw"
                                                : "(min-width: 1441px) 400px"
                                       }
                                    />
                                 </figure>
                                 <div className="content p-relative">
                                    <h4>{item.title}</h4>
                                    <p className="pt-15 pb-10">{item.desc}</p>
                                    <ul
                                       className="tab-list-content row"
                                       style={isLaptop ? { rowGap: "4px" } : undefined}
                                    >
                                       {item.list.map((list, i) => (
                                           <li
                                              key={i}
                                              className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12"
                                              style={
                                                 isLaptop
                                                    ? { marginBottom: 0, paddingTop: "2px", paddingBottom: "2px" }
                                                    : undefined
                                              }
                                           >
                                              {list}
                                           </li>
                                       ))}
                                    </ul>
                                    <Link
                                       className="primary-btn-1 btn-hover mt-20"
                                       href="/shields"
                                       style={isMobile ? { width: "100%", textAlign: "center" } : undefined}
                                    >
                                       Read more &nbsp; | <i className="icon-right-arrow"></i>
                                       <span style={{ top: "147.172px", left: "108.5px" }}></span>
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Service
