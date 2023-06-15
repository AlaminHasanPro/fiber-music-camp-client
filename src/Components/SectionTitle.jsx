const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="text-center mx-auto md:w-4/12 my-8">
      <p className="text-blue-600 font-bold ">{subHeading}</p>
      <h3 className="text-3xl uppercase font-bold text-blue-600">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
