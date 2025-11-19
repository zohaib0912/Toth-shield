"use client"
import Image from 'next/image'

import img1 from '@/assets/imgs/resources/6.png'

const HelpForm = () => {
   return (
      <section className="help-form-section section-space-small p-relative" style={{ backgroundImage: `url(/assets/imgs/bg/5.jpg)` }}>
         <div className="bg-shape" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-38.png)` }}></div>
         <div className="small-container">
            <div className="row">
               <div className="col-xxl-4 col-xl-4 col-lg-4">
                  <div
                     className="image-area w-img"
                     data-anim="slide-left"
                     data-anim-delay="0.15s"
                  >
                     <Image src={img1} alt="" style={{ width: '735px' }}/>
                  </div>
               </div>
               <div className="col-xxl-8 col-xl-8 col-lg-8">
                  <div
                     className="help-form-area"
                     data-anim="fade-up"
                     data-anim-delay="0.25s"
                  >
                     <h3 className="section-title mb-40 text-white">Need Help Protecting Your Roof?</h3>
                     <div className="inner p-relative">
                        <form onSubmit={(e) => e.preventDefault()}>
                           <div className="row">
                              <div className="col-lg-4 col-md-12 mb-20">
                                 <input type="text" placeholder="Your Name" required />
                              </div>
                              <div className="col-lg-4 col-md-12 mb-20">
                                 <input type="tel" placeholder="Your Phone" required />
                              </div>
                              <div className="col-lg-4 col-md-12">
                                 <button type="submit" className="primary-btn-1 btn-hover">
                                    Contact Toth Shield
                                    <span style={{ top: "147.172px", left: "108.5px" }}></span>
                                 </button>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default HelpForm
