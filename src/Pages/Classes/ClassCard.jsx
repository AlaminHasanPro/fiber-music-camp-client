const ClassCard = ({ course }) => {
  const {
    class_name,
    class_image,
    student_enroll,
    price,
    instructor_name,
    available_seats,
    instructor_email,
 
  } = course;
  return (
    <div>
      <img
        className="border border-yellow-700 mb-1 h-[400px] border-solid w-full hover:border-yellow-500"
        alt="Best seller"
        src={class_image}
        loading="lazy"
      />
      <h2 className="pt-2 m-0 leading-4 font-semibold">
       {class_name}
      </h2>
      <p>${price}</p>
      <p className="text-green-500 italic font-medium">In Stock</p>
    </div>
  );
};

export default ClassCard;
