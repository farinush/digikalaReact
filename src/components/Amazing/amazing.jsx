import { useDispatch, useSelector } from "react-redux";
import { fetchAmazing } from "../Redux/Amazing/ActionAmazing";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./amazing.css";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { setAddcart } from "../Redux/Cart/ActionCart";

const Amazing = () => {
  const { loading, error, amazing } = useSelector((state) => state.amazing);
  const dispatch = useDispatch();
 function handleAddamazing(item,source){
    dispatch(setAddcart({ ...item, uniqueId: `${source}_${item.id}` }))
    alert(`${item.text} به سبد خرید اضافه شد 🛒`)
  }



const START_TIME = 60 * 200; // 1 ساعت
const [timeLeft, setTimeLeft] = useState(START_TIME);

useEffect(() => {
  const interval = setInterval(() => {
    setTimeLeft((prev) => {
      if (prev <= 1) {
        return START_TIME; // ریست به مقدار اولیه
      }
      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(interval);
}, []);
const hours = Math.floor(timeLeft / 3600).toString().padStart(2, "0");
const minutes = Math.floor((timeLeft % 3600) / 60).toString().padStart(2, "0");
const seconds = (timeLeft % 60).toString().padStart(2, "0");



  useEffect(() => {
    dispatch(fetchAmazing());
  }, []);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  return (
   <div className="amazing w-[100%] h-auto felx flex-row flex-wrap justify-center mt-[10px] lg:mt-0 lg:p-[20px] overflow-hidden lg:overflow-visible">
        <div className="amazing__center w-[1320px] h-[300px] mx-auto box-border shadow-lg rounded-[15px] bg-[#ef3c51] py-[20px] px-[2px]">
          <div className="swiper myamazing w-[100%] h-[100%]">
            <Swiper modules={[Navigation]} spaceBetween={4} slidesPerView={7.5} navigation className="my-custom-swiper custom-amazing-swiper">
              <SwiperSlide className="amazingactive !bg-[#ef3c51] !text-center !text-[18px] flex justify-center items-center">
                <div className="swiper-slide-item flex flex-col flex-wrap gap-x-[8px] items-center justify-center">
                  <img className="image_item1 !w-[86px] !h-[80px] mb-[5px]" src={amazing.shegeftangiz} alt=""/>
                  <img className="image_item2 !w-[100px] !h-[80px]" src={amazing.percentage} alt=""/>
                  <div className="timer text-[14px] text-black w-[60px] h-fit bg-white rounded-[5px] font-[yekan] mt-[5px]">
                     {hours}:{minutes}:{seconds}
                  </div>
                  <a className="item_link flex justify-center items-center mt-[6px] text-[13px] text-[whitesmoke] text-none font-[iranyekanmedium]" href="#">مشاهده همه
                   <KeyboardArrowLeftIcon/>
                  </a>
               </div>
              </SwiperSlide>
              {amazing.roll?.map((item, index)=>{
                  const isFirst = index === 0;
                  const slideClass = `text-center text-[18px] bg-[#fff] flex justify-center items-center ${isFirst ? 'BRtrbr' : ''}`;
                return  <SwiperSlide key={index} className={slideClass}>
          <a href="#" className="a_allslidesswiper_exeptlast w-[inherit] h-[inherit] block text-[#2b2b2b]">
            <div onClick={()=>handleAddamazing(item,"amazing")} className="swiper-slide-product h-[90%] flex flex-col flex-wrap gap-x-[10px] gap-y-[2px] items-center p-[10px] relative">
              <img src={item.img} alt="" className="!w-[150px] !h-[150px]" />
              <p className="font-[iranyekanmedium] text-[11px] text-ellipsis text-wrap overflow-hidden h-[30px] opacity-[0.7]">{item.text}</p>
              <div className="!w-[144px] !h-[24px] flex flex-row-reverse mt-[5px] justify-around">
                <h5 className="price !w-[80%] !h-[24px] !font-[yekan] !text-[13px] !flex !justify-end">
                  {item.price}
                  <div>تومان</div>
                </h5>
                <h6 className="w-[30%] h-[17px] font-[yekan] text-[12px] bg-[#d32f2e] px-[10px] rounded-[15px] text-[whitesmoke] leading-[18px] font-[600]">{item.percentage}</h6>
              </div>
              <h5 className="pureprice font-[yekan] text-[11px] opacity-[0.3] line-through absolute left-[20px] bottom-[-5px]">{item.pureprice}</h5>
            </div>
          </a>
        </SwiperSlide>
              })}
               <SwiperSlide className="BRtlbl text-center text-[18px] bg-[#fff] flex justify-center items-center">
                 <a className="a_slid13 w-[inherit] h-[inherit] block" href="#">
                  <div className="svg_slide13 w-[inherit] h-[50%] relative">
                   <div className="child_svg_slide13">
                     <ArrowCircleLeftIcon sx={{ fontSize: 38 }}/>
                   </div>
                 </div>
                <p className="p_slide13 w-[inherit] h-[50%] font-[iranyekanmedium] text-[14px] text-[#2b2b2b] opacity-[0.8]">مشاهده همه</p>
                </a>
              </SwiperSlide>
              </Swiper>
          </div>
        </div>
      </div>
  );
};

export default Amazing;