import { useDispatch, useSelector } from "react-redux";
import { fetchKhandaniha } from "../Redux/khandaniha/ActionKhandaniha";
import { useEffect } from "react";

const  Khandaniha = () => {
  const { loading, error, khandaniha } = useSelector((state) => state.khandaniha);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchKhandaniha());
  }, []);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  return (
    <div className="khandaniha w-[100%]">
      <div className="child-khandaniha w-[95%] lg:w-[70%] h-[100%] flex flex-col flex-wrap box-border my-[10px] mx-auto mb-[20px]">
        <div className="text-child-khandaniha w-[100%] h-[20%] flex flex-row flex-wrap justify-between px-[5px] box-border">
          <h5 className="font-[iranyekanmedium] text-[14px] text-[#2b2b2b] leading-[60px] pe-[20px]">
           {khandaniha.title}
          </h5>
          <div className="font-[iranyekanmedium] text-[12px] text-[#39b7c6] leading-[60px] flex px-[20px] items-center gap-y-[5px] relative ">
           {khandaniha.subtitle}
            <img src={khandaniha.flesh} alt="" className="absolute top-[18px] left-[-1px]"/>
          </div>
        </div>
        <div className="image-child-khandaniha w-[100%] h-[80%] flex flex-row flex-wrap box-border gap-x-[9px]">
          {khandaniha.category?.map((item) => {
            return (
              <div className="sub-image-child-khandaniha w-[92%] lg:w-[325px] lg:h-[280px]  rounded-[15px] border-[1px] border-solid border-[lightgray]" key={item.id}>
                <a href="#" className="a-sub-image-child-khandaniha w-[100%] h-[100%] flex flex-col flex-wrap items-center gap-w-[15px]">
                  <div className="img-a-sub-image-child-khandaniha w-[100%] lg:h-[201px]">
                    <img src={item.img} alt="" className="w-[100%] h-auto object-cover rounded-tl-[15px] rounded-tr-[15px]"/>
                  </div>
                  <p className="text-[12px] text-[#2b2b2b] leading-[20px] font-[yekan] mt-[20px]">
                    {item.p}
                  </p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Khandaniha;
