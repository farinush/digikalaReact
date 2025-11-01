import { useDispatch, useSelector } from "react-redux";
import { fetchFourpics } from "../Redux/Fourpics/ActionFourpics";
import { useEffect } from "react";

const Fourpics = () => {
  const { loading, error, fourpics } = useSelector((state) => state.fourpics);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFourpics());
  }, []);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  return (
    <div className="fourpics w-[100%] box-border mt-[8px]">
      <div className="subfourpics lg:w-[80%] w-[95%] my-[5px] mx-auto flex-row flex flex-wrap justify-center items-center gap-x-[20px] gap-y-[5px] ">
        {fourpics?.map((item) => {
          return (
            <div className="div__subfourpics w-[175px] md:w-[218px] h-[164px] lg:w-[312px] lg:h-[260px]" key={item.id}>
              <a
                className="a__div__subfourpics w-[175px] md:w-[218px] h-[164px] lg:w-[312px] lg:h-[260px] block"
                href="#"
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-[175px] md:w-[218px] h-[164px] lg:w-[312px] lg:h-[260px] rounded-[20px]"
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Fourpics;
