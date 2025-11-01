import { useDispatch, useSelector } from "react-redux";
import { fetchTwopics2 } from "../Redux/Twopics2/ActionTwopics2";
import { useEffect } from "react";

const Twopics2 = () => {
  const { loading, error, twopics2 } = useSelector((state) => state.twopics2);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTwopics2());
  }, []);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  return (
  <div className="twopics2 w-[100%] pt-[5px] mt-[20px]">
        <div className="child__twopics2 lg:w-[71%] w-[90%] mx-auto">
          <a className="subchild__twopics2 w-[100%] h-[100%] flex flex-row flex-wrap justify-around items-center gap-y-[12px]" href="#">
            {twopics2?.map((item)=>{
                return   <img src={item.img} alt="" className="w-[660px] h-[100%] rounded-[15px]" key={item.id}/>
            })}
          </a>
        </div>
      </div>
  );
};

export default Twopics2;
