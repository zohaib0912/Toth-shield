import CancellationPolicy from "@/components/cancellation";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Refund & Cancellation Policy | Toth Shield",
  description:
    "Review Toth Shield’s membership cancellation steps, refund rules, and service-specific credit policies.",
};

const page = () => {
  return (
    <Wrapper>
      <CancellationPolicy />
    </Wrapper>
  );
};

export default page;

