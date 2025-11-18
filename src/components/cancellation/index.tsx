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
  subsections?: {
    title: string;
    paragraphs?: string[];
    list?: string[];
    listType?: ListType;
  }[];
}

const sections: Section[] = [
  {
    title: "1. Cancellation Policy",
    paragraphs: [
      "We understand that circumstances change, and you may need to cancel your Toth Shield membership. Our cancellation policy is designed to be simple and fair to all members.",
    ],
    subsections: [
      {
        title: "A. Monthly Memberships",
        listType: "bulleted",
        list: [
          "You may cancel your membership at any time.",
          "Cancellations must be requested at least 7 days before the next billing cycle to avoid being charged for the next month.",
          "Membership benefits, including inspections, storm monitoring, and membership credits, will cease immediately upon cancellation.",
          "Unused membership credits are forfeited upon cancellation.",
        ],
      },
      {
        title: "B. Annual Memberships",
        paragraphs: [
          "Annual memberships are prepaid for a full year and are eligible for cancellation under the following conditions:",
        ],
        listType: "bulleted",
        list: [
          "If canceled within 30 days of purchase and no services have been used, you will receive a full refund.",
          "If canceled after 30 days or if any services have been used, the membership is non-refundable.",
          "Members who cancel before the 12-month period ends will forfeit any unused membership credits.",
        ],
      },
      {
        title: "C. How to Cancel",
        paragraphs: ["To cancel your membership, you must submit a request via:"],
        listType: "bulleted",
        list: ["Customer Portal", "Email: info@tothshield.com", "Phone: 800 988 7435"],
      },
    ],
  },
  {
    title: "2. Refund Policy",
    paragraphs: ["Refunds are processed based on the type of membership:"],
    subsections: [
      {
        title: "A. Monthly Memberships",
        paragraphs: [
          "Monthly memberships are non-refundable, but members can cancel at any time to avoid future charges.",
        ],
      },
      {
        title: "B. Annual Memberships",
        paragraphs: [
          "Refunds are only issued if the cancellation request is made within the first 30 days and no services have been used.",
          "After 30 days or if any services have been utilized, no refunds will be granted.",
        ],
      },
      {
        title: "C. One-Time Setup Fee",
        paragraphs: [
          "The $49 setup fee is non-refundable unless an annual membership is canceled within 30 days without using any services.",
        ],
      },
      {
        title: "D. Service-Specific Refunds",
        paragraphs: [
          "Any individual paid service (moisture inspection, additional maintenance, etc.) is non-refundable once performed.",
          "If a scheduled service was not completed due to an issue on Toth Shield’s end, a credit or rescheduling option will be provided.",
        ],
      },
    ],
  },
  {
    title: "3. Membership Changes & Downgrades",
    listType: "bulleted",
    list: [
      "Members may upgrade their membership at any time, with the new plan taking effect immediately.",
      "Downgrades take effect at the next billing cycle, and no refunds or credits are provided for prior payments.",
    ],
  },
  {
    title: "4. Contact Us",
    paragraphs: [
      "If you have any questions about this Refund & Cancellation Policy or need help with your account, please contact us today.",
    ],
  },
];

const CancellationPolicy = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <BreadCrumb sub_title="Refund & Cancellation" title="Refund & Cancellation" />

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
                  <h2 className="section-title mb-20">Refund & Cancellation Policy</h2>
                  <p className="mb-40">
                    Please review the cancellation and refund guidelines below to understand how membership
                    changes, credits, and service refunds are handled across Toth Shield plans.
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

                      {section.subsections?.map((sub) => (
                        <div key={sub.title} className="mb-25">
                          <h5 className="mb-10">{sub.title}</h5>
                          {sub.paragraphs?.map((paragraph) => (
                            <p key={paragraph} className="mb-10">
                              {paragraph}
                            </p>
                          ))}
                          {sub.list &&
                            (sub.listType === "numbered" ? (
                              <ol style={{ paddingLeft: "20px", marginBottom: "0" }}>
                                {sub.list.map((item, index) => (
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
                                {sub.list.map((item, index) => (
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
                    Our customer success team is available 24/7 to answer billing questions, discuss plan
                    changes, or help you process a cancellation.
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

export default CancellationPolicy;

