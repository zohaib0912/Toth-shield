import HomeOne from "@/components/homes/home-one";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Toth Shield | Home Protection Memberships",
  description: "Proactive roof monitoring, emergency tarping, and insurance support for homeowners nationwide.",
};
const page = () => {
  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  )
}

export default page