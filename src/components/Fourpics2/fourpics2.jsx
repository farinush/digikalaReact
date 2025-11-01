import { useDispatch, useSelector } from "react-redux";
import { fetchFourpics2 } from "../Redux/Fourpics2/ActionFourpics2";
import { useEffect, useState } from "react";

const Fourpics2 = () => {
  const { loading, error, fourpics2 } = useSelector((state) => state.fourpics2);
  const dispatch = useDispatch();
   const [showAltImage, setShowAltImage] = useState(false);

   useEffect(() => {
    const interval = setInterval(() => {
      setShowAltImage((prev) => !prev);
    }, 3000); // هر 3 ثانیه یک‌بار عوض میشه

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    dispatch(fetchFourpics2());
  }, []);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  return (
    <div className="fourpics2 w-[100%] box-border lg:mt-[25px] mt-[15px]">
      <div className="subfourpics2 lg:w-[80%] w-[95%] my-[5px] mx-auto flex-row flex flex-wrap justify-center items-center gap-x-[20px] gap-y-[5px] ">
        {fourpics2.category?.map((item, index) => {
            const imageToShow =
            index === 0 && showAltImage
              ? fourpics2.image5
              : item.img;

          return (
            <div className="div__subfourpics w-[175px] md:w-[218px] h-[164px] lg:w-[312px] lg:h-[260px]" key={item.id}>
              <a
                className="a__div__subfourpics w-[175px] md:w-[218px] h-[164px] lg:w-[312px] lg:h-[260px] block"
                href="#"
              >
                <img
                  src={imageToShow}
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

export default Fourpics2;
