import { useDispatch, useSelector } from "react-redux";
import { fetchFavoritebrand } from "../Redux/Favoritebrand/ActionFavoritebrand";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "./favoritebrand.css";

const Favoritebrand = () => {
  const { loading, error, favoritebrand } = useSelector((state) => state.favoritebrand);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoritebrand());
  }, []);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  return (
   <div className="favaritebrands my-[30px] w-[100%] overflow-hidden lg:overflow-visible pt-[6px]">
        <div className="child__favaritebrands w-[1340px] h-[223px] border-[1px] border-solid border-[#d6d4d4b3] rounded-[17px] my-0 mx-auto flex flex-col flex-wrap justify-center items-center">
          <div className="child1__favaritebrands pt-[20px] lg:pt-0 w-[100%] ps-[30px] lg:ps-0 h-[30%] text-center flex flex-row flex-nowrap justify-start lg:justify-center items-start lg:items-center relative">
            <div className="svg__favaritebrands w-[30px] h-[30px] mt-[5px]"><img src={favoritebrand.star} alt=""/></div>
            <span className="font-[iranyekanmedium] text-[22px] w-[200px] h-[34px] block">{favoritebrand.title}</span>
          </div>
          <div className="child2__favaritebrands w-[100%] h-[70%]">
            <div className="swiper myfavaritebrands w-[99%] h-[100%]">
                 <Swiper modules={[Navigation]} spaceBetween={1} slidesPerView={9.5} navigation className="my-custom-swiper custom-favoritebrand-swiper">
                {favoritebrand.category?.map((item)=>{
                    return   <SwiperSlide className="hr_favaritebrands text-center text-[18px] bg-[#fff] flex justify-center items-center" key={item.id}>
                  <div className="swiper-slide__story__favaritebrands !w-[142px] !h-[118px] mx-auto">
                    <a className="a_swiper-slide__story__favaritebrands !w-[141px] !h-[117px] block p-[1px] !mx-auto relative" href="#">
                      <img src={item.img} alt="" className="!w-[110px] !h-[110px] !block !mx-auto"/>
                    </a>
                  </div>
                </SwiperSlide>
                })}
                </Swiper>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Favoritebrand;