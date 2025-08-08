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
      <div className="top_menu w-[100%] !h-[30px] lg:!h-[60px]" key={topmenu.topmenu.id}>
        <a className="a_top_menu !h-[30px] lg:!h-[60px]" href="#">
          <img src={topmenu.topmenu.image} alt="menu" className="w-[100%] !h-[30px] lg:!h-[60px]"
          />
        </a>
      </div>
    </>
  );
};

export default Topmenu;
