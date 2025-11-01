import { useDispatch, useSelector } from "react-redux";
import { fetchHotsale } from "../Redux/Hotsale/ActionHotsale";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "./hotsale.css";
import { setAddcart } from "../Redux/Cart/ActionCart";

const Hotsale = () => {
  const { loading, error, hotsale } = useSelector((state) => state.hotsale);
  const dispatch = useDispatch();
  
  function handleAdd(item,source){
    dispatch(setAddcart({ ...item, uniqueId: `${source}_${item.id}` }))
    alert(`${item.text} به سبد خرید اضافه شد 🛒`)
  }

  useEffect(() => {
    dispatch(fetchHotsale());
  }, []);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  return (
    <div className="hotsale w-[100%] flex flex-row flex-wrap items-center overflow-hidden lg:overflow-visible p-[20px]">
      <div className="hotsale-center w-[1330px] lg:border-[0.1px] mx-auto lg:border-solid lg:border-[lightgray] rounded-[10px] box-border lg:shadow-sm flex  flex-col items-center">
        <div className="hotsale-center-top w-full h-[20%] font-[iranyekanmedium] pt-[20px] text-[#2b2b2b]  flex items-center justify-between lg:justify-center px-2 lg:px-5 relative">
          <div className="flex gap-2 justify-center items-center">
            <img src={hotsale.fire} alt="" className="w-[24px] h-[24px]"/>
            <div className="text-[17px]">{hotsale.title}</div>
            </div>
              <div className="flex absolute left-2 lg:left-5 justify-center items-center text-[#25bbce] font-[iranyekanmedium]">
              {hotsale.subtitle}
             </div>
         </div>
        <div className="hotsale-center-bottom mt-[25px] !w-[100%]">
          <a href="#" className="a-hotsale-center-bottom h-[100%] !w-[100%] text-[#2b2b2b]">
              <Swiper modules={[Navigation]} spaceBetween={1} slidesPerView={4} navigation className="my-custom-swiper custom-hotsale-swiper">
                {hotsale.category?.map((item) => {
                    return <SwiperSlide className="text-center text-[18px] bg-[#fff] flex justify-start items-start" key={item.id}>
                    <div className="swiper-slide-parent !w-[100%] h-[100%] my-0 mx-auto flex flex-col flex-wrap items-start gap-x-[5px] pb-[10px]">
                      {item.section?.map((item) => {
                        return (
                          <div key={item.id}>
                            <div onClick={()=>handleAdd(item,"hotsale")} className="swiper-slide-child w-[100%] h-[31%] flex flex-row flex-wrap items-center gap-y-[5px] py-0 px-[15px]" >
                              <img src={item.img} alt="" className="imgkala !w-[86px] !h-[86px] block object-cover"/>
                              <h5 className="numberkala font-[yekan] text-[25px] font-extrabold text-[#25bbce]">{item.number}
                              </h5>
                              <h6 className="namekala font-[iranyekanmedium] ms-[5px] text-[12px] w-[150px] opacity-[0.6] text-ellipsis overflow-hidden text-nowrap">
                                {item.text}</h6>
                            </div>
                            <hr className="w-[80%] h-[1px] border-b-[1px] border-b-solid border-b-[#f7eeee] opacity-[0.1]" />
                          </div>
                        );
                      })}
                    </div>
                  </SwiperSlide>;
                })}
              </Swiper>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hotsale;
