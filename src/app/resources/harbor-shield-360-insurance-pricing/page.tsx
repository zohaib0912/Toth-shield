import Link from "next/link";
import Wrapper from "@/layouts/Wrapper";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import HelpForm from "@/components/homes/home-one/HelpForm";

export const metadata = {
  title: "Harbor Shield 360 – Insurance Agency Pricing",
  description:
    "Compare Harbor Shield 360 plans for insurance agencies. See pricing for Agency Starter, Agency Pro, and Agency Elite, and choose the best fit for your clients.",
};

const planCards = [
  {
    name: "Agency Starter",
    price: "$699/month",
    badge: "",
    highlight: false,
    bestFor:
      "Independent agencies getting started with digital storm monitoring and documentation.",
    features: [
      "Storm monitoring dashboard with real-time alerts",
      "Up to 500 included households",
      "Client-ready incident documentation workflow",
      "Basic onboarding + launch materials",
      "Self-service enrollment & billing",
    ],
    cta: "Get Started with Starter",
    link: "/contact",
    delay: ".1s",
  },
  {
    name: "Agency Pro",
    price: "$999/month",
    badge: "",
    highlight: true,
    bestFor:
      "Growth-focused agencies that want a co-branded experience at scale.",
    features: [
      "Everything in Starter",
      "2,000 included households + affiliate pricing access",
      "Co-branded client portal + notifications",
      "Priority onboarding & quarterly growth reports",
      "Upgrade-ready workflows as you scale",
    ],
    cta: "Choose Pro & Enroll Online",
    link: "/contact",
    delay: ".2s",
  },
  {
    name: "Agency Elite",
    price: "From $1,500/month",
    badge: "",
    highlight: false,
    bestFor: "Multi-location firms requiring a complete white-label rollout across all offices.",
    features: [
      "Custom portal URL & branded app",
      "Dedicated account manager & onboarding",
      "Home deductible financing + affiliate pricing access",
      "Unlimited locations & household tiers",
      "Scoping + approval completed online",
    ],
    cta: "Request Elite Quote & Enroll",
    link: "/contact",
    delay: ".3s",
  },
];

const comparisonRows = [
  { label: "Agency dashboard", starter: "✓", pro: "✓", elite: "✓" },
  {
    label: "Toth Shield–branded client app/portal",
    starter: "✓",
    pro: "✓",
    elite: "Optional / Hidden",
  },
  { label: "Co-branded client experience", starter: "–", pro: "✓", elite: "✓" },
  {
    label: "Co-branded emails/notifications",
    starter: "–",
    pro: "✓",
    elite: "✓ (your brand only)",
  },
  { label: "Home storm monitoring", starter: "✓", pro: "✓", elite: "✓" },
  {
    label: "Auto incident documentation + glovebox",
    starter: "✓",
    pro: "✓",
    elite: "✓",
  },
  { label: "Access to Affiliate Pricing", starter: "–", pro: "✓", elite: "✓" },
  {
    label: "Home deductible financing programs",
    starter: "–",
    pro: "✓",
    elite: "✓",
  },
  {
    label: "Basic onboarding & materials",
    starter: "✓",
    pro: "✓",
    elite: "✓",
  },
  { label: "Priority onboarding", starter: "–", pro: "✓", elite: "✓" },
  {
    label: "Quarterly reports",
    starter: "–",
    pro: "✓",
    elite: "✓ (enhanced)",
  },
  { label: "Custom portal URL", starter: "–", pro: "–", elite: "✓" },
  {
    label: "Custom branded mobile app",
    starter: "–",
    pro: "–",
    elite: "✓ (scope-based)",
  },
  { label: "Dedicated account manager", starter: "–", pro: "–", elite: "✓" },
  {
    label: "Included households",
    starter: "500",
    pro: "2000",
    elite: "Custom / Multi-location",
  },
  {
    label: "Designed for",
    starter: "Small Agencies",
    pro: "Growth Agencies",
    elite: "Large / Multi-Location",
  },
];

const HarborShieldAgencyPricingPage = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <main className="harbor-shield-agency-pricing overflow-hidden">
        <section
          className="section-space text-center wow fadeInUp pricing-hero"
          style={{
            position: "relative",
            backgroundImage: 'url("/assets/imgs/bg/4.jpeg")',
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
              background:
                "linear-gradient(180deg, rgba(5, 16, 31, 0.85) 0%, rgba(5, 16, 31, 0.95) 100%)",
              zIndex: 0,
              pointerEvents: "none",
            }}
          ></div>
          <div className="container position-relative">
            <div className="mx-auto" style={{ maxWidth: "850px", marginTop: "150px" }}>
              <h1 className="section-title text-white">
                Harbor Shield 360 for Insurance Agencies
              </h1>
              <h4 className="mt-20 mb-20 text-white">
                Keep your clients protected, documented, and calling you first
                when something happens.
              </h4>
              <p className="lead mb-0 text-white">
                Harbor Shield 360 gives independent agencies a storm monitoring
                and incident documentation platform that keeps you at the center
                of every claim. Protect your book, reduce churn, and give your
                clients a modern digital experience they can’t get from a direct
                writer. Choose the plan that fits your agency today and upgrade
                as you grow.
              </p>
            </div>
          </div>
        </section>

        <section className="section-space pt-0" style={{ marginTop: "40px" }}>
          <h3 className="section-title text-center">Agency plans</h3>
          <div className="container" style={{ marginTop: "40px" }}>
            <div className="row g-4 pricing-row">
              {planCards.map((plan) => (
                <div key={plan.name} className="col-md-6 col-lg-4">
                  <div
                    className={`pricing-card wow fadeInUp ${plan.highlight ? "pricing-card--featured" : ""}`}
                    data-wow-delay={plan.delay}
                  >
                    {plan.highlight && <span className="featured-pill">Most Popular</span>}
                    <div className="plan-label text-uppercase">{plan.name}</div>
                    <h3 className="pricing-card__price">{plan.price}</h3>
                    <p className="pricing-card__desc">{plan.bestFor}</p>
                    <span className="pricing-card__label">You get</span>
                    <ul className="pricing-card__list">
                      {plan.features.map((feature) => (
                        <li key={feature}>
                          <span className="dot"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={plan.link}
                      className={`primary-btn-1 btn-hover w-100 text-center ${plan.highlight ? "cta-featured" : ""}`}
                    >
                      {plan.cta}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="info-box bg-light p-4 mt-5 text-center wow fadeInUp">
              <ul className="list-unstyled mb-0">
                <li>• Transparent monthly billing. No surprise fees.</li>
                <li>• Starter & Pro activate online with zero onboarding calls.</li>
                <li>• Elite includes a short scoping form and full rollout support.</li>
                <li>• Upgrade from Starter → Pro → Elite anytime as you scale.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section-space pt-0">
          <div className="container">
            <div className="title-box text-center mb-40">
              <h3 className="section-title">Compare Agency Plans</h3>
            </div>
            <div className="table-responsive wow fadeInUp">
              <table className="table table-striped table-bordered align-middle comparison-table mb-0">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Starter</th>
                    <th className="text-white" style={{ background: "#102039" }}>
                      Pro 
                    </th>
                    <th>Elite (Full White-Label)</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.label}>
                      <td className="fw-semibold text-start">{row.label}</td>
                      <td>{row.starter}</td>
                      <td
                        style={{
                          background: "rgba(16, 32, 57, 0.08)",
                          fontWeight: 600,
                        }}
                      >
                        {row.pro}
                      </td>
                      <td>{row.elite}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section-space pt-0 bg-light">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-5">
                <h3 className="section-title mb-3">
                  Why Agencies Invest in Harbor Shield 360
                </h3>
              </div>
              <div className="col-lg-7">
                <ul className="list-unstyled mb-0 value-list">
                  {[
                    "Protect your book: Give clients a reason to stay with you after every storm and every claim.",
                    "Reduce churn: Make it harder for direct writers and competitors to win your customers away.",
                    "Own the claim experience: Be the first call when something happens, not the last to know.",
                    "Prove your value: Show clients a real, ongoing benefit beyond the policy itself.",
                  ].map((value) => (
                    <li
                      key={value}
                      className="d-flex align-items-start gap-3 mb-3"
                    >
                      <span className="dot"></span>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <HelpForm />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default HarborShieldAgencyPricingPage;
