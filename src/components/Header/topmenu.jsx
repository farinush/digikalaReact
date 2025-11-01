import { useDispatch, useSelector } from "react-redux";
import { fetchTopmenu } from "../Redux/Topmenu/ActionTopmenu";
import { useEffect } from "react";

const Topmenu = () => {
  const { loading, error, topmenu } = useSelector((state) => state.topmenu);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopmenu());
  }, []);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  return (
    <>
      <div className="top_menu lg:fixed lg:top-0 hidden z-50 lg:block w-[100%] !h-[30px] lg:!h-[60px]" key={topmenu.id}>
        <a className="a_top_menu !h-[30px] lg:!h-[60px]" href="#">
          <img src={topmenu.image} alt="menu" className="w-[100%] !h-[30px] lg:!h-[60px]"
          />
        </a>
      </div>
      <div className="resposive block lg:hidden  ">
        <div className="subresponsive flex justify-around p-3">
          {topmenu.category?.map((item)=>{
            return <div key={item.id} className="border py-[2px] text-center items-center justify-center border-gray-300 rounded-[20px] w-[86px] font-[yekan] h-[66px]">
              <a href="#"><img className="w-[32px] mx-auto h-[32px] block object-fit" src={item.image} alt="" />
              <h3 className="text-[11px] text-gray-500 my-[2px]">{item.title}</h3></a>
            </div>
          })}

        </div>
      </div>
    </>
  );
};

export default Topmenu;
