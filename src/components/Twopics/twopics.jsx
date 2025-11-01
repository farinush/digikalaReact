import { useDispatch, useSelector } from "react-redux";
import { fetchTwopics } from "../Redux/Twopics/ActionTwopics";
import { useEffect } from "react";

const Twopics = () => {
  const { loading, error, twopics } = useSelector((state) => state.twopics);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTwopics());
  }, []);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  return (
  <div className="twopics w-[100%] pt-[5px] mt-[60px]">
        <div className="child__twopics lg:w-[71%] w-[90%] mx-auto">
          <a className="subchild__twopics w-[100%] h-[100%] flex flex-row flex-wrap justify-around items-center gap-y-[12px]" href="#">
            {twopics?.map((item)=>{
                return   <img src={item.img} alt="" className="w-[660px] h-[100%] rounded-[15px]" key={item.id}/>
            })}
          </a>
        </div>
      </div>
  );
};

export default Twopics;
