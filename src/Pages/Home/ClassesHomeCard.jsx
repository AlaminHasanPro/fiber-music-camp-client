const ClassesHomeCard = ({ classes }) => {
  const {
    class_name,
    class_image,
    student_enroll,
    price,
    instructor_name,
    available_seats,
    instructor_email,
  } = classes;
  return (
    <div>
      <img
        className="border border-yellow-700 mb-1 h-[450px] border-solid w-full hover:border-yellow-500"
        alt="Best seller"
        src={class_image}
        loading="lazy"
      />
      <h2 className="pt-2 m-0 leading-4 font-semibold">{class_name}</h2>
      <p>Instructor Name: {instructor_name}</p>
      <p>Price: ${price}</p>
      <p>Enroll: {student_enroll}</p>
      <p>Available Seats: {available_seats}</p>
      <p className="text-green-500 italic font-medium">In Stock</p>
      <button
        onClick={() => seletedClass(course)}
        className="btn btn-outline btn-accent"
      >
        Enroll Now
      </button>
    </div>
  );
};

export default ClassesHomeCard;
