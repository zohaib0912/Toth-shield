"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import Wrapper from "@/layouts/Wrapper";
import Counter from "@/components/homes/home-one/Counter";
import HelpForm from "@/components/homes/home-one/HelpForm";

import bronze_img from "@/assets/imgs/toth/bronze-shield.png"
import silver_img from "@/assets/imgs/toth/silver-shield.png"
import gold_img from "@/assets/imgs/toth/gold-shield.png"
import platinum_img from "@/assets/imgs/toth/platinum-shield.png"

interface ShieldPackage {
    id: number;
    thumb: StaticImageData;
    title: string;
    desc: string;
    list: string[];
    pricing: {
        monthly: string;
        annual: string;
        savings?: string;
    };
    priceKeys: {
        monthly: string;
        annual: string;
    };
    popular?: boolean;
}

interface RemotePlanFeature {
    feature_id?: number;
    note?: string | null;
    limit_value?: number | string | null;
    is_included?: boolean | null;
}

interface RemotePlan {
    id?: number;
    name?: string | null;
    title?: string | null;
    plan_name?: string | null;
    slug?: string | null;
    key?: string | null;
    plan_key?: string | null;
    amount?: number | string | null;
    price?: number | string | null;
    price_value?: number | string | null;
    amount_monthly?: number | string | null;
    amount_annual?: number | string | null;
    monthly_price?: number | string | null;
    annual_price?: number | string | null;
    billing_cycle?: string | null;
    billingCycle?: string | null;
    interval?: string | null;
    frequency?: string | null;
    cadence?: string | null;
    features?: RemotePlanFeature[] | null;
}

type PlanBucketEntry = {
    source: RemotePlan;
    priceValue: number;
    features?: RemotePlanFeature[];
};

const DEFAULT_SHIELD_PACKAGES: ShieldPackage[] = [
    {
        id: 1,
        thumb: bronze_img,
        title: "Bronze Shield",
        desc: "Perfect for homeowners who want annual inspections, a roof health report, and discounted repair rates.",
        list: [
            "1 Annual Roof Inspection",
            "Membership Credits Of $100/year",
            "Roof Health Report",
            "Customer Portal Access",
            "Discounted Pricing On Other Services",
            "On-Call Moisture Inspection",
        ],
        pricing: {
            monthly: "$14.99/mo",
            annual: "$152.99/yr",
            savings: "Save $27",
        },
        priceKeys: {
            monthly: "bronzeMonthly",
            annual: "bronzeAnnual",
        },
    },
    {
        id: 2,
        thumb: silver_img,
        title: "Silver Shield",
        desc: "Enhanced protection with storm monitoring and emergency response services.",
        list: [
            "Includes all features in Bronze Shield",
            "2 Annual Roof Inspection",
            "Storm Preparation Services",
            "Emergency Tarping Up to $250",
            "Membership Credits Of $200/year",
            "Assessment By Insurance Agents",
            "Priority Service",
        ],
        pricing: {
            monthly: "$34.99/mo",
            annual: "$356.49/yr",
            savings: "Save $64",
        },
        priceKeys: {
            monthly: "silverMonthly",
            annual: "silverAnnual",
        },
    },
    {
        id: 3,
        thumb: gold_img,
        title: "Gold Shield",
        desc: "The ultimate protection plan with full coverage for roof maintenance and storm response.",
        list: [
            "Includes all features in Silver Shield",
            "3 Annual Roof Inspection",
            "Emergency Tarping Up to $500",
            "Membership Credits Of $500/year",
            "VIP Scheduling",
        ],
        pricing: {
            monthly: "$69.99/mo",
            annual: "$713.89/yr",
            savings: "Save $126",
        },
        priceKeys: {
            monthly: "goldMonthly",
            annual: "goldAnnual",
        },
        popular: true,
    },
    {
        id: 4,
        thumb: platinum_img,
        title: "Platinum Shield",
        desc: "The ultimate protection plan with full coverage for roof maintenance and storm response.",
        list: [
            "Includes all features in Gold Shield",
            "4 Annual Roof Inspection",
            "Comprehensive Roof Health Report",
            "Emergency Tarping Up to $1000",
            "Membership Credits Of $1000/year",
            "Drone Thermal Imaging for Leak Detection",
            "Personalized Storm Damage Monitoring",
            "24/7 Emergency Response Service",
            "1 Free Gutter Cleaning & 1 Seasonal Service per Year",
        ],
        pricing: {
            monthly: "$99.99/mo",
            annual: "$1019.89/yr",
            savings: "Save $180",
        },
        priceKeys: {
            monthly: "platinumMonthly",
            annual: "platinumAnnual",
        },
    },
];

const ShieldsPage = () => {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");
    const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isLaptop, setIsLaptop] = useState(false);
    const [shieldPackages, setShieldPackages] = useState<ShieldPackage[]>(DEFAULT_SHIELD_PACKAGES);
    const [isFetchingPlans, setIsFetchingPlans] = useState(false);
    const [plansError, setPlansError] = useState<string | null>(null);

    const subscriptionPlansUrl = React.useMemo(() => {
        const baseUrl =
            process.env.NEXT_PUBLIC_CUSTOMER_SUBSCRIPTIONS_URL ||
            process.env.NEXT_PUBLIC_CUSTOMER_PLANS_URL ||
            process.env.NEXT_PUBLIC_BACKEND_URL ||
            process.env.NEXT_PUBLIC_API_BASE_URL ||
            "https://app.stormbuddi.com/api";

        if (/customer-subscription-plans\/?$/i.test(baseUrl)) {
            return baseUrl;
        }

        return `${baseUrl.replace(/\/$/, "")}/customer-subscription-plans`;
    }, []);

    const normalizePlanKey = React.useCallback((value: string | null | undefined) => {
        if (!value || typeof value !== "string") {
            return "";
        }

        return value
            .toLowerCase()
            .replace(/(shield|package|plan)/g, "")
            .replace(/[0-9]/g, "")
            .replace(/[^a-z]/g, "")
            .trim();
    }, []);

    const parsePriceValue = React.useCallback((value: unknown) => {
        if (typeof value === "number") {
            return value;
        }

        if (typeof value === "string") {
            const cleaned = value.replace(/[^0-9.]/g, "");
            const parsed = parseFloat(cleaned);
            if (!Number.isNaN(parsed)) {
                return parsed;
            }
        }

        return null;
    }, []);

    const formatPriceLabel = React.useCallback(
        (value: unknown, cadence: "mo" | "yr", fallback: string) => {
            if (value === null || value === undefined) {
                return fallback;
            }

            if (typeof value === "number") {
                return `$${value.toFixed(2)}/${cadence}`;
            }

            if (typeof value === "string") {
                const trimmed = value.trim();
                if (!trimmed) {
                    return fallback;
                }

                if (/[\/]|per\s/i.test(trimmed)) {
                    return trimmed;
                }

                if (trimmed.toLowerCase().includes(cadence)) {
                    return trimmed;
                }

                return `${trimmed}/${cadence}`;
            }

            return fallback;
        },
        []
    );

    React.useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsMobile(width <= 768);
            setIsLaptop(width > 768 && width <= 1440);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    React.useEffect(() => {
        const controller = new AbortController();

        const fetchPlans = async () => {
            setIsFetchingPlans(true);
            setPlansError(null);

            try {
                const response = await fetch(subscriptionPlansUrl, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                    },
                    cache: "no-store",
                    signal: controller.signal,
                });

                const payload = await response.json().catch(() => null);

                if (!response.ok) {
                    const upstreamMessage =
                        (payload && typeof payload === "object" && "error" in payload && typeof payload.error === "string"
                            ? payload.error
                            : null) ?? `Request failed with status ${response.status}`;
                    setPlansError(upstreamMessage);
                    return;
                }
                const possibleCollections: unknown[] = [payload?.data, payload?.plans, payload?.result, payload];
                const remotePlans =
                    (possibleCollections.find((collection): collection is RemotePlan[] => Array.isArray(collection)) as
                        | RemotePlan[]
                        | undefined) ?? [];

                if (!Array.isArray(remotePlans) || remotePlans.length === 0) {
                    return;
                }

                const groupedPlans = remotePlans.reduce<Record<string, PlanBucketEntry[]>>((acc, plan) => {
                    if (!plan) return acc;

                    const planIdentifier = plan.slug ?? plan.key ?? plan.plan_key ?? plan.name ?? plan.title ?? "";
                    const normalizedKey = normalizePlanKey(planIdentifier);
                    if (!normalizedKey) {
                        return acc;
                    }

                    const priceValue = parsePriceValue(
                        plan.amount ??
                            plan.price ??
                            plan.price_value ??
                            plan.amount_monthly ??
                            plan.amount_annual ??
                            plan.monthly_price ??
                            plan.annual_price
                    );

                    if (priceValue === null) {
                        return acc;
                    }

                    const bucket = acc[normalizedKey] ?? [];
                    bucket.push({
                        source: plan,
                        priceValue,
                        features: Array.isArray(plan.features) ? plan.features : undefined,
                    });
                    acc[normalizedKey] = bucket;
                    return acc;
                }, {});

                setShieldPackages((current) =>
                    current.map((pkg) => {
                        const pkgKey = normalizePlanKey(pkg.title);
                        const bucket = groupedPlans[pkgKey];

                        if (!bucket) {
                            return pkg;
                        }

                        const sortedBucket = [...bucket].sort((a, b) => a.priceValue - b.priceValue);
                        const featuresEntry = bucket.find(
                            (entry) => Array.isArray(entry.features) && entry.features.length > 0
                        );
                        const fallbackMonthlyValue = parsePriceValue(pkg.pricing.monthly);
                        const fallbackAnnualValue = parsePriceValue(pkg.pricing.annual);

                        let monthlyEntry: (typeof bucket)[number] | undefined;
                        let annualEntry: (typeof bucket)[number] | undefined;

                        if (sortedBucket.length >= 2) {
                            monthlyEntry = sortedBucket[0];
                            annualEntry = sortedBucket[sortedBucket.length - 1];
                        } else if (sortedBucket.length === 1) {
                            const singleEntry = sortedBucket[0];

                            const annualDiff =
                                fallbackAnnualValue !== null
                                    ? Math.abs(singleEntry.priceValue - fallbackAnnualValue)
                                    : Number.POSITIVE_INFINITY;
                            const monthlyDiff =
                                fallbackMonthlyValue !== null
                                    ? Math.abs(singleEntry.priceValue - fallbackMonthlyValue)
                                    : Number.POSITIVE_INFINITY;

                            if (annualDiff < monthlyDiff) {
                                annualEntry = singleEntry;
                            } else {
                                monthlyEntry = singleEntry;
                            }
                        }

                        const resolvedFeatures =
                            featuresEntry?.features
                                ?.map((feature): string | null => {
                                    if (!feature || typeof feature.note !== "string") {
                                        return null;
                                    }
                                    const trimmedNote = feature.note.trim();
                                    return trimmedNote.length > 0 ? trimmedNote : null;
                                })
                                .filter((item): item is string => Boolean(item)) ?? null;

                        return {
                            ...pkg,
                            title:
                                (annualEntry?.source?.name ??
                                    annualEntry?.source?.title ??
                                    annualEntry?.source?.plan_name ??
                                    monthlyEntry?.source?.name ??
                                    monthlyEntry?.source?.title ??
                                    monthlyEntry?.source?.plan_name ??
                                    pkg.title) ?? pkg.title,
                            pricing: {
                                ...pkg.pricing,
                                monthly:
                                    monthlyEntry && monthlyEntry.priceValue !== null
                                        ? formatPriceLabel(monthlyEntry.priceValue, "mo", pkg.pricing.monthly)
                                        : pkg.pricing.monthly,
                                annual:
                                    annualEntry && annualEntry.priceValue !== null
                                        ? formatPriceLabel(annualEntry.priceValue, "yr", pkg.pricing.annual)
                                        : pkg.pricing.annual,
                            },
                            list: resolvedFeatures && resolvedFeatures.length > 0 ? resolvedFeatures : pkg.list,
                        };
                    })
                );
            } catch (error) {
                if (controller.signal.aborted) {
                    return;
                }
                console.error("Unable to load subscription plans", error);
                setPlansError("Unable to load the latest pricing right now.");
            } finally {
                if (!controller.signal.aborted) {
                    setIsFetchingPlans(false);
                }
            }
        };

        fetchPlans();

        return () => {
            controller.abort();
        };
    }, [subscriptionPlansUrl, formatPriceLabel, normalizePlanKey, parsePriceValue]);

    const paymentLinks: Record<string, string> = {
        bronzeMonthly: "https://link.fastpaydirect.com/payment-link/67fc9f2730cc7e7595468b36",
        bronzeAnnual: "https://link.fastpaydirect.com/payment-link/68013cda41b3014a0c552a7c",
        silverMonthly: "https://link.fastpaydirect.com/payment-link/67fc9db8fb737940e9aa56ec",
        silverAnnual: "https://link.fastpaydirect.com/payment-link/68013c6c08e4880f24f561a9",
        goldMonthly: "https://link.fastpaydirect.com/payment-link/67fc9e8908e488be75f5410e",
        goldAnnual: "https://link.fastpaydirect.com/payment-link/68013c4608e48815a2f561a6",
        platinumMonthly: "https://link.fastpaydirect.com/payment-link/67fca273fb7379e5adaa5711",
        platinumAnnual: "https://link.fastpaydirect.com/payment-link/68013bd741b301e372552a66",
    };

    const handleCheckout = (planKey: string) => {
        const paymentUrl = paymentLinks[planKey];
        
        if (!paymentUrl) {
            console.error(`No payment link found for plan: ${planKey}`);
            alert("Payment link not available for this plan. Please try again.");
            return;
        }

        setLoadingPlan(planKey);
        window.location.href = paymentUrl;
    };

    return (
        <Wrapper>
            <HeaderOne />
            <main>
                {/* Hero Section - Full Width Video Background */}
                <section
                className="p-relative wow fadeInUp"
                    style={{
                        height: isMobile ? 'auto' : '100vh',
                        minHeight: isMobile ? 'auto' : '600px',
                        padding: isMobile ? '120px 0 80px' : undefined,
                        overflow: 'hidden',
                        zIndex: 1
                    }}
                >
                    {/* Background Video */}
                    <video 
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                        className="position-absolute w-100 h-100"
                        style={{ 
                            top: 0, 
                            left: 0, 
                            objectFit: 'cover',
                            zIndex: -2
                        }}
                    >
                        <source src="/assets/video/harboursheild.mp4" type="video/mp4" />
                    </video>
                    
                    {/* Dark Overlay */}
                    <div className="position-absolute w-100 h-100" style={{ 
                        top: 0, 
                        left: 0, 
                        backgroundColor: 'rgba(16, 32, 57, 0.85)',
                        zIndex: -1
                    }}></div>
                    
                    {/* Content */}
                    <div 
                        className="position-relative h-100 d-flex align-items-center" 
                        style={{ 
                            zIndex: 1,
                            paddingTop: isLaptop ? "80px" : undefined,
                            alignItems: isLaptop ? "flex-start" : "center",
                            justifyContent: isLaptop ? "center" : undefined,
                        }}
                    >
                        <style dangerouslySetInnerHTML={{__html: `
                            .section-sub-title.text-white::before {
                                display: none !important;
                            }
                            .section-sub-title.text-white {
                                margin-left: 0 !important;
                            }
                            @media (min-width: 769px) and (max-width: 1440px) {
                                .shields-hero-content {
                                    padding-top: 150px !important;
                                }
                                .shield-card-container {
                                    position: relative !important;
                                }
                                .shield-image-laptop {
                                    position: absolute !important;
                                    left: calc(40px + 55px) !important;
                                    top: 50% !important;
                                    transform: translateY(-50%) !important;
                                    margin-right: 0 !important;
                                    margin-bottom: 0 !important;
                                }
                                .shield-content-laptop {
                                    margin-left: 310px !important;
                                }
                            }
                        `}} />
                        <div 
                            className="small-container shields-hero-content"
                            style={{
                                width: "100%",
                            }}
                        >
                            <div className="row justify-content-center">
                                <div
                                    className="col-xxl-10 col-xl-10 col-lg-12 text-center"
                                    style={
                                        isMobile 
                                            ? { marginTop: "40px", padding: "0 12px" } 
                                            : undefined
                                    }
                                >
                                    <span
                                        className="section-sub-title text-white"
                                        style={{
                                            fontSize: isMobile ? "2.2rem" : "3.75rem",
                                            fontWeight: 700,
                                            display: "block",
                                            lineHeight: 1.1,
                                        }}
                                    >
                                        Toth Shield Membership
                                    </span>
                                    <h1
                                        className="section-title mt-10 mb-20 text-white"
                                        style={{
                                            fontSize: isMobile ? "2.6rem" : "3.25rem",
                                            fontWeight: 500,
                                            lineHeight: 1.2,
                                            marginTop: isMobile ? "12px" : undefined,
                                        }}
                                    >
                                        Protect Your Home<br />With Roof Care Plans
                                    </h1>
                                    <p
                                        className="mb-40 text-white"
                                        style={{
                                            fontSize: isMobile ? "1.4rem" : "2rem",
                                            maxWidth: isMobile ? "100%" : "800px",
                                            margin: isMobile ? "0 auto 24px" : "0 auto 40px",
                                            lineHeight: 1.5,
                                        }}
                                    >
                                        Join thousands of homeowners who trust Toth Shield for comprehensive roof protection. 
                                        Get annual inspections, roof health reports, membership credits, and priority service 
                                        with plans designed to keep your home safe from hail, wind, and weather damage.
                                    </p>
                                    
                                    
                                    {/* Quick Stats */}
                                    {/* <div className="row g-4 mt-60 pt-40" style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}>
                                        <div className="col-md-4">
                                            <h2 className="mb-10 text-white">10K+</h2>
                                            <p className="text-white mb-0">Shield Members</p>
                                        </div>
                                        <div className="col-md-4">
                                            <h2 className="mb-10 text-white">4 Tiers</h2>
                                            <p className="text-white mb-0">Bronze to Platinum</p>
                                        </div>
                                        <div className="col-md-4">
                                            <h2 className="mb-10 text-white">$100-$1000</h2>
                                            <p className="text-white mb-0">Annual Credits</p>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Packages Section */}
                <section id="packages" className="section-space pb-0" >
                    <div className="small-container">
                        <div className="text-center mb-60">
                            <span className="section-sub-title">Membership Plans</span>
                            <h2 className="section-title mt-10">Choose Your Protection Level</h2>
                            <p className="mt-20">
                                Each plan includes comprehensive roof protection with varying levels of service and benefits. 
                                Upgrade or downgrade anytime to match your needs.
                            </p>
                            <div className="d-flex flex-column align-items-center justify-content-center gap-2 mt-30 text-center">
                                <span className="text-muted text-uppercase" style={{ letterSpacing: "0.15rem" }}>
                                    Billing
                                </span>
                                <div
                                    className="d-inline-flex rounded-pill p-1"
                                    style={{
                                        backgroundColor: "rgba(16, 32, 57, 0.1)",
                                        boxShadow: "inset 0 0 10px rgba(0,0,0,0.08)",
                                    }}
                                >
                                    {(["monthly", "annual"] as const).map((cycle) => {
                                        const isActive = billingCycle === cycle;
                                        return (
                                            <button
                                                key={cycle}
                                                onClick={() => setBillingCycle(cycle)}
                                                className="text-uppercase fw-bold"
                                                style={{
                                                    minWidth: "140px",
                                                    border: "none",
                                                    backgroundColor: isActive ? "#ea1826" : "transparent",
                                                    color: isActive ? "#fff" : "#102039",
                                                    borderRadius: "999px",
                                                    padding: "10px 24px",
                                                    transition: "all 0.3s ease",
                                                }}
                                            >
                                                {cycle === "monthly" ? "Monthly" : "Annual"}
                                            </button>
                                        );
                                    })}
                                </div>
                                <span className="text-muted small">
                                    {billingCycle === "annual" ? "Best value · Save up to 20%" : "Pay as you go"}
                                </span>
                                {isFetchingPlans && (
                                    <span className="text-muted small">Fetching the latest pricing...</span>
                                )}
                                {plansError && (
                                    <span className="small" style={{ color: "#ea1826" }}>
                                        {plansError}
                                    </span>
                                )}
                            </div>
                        </div>
                        
                        <div className="row g-4 justify-content-center">
                            {shieldPackages.map((pkg) => {
                                const midpoint = Math.ceil(pkg.list.length / 2);
                                const columns = [pkg.list.slice(0, midpoint), pkg.list.slice(midpoint)];
                                return (
                                <div key={pkg.id} className="col-12" style={{ maxWidth: "1800px" }}>
                                    <div
                                        className="service-tab-content p-relative h-100 d-flex mx-auto w-100 shield-card-container"
                                        style={{
                                            borderRadius: "0px",
                                            border: "1px solid rgba(16,32,57,0.1)",
                                            boxShadow: pkg.popular
                                                ? "0 25px 60px -20px rgba(16,32,57,0.35)"
                                                : "0 15px 45px -25px rgba(16,32,57,0.25)",
                                            padding: isMobile ? "24px" : "30px 40px",
                                            background: "#fff",
                                            position: "relative",
                                            overflow: "hidden",
                                            transform: "scale(1)",
                                            transition: "transform 0.3s ease",
                                            flexDirection: isMobile ? "column" : "row",
                                            maxWidth: isMobile ? "100%" : "1800px",
                                        }}
                                    >
                                        <div className="tab-bg-shape" style={{ backgroundImage: `url(/assets/imgs/shapes/shape-32.png)` }}></div>
                                        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-4 w-100">
                                            <figure
                                                className="image p-relative flex-shrink-0 shield-image-laptop"
                                                style={{
                                                    textAlign: "center",
                                                    marginBottom: isMobile ? "16px" : 0,
                                                    marginRight: isMobile ? 0 : "110px",
                                                }}
                                            >
                                                <Image
                                                    src={pkg.thumb}
                                                    alt={pkg.title}
                                                    style={{
                                                        maxWidth: isMobile ? "160px" : "204px",
                                                        height: "auto",
                                                        marginBottom: isMobile ? 0 : "162px",
                                                        marginRight: isMobile ? 0 : "86px",
                                                    }}
                                                />
                                            </figure>
                                            <div
                                                className="content p-relative text-lg-start text-center shield-content-laptop"
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    flexGrow: 1,
                                                    width: "100%",
                                                    maxWidth: "640px",
                                                    textAlign: isMobile ? "center" : "left",
                                                    alignItems: isMobile ? "center" : "flex-start",
                                                }}
                                            >
                                            <div className="d-flex align-items-center justify-content-between mb-15 w-100 gap-2 flex-wrap">
                                                <h4 className="mb-0">{pkg.title}</h4>
                                                {billingCycle === "annual" && pkg.pricing.savings && (
                                                    <span
                                                        className="badge text-uppercase"
                                                        style={{
                                                            backgroundColor: "rgba(255,107,53,0.2)",
                                                            color: "#ea1826",
                                                            borderRadius: "999px",
                                                            padding: "12px 32px",
                                                            fontWeight: 800,
                                                            fontSize: "1.25rem",
                                                            letterSpacing: "0.05em",
                                                        }}
                                                    >
                                                        {pkg.pricing.savings}
                                                    </span>
                                                )}
                                            </div>
                                                <div className="d-flex align-items-center justify-content-lg-between justify-content-center mb-20 flex-wrap gap-2 w-100">
                                                    <div>
                                                        <p
                                                            className="mb-0"
                                                            style={{ fontSize: "2rem", fontWeight: 700, color: "#ea1826" }}
                                                        >
                                                            {billingCycle === "monthly" ? pkg.pricing.monthly : pkg.pricing.annual}
                                                        </p>
                                                        <span className="text-muted small">
                                                            {billingCycle === "monthly" ? "Paid monthly" : "Billed annually"}
                                                        </span>
                                                    </div>
                                                </div>
                                                <p className="mb-20">{pkg.desc}</p>
                                                <div className="row w-100 g-3 mb-30">
                                                    {columns.map((items, colIdx) => (
                                                        <div key={colIdx} className="col-12 col-md-6">
                                                            <ul className="tab-list-content mb-0" style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                                                {items.map((item, i) => (
                                                                    <li key={`${colIdx}-${i}`} className="d-flex align-items-start gap-2">
                                                                        <i className="icon-check-circle" style={{ color: "#ea1826", marginTop: "4px" }}></i>
                                                                        {item}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                                <button
                                                    onClick={() => handleCheckout(pkg.priceKeys[billingCycle])}
                                                    className="primary-btn-1 btn-hover"
                                                    style={{
                                                        marginTop: "auto",
                                                        width: isMobile ? "100%" : "220px",
                                                        alignSelf: isMobile ? "center" : "flex-end",
                                                    }}
                                                    disabled={loadingPlan === pkg.priceKeys[billingCycle]}
                                                >
                                                    {loadingPlan === pkg.priceKeys[billingCycle] ? "Redirecting..." : (
                                                        <>
                                                            Get Started &nbsp; | <i className="icon-right-arrow"></i>
                                                        </>
                                                    )}
                                                    <span style={{ top: "147.172px", left: "108.5px" }}></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )})}
                        </div>
                    </div>
                </section>
                <Counter style={false} />
        <HelpForm />

                {/* Comparison Section */}
           

                {/* CTA Section */}
                {/* <section className="section-space">
                    <div className="small-container">
                        <div className="text-center bg-color-1 p-40 rounded">
                            <h3 className="mb-20">Ready to Protect Your Home?</h3>
                            <p className="mb-30">Get started today with the shield plan that's right for you. Our team is ready to help you choose the perfect protection level.</p>
                            <div className="d-flex gap-3 justify-content-center flex-wrap">
                                <button onClick={() => router.push("/contact")} className="primary-btn-1 btn-hover">
                                    Contact Us &nbsp; | <i className="icon-right-arrow"></i>
                                </button>
                                <a href="tel:8009887435" className="primary-btn-4 btn-hover">
                                    Call 800 988 7435 &nbsp; | <i className="icon-phone"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </section> */}
            </main>
            <FooterOne />
        </Wrapper>
    );
};

export default ShieldsPage;

