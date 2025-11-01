import { useDispatch, useSelector } from "react-redux";
import { fetchDigichild } from "../Redux/Digichild/ActionDigichild";
import { useEffect } from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Digichild = () => {
  const { loading, error, digichild } = useSelector((state) => state.digichild);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDigichild());
  }, []);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  return (
   <div className="digichild-brands w-[100%]  bg-[#f0f0f0] hidden lg:!block">
        <div className="subdigichild-brands w-[95%] mx-auto  flex flex-wrap justify-between items-center">
            {digichild?.map((item)=>{
                return  <a href="#" key={item.id} className="block w-[150px] mx-[20px] my-[10px] justify-center"><img src={item.img} alt="" className="block w-[100%] h-[100%]"/></a>
            })}
        </div>
      </div>
  );
};

export default Digichild;