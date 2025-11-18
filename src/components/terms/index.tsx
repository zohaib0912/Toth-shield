"use client";

import Link from "next/link";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import BreadCrumb from "@/components/common/BreadCrumb";

const sections = [
  {
    title: "1. Introduction",
    paragraphs: [
      "Welcome to Toth Shield! By enrolling in a Toth Shield membership, you agree to the following terms and conditions. Please review them carefully so you know exactly how your membership works and what to expect.",
    ],
  },
  {
    title: "2. Membership Plans & Fees",
    paragraphs: ["Toth Shield offers multiple membership levels: Bronze, Silver, Gold, and Platinum."],
    list: [
      "Membership fees are billed monthly or annually based on the plan selected.",
      "A one-time setup fee of $49 is required unless waived for annual payments.",
      "Membership credits accumulate annually and can be applied to future services.",
    ],
    listType: "numbered",
  },
  {
    title: "3. Services Provided",
    list: [
      "Regular roof inspections based on membership tier.",
      "Storm monitoring and emergency response services.",
      "Customer Portal access to store before/after photos, insurance policies, and inspection reports.",
      "Discounted or covered services based on membership tier.",
    ],
    listType: "numbered",
  },
  {
    title: "4. Membership Credits & Usage",
    paragraphs: [
      "Membership credits accrue annually and can be applied toward roof repairs, maintenance, and upgrades.",
      "Credits cannot be used to pay insurance deductibles per Texas law. Unused credits roll over for up to three years if the membership stays active.",
    ],
  },
  {
    title: "5. Billing & Cancellation",
    list: [
      "Monthly memberships are billed on a recurring basis.",
      "Annual memberships are paid upfront and receive a discount.",
      "Cancellations must be made at least 7 days before the next billing cycle.",
      "Memberships canceled before the year’s end forfeit any accrued credits.",
    ],
    listType: "numbered",
  },
  {
    title: "6. Liability & Limitations",
    list: [
      "Toth Shield is a preventive service and does not guarantee storm-proof protection.",
      "Toth Shield is not an insurance provider and does not process insurance claims.",
      "Homeowners are responsible for acting on inspection findings.",
    ],
    listType: "numbered",
  },
  {
    title: "7. Dispute Resolution & Governing Law",
    paragraphs: [
      "This agreement is governed by the laws of the State of Texas. Any disputes will be resolved through binding arbitration in your local county unless otherwise required by law.",
    ],
  },
  {
    title: "8. Contact Us",
    paragraphs: [
      "If you have questions about these Terms of Services or your membership, reach out to our support team anytime. We’re here to help you stay protected before, during, and after storm season.",
    ],
  },
];

const TermsPage = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <BreadCrumb sub_title="Terms Of Services" title="Terms Of Services" />

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
                  <h2 className="section-title mb-20">
                    Terms Of Services &amp; Membership Agreement
                  </h2>
                  <p className="mb-40">
                    Please review the membership terms below. These guidelines ensure you get the most out
                    of Toth Shield’s proactive protection services while keeping your account in good
                    standing.
                  </p>

                  {sections.map((section) => (
                    <div key={section.title} className="mb-35">
                      <h4 className="mb-15">{section.title}</h4>
                      {section.paragraphs?.map((paragraph) => (
                        <p key={paragraph} className="mb-15">
                          {paragraph}
                        </p>
                      ))}

                      {section.list && (
                        section.listType === "numbered" ? (
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
                        )
                      )}
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
                    height: "30%",
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
                    Our customer success team is available 24/7 to answer billing questions, discuss plan
                    benefits, or help you upgrade coverage.
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

export default TermsPage;

