import TermsPage from "@/components/terms";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Terms Of Services | Tooth Shield",
  description:
    "Review Tooth Shield's membership terms, coverage details, billing policies, and support options to understand how your protection plan works.",
};

const page = () => {
  return (
    <Wrapper>
      <TermsPage />
    </Wrapper>
  );
};

export default page;

