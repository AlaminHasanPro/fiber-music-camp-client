import { useQuery } from "react-query";
import SectionTitle from "../../Components/SectionTitle";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import usePopularClasses from "../../Hooks/usePopularClasses";
import Banner from "./Banner";
import ClassesHomeCard from "./ClassesHomeCard";
import ExtraSection from "./ExtraSection";
import InstructorsHomeCard from "./InstructorsHomeCard";
import Pricing from "./Pricing";

const Home = () => {
  const { popularClasses } = usePopularClasses();
  const { axiosSecure } = useAxiosSecure();
  const { data: instructors = [] } = useQuery({
    queryKey: ["popular-instructor"],
    queryFn: async () => {
      const res = await axiosSecure.get("/popular-instructors");
      return res.data;
    },
  });

  return (
    <div>
      <Banner />
      <SectionTitle
        subHeading={"Meet Our Best"}
        heading={"Instructors"}
      ></SectionTitle>
      <div className="  max-w-5xl mx-auto grid grid-flow-row-dense grid-cols gap-3 justify-between  md:grid-cols-3">
        {instructors.map((instructor, i) => (
          <InstructorsHomeCard
            key={i}
            instructor={instructor}
          ></InstructorsHomeCard>
        ))}
      </div>
      <SectionTitle
        subHeading={"See Our Best "}
        heading={"Courses"}
      ></SectionTitle>

      <div className=" max-w-5xl mx-auto grid grid-flow-row-dense grid-cols gap-3 justify-between  md:grid-cols-3">
        {popularClasses.map((classes, i) => (
          <ClassesHomeCard key={i} classes={classes}></ClassesHomeCard>
        ))}
      </div>

      <Pricing />
      <ExtraSection />
    </div>
  );
};

export default Home;
