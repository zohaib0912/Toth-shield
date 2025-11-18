import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-vh-100 d-flex flex-column justify-content-center align-items-center text-center gap-4 p-4">
      <div className="d-flex flex-column gap-3">
        <h1 className="fw-bold">Payment successful 🎉</h1>
        <p className="text-muted">
          Thanks for becoming a Shield member! A receipt and next steps have been sent to your inbox.
        </p>
        <Link href="/" className="primary-btn-1 btn-hover align-self-center">
          Back to home
        </Link>
      </div>
    </main>
  );
}

