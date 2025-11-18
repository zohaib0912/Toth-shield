import About from "@/components/about";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "About Toth Shield | Proactive Roof Protection",
  description: "Learn about Toth Shield's mission to provide proactive roof protection through regular inspections, storm tracking, and emergency response.",
};
const page = () => {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  )
}

export default page