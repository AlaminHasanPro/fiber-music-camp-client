import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { Link} from "react-router-dom";
const ClassesHomeCard = ({ classes }) => {
  const {
    class_name,
    class_image,
    student_enroll,
    price,
    instructor_name,
    available_seats,
  } = classes;

  return (
    <div className="border-2 rounded-lg">
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        whileHover={{ rotate: 10 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="border border-yellow-700 mb-1 h-[400px] border-solid w-72 md:w-full hover:border-yellow-500"
        alt="Best seller"
        src={class_image}
        loading="lazy"
      />
      <Fade triggerOnce={0.6} delay={300} direction="up" cascade>
        <div className="ml-4 my-4">
          <h2 className="my-2 m-0 leading-4 text-xl font-semibold">
            {class_name}
          </h2>
          <p>Instructor Name: {instructor_name}</p>
          <p>Price: ${price}</p>
          <p>Enroll: {student_enroll}</p>
          <p>Available Seats: {available_seats}</p>
          <p className="text-green-500 italic font-medium">In Stock</p>
        </div>
        <Link to="classes">
          <button className="btn btn-outline btn-accent w-full">
            Enroll Now
          </button>
        </Link>
      </Fade>
    </div>
  );
};

export default ClassesHomeCard;
