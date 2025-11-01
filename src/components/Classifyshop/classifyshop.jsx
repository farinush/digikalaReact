import { useDispatch, useSelector } from "react-redux";
import { fetchClassifyshop } from "../Redux/Classifyshop/ActionClassifyshop";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./classifyshop.css";

const Classifyshop = () => {
  const { loading, error, classifyshop } = useSelector(
    (state) => state.classifyshop
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClassifyshop());
  }, []);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  return (
    <div className="classifyshopping w-[100%] lg:h-[430px] pt-[20px]">
      <div className="sub__classifyshopping lg:w-[70%] lg:h-[452px] lg:flex lg:flex-col flex-wrap justify-center items-center my-[3px] mx-auto">
        <div className="text__sub__classifyshopping w-[100%] h-[20%] text-center">
          <span className="font-[iranyekanmedium] text-[20px] leading-[70px]">
            خرید براساس دسته بندی
          </span>
        </div>
        <div className="image__sub__classifyshopping w-[100%] h-[80%] flex flex-row flex-wrap justify-center items-center gap-x-[5px]">
          <div className="swiper mySwiper w-[100%] h-[100%]">
            <Swiper
              modules={[Navigation]}
              spaceBetween={0}
              breakpoints={{
                0: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 5,
                },
                1024: {
                  slidesPerView: 8.5,
                },
              }}
              navigation
              className="my-custom-swiper custom-classifyshop-swiper"
            >
              {classifyshop?.map((item) => {
                return (
                  <SwiperSlide
                    className="subimage__sub__classifyshopping lg:w-[139px] h-[100%] p-[5px] flex flex-col flex-wrap items-center justify-center"
                    key={item.id}
                  >
                    {item.section?.map((index) => {
                      return (
                        <a
                          className="child_subimage__sub__classifyshopping w-[139px] h-[50%] gap-x-[8px] items-center justify-center"
                          href="#"
                          key={index.id}
                        >
                          <div className="image_child_subimage__sub__classifyshopping w-[100px] h-[100px]">
                            <img
                              src={index.img}
                              alt=""
                              className="w-[100px] h-[100px]"
                            />
                          </div>
                          <div className="span_child_subimage__sub__classifyshopping font-[iranyekanmedium] mt-[5px] w-[98px] text-[12px] text-[#2b2b2b] text-ellipsis text-center leading-[20px]">
                            <span>{index.text}</span>
                          </div>
                        </a>
                      );
                    })}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classifyshop;
