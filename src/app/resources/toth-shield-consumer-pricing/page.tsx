"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Wrapper from "@/layouts/Wrapper";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import HelpForm from "@/components/homes/home-one/HelpForm";

type PricingTier = {
  monthly: string;
  yearly: string;
};

type Plan = {
  id: string;
  title: string;
  bestFor: string;
  features: string[];
  affiliate: PricingTier;
  direct: PricingTier;
};

const plans: Plan[] = [
  {
    id: "bronze",
    title: "Bronze Shield – Core Monitoring",
    bestFor: "Basic home and auto monitoring and documentation.",
    features: [
      "Core CRM + monitoring app (home + auto)",
      "Real-time home storm alerts",
      "Basic auto incident logging (photos, notes)",
      "Simple guided incident checklists (home + auto)",
      "Basic portal access and agent/dealer contact info",
    ],
    affiliate: { monthly: "$5.99/month", yearly: "$64.99/year" },
    direct: { monthly: "$19.99/month", yearly: "$219.99/year" },
  },
  {
    id: "silver",
    title: "Silver Shield – Digital Glovebox & Discounts",
    bestFor: "Organizing home and auto life with better documentation and savings.",
    features: [
      "Includes everything in Bronze plus:",
      "Full digital glovebox (documents, service records, warranties, photos)",
      "Member-only discounts with preferred vendors",
      "Annual home exterior/roof documentation review",
      "Annual vehicle documentation review",
      "Enhanced incident guidance",
    ],
    affiliate: { monthly: "$14.99/month", yearly: "$159.99/year" },
    direct: { monthly: "$34.99/month", yearly: "$379.99/year" },
  },
  {
    id: "gold",
    title: "Gold Shield – Home Deductible Help & Priority",
    bestFor: "Households wanting financing help on eligible home deductibles plus faster support.",
    features: [
      "Includes everything in Silver plus:",
      "Access to in-house home deductible financing*",
      "Applies to eligible home insurance deductibles",
      "Eligibility varies (ACV vs RCV, property condition, scope)",
      "Auto deductibles NOT financed",
      "Priority scheduling after storms",
      "Priority routing to preferred contractors",
      "Enhanced claims documentation packet",
    ],
    affiliate: { monthly: "$24.99/month", yearly: "$269.99/year" },
    direct: { monthly: "$49.95/month", yearly: "$539.99/year" },
  },
  {
    id: "platinum",
    title: "Platinum Shield – VIP Household Protection",
    bestFor: "Households needing proactive outreach, maximum discounts, and white-glove response.",
    features: [
      "Includes everything in Gold plus:",
      "Household-level protection",
      "Limits based on roof vs interior, ACV vs RCV",
      "Proactive outreach after major storms",
      "Highest-priority support",
      "Maximum discounts",
      "Platinum-only offers (free roof inspection, free vehicle safety check)",
    ],
    affiliate: { monthly: "$39.99/month", yearly: "$429.99/year" },
    direct: { monthly: "$69.99/month", yearly: "$749.99/year" },
  },
];

const signupSteps = [
  "During signup, customers will select their provider (insurance company, agent, property manager, roofer, dealer, etc.).",
  "Option: “My provider isn’t listed.”",
  "If a listed provider is selected → Apply Affiliate Pricing.",
  "If not listed → Apply Standard Direct Pricing and allow them to continue.",
  "Optionally capture provider name for internal follow-up.",
];

const TothShieldConsumerPricingPage = () => {
  const [activeTab, setActiveTab] = useState<"affiliate" | "direct">("affiliate");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const pricingCopy = useMemo(
    () =>
      activeTab === "affiliate"
        ? {
            label: "Affiliate Pricing",
            footnote:
              "Affiliate Pricing is available when your insurance company or service provider participates in the Toth Shield Affiliate Program. Standard Direct Pricing applies if you are not currently with an Affiliate.",
          }
        : {
            label: "Standard Direct Pricing",
            footnote:
              "If your insurance company or service provider joins the Toth Shield Affiliate Program in the future, you may become eligible for Affiliate Pricing on renewal.",
          },
    [activeTab]
  );

  return (
    <Wrapper>
      <HeaderOne />
      <main className="overflow-hidden">
        <section
          className="section-space text-center wow fadeInUp pricing-hero"
          style={{
            position: "relative",
            backgroundImage: 'url("/assets/imgs/bg/5.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            overflow: "hidden",
          }}
        >
          <div
            className="pricing-hero__overlay"
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, rgba(5, 16, 31, 0.8) 0%, rgba(5, 16, 31, 0.95) 100%)",
              zIndex: 0,
              pointerEvents: "none",
            }}
          ></div>
          <div className="container position-relative">
            <div className="mx-auto" style={{ maxWidth: "900px", marginTop: "140px", marginBottom: "40px" }}>
              <h1 className="section-title text-white mb-3">Toth Shield – Consumer Pricing</h1>
              <h4 className="text-white mb-4">Affiliate vs Direct Pricing</h4>
              <p className="lead text-white">
                Toth Shield partners with select insurance companies, agencies, real estate brokerages, property managers,
                roofers, and automotive dealerships (“Affiliates”) to offer preferred pricing to their clients. If your provider
                is an Affiliate, you qualify for Affiliate Pricing on all Shield plans. If not, you can still enroll directly at
                our Standard Direct Pricing. You’ll check eligibility during signup by selecting your provider or entering your
                agent’s information.
              </p>
            </div>
          </div>
        </section>

        <section className="section-space pt-10 pb-5">
          <div className="container">
            <div className="text-center wow fadeInUp">
              <ul
                className="nav nav-tabs justify-content-center border-0 gap-2"
                role="tablist"
                style={{ borderBottom: "none" }}
              >
                {[
                  { id: "affiliate", label: "Affiliate Pricing" },
                  { id: "direct", label: "Standard Direct Pricing" },
                ].map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <li className="nav-item" key={tab.id}>
                      <button
                        className={`nav-link px-4 py-3 text-uppercase fw-semibold ${isActive ? "active" : ""}`}
                        onClick={() => setActiveTab(tab.id as "affiliate" | "direct")}
                        role="tab"
                        aria-selected={isActive}
                        style={{
                          borderRadius: "999px",
                          border: "none",
                          background: isActive ? "#102039" : "rgba(16, 32, 57, 0.08)",
                          color: isActive ? "#fff" : "#102039",
                          boxShadow: isActive ? "0 10px 30px rgba(16,32,57,0.25)" : "none",
                          transition: "all 0.2s ease",
                          minWidth: "220px",
                        }}
                      >
                        {tab.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
              <small className="text-muted d-block mt-2">
                Features remain the same; pricing varies depending on eligibility.
              </small>
            </div>

            <div className="text-center mt-4 wow fadeInUp">
              <ul className="nav nav-pills pricing-cycle-tabs justify-content-center gap-3 border-0" role="tablist">
                {[
                  { id: "monthly", label: "Monthly Billing" },
                  { id: "annual", label: "Annual Billing" },
                ].map((cycle) => {
                  const isActive = billingCycle === cycle.id;
                  return (
                    <li className="nav-item" key={cycle.id}>
                      <button
                        className={`nav-link ${isActive ? "active" : ""}`}
                        onClick={() => setBillingCycle(cycle.id as "monthly" | "annual")}
                        role="tab"
                        aria-selected={isActive}
                      >
                        {cycle.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="tab-content mt-4 wow fadeInUp">
              <div className="row g-4 pricing-row">
                {plans.map((plan, idx) => {
                  const pricing = activeTab === "affiliate" ? plan.affiliate : plan.direct;
                  const displayedPrice = billingCycle === "monthly" ? pricing.monthly : pricing.yearly;

                  return (
                    <div className="col-md-6" key={plan.id}>
                      <div className="pricing-card wow fadeInUp h-100" data-wow-delay={`.${idx + 1}s`}>
                        <div className="plan-label text-uppercase">{plan.title}</div>
                        <h3 className="pricing-card__price">{displayedPrice}</h3>
                        <p className="pricing-card__desc" style={{ minHeight: "auto", marginBottom: "12px" }}>
                          {plan.bestFor}
                        </p>
                       
                        <p className="text-muted mb-2" style={{ marginBottom: "12px", fontWeight: "600" }}>
                          Features included in this Shield plan:
                        </p>
                        <ul className="pricing-card__list">
                          {plan.features.map((feature) => (
                            <li key={feature}>
                              <span className="dot"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Link href="/contact" className="primary-btn-1 btn-hover w-100 text-center">
                          Talk to Toth Shield
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="mt-4 text-center text-muted">{pricingCopy.footnote}</p>
            </div>
          </div>
        </section>

        <section className="section-space pt-0 pb-4">
          <div className="container">
            <div className="bg-light rounded-4 p-4 shadow-sm wow fadeInUp" style={{ maxWidth: "1000px", margin: "0 auto" }}>
              <p className="mb-0">
                Home deductible financing is available on approved projects only and is subject to credit and underwriting
                approval. Eligibility, limits, and terms may vary based on your insurance policy (ACV vs RCV), property
                condition, and project scope (roof vs interior). Auto deductibles are not financed.
              </p>
            </div>
          </div>
        </section>

        <section className="section-space pt-0">
          <div className="container wow fadeInUp" style={{ maxWidth: "900px" }}>
            <div className="text-center mb-4">
              <h3 className="section-title">Affiliate Eligibility During Signup</h3>
            </div>
            <ul className="list-unstyled mb-0">
              {signupSteps.map((item) => (
                <li key={item} className="d-flex align-items-start gap-3 mb-3">
                  <i className="fas fa-check" style={{ color: "#ea1826" , marginTop: "5px" }}></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <HelpForm />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default TothShieldConsumerPricingPage;

