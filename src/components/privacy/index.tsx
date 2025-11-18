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
    title: "1. Introduction",
    paragraphs: [
      "Toth Shield is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, services, and customer portal.",
      "By using Toth Shield, you agree to the terms outlined in this policy. If you do not agree, please refrain from using our services.",
    ],
  },
  {
    title: "2. Information We Collect",
    paragraphs: ["We collect the following types of information:"],
    subsections: [
      {
        title: "A. Personal Information",
        listType: "bulleted",
        list: [
          "Name",
          "Address",
          "Email Address",
          "Phone Number",
          "Payment Information (processed securely by third-party providers)",
        ],
      },
      {
        title: "B. Service-Related Information",
        listType: "bulleted",
        list: [
          "Roof inspection reports",
          "Storm monitoring data",
          "Photos & documentation uploaded to the customer portal",
          "Insurance policy details (if voluntarily provided by the user)",
        ],
      },
      {
        title: "C. Automatically Collected Information",
        listType: "bulleted",
        list: [
          "IP address",
          "Browser type and version",
          "Device information",
          "Website usage data (via cookies & analytics tools)",
        ],
      },
    ],
  },
  {
    title: "3. How We Use Your Information",
    listType: "bulleted",
    list: [
      "Provide and manage your membership services.",
      "Process payments and renewals.",
      "Store roof inspection reports and photos for insurance claims.",
      "Send service updates, storm alerts, and inspection reminders.",
      "Improve our website and customer experience.",
      "Prevent fraudulent activities and ensure security.",
    ],
  },
  {
    title: "4. How We Share Your Information",
    paragraphs: ["We do not sell your personal data. However, we may share information with:"],
    listType: "bulleted",
    list: [
      "Service Providers: Third-party vendors that help process payments, conduct inspections, and provide customer support.",
      "Insurance Companies: If you request assistance with claims processing.",
      "Legal Authorities: If required by law or to protect against fraud and security threats.",
    ],
  },
  {
    title: "5. Data Security",
    paragraphs: ["We implement industry-standard security measures to protect your data, including:"],
    listType: "bulleted",
    list: [
      "Encrypted payment processing (no credit card details stored on our servers).",
      "Secure cloud storage for customer portal data.",
      "Access controls to prevent unauthorized access to user information.",
    ],
  },
  {
    title: "6. Cookies & Tracking Technologies",
    paragraphs: [
      "We use cookies and analytics tools to improve website functionality and user experience. You can adjust cookie preferences in your browser settings.",
    ],
  },
  {
    title: "7. Your Privacy Rights",
    paragraphs: ["You have the right to:"],
    listType: "bulleted",
    list: [
      "Access and update your personal information.",
      "Request deletion of your data (subject to legal obligations).",
      "Opt out of marketing communications.",
    ],
  },
  {
    title: "8. Changes to This Privacy Policy",
    paragraphs: [
      "Toth Shield may update this policy from time to time. We will notify users of significant changes via email or through our website.",
    ],
  },
  {
    title: "9. Contact Us",
    paragraphs: [
      "If you have any questions about this Privacy Policy or your data, please contact us today.",
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <BreadCrumb sub_title="Privacy Policy" title="Privacy Policy" />

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
                  <h2 className="section-title mb-20">Privacy Policy</h2>
                  <p className="mb-40">
                    Please review the guidelines below to understand how Toth Shield collects, uses, and
                    protects your information across our membership services and customer portal.
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

                      {section.subsections?.map((sub) => (
                        <div key={sub.title} className="mb-25">
                          <h5 className="mb-10">{sub.title}</h5>
                          {sub.paragraphs?.map((paragraph) => (
                            <p key={paragraph} className="mb-10">
                              {paragraph}
                            </p>
                          ))}
                          {sub.list && (
                            sub.listType === "numbered" ? (
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
                            )
                          )}
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
                    Our customer success team is available 24/7 to answer questions about your data,
                    privacy preferences, or membership account.
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

export default PrivacyPolicy;

