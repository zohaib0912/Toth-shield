"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";
import { JSX } from 'react';

import client_img from "@/assets/imgs/banner/People.webp"

interface DataType {
   id: number;
   thumb: string;
   sub_title: string;
   title: JSX.Element;
   desc: JSX.Element;
}

const banner_data: DataType[] = [
   {
      id: 1,
      thumb: "/assets/imgs/toth/1.jpeg",
      sub_title: "TRUSTED SECURITY EXPERTS",
      title: (<>Protecting Homes<br />Every Day</>),
      desc: (<>30+ years of experience helping homeowners stay ahead of storms with proactive roof monitoring and rapid response crews.</>),
   },
   {
      id: 2,
      thumb: "/assets/imgs/toth/2.jpeg",
      sub_title: "BEST HOME PROTECTION",
      title: (<>Defending Roofs<br />Before Storms Hit</>),
      desc: (<>Membership plans built for peace of mind—detailed inspections, storm preparation, emergency tarping, and priority support.</>),
   },
   {
      id: 3,
      thumb: "/assets/imgs/toth/3.jpeg",
      sub_title: "SMARTER MAINTENANCE",
      title: (<>Monitor. Maintain.<br />Stay Protected.</>),
      desc: (<>Digital inspections, leak tracking, and proactive maintenance credits that keep your roof performing year-round.</>),
   },
]

const setting = {
   slidesPerView: 1,
   loop: true,
   effect: "fade",
   fadeEffect: { crossFade: true },
   autoplay: {
      delay: 5000,
      disableOnInteraction: false,
   },
   pagination: {
      el: ".banner-dot",
      clickable: true,
   },
   navigation: false,
};

const Banner = () => {
   return (
      <section className="banner-section-2 p-relative fix">
         <Swiper {...setting} modules={[Autoplay, Pagination, EffectFade]} className="swiper banner-active">
            {banner_data.map((item) => (
               <SwiperSlide key={item.id} className="swiper-slide">
                  <div className="banner-main-2" style={{ backgroundImage: `url(${item.thumb})` }}>
                     <div className="large-container">
                        <div className="banner-area-2 p-relative z-3 wow img-custom-anim-left animated" data-wow-delay="1000ms">
                           <span className="p-relative banner-sub-title">{item.sub_title}</span>
                           <h1 className="banner-title">{item.title}</h1>
                           <p className="banner-text">{item.desc}</p>
                           <div className="banner-btn-area-2">
                              <Link className="primary-btn-1 btn-hover" href="/shields">
                                 VIEW SHIELDS &nbsp; | <i className="icon-right-arrow"></i>
                                 <span style={{ top: "147.172px", left: "108.5px" }}></span>
                              </Link>
                              <div className="round-image-area">
                                 <div className="image-1">
                                    <Image src={client_img} alt="" />
                                 </div>
                              </div>
                              <h6>satisfied clients</h6>
                           </div>
                        </div>
                        <div className="socials-area">
                           <ul>
                              <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                              <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                              <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                              <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
                           </ul>
                           <span>FOLLOW US</span>
                        </div>
                     </div>
                  </div>
                  <div className="shape-area-2">
                     <div className="shape-1" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-18.png)` }}></div>
                     <div className="shape-2" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-19.png)` }}></div>
                     <div className="shape-3" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-20.png)` }}></div>
                     <div className="shape-4" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-21.png)` }}></div>
                     <div className="shape-5" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-22.png)` }}></div>
                     <div className="shape-6" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-23.png)` }}></div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
         <div className="banner-dot-inner">
            <div className="banner-dot"></div>
         </div>
      </section>
   )
}

export default Banner
