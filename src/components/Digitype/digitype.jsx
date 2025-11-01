import { useDispatch, useSelector } from "react-redux";
import { fetchDigitype } from "../Redux/Digitype/ActionDigitype";
import { useEffect } from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Digitype = () => {
  const { loading, error, digitype } = useSelector((state) => state.digitype);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDigitype());
  }, []);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  return (
    <div className="digitype w-[100%] lg:h-[118px]">
         <div className="subdigitype w-[75%] lg:h-[123px] mx-auto pt-[15px] box-border flex flex-row flex-wrap lg:flex-nowrap justify-between items-center gap-y-[7px]" >
            {digitype?.map((item)=>{
                return   <div className="child__subdigitype w-[140px] h-[86px]" key={item.id}>
              <a className="a__child__subdigitype w-[140px] h-[100%] flex flex-col flex-wrap justify-center items-center font-[iranyekanmedium] gap-x-[8px] text-[15px] box-border" href="#">
                <div className="image__a__child__subdigitype w-[53px] h-[53px] rounded-[20px]">
                  <img src={item.img} alt="" className="w-[53px] h-[53px] object-contain rounded-[15px] outline-none"/>
                </div>
                <span className="span__a__child__subdigitype mt-[6px] text-wrap font-[iranyekanmedium] text-[11px] text-center text-[#2b2b2b]">{item.name}</span>
              </a>
            </div>
            })}
            <div className="child__subdigitype w-[140px] h-[86px]" >
              <a className="a__child__subdigitype w-[140px] h-[100%] flex flex-col flex-wrap justify-center items-center font-[iranyekanmedium] gap-x-[8px] text-[15px] box-border" href="#">
                <div className="image__a__child__subdigitype w-[53px] h-[53px] rounded-[20px]">
                  <div className="w-[53px] h-[53px] object-contain rounded-[50%] bg-gray-400 opacity-[0.5] outline-1 outline-gray-400 relative">
                    <MoreHorizIcon className="absolute top-[18px] left-[15px]"/>
                  </div>
                </div>
                <span className="span__a__child__subdigitype mt-[6px] text-wrap font-[iranyekanmedium] text-[11px] text-center text-[#2b2b2b]">بیشتر</span>
              </a>
            </div>
         </div>
      </div>
  );
};

export default Digitype;