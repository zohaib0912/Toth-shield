import Link from "next/link";

export default function CancelPage() {
  return (
    <main className="min-vh-100 d-flex flex-column justify-content-center align-items-center text-center gap-4 p-4">
      <div className="d-flex flex-column gap-3">
        <h1 className="fw-bold">Checkout canceled</h1>
        <p className="text-muted">
          No charge was made. You can resume the Shield checkout anytime that works for you.
        </p>
        <Link href="/shields" className="primary-btn-1 btn-hover align-self-center">
          Return to plans
        </Link>
      </div>
    </main>
  );
}

