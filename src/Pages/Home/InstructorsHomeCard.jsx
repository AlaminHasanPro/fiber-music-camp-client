const InstructorsHomeCard = ({ instructor }) => {
  const { email, photo, name } = instructor;
  return (
    <div>
      <img
        className="border border-yellow-700 mb-1 h-[450px] border-solid w-full hover:border-yellow-500"
        alt="Best seller"
        src={photo}
        loading="lazy"
      />
      <h2 className="pt-2 m-0 leading-4 font-semibold">{name}</h2>
      <p>Email: {email}</p>
    </div>
  );
};

export default InstructorsHomeCard;
