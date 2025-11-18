import PrivacyPolicy from "@/components/privacy";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Privacy Policy | Toth Shield",
  description:
    "Learn how Toth Shield collects, uses, and protects your information across memberships, inspections, and the customer portal.",
};

const page = () => {
  return (
    <Wrapper>
      <PrivacyPolicy />
    </Wrapper>
  );
};

export default page;

