"use client"
import HeaderOne from "@/layouts/headers/HeaderOne"
import FooterOne from "@/layouts/footers/FooterOne"
import BreadCrumb from '../common/BreadCrumb'
import ContactForm from '../forms/ContactForm'

interface ContactProps {
   title?: string;
   subTitle?: string;
}

const Contact = ({
   title = "Contact Toth Shield",
   subTitle = "Contact",
}: ContactProps) => {
   return (
      <>
         <HeaderOne />
         <main>
            <BreadCrumb sub_title={subTitle} title={title} />
            
            {/* Contact Section */}
            <section className="section-space wow fadeInUp">
               <div className="small-container">
                  <div className="row">
                     <div className="col-lg-5 mb-40">
                        <div className="mb-20">
                           <span className="section-sub-title">Get in touch with us</span>
                        </div>
                        <h2 className="section-title mb-40">Ask for your query</h2>

                        {/* Contact Info */}
                        <div className="mb-30 pb-30" style={{ borderBottom: '1px solid #e5e7eb' }}>
                           <div className="d-flex align-items-center">
                              <div className="icon-box bg-color-3 text-white me-20" style={{ 
                                 minWidth: '60px', 
                                 minHeight: '60px', 
                                 display: 'flex', 
                                 alignItems: 'center', 
                                 justifyContent: 'center', 
                                 borderRadius: '50%' 
                              }}>
                                 <i className="fal fa-phone-volume"></i>
                              </div>
                              <div style={{marginLeft: '10px'}}>
                                 <h6 className="mb-5">Call Anytime</h6>
                                 <p className="mb-0">800 988 7435</p>
                              </div>
                           </div>
                        </div>

                        <div className="pb-30" style={{ borderBottom: '1px solid #e5e7eb' }}>
                           <div className="d-flex align-items-center">
                              <div className="icon-box bg-color-3 text-white me-20" style={{ 
                                 minWidth: '60px', 
                                 minHeight: '60px', 
                                 display: 'flex', 
                                 alignItems: 'center', 
                                 justifyContent: 'center', 
                                 borderRadius: '50%' 
                              }}>
                                 <i className="fal fa-envelope"></i>
                              </div>
                              <div style={{marginLeft: '10px'}}>
                                 <h6 className="mb-5">Write Email</h6>
                                 <p className="mb-0">info@tothshield.com</p>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="col-lg-7">
                        <ContactForm />
                     </div>
                  </div>
               </div>
            </section>
         </main>
         <FooterOne />
      </>
   )
}

export default Contact
