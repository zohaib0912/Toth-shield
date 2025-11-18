"use client";

import Link from "next/link";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import BreadCrumb from "@/components/common/BreadCrumb";

type ListType = "numbered" | "bulleted";

interface Section {
  title: string;
  paragraphs?: string[];
  list?: string[];
  listType?: ListType;
}

const sections: Section[] = [
  {
    title: "1. General Disclaimer",
    paragraphs: [
      "Toth Shield is a roof protection membership service that provides preventive maintenance, inspections, and storm monitoring. Toth Shield is not an insurance provider and does not guarantee full protection from roof damage.",
    ],
  },
  {
    title: "2. No Warranty on Roof Longevity",
    paragraphs: [
      "While Toth Shield aims to extend the life of your roof through regular inspections and preventive care, we do not guarantee that your roof will remain damage-free from natural wear, extreme weather conditions, or unforeseen incidents.",
    ],
  },
  {
    title: "3. Limitation of Liability",
    paragraphs: [
      "To the fullest extent permitted by law, Toth Shield, its affiliates, and service providers are not liable for:",
    ],
    listType: "bulleted",
    list: [
      "Any roof damage, leaks, or structural failures occurring outside of scheduled inspections or emergency response services.",
      "Consequential damages, including property damage, business interruptions, or personal injury resulting from roofing issues.",
      "Any denied or disputed insurance claims based on information provided by Toth Shield.",
      "Delays in service due to severe weather, labor shortages, or third-party scheduling conflicts.",
    ],
  },
  {
    title: "4. Insurance & Claims Disclaimer",
    listType: "bulleted",
    list: [
      "Toth Shield does not replace or act as a substitute for homeowner’s insurance.",
      "We do not file claims on behalf of homeowners.",
      "Inspection reports and before/after photos provided by Toth Shield are for informational purposes only and do not serve as official insurance documentation.",
    ],
  },
  {
    title: "5. Emergency & Storm Services Disclaimer",
    listType: "bulleted",
    list: [
      "Emergency tarping and storm response services are subject to availability and weather conditions.",
      "We cannot guarantee immediate response times during peak storm seasons.",
      "Homeowners remain responsible for addressing any structural damage that may require a full roof replacement.",
    ],
  },
  {
    title: "6. Use of Customer Data & Portal",
    listType: "bulleted",
    list: [
      "Customers using the Toth Shield Portal acknowledge responsibility for keeping their information up to date.",
      "Toth Shield does not verify or validate insurance documents uploaded by customers.",
    ],
  },
  {
    title: "7. Modification of Services & Terms",
    paragraphs: [
      "Toth Shield reserves the right to modify, discontinue, or update services without prior notice. Any changes will be reflected in updated Terms of Service and communicated via email or the customer portal.",
    ],
  },
  {
    title: "8. Governing Law & Dispute Resolution",
    paragraphs: [
      "This agreement is governed by the laws of the State of Texas. Any disputes will be resolved through binding arbitration in your local county unless otherwise required by law.",
    ],
  },
  {
    title: "9. Contact Us",
    paragraphs: [
      "If you have any questions about this Legal Notice or how it applies to your membership, please contact us today.",
    ],
  },
];

const LegalNotice = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <BreadCrumb sub_title="Legal Notice" title="Legal Notice" />

        <section className="section-space">
          <div className="small-container">
            <div className="row gy-4">
              <div className="col-lg-8">
                <div
                  className="radius-16"
                  style={{
                    backgroundColor: "#fff",
                    padding: "40px",
                    boxShadow: "0 30px 80px rgba(22, 32, 55, 0.08)",
                    color: "#0f172a",
                  }}
                >
                  <span className="section-sub-title d-inline-block mb-10">
                    Last updated on March 18th, 2025
                  </span>
                  <h2 className="section-title mb-20">Disclaimers & Limitations Of Liability</h2>
                  <p className="mb-40">
                    Review the legal terms below to understand the limits of Toth Shield’s services, our
                    liability boundaries, and how emergency and insurance-related support is provided.
                  </p>

                  {sections.map((section) => (
                    <div key={section.title} className="mb-35">
                      <h4 className="mb-15">{section.title}</h4>
                      {section.paragraphs?.map((paragraph) => (
                        <p key={paragraph} className="mb-15">
                          {paragraph}
                        </p>
                      ))}

                      {section.list &&
                        (section.listType === "numbered" ? (
                          <ol style={{ paddingLeft: "20px", marginBottom: "0" }}>
                            {section.list.map((item, index) => (
                              <li
                                key={`${item}-${index}`}
                                style={{ marginBottom: "8px", color: "#0f172a" }}
                              >
                                {item}
                              </li>
                            ))}
                          </ol>
                        ) : (
                          <ul
                            style={{
                              paddingLeft: "20px",
                              marginBottom: "0",
                              listStyleType: "disc",
                            }}
                          >
                            {section.list.map((item, index) => (
                              <li
                                key={`${item}-${index}`}
                                style={{ marginBottom: "8px", color: "#0f172a" }}
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-lg-4">
                <div
                  className="radius-16 text-white"
                  style={{
                    backgroundColor: "#111827",
                    padding: "32px",
                    position: "sticky",
                    top: "140px",
                    color: "#fff",
                  }}
                >
                  <p
                    className="text-uppercase mb-10"
                    style={{ letterSpacing: "2px", fontSize: "12px", color: "#fff" }}
                  >
                    Need help?
                  </p>
                  <h4 className="mb-25" style={{ color: "#fff" }}>
                    Talk to a Toth Shield specialist
                  </h4>
                  <div className="d-flex align-items-start mb-25">
                    <div
                      className="icon-box bg-color-3 text-white me-20"
                      style={{
                        minWidth: "60px",
                        minHeight: "60px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                      }}
                    >
                      <i className="fal fa-phone-volume"></i>
                    </div>
                    <div style={{ color: "#fff" }}>
                      <p className="mb-5">Call us any time</p>
                      <h5 className="mb-0" style={{ color: "#fff" }}>
                        800 988 7435
                      </h5>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-30">
                    <div
                      className="icon-box bg-color-3 text-white me-20"
                      style={{
                        minWidth: "60px",
                        minHeight: "60px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                      }}
                    >
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div style={{ color: "#fff" }}>
                      <p className="mb-5">Email us</p>
                      <h5 className="mb-0" style={{ color: "#fff" }}>
                        info@tothshield.com
                      </h5>
                    </div>
                  </div>

                  <p className="mb-25" style={{ color: "#fff" }}>
                    Our team is ready 24/7 to walk through membership protections, emergency coverage, or
                    any legal clarifications you need.
                  </p>

                  <Link href="/contact" className="primary-btn-1 btn-hover">
                    Contact Us Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterOne />
    </>
  );
};

export default LegalNotice;

