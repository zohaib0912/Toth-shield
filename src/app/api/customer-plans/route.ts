import { NextResponse } from "next/server";

const SUBSCRIPTION_ENDPOINT_CANDIDATES = [
    process.env.CUSTOMER_SUBSCRIPTIONS_URL,
    process.env.CUSTOMER_SUBSCRIPTION_API_URL,
    process.env.CUSTOMER_SUBSCRIPTIONS_API_URL,
    process.env.CUSTOMER_SUBSCRIPTION_PLANS_URL,
    process.env.BACKEND_URL,
    process.env.API_BASE_URL,
    process.env.APP_URL,
    process.env.LARAVEL_APP_URL,
    process.env.NEXT_PUBLIC_CUSTOMER_SUBSCRIPTIONS_URL,
    process.env.NEXT_PUBLIC_BACKEND_URL,
    process.env.NEXT_PUBLIC_API_BASE_URL,
    "http://192.168.1.182:8000/",
] as const;

const SUBSCRIPTION_PATH_REGEX = /customer-subscription-plans\/?$/i;

const resolveSubscriptionEndpoint = () => {
    const base = SUBSCRIPTION_ENDPOINT_CANDIDATES.find(
        (value) => typeof value === "string" && value.trim().length > 0
    );

    if (!base) {
        return null;
    }

    if (SUBSCRIPTION_PATH_REGEX.test(base)) {
        return base;
    }

    return `${base.replace(/\/$/, "")}/customer-subscription-plans`;
};

export async function GET() {
    const endpoint = resolveSubscriptionEndpoint();

    if (!endpoint) {
        return NextResponse.json(
            {
                error: "Customer subscription API URL is not configured. Set CUSTOMER_SUBSCRIPTIONS_URL (or another supported env variable) and restart the app.",
            },
            { status: 500 }
        );
    }

    try {
        const upstreamResponse = await fetch(endpoint, {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
            cache: "no-store",
            next: { revalidate: 0 },
        });

        const bodyText = await upstreamResponse.text();
        let jsonPayload: unknown;

        try {
            jsonPayload = bodyText ? JSON.parse(bodyText) : null;
        } catch {
            const snippet = bodyText.slice(0, 200);
            return NextResponse.json(
                {
                    error: "Upstream subscription API did not return JSON.",
                    snippet,
                },
                { status: 502 }
            );
        }

        if (!upstreamResponse.ok) {
            return NextResponse.json(
                {
                    error: "Failed to load subscription plans from backend.",
                    status: upstreamResponse.status,
                    payload: jsonPayload,
                },
                { status: upstreamResponse.status }
            );
        }

        return NextResponse.json(jsonPayload);
    } catch (error) {
        console.error("Failed to proxy subscription plans", error);
        return NextResponse.json(
            {
                error: "Unexpected error while fetching subscription plans.",
            },
            { status: 500 }
        );
    }
}

