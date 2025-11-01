import { useDispatch, useSelector } from "react-redux";
import { fetchSlider } from "../Redux/Slider/ActionSlider";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./slider.css";
const Slider = () => {
  const { loading, error, slider } = useSelector((state) => state.slider);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSlider());
  }, []);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  return (
    <div className="slider w-[100%] mt-[20px] lg:mt-0 !h-[180px] lg:!h-[450px] ">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{delay: 2500, disableOnInteraction: false,}}
          pagination={{ clickable: true}} navigation className="my-slider-swiper custom-slider-swiper !relative">
          {slider?.map((item) => {
            return (
              <SwiperSlide className="swiper-slide  object-contain mx-auto" key={item.id}>
                <img src={item.img} alt="" className=" w-[100%] h-[180px] lg:h-[440px]"/>
              </SwiperSlide>
            );
          })}
        </Swiper>
    </div>
  );
};

export default Slider;
