import LegalNotice from "@/components/legal";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Legal Notice | Toth Shield",
  description:
    "Understand Toth Shield’s disclaimers, liability limits, and emergency service terms for roof protection memberships.",
};

const page = () => {
  return (
    <Wrapper>
      <LegalNotice />
    </Wrapper>
  );
};

export default page;

