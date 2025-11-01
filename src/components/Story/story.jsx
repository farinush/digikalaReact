import { useDispatch, useSelector } from "react-redux";
import { fetchStory } from "../Redux/Story/ActionStory";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./story.css";

const Story = () => {
  const { loading, error, story } = useSelector((state) => state.story);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStory());
  }, []);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  return (
    <div className="story w-[100%] lg:h-[173px] flex flex-row flex-wrap border-t-2 border-t-solid border-t-gray-300 justify-center lg:mt-[5px] overflow-hidden lg:overflow-visible">
      <div className="story__center w-[1340px] lg:h-[173px]">
        <div className="swiper mySwiper w-[100%] h-[100%]">
         <Swiper modules={[Navigation]} spaceBetween={0} slidesPerView={12.5} navigation className="my-custom-swiper custom-story-swiper">
            {story?.map((item) => {
              return (
                <SwiperSlide className="w-[100%] h-[100%] text-center text-[18px] bg-[#fff] flex justify-center items-center" key={item.id}>
                  <div className="swiper__slider__story w-[100%] h-[100%] flex flex-col flex-wrap gap-x-[25px]">
                    <div className="swiper__slider__story__image w-[90px] h-[90px] mx-auto pt-[20px]">
                      <img src={item.img} alt="" className="rounded-[50%] w-[100%] h-[100%] block object-cover outline-3 outline-[#b326b3]"/>
                    </div>
                    <div className="swiper__slider__story__data font-[iranyekanmedium] text-wrap text-[#878ca5] mt-[8px] text-[11px] w-[80%] leading-[20px] mx-auto">
                      {item.name}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Story;
