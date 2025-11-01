import { useDispatch, useSelector } from "react-redux";
import { fetchFoursection2 } from "../Redux/Foursection2/ActionFoursection2";
import { useEffect } from "react";

const Foursection2 = () => {
  const { loading, error, foursection2 } = useSelector((state) => state.foursection2);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFoursection2());
  }, []);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  return (
    
    <div className="foursection2 w-[100%] mb-[10px] mt-[10px]">
        <div className="sub_foursection2 w-[70%] my-[10px] mx-auto lg:border-[1px] lg:border-solid lg:border-[lightgray] rounded-[10px] flex flex-row flex-wrap box-border justify-center items-center">
            {foursection2?.map((item)=>{ 
                return <div className="flex" key={item.id}> <div className="child_sub_foursection2 w-[325px] box-border flex flex-col flex-wrap" key={item.id}>
          <div className="text_child_sub_foursection w-[292px] h-[50px] flex font-[iranyekanmedium] flex-col flex-wrap text-[15px] leading-[20px] m-auto mb-[10px] box-border">
            {item.title}
            <span className="text-[12px] opacity-[0.7]">براساس سلیقه شما</span>
          </div>
          <div className="image_child_sub_foursection2 w-[292px] flex flex-wrap content-between gap-[10px] justify-between m-auto box-border">
           {item.section?.map((item)=>{
            return <div className="childrow_1_1_image_child_sub_foursection2 w-[48%]  " key={item.id}>
                {item.part?.map((item)=>{
                    return <a href="" key={item.id}> <img src={item.img} alt="" className="w-[129px] h-[129px] object-cover"/></a>
                })}
              </div>
           })}
          </div>
          <div className="a_child_sub_foursection2 inline-block w-[100px] h-[26px] font-[iranyekanmedium] text-[13px] text-center mx-auto relative mt-[30px]">
            <a href="#" className="text-[#5faab5]">مشاهده
              <img src="./public/svg/foursection/flesh.svg" alt="" className="absolute top-[-3px] left-[3px]"/>
            </a>
          </div>
        </div>
        <hr className="hr_sub_mobile-headphone w-[1px] lg:h-[440px] lg:bg-[#dfd6d6] opacity-[0.3]" /></div>
            })}
              
        </div>
      </div>
  );
};

export default Foursection2;