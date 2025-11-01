import { useDispatch, useSelector } from "react-redux";
import { fetchLabelsooper } from "../Redux/Labelsooper/ActionLabelsooper";
import { useEffect, useRef, useState } from "react";
import { FaBasketShopping } from "react-icons/fa6";

import "./labelsooper.css";

const Labelsooper = () => {
  const { loading, error, labelsooper } = useSelector(
    (state) => state.labelsooper
  );
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const [expanded, setExpanded] = useState(false);
  function opensooper() {
    document
      .querySelector(".subsoopermarket-button")
      .classList.remove("hidden");
    document.querySelector(".subsoopermarket-button").classList.add("block");
    setOpen((open) => !open);
  }
  function closebutton() {
    document.querySelector(".subsoopermarket-button").classList.remove("block");
    document.querySelector(".subsoopermarket-button").classList.add("hidden");
    setClose((close) => !close);
  }

  useEffect(() => {
    dispatch(fetchLabelsooper());
    function changewidth() {
      const scrollPosition = window.scrollY; // موقعیت فعلی اسکرول از بالا
      const windowHeight = document.body.scrollHeight - window.innerHeight; // کل ارتفاع قابل اسکرول
      const oneThird = windowHeight / 3; // یک سوم مسیر
      setExpanded(scrollPosition > oneThird);
    }
    window.addEventListener("scroll", changewidth);
    return () => window.removeEventListener("scroll", changewidth);
  }, []);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  return (
    <>
      <button
        onClick={opensooper}
        className={`showbutton ${
          expanded ? "w-[225px]" : "w-[145px]"
        } h-[50px] bg-[#029a48] fixed bottom-[30px] hidden lg:!right-[88%] !z-[100] lg:z-0 border-none box-border rounded-[30px] pe-[10px] lg:flex flex-row flex-wrap items-center cursor-pointer font-[iranyekanmedium] justify-center gap-x-[3px] text-[whitesmoke] transition-all duration-500 ease-in-out`}
      >
        <div className="labeldivsoopermarket flex justify-center items-center">
          <p className="supermarket text-[15px] mx-2">{labelsooper.title}</p>
          {expanded && (
            <div className="more font-[iranyekanmedium] text-[12px] ml-1">
              تنوع بالا و پرتخفیف
            </div>
          )}
          <FaBasketShopping className="text-[20px]" />
        </div>
      </button>
      <div className="subsoopermarket-button w-[100%] h-[100vh] bg-[#0c050580] z-[2] fixed left-0 top-0 hidden">
        <div className="sub-subsoopermarket-button w-[460px] h-[355px] bg-white rounded-[8px] absolute custom-position">
          <div className="text-sub-subsoopermarket-button flex flex-col flex-wrap gap-x-[5px] font-[yekan] p-[20px]">
            <h5 className="text-[14px] text-[#4d4f5f]">
              یکی از سوپرمارکت های زیر را انتخاب کنید
            </h5>
            <h6 className="text-[11px] text-[#b4b6b8]">
              فقط در شهر های تهران و کرج
            </h6>
          </div>
          <div className="image-sub-subsoopermarket-button flex flex-row flex-wrap gap-x-[8px] justify-center">
            {labelsooper.category?.map((item) => {
              return (
                <div key={item.id} className={`boximage1 w-[204px] h-[250px] ${item.id===1?"bg-[#dbf3e6]":"bg-[#feebdd]"}  rounded-[5px] p-[10px] relative`}>
                  <div className="text-takhfif font-[yekan] text-[13px] flex flex-row flex-wrap justify-start font-600 mb-[10px]">
                    {item.title}
                    <img src={item.svgflesh} alt="" />
                  </div>
                  <div className={`ersal w-[103px] h-[20px] ${item.id===1?"bg-[#029a48]":"bg-[#ff8043]"}  text-center leading-[20px] rounded-tl-[10px] rounded-br-[13px] rounded-bl-[10px] text-[11px] flex flex-row flex-wrap justify-evenly`}>
                    <img
                      src={item.svgbox}
                      alt=""
                      className="w-[18px] h-[18px]"
                    />
                    <span className="text-[whitesmoke] font-[yekan]">
                      {item.titlebox}
                    </span>
                  </div>
                  <div className="image-ersal w-[130px] h-[130px] absolute left-[8px] bottom-[10px]">
                    <img
                      src={item.image}
                      alt=""
                      className="w-[100%] h-[100%]"
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <button
            onClick={closebutton}
            className="closebutton block w-[35px] h-[35px] text-[#2b2b2b] text-center leading-[35px] font-bold  cursor-pointer absolute left-0 top-0"
          >
            &times;
          </button>
        </div>
      </div>
    </>
  );
};

export default Labelsooper;
