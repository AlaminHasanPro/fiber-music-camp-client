const InstructorsHomeCard = ({ instructor }) => {
  const { email, photo, name } = instructor;
  return (
    <div className="relative">
      <img
        className="border border-yellow-700 mb-1 h-[450px] border-solid w-full hover:border-yellow-500"
        alt="Best seller"
        src={photo}
        loading="lazy"
      />
      <div className="block bg-sky-200 text-center border-4 rounded-xl py-2  top-96   absolute w-full text-lg">
        <h2 className="pt-2 m-0 leading-4 font-semibold">{name}</h2>
        <p className="text-primary font-semibold">Email:{email}</p>
      </div>
    </div>
  );
};

export default InstructorsHomeCard;
