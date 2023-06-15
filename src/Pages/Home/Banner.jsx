import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

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
                <div className=" absolute pl-10 h-[700px]">
            <h2 className="text-5xl font-bold mb-4  text-white -mt-[500px] ">
              learn guitar Guitar Life <br /> With your Favorite instructor{" "}
            </h2>
            <p className="text-white w-1/2 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              sapiente nostrum unde qui facere. Ex, numquam. Minima quos earum
              quam fugit! Eligendi amet natus rerum, inventore cum ducimus
              consectetur odio, labore ipsam repellat id nihil esse debitis
              harum possimus eum veniam quod. Nesciunt quas esse itaque deserunt
              magnam quod inventore?
            </p>
            <button className="btn btn-active btn-neutral my-5">Neutral</button>
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

          <div className=" absolute pl-10 h-[700px]">
            <h2 className="text-5xl font-bold mb-4  text-white -mt-[500px] ">
              learn guitar Guitar Life <br /> With your Favorite instructor{" "}
            </h2>
            <p className="text-white w-1/2 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              sapiente nostrum unde qui facere. Ex, numquam. Minima quos earum
              quam fugit! Eligendi amet natus rerum, inventore cum ducimus
              consectetur odio, labore ipsam repellat id nihil esse debitis
              harum possimus eum veniam quod. Nesciunt quas esse itaque deserunt
              magnam quod inventore?
            </p>
            <button className="btn btn-active btn-neutral my-5">Neutral</button>
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
          <div className=" absolute pl-10 h-[700px]">
            <h2 className="text-5xl font-bold mb-4  text-white -mt-[500px] ">
              learn guitar Guitar Life <br /> With your Favorite instructor{" "}
            </h2>
            <p className="text-white w-1/2 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              sapiente nostrum unde qui facere. Ex, numquam. Minima quos earum
              quam fugit! Eligendi amet natus rerum, inventore cum ducimus
              consectetur odio, labore ipsam repellat id nihil esse debitis
              harum possimus eum veniam quod. Nesciunt quas esse itaque deserunt
              magnam quod inventore?
            </p>
            <button className="btn btn-active btn-neutral my-5">Neutral</button>
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
          <div className=" absolute pl-10 h-[700px]">
            <h2 className="text-5xl font-bold mb-4  text-white -mt-[500px] ">
              learn guitar Guitar Life <br /> With your Favorite instructor{" "}
            </h2>
            <p className="text-white w-1/2 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              sapiente nostrum unde qui facere. Ex, numquam. Minima quos earum
              quam fugit! Eligendi amet natus rerum, inventore cum ducimus
              consectetur odio, labore ipsam repellat id nihil esse debitis
              harum possimus eum veniam quod. Nesciunt quas esse itaque deserunt
              magnam quod inventore?
            </p>
            <button className="btn btn-active btn-neutral my-5">Neutral</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
