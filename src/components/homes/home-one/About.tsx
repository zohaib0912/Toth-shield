import Image from "next/image";
import Link from "next/link";
import Count from "@/components/common/Count";

import about_1 from "@/assets/imgs/toth/about-1.png"


interface DataType {
   sub_title: string;
   title: string;
   desc: string;
   feature_list: {
      id: number;
      list: string[];
   }[]
}

const about_data: DataType = {
   sub_title: "About Toth Shield",
   title: "Proactive Roof Protection For Every Home",
   desc: "Toth Shield combines advanced monitoring, detailed roof health reports, and priority response teams to keep homeowners confident before and after every storm.",
   feature_list: [
      {
         id: 1,
         list: ["30+ Years of Home Protection", "Nationwide Storm Monitoring", "Certified Inspection Teams"],
      },
      {
         id: 2,
         list: ["Emergency Tarping & Mitigation", "Insurance Claim Guidance", "Dedicated Member Support"],
      },
   ],
}

const { sub_title, title, desc, feature_list } = about_data;

interface PropType {
   style: boolean;
}

const About = ({ style }: PropType) => {
   return (
      <>
         <style dangerouslySetInnerHTML={{__html: `
            .small-image-mobile-hide {
               display: none !important;
            }
            @media (min-width: 992px) {
               .small-image-mobile-hide {
                  display: inline-block !important;
               }
            }
         `}} />
         <section className={`about-2-section p-relative fix section-space ${style ? "bg-color-3 is-dark" : ""}`}>
         <div className="bg-shape-1" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-30.png)` }}></div>
         <div className="bg-shape-2" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-31.png)` }}></div>
         <div className="small-container">
            <div className="row">
               <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                  <div className="about-2-image-area p-relative wow fadeInLeft" data-wow-delay="500ms">
                     <figure className="main-image m-img">
                        <Image src={about_1} alt="" style={{height: '500px'}}/>
                     </figure>
                     {/* <div 
                        className="small-image small-image-mobile-hide" 
                        style={{ 
                          bottom: '40px !important',
                          width: '250px !important',
                          display: 'none !important',
                          right: '-75px !important',
                          border: '12px solid #fff !important',
                          boxShadow: '0px 4px 25px 0px rgba(0, 0, 0, 0.08) !important',
                        }}
                     >
                        <Image src={about_2} alt="" />
                     </div> */}
                     <div className="icon-box">
                        <div className="icon">
                           <i className="icon-prize-1"></i>
                        </div>
                        <div className="content">
                           <h3 className="mb-10"><span className="counter"><Count number={30} /></span>+</h3>
                           <p>Years Protecting Homes</p>
                        </div>
                     </div>
                     <div className="shape-1" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-29.png)` }}></div>
                  </div>
               </div>
               <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                  <div className="about-2-content-area pl-50">
                     <div className="title-box mb-35 wow fadeInRight" data-wow-delay=".5s">
                        <span className="section-sub-title">{sub_title}</span>
                        <h3 className="section-title mt-10">{title}</h3>
                     </div>
                     <p className="mb-35">{desc}</p>
                     <div className="row mb-45">
                        {feature_list.map((item) => (
                           <div key={item.id} className="col-lg-6">
                              <ul className="list-area">
                                 {item.list.map((list, i) => (
                                    <li key={i} className="mb-10">{list}</li>
                                 ))}
                              </ul>
                           </div>
                        ))}
                     </div>
                     <div className="about-2-btn-area">
                        <Link className="primary-btn-1 btn-hover" href="/about">
                           about us &nbsp; | <i className="icon-right-arrow"></i>
                           <span style={{ top: "147.172px", left: "108.5px" }}></span>
                        </Link>
                        <div className="call-us">
                           <div className="icon-1">
                              <i className="fal fa-phone-volume"></i>
                           </div>
                           <div className="content p-relative">
                              <span>Call Us Now</span>
                              <h5><Link href="tel:8009887435">800&nbsp;988&nbsp;7435</Link></h5>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      </>
   )
}

export default About
