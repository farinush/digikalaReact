import { useDispatch, useSelector } from "react-redux";
import { fetchCentermenu } from "../Redux/Centermenu/ActionCentermenu";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import DeleteIcon from "@mui/icons-material/Delete";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import LoginIcon from "@mui/icons-material/Login";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./centermenu.css";
import { grey } from "@mui/material/colors";
import { setRemovecart } from "../Redux/Cart/ActionCart";

const Centermenu = () => {
  const [showForm, setShowForm] = useState(false);
  const [showb, setShowb] = useState(false);
  const { loading, error, centermenu } = useSelector(
    (state) => state.centermenu
  );
  const {cart,isOpen} = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const newItemRef = useRef(null);
  const handleFormClick = () => {
    setShowForm((prev) => !prev);
  };
  const handleNewItemClick = (e) => {
    e.stopPropagation();
  };

  function showbasket() {
     dispatch({ type: "SET_CART_OPEN", payload: true });
    setShowb(true);
  }
  function closebasket(){
    dispatch({ type: "SET_CART_OPEN", payload: false });
   setShowb(false);
  }
  const handleRemove = (uniqueId) => {
  dispatch(setRemovecart(uniqueId));
};

  useEffect(() => {
    dispatch(fetchCentermenu());
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (newItemRef.current && !newItemRef.current.contains(event.target)) {
        setShowForm(false);
      }
    }

    if (showForm) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showForm]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  
    useEffect(() => {
    setShowb(isOpen);  // همگام‌سازی showb با isOpen
  }, [isOpen]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  return (
    <div className="centermenu lg:fixed lg:top-[55px] z-50 bg-white  py-2 w-[100%] lg:h-[68px] ">
      <div className="child_center_menu lg:flex w-[100%] lg:w-[80%] h-[100%] mx-auto">
        <div className="logo_center_menu hidden lg:!block lg:w-[14%] h-fit">
          <img src={centermenu.digikalasvg} alt="" />
        </div>
        <div
          className="form_center_menu w-[100%] lg:w-[75%] flex items-center lg:pe-[30px] relative"
          onClick={handleFormClick}
        >
          <input
            className="lg:w-[50%] w-[100%] h-[45px] rounded-[20px] lg:rounded-[7px] outline-none border-2 border-[lightgrey] border-solid font-[iranyekanmedium] text-[14px] px-[50px] lg:px-[5%] mx-[3%] pl-[40px]"
            type="text"
            placeholder="جستجو"
          />
          <img
            src={centermenu.svgexport}
            alt="Search Icon"
            className="absolute right-[6%] top-[50%] transform -translate-y-[50%] w-[20px] h-[20px]"
          />
          <div
            className={`overlay fixed top-[200px] right-0 w-[100%] h-[100%] bg-[#2b2b2b]/[0.2] z-[999] ${
              showForm ? "" : "hidden"
            }`}
          ></div>
          <div
            className={`newItem overflow-y-auto overflow-x-hidden absolute h-[453px] top-0 right-[3%] rounded-[7px] bg-[white] w-[95%] lg:w-[50%] border-2 border-solid p-[10px] border-[lightgrey] z-[1000] ${
              showForm ? "" : "hidden"
            }`}
            onClick={handleNewItemClick}
            ref={newItemRef}
          >
            <input
              type="text"
              placeholder="جستجو"
              className="border-none outline-none font-[iranyekanmedium] text-[14px] text-[#9c9797] mx-5"
            />
            <hr className="w-[95%] mx-auto mt-[15px] mb-[20px] h-[2px] bg-[#df2a2a]" />
            <img
              className="block w-[95%] shadow-md mx-auto"
              src={centermenu.jostojo}
              alt="search-image"
            />
            <div className="data-lastshop items-center mx-[5%] mt-[5%] w-[100%] justify-center h-[48px] flex flex-row">
              <div className="svg-clock h-fit w-[7%]">
                <AccessAlarmsIcon />
              </div>
              <div className="w-[95%] h-fit font-[iranyekanmedium] text-[#424158] text-[15px]">
                {centermenu.lastshopSeacrh}
              </div>
              <div className="svg-trash w-[20%] h-fit">
                <DeleteIcon sx={{ fontSize: 28 }} />
              </div>
            </div>
            <div className="items-slider1 mt-4 ">
              <Swiper
                modules={[Navigation]}
                spaceBetween={12}
                slidesPerView={4.9}
                navigation
                className="my-custom-swiper"
              >
                {centermenu.centermenuslider1?.map((item) => (
                  <SwiperSlide
                    key={item.id}
                    className="flex py-3 px-4 text-center w-fit rounded-[15px]  border border-gray-200 font-[iranyekanmedium]"
                  >
                    {item.body}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="locresponsive w-[100%] flex lg:!hidden font-[iranyekanmedium] text-[12px] mt-[15px] px-[15px] gap-x-[8px]">
          <img src={centermenu.homelocsvg} alt="" />
          {centermenu.sendto}
          <img src={centermenu.svgfleshbechap} alt="" />
        </div>
        <div className="justify-center hidden lg:flex items-center  me-2 ">
          <NotificationsNoneIcon sx={{ fontSize: 30, color: grey[700] }} />
        </div>
        <div className="login_center_menu hidden lg:!flex justify-center items-center gap-x-[5px] w-[10%] h-fit">
          <Link
            to="/login"
            className="a_login_center_menu w-[160px] h-[40px] flex font-[iranyekanmedium] gap-x-[2px] justify-center items-center text-[12px] leading-[40px] text-center text-[#2b2b2b] border-[lightgrey] border-[1px] border-solid rounded-[12px] mx-auto"
          >
            <LoginIcon />
            ورود
            <span className="w-[2px] mx-[1px] rounded-[2px] h-[50%] bg-[#2b2b2b]">
              .
            </span>
            ثبت نام
          </Link>
          <span className="devider w-[3px] h-[60%] mx-[3px] rounded-[2px]  bg-[#2b2b2b] ">
            .
          </span>
        </div>
        <div  className="basket justify-center items-center hidden lg:!flex">
          <div onClick={showbasket} className="basketicon w-fit h-fit block justify-center items-center" >
            <img src={centermenu.basketsvg} alt="basket Icon" />
            {showb && (<div className="basketpage  w-[100%] h-[100vh] fixed left-0 top-0 z-[4]">
              <div onClick={(e) => e.stopPropagation()} className="subbasketpage w-[400px] h-[482px] bg-[white] shadow-lg left-[195px] overflow-scroll top-[135px] rounded-[15px] p-3 flex flex-col flex-wrap absolute border-[1px] border-solid border-[lightgray]">
                <h2 className="font-[iranyekanmedium] text-[16px] w-[35%] border border-gray-700 rounded-[10px] p-2">سبد خرید 🛍️</h2>
                {cart.length === 0 ? (
                  <p className="font-[iranyekanmedium] w-[30%] border border-gray-700 rounded-[10px]">سبد خرید خالی است</p>
                ) : (
                  cart.map((item) => (
                    <div className="flex items-center" key={item.id}>
                     
                      <img src={item.img} alt={item.text} width="60" />
                      <h4 className="font-[iranyekanmedium] text-[12px]">{item.text}</h4>
                       <button onClick={() => handleRemove(item.uniqueId)} className=" block w-[35px] h-[35px] text-[#2b2b2b] text-center leading-[35px] font-bold  cursor-pointer absolute -left-[8px]">&times;</button>
                    </div>
                  ))
                )}
                <button onClick={closebasket} className="closebutton block w-[10px] h-[10px] text-[#d44444] text-center leading-[35px] font-bold  cursor-pointer absolute left-0 top-0">&times;</button>
              </div>
            </div>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Centermenu;
