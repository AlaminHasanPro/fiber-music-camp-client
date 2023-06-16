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
    <div className="border-2 rounded-lg">
      <img
        className="border border-yellow-700 mb-1 h-[450px] border-solid w-full hover:border-yellow-500"
        alt="Best seller"
        src={class_image}
        loading="lazy"
      />
      <div className="ml-4 my-4">
        <h2 className="my-2 m-0 leading-4 text-xl font-semibold">{class_name}</h2>
        <p>Instructor Name: {instructor_name}</p>
        <p>Price: ${price}</p>
        <p>Enroll: {student_enroll}</p>
        <p>Available Seats: {available_seats}</p>
        <p className="text-green-500 italic font-medium">In Stock</p>
      </div>
      <button
        onClick={() => seletedClass(course)}
        className="btn btn-outline btn-accent w-full"
      >
        Enroll Now
      </button>
    </div>
  );
};

export default ClassesHomeCard;
