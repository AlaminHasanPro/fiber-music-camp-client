import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
const InstructorsCard = ({ instructor }) => {
  const { email, name, photo } = instructor;
  return (
    <div className="relative">
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        whileHover={{ rotate: 10 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="border border-yellow-700 mb-1 h-[450px] border-solid w-full hover:border-yellow-500"
        alt="Best seller"
        src={photo}
        loading="lazy"
      />
      <Fade triggerOnce={0.6} delay={300}>
        <div className="block bg-sky-200 text-center border-4 rounded-xl py-2  top-96   absolute w-full text-lg">
          <h2 className="pt-2 m-0 leading-4 font-semibold">{name}</h2>
          <p className="text-primary font-semibold">Email:{email}</p>
        </div>
      </Fade>
    </div>
  );
};

export default InstructorsCard;
