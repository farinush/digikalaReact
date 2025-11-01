import { useDispatch, useSelector } from "react-redux";
import { fetchSooperamazing } from "../Redux/Sooperamazing/ActionSooperamazing";
import { useEffect } from "react";

const Sooperamazing = () => {
  const { loading, error, sooperamazing} = useSelector((state) => state.sooperamazing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSooperamazing());
  }, []);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  return (
   <div className="supermarketamazing w-[100%] mt-[20px] lg:mt-[30px]">
        <div className="sub__supermarketamazing shadow-lg lg:w-[69.5%] w-[90%] bg-[#d8d9d9] rounded-[15px] mx-auto">
           <a className="a__sub__supermarketamazing flex flex-row flex-wrap justify-center py-[20px] items-center w-[100%]" href="#">
            <div className="child1__a__sub__supermarketamazing w-[100%] lg:w-[45%] flex flex-row flex-nowrap lg:ps-[50px] lg:pe-[30px] gap-y-[5px]">
              <div className="sub1chid1__a__sub__supermarketamazing w-[12%] lg:w-[20%] h-[62px] mx-auto box-border relative">
                <img src={sooperamazing.basket} alt="" className="w-[66px] h-[62px] object-contain absolute lg:right-[30px]"/>
              </div>
              <div className="sub2chid1__a__sub__supermarketamazing w-[47%] lg:w-[50%] h-[62px] mx-auto box-border relative">
                <img src={sooperamazing.textsooper} alt="" className="w-[250px] h-[28px] absolute top-[18px] lg:right-[2px]"/>
              </div>
              <div className="sub3chid1__a__sub__supermarketamazing w-[25%] lg:w-[30%] h-[62px] mx-auto box-border relative">
                <div className="takhfiffbox w-[90px] lg:w-[112px] h-[27px] bg-[#029948] rounded-[12px] absolute lg:right-[5px] top-[18px] lg:text-[15px] text-[12px] text-[whitesmoke] text-center font-[iranyekanmedium] leading-[30px]">تا <span className="font-[yekan]">{sooperamazing.discount}</span> تخفیف</div>
              </div>
            </div>
            <div className="child2__a__sub__supermarketamazing w-[90%] lg:w-[55%] flex flex-row flex-nowrap  items-center gap-x-[9px]">
                {sooperamazing.category?.map((item)=>{
                    return   <div className="subchild2__a__sub__supermarketamazing w-[68px] h-[68px] lg:w-[78px] lg:h-[78px] flex flex-col flex-wrap relative" key={item.id}>
                         <div className="image__subchild2__a__sub__supermarketamazing w-[52px] h-[52px] lg:w-[75px] lg:h-[75px] rounded-[50%] absolute left-0 top-0">
                        <img src={item.img} alt="" className="w-[52px] h-[52px] lg:w-[75px] lg:h-[75px] object-contain rounded-[50%]"/>
                         </div>
                       <div className="discount__subchild2__a__sub__supermarketamazing w-[34px] h-[20px] rounded-[15px] bg-[#ca3333] text-[whitesmoke] text-[11px] font-[yekan] font-[600] text-center leading-[20px] absolute right-0 bottom-0">
                       {item.text}
                       </div>
                     </div>
                })}
                <div className="continue__child2__a__sub__supermarketamazing hidden lg:block w-[165px] h-[40px] leading-[40px] lg:w-[145px] lg:h-[55px] lg:ms-[5px] bg-[whitesmoke] text-[#029a49] rounded-[30px] text-center lg:leading-[50px] relative">
                  <div className="child__continue__child2__a__sub__supermarketamazing w-[80px] h-[20px] font-[iranyekanmedium] text-[12px] font-[500] absolute right-[20px] top-[2px]">
                  بیش از <span className="font-[yekan] text-[12px]">100</span> کالا
                      </div>
                   <img src={sooperamazing.flesh} alt="" className="absolute bottom-[20px] left-[16px]"/>
                 </div>
            </div>
           </a>
        </div>
      </div>
  );
};

export default Sooperamazing;
