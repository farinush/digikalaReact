import { useDispatch, useSelector } from "react-redux";
import { fetchMontakhab } from "../Redux/Montakhab/ActionMontakhab";
import { useEffect } from "react";


const Montakhab = () => {
  const { loading, error, montakhab } = useSelector((state) => state.montakhab);
  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(fetchMontakhab());
  }, []);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  return (
    <div className="montakhab w-[100%]">
      <div className="sub_montakhab w-[100%] lg:w-[71%] lg:border-[1px] lg:border-solid lg:border-[lightgray] rounded-[15px] flex flex-col flex-wrap justify-center items-center my-[20px] mx-auto">
        <div className="text_sub_montakhab mt-[15px] mb-[20px] w-[100%] h-[10%]">
          <a href="#" className="a_text_sub_montakhab w-[100%] h-[100%] flex flex-row flex-wrap justify-center items-center font-[iranyekanmedium] text-[18px] text-[#2b2b2b] gap-y-[8px]">
            <img src={montakhab.haraj} alt="" />
            {montakhab.title}
          </a>
        </div>
        <div className="image_sub_montakhab w-[100%] h-[90%] flex flex-row flex-wrap items-center justify-center">
          {montakhab.category?.map((item) => {
            return (
              <div className="column_image_sub_montakhab w-[218px] h-[100%] " key={item.id}>
                {item.section.map((item) => {
                  return (
                    <div  className="row_column_image_sub_montakhab w-[100%] h-[242px] border-[#ebebeb] border-b-[1px] lg:border-l-[1px]" key={item.id}>
                      <a className="a_row_column_image_sub_montakhab w-[100%] h-[100%] flex flex-col flex-wrap justify-center items-center" href="">
                        <img src={item.img} alt="" className="w-[150px] h-[150px] object-cover block m-auto"/>
                        <div className="h5_h6_a_row_column_image_sub_montakhab w-[100%] h-[33px] flex flex-row flex-wrap justify-around">
                          <h6 className="font-[yekan] text-[12px] w-[15%] h-[17px] block bg-[#d32f2e] rounded-[15px] text-center text-[aliceblue]">
                            {item.h6text}
                          </h6>
                          <h5 className="flex gap-x-[6px] font-[yekan] text-[13px] text-[#2b2b2b]">{item.h5text}
                            <img src={montakhab.toman} alt="" className="w-[16px] h-[16px]"/>
                          </h5>
                        </div>
                        <h6 className="h6_row w-[100%] pe-[20px] h-[26px] flex justify-end ps-[35px] text-[14px] font-[yekan] line-through opacity-[0.5] text-[#2b2b2b]">{item.h6row}</h6>
                      </a>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Montakhab;
