"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import VerticalZigZagSections from "@/components/VerticalZigZagSections";
import sectionsData from "@/data/sectionsData";
import HelpForm from "@/components/homes/home-one/HelpForm";

const useFadeInOnScroll = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

const INDUSTRY_CARDS = [
  {
    title: "Insurance Agencies",
    link: "#",
    description:
      "Tailored alerts, documentation, and portals for every policyholder.",
    icon: "fal fa-tag",
    label: "Insurance Agencies",
  },
  {
    title: "Automotive Dealers",
    link: "#",
    description:
      "Dealer-branded glovebox and campaign CTAs that keep clients returning.",
    icon: "fal fa-stars",
    label: "Automotive Dealers",
  },
  {
    title: "Property Management Companies",
    link: "#",
    description:
      "Portfolio-wide storm monitoring with centralized incident logging.",
    icon: "fal fa-city",
    label: "Property",
  },
  {
    title: "Real Estate Brokerages & Teams",
    link: "#",
    description:
      "Post-closing homeowner app that keeps your brand top-of-mind.",
    icon: "fal fa-house-day",
    label: "Real Estate Teams",
  },
];



const fadeStyles = (isVisible) => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? "translateY(0)" : "translateY(30px)",
  transition: "all 0.6s ease",
});

const IndustrySection = ({ block }) => {
  const { ref, isVisible } = useFadeInOnScroll();
  return (
    <section className="section-space" key={block.id}>
      <div className="small-container">
        <div ref={ref} className="industry-box" style={fadeStyles(isVisible)}>
          <div className="row g-4">
            <div className="col-lg-12">
              <span className="section-sub-title text-uppercase" style={{ letterSpacing: "0.28em" }}>
                {block.title}
              </span>
              <h3 className="section-title mt-10">{block.title}</h3>
              <p className="mt-15" style={{ color: "#475569" }}>
                {block.description}
              </p>
            </div>
            <div className="col-lg-12">
              <ul className="industry-list">
                {block.bullets.map((bullet) => (
                  <li key={bullet}>
                    <span className="icon-circle">
                      <i className="fal fa-check"></i>
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-12">
              <Link href={block.ctaLink} className="primary-btn-1 btn-hover">
                {block.ctaText} &nbsp; | <i className="icon-right-arrow"></i>
                <span></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CrossVerticalSection = () => {
  const { ref, isVisible } = useFadeInOnScroll();
  return (
    <section className="section-space" style={{ background: "#f8fafc" }}>
      <div className="small-container">
        <div ref={ref} className="industry-box text-center" style={fadeStyles(isVisible)}>
          <span className="section-sub-title text-uppercase" style={{ letterSpacing: "0.3em" }}>
            Cross-Vertical
          </span>
          <h3 className="section-title mt-10">One Platform, Multiple Verticals</h3>
          <p className="mt-15" style={{ color: "#475569" }}>
            Whether you’re an insurance agency, dealer, property manager, real estate team, or
            builder, the core idea is the same: give your clients protection, documentation, and a
            branded digital experience that keeps you at the center of every event. We’ll help you
            configure the right version of the platform for your vertical—and for the partners you
            work with.
          </p>
          <div className="d-flex flex-column flex-md-row gap-3 justify-content-center mt-4">
            <Link href="/contact" className="primary-btn-1 btn-hover">
              Talk to Us About Your Industry &nbsp; | <i className="icon-right-arrow"></i>
              <span></span>
            </Link>
            <Link
              href="/industries/insurance-agencies"
              className="primary-btn-1 btn-hover"
              style={{ background: "#102039", color: "#fff", border: "1px solid #d7dee9" }}
            >
              View Agency Plans &amp; Pricing &nbsp; | <i className="icon-right-arrow"></i>
              <span></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const IndustriesWeServeHero = () => {
  const { ref: heroRef, isVisible: heroVisible } = useFadeInOnScroll();
  const { ref: selectorRef, isVisible: selectorVisible } = useFadeInOnScroll();

  return (
    <>
      <HeaderOne />
      <main>
        <section
          className="section-space industries-hero hero-bg p-relative"
          style={{ backgroundColor: "#f8fafc" }}
        >
          <div className="hero-overlay"></div>
          <div className="small-container" style={{ paddingTop: "100px" }}>
            <div
              ref={heroRef}
              className="text-center hero-wrapper"
              style={fadeStyles(heroVisible)}
            >
              <span className="section-sub-title text-uppercase" style={{ letterSpacing: "0.32em" }}>
                Harbor Shield 360
              </span>
              <h1 className="section-title mt-20">Industries We Serve</h1>
              <p className="mt-20" style={{ color: "#e2e8f0", lineHeight: 1.7, fontSize: "17px" }}>
                One platform, tailored experiences for insurance agencies, automotive dealers,
                property managers, real estate teams, and builders.
              </p>
              <p className="mt-15" style={{ color: "#e2e8f0", lineHeight: 1.7 }}>
                Harbor Shield 360 and Toth Shield are built to protect homes, vehicles, and portfolios
                while keeping your brand at the center of every event. We tailor the same core
                technology—storm monitoring, incident documentation, digital glovebox, and client
                portals—to fit the way you do business in your industry.
              </p>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="small-container">
            <div
              ref={selectorRef}
              className="text-center mb-50"
              style={fadeStyles(selectorVisible)}
            >
              <span className="section-sub-title text-uppercase" style={{ letterSpacing: "0.32em" }}>
                Tailored Workflows
              </span>
              <h2 className="section-title mt-10">Select Your Industry</h2>
              <p className="mt-15" style={{ color: "#475569" }}>
                Choose the playbook designed for your clients, assets, and teams.
              </p>
            </div>
            <div className="row g-4 industry-card-row">
              {INDUSTRY_CARDS.map((card) => (
                <div key={card.title} className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                  <div className="industry-card">
                    <div className="industry-card__label">
                      <span className="label-icon">
                        <i className={card.icon}></i>
                      </span>
                      <span className="label-text">{card.label}</span>
                    </div>
                    <h4 className="industry-card__title">{card.title}</h4>
                    <p className="industry-card__desc">{card.description}</p>
                    <div className="industry-card__cta">
                      <span>Explore {card.title}</span>
                      <span className="cta-divider"></span>
                      <i className="icon-right-arrow"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <VerticalZigZagSections items={sectionsData} />

        {/* {INDUSTRY_BLOCKS.map((block) => (
          <IndustrySection key={block.id} block={block} />
        ))} */}

        <CrossVerticalSection />
        <HelpForm />
      </main>
      <FooterOne />
      <style jsx>{`
        .industry-card-row {
          --card-gap: 24px;
        }
        .industry-card {
          padding: 32px 28px;
          border: 1px solid #e7eaf3;
          background: #fff;
          box-shadow: 0 25px 70px rgba(7, 34, 79, 0.08);
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 14px;
          position: relative;
        }
        .industry-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 35px 95px rgba(7, 34, 79, 0.12);
        }
        .industry-card__label {
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 16px 7px 12px;
          border-radius: 999px;
          border: 1px solid #f0433d;
          text-transform: uppercase;
          font-size: 11px;
          letter-spacing: 0.14em;
          font-weight: 600;
          color: #f0433d;
          background: #fff7f7;
        }
        .industry-card__title {
          font-size: 22px;
          font-weight: 700;
          color: #081f3b;
          margin: 0;
        }
        .industry-card__desc {
          color: #5c6473;
          line-height: 1.7;
          font-size: 15px;
          margin: 0;
        }
        .industry-card__cta {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          text-transform: uppercase;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.16em;
          color: #d81a1f;
          background: transparent;
          text-decoration: none;
          padding-top: 18px;
          border-top: 1px solid #edf0f6;
        }
        .industry-card__cta:hover {
          color: #aa1216;
        }
        .industry-card__cta .cta-divider {
          width: 1px;
          height: 18px;
          background: currentColor;
          opacity: 0.6;
        }
        .industry-box {
          background: #ffffff;
          padding: 48px 40px;
          border-radius: 18px;
          box-shadow: 0 30px 70px rgba(8, 35, 82, 0.1);
        }
        .industry-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .industry-list li {
          display: flex;
          gap: 18px;
          color: #475569;
          line-height: 1.6;
        }
        .icon-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #e8edff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #2563eb;
          font-size: 18px;
          flex-shrink: 0;
        }
        .hero-bg {
          background-image: url("/assets/imgs/bg/4.jpeg");
          background-size: cover;
          background-position: center;
          overflow: hidden;
          position: relative;
          z-index: 0;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(5, 16, 31, 0.75) 0%, rgba(5, 16, 31, 0.92) 100%);
          z-index: 0;
          pointer-events: none;
        }
        .hero-wrapper {
          position: relative;
          z-index: 1;
          color: #fff;
        }
        .hero-wrapper .section-title {
          color: #fff;
        }
      `}</style>
    </>
  );
};

export default IndustriesWeServeHero;


