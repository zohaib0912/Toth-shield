import Contact from "@/components/contact";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Free Hail Report | Toothashield",
  description:
    "Request your free hail report from Toothashield. Submit the form and our team will deliver detailed insights tailored to your property.",
};

const page = () => {
  return (
    <Wrapper>
      <Contact title="Free Hail Report" subTitle="Free Hail Report" />
    </Wrapper>
  );
};

export default page;

