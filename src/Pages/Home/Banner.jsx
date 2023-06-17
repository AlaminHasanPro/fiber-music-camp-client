import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            style={{
              filter: "blur(2px)",
            }}
            className="  w-full h-[800px] "
            src="https://cdn.pixabay.com/photo/2015/05/07/11/02/guitar-756326_1280.jpg"
            alt=""
          />
          <div className=" absolute  h-[700px] ">
            <div className="bg-sky-700 bg opacity-80 mx-auto px-10 w-3/4 rounded-xl ">
              <Fade cascade>
                <h2 className="md:text-5xl text-2xl font-bold mb-4 pt-8  text-white -mt-[650px] md:-mt-[500px] ">
                  Learn Guitar With <br /> your Favorite instructor{" "}
                </h2>
                <p className="text-white md:w-1/2 ">
                  Unlock your musical potential with guitar lessons that cover
                  everything from basic chords to advanced techniques.
                  Experience the joy of playing this versatile instrument as you
                  express yourself through captivating melodies and heartfelt
                  rhythms. Start your guitar journey now and let your creativity
                  soar.
                </p>
              </Fade>
              <button className="btn btn-accent bg-transparent text-white my-5">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{
              filter: "blur(2px)",
            }}
            className="w-full h-[800px]  "
            src="https://img.freepik.com/free-photo/man-playing-guitar-indoors-front-view_23-2149849433.jpg?w=1060&t=st=1686679509~exp=1686680109~hmac=3e3aeae65fadff15dc9a54f061d41d8e4b86cdde43e0f843a0524ba90d217332"
            alt=""
          />

          <div className=" absolute  h-[700px] ">
            <div className="bg-sky-700 bg opacity-80 mx-auto px-10 w-3/4 rounded-xl ">
              <Fade cascade>
                <h2 className="md:text-5xl text-2xl font-bold mb-4 pt-8  text-white -mt-[650px] md:-mt-[500px] ">
                  Get Best Instructor For <br /> For Your Musical Journey{" "}
                </h2>
                <p className="text-white md:w-1/2 ">
                  Embark on your musical journey with the best instructor by
                  your side. Learn guitar from a skilled and passionate teacher
                  who will guide you to unleash your full potential and achieve
                  your musical goals. Elevate your playing and embrace the joy
                  of making music.
                </p>
              </Fade>
              <button className="btn btn-accent bg-transparent text-white my-5">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{
              filter: "blur(2px)",
            }}
            className="w-full h-[800px]"
            src="https://images.pexels.com/photos/3825752/pexels-photo-3825752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className=" absolute  h-[700px] ">
            <div className="bg-sky-700 bg opacity-80 mx-auto px-10 w-3/4 rounded-xl ">
              <Fade cascade>
                <h2 className="md:text-5xl text-2xl font-bold mb-4 pt-8  text-white -mt-[650px] md:-mt-[500px] ">
                  24Hour Online Support <br /> From Our Mentor{" "}
                </h2>
                <p className="text-white md:w-1/2 ">
                  Get 24-hour online support from our dedicated mentor as you
                  pursue your musical aspirations. Receive guidance, feedback,
                  and encouragement whenever you need it, ensuring a seamless
                  learning experience and a constant source of motivation on
                  your musical journey.
                </p>
              </Fade>
              <button className="btn btn-accent bg-transparent text-white my-5">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{
              filter: "blur(2px)",
            }}
            className="w-full h-[800px]"
            src="https://img.freepik.com/free-photo/classical-elegance-violin-abstract-ornate-backdrop-generated-by-ai_188544-19662.jpg?w=1060&t=st=1686681075~exp=1686681675~hmac=4138180a0c1018a124e1e42d463d8a058493f94fcf167504cb568e46ac4a7c20"
            alt=""
          />
          <div className=" absolute  h-[700px] ">
            <div className="bg-sky-700 bg opacity-80 mx-auto px-10 w-3/4 rounded-xl ">
              <Fade cascade>
                <h2 className="md:text-5xl text-2xl font-bold mb-4 pt-8  text-white -mt-[650px] md:-mt-[500px] ">
                  Get Projects From <br /> Our Studio{" "}
                </h2>
                <p className="text-white md:w-1/2 ">
                  Explore exciting projects and unleash your creativity with our
                  studio. Collaborate with talented artists, musicians, and
                  producers to bring your musical visions to life. From
                  recording sessions to music production, our studio provides a
                  platform for your artistic expression and growth.
                </p>
              </Fade>
              <button className="btn btn-accent bg-transparent text-white my-5">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
