import SectionTitle from "../../Components/SectionTitle";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <SectionTitle
        subHeading={"From 11:30am to 10:00pm"}
        heading={"Order Online"}
      ></SectionTitle>
    </div>
  );
};

export default Home;
