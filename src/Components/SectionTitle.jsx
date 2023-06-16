const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="text-center mx-auto md:w-4/12 my-8">
      <p className=" font-semibold text-lg text-primary ">{subHeading}</p>
      <h3 className="text-4xl uppercase font-bold text-primary ">{heading}</h3>
    
    </div>
  );
};

export default SectionTitle;
