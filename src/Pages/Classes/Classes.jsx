import { useEffect, useState } from "react";
import ClassCard from "./ClassCard";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("fakedb.json")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  return (
    <>
      {/* component */}
      <div className="bg-black">
        <div className="flex relative text-center">
          <h1 className="text-3xl tracking-wider text-white text-sha uppercase font-bold p-4 self-center z-10 content-center absolute text-center w-full md:text-4xl">
            Welcome to Lightning deals
          </h1>
          <img
            className="w-full object-cover h-[400px] blur-[2px] block mx-auto  sm:block sm:w-full"
            src="https://www.insure4music.co.uk/media/i2tkp5bl/best-instruments-for-beginners.jpg?anchor=center&mode=crop&width=1024&height=512&rnd=133268277174930000"
            alt="Banner"
            width={1920}
            height={288}
          />
        </div>
      </div>
      <div className="p-5 mx-auto max-w-screen-xl">
        <h2 className="font-bold uppercase text-xl pb-4">Best sellers</h2>
        <div className="grid grid-flow-row-dense grid-cols-2 gap-3 justify-between sm:grid-cols-3 md:grid-cols-4">
          {classes.map((course, i) => (
            <ClassCard key={i} course={course}></ClassCard>
          ))}
        </div>
      </div>
      <div className="bg-gray-200">
        <section className="py-5 mx-auto max-w-screen-xl  sm:flex flex-grow-0 sm:p-5">
          <article className="flex-col justify-center inline-flex self-stretch  p-6">
            <h2 className="uppercase font-semibold text-xl">Design</h2>
            <strong className="text-lg pb-2 font-normal font-sans sm:text-2xl">
              Our 30 Year Journey
            </strong>
            <p className="text-sm pb-4">
              Join us as we revisit our roots, tracing the path from bright idea
              to industry disruptors with a plan to fight climate change while
              creating beautiful things.{" "}
            </p>
            <button className="font-semibold uppercase border-black border p-3 max-w-max hover:bg-gray-600 hover:text-white">
              Join us
            </button>
          </article>
          <figure>
            <img
              src="https://images.unsplash.com/photo-1606170033648-5d55a3edf314?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGxpZ2h0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt="Banner"
            />
          </figure>
        </section>
      </div>
    </>
  );
};

export default Classes;
