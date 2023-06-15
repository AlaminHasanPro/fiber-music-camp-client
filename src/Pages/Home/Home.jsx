import SectionTitle from "../../Components/SectionTitle";
import Banner from "./Banner";
import ExtraSection from "./ExtraSection";
import Pricing from "./Pricing";

const Home = () => {
  return (
    <div>
      <Banner />
      <SectionTitle
        subHeading={"See Our Best "}
        heading={"Courses"}
      ></SectionTitle>
      <SectionTitle
        subHeading={"See Our Best "}
        heading={"Instructors"}
      ></SectionTitle>
      <SectionTitle
        subHeading={"Check Out Our"}
        heading={"Service Payout"}
      ></SectionTitle>
      <Pricing />
      <ExtraSection />
    </div>
  );
};

export default Home;
