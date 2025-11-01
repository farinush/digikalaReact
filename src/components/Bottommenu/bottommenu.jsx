import { useDispatch, useSelector } from "react-redux";
import { fetchBottommenu } from "../Redux/Bottommenu/ActionBottommenu";
import { useEffect } from "react";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { useRef } from "react";
import { useState } from "react";

const Bottommenu = () => {
  const { loading, error, bottommenu } = useSelector(
    (state) => state.bottommenu
  );
  const dispatch = useDispatch();
  const linkRef = useRef(null); // فقط برای باز کردن
  const subSubmenuRef = useRef(null); // ناحیه‌ای که خروج ازش باعث بسته شدن میشه
  const submenuRef = useRef(null); // برای باز و بسته کردن
  const [activeIndex, setActiveIndex] = useState(null);
  const [parentWidth, setParentWidth] = useState("60%");
  const [showCityModal, setShowCityModal] = useState(false);

  useEffect(() => {
    dispatch(fetchBottommenu());
  }, []);





const handleMouseEnter = (index) => {
  setActiveIndex(index);

  const selectedSubmenu = bottommenu.submenu?.[index];
  const categoryItems = selectedSubmenu?.category || [];

  const classifyCount = categoryItems.filter(
    (cat) => cat?.classify?.length > 0
  ).length;

  if (classifyCount === 3) {
    setParentWidth("45%");
  } else if (classifyCount === 2) {
    setParentWidth("30%");
  } else {
    setParentWidth("60%");
  }
};


  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return (
      <h1>
        Error:{" "}
        {typeof error === "string"
          ? error
          : error.message || JSON.stringify(error)}
      </h1>
    );
  }
  return (
    <div className="botom_menu hidden lg:!flex w-[100%] mt-[135px] h-[40px]   lg:flex-row flex-wrap">
      <div className="header__bottom__menu w-[83%] h-[inherit] ps-[130px] relative">
        <nav className="nav__menu w-[100%] h-[inherit] flex items-center flex-row flex-wrap gap-y-[10px]">
          <div className="div__nav__menu w-fit h-[inherit]">
            <a ref={linkRef} onMouseEnter={() => { submenuRef.current.classList.remove("hidden"); submenuRef.current.classList.add("block");}}
              className="link__div__nav__menu w-[inherit] block h-[inherit] text-[#575455] px-[10px] leading-[40px] font-[iranyekanmedium] text-[13px] relative"
              href="#">
              <div className="child__link__div__nav__menu w-[100%] h-[100%] items-center gap-y-[5px] flex">
                <DensityMediumIcon />
                {bottommenu.category}
              </div>
            </a>
            <div ref={submenuRef} className="submenu__div__nav__menu absolute top-[40px] z-50 right-0 w-screen h-screen bg-[#0e060680]/[0.5] hidden transition-all overflow-hidden ease-linear">
              <div ref={subSubmenuRef} onMouseLeave={() => { submenuRef.current.classList.add("hidden"); submenuRef.current.classList.remove("block");
                }}
                className="sub__submenu__div__nav__menu rounded-[12px] w-[60%] overflow-hidden !h-[70%] z-999 flex bg-white absolute right-32 top-0 transition-all duration-300" style={{ width: parentWidth }}>
                <div className="right__sub__submenu__div__nav__menu overflow-scroll w-[25%] h-full bg-[#edefee]/[0.3]">
                  {bottommenu.subcategory?.filter((el) => el).map((item, index) => {
                      return (
                        <div className="item__right__sub__submenu__div__nav__menu flex w-[100%] h-[50px] items-center justify-center cursor-pointer text-[13px] pe-[10px]" key={index}   onMouseEnter={() => {setActiveIndex(index);handleMouseEnter(index);}}>
                          <div className="child__item__right__sub__submenu__div__nav__menu flex w-[100%] h-[50px] items-center justify-center cursor-pointer text-[13px] pe-[10px]">
                            <img src={item.svg} alt="" className="img_item__right__sub__submenu__div__nav__menu block mx-[15px] w-[20px] h-[20px]"/>
                            <a href="#" className="a_item__right__sub__submenu__div__nav__menu font-[iranyekanmedium] text-[#797a7d] block w-[100%] h-[100%] mt-[10px] text-[12px] font-bold leading-[40px]">
                              {item.body}
                            </a>
                          </div>
                        </div>
                      );
                    })}
                </div>
                <div className="all__submenu__item__right__sub__submenu__div__nav__menu block w-[75%] overflow-scroll h-[100%] bg-[#ffffff]">
                  {bottommenu.submenu?.filter((el) => el).map((item, index) => {
                      return (
                        <div className={`submenu__right__sub__submenu__div__nav__menu w-[100%] h-[100%] p-[10px] ${activeIndex === index ? "block" : "hidden"}`}
                          key={index} data-index={index}>
                          <div className="div__submenu__item__right__sub__submenu__div__nav__menu w-[100%] h-[100%] bg-white relative flex flex-col flex-wrap">
                            <div className="title__div__submenu__item__right__sub__submenu__div__nav__menu w-[100%] bg-white dir-rtl leading-[80px] flex absolute ps-[30px]">
                              <div className="subtitle__title__div__submenu__item__right__sub__submenu__div__nav__menu absolute right-[50px] text-[#36b4c3] font-[600] flex flex-row flex-wrap justify-center items-center gap-y-[8px] text-[12px] font-[iranyekanmedium] ">
                                {item.subtitle}
                                <img src={bottommenu.fleshbechap} alt="" />
                              </div>
                            </div>
                            <div className="classify__div__submenu__item__right__sub__submenu__div__nav__menu absolute top-[80px] gap-y-[1px] h-[86.5vh] w-[100%] bg-white flex">
                              {item.category?.filter((el) => el).map((item, index) => {
                                  return (
                                    <div className="classify2 w-[220px] h-[100%] flex flex-row flex-wrap" key={index}>
                                      <div className="w-[100%] flex flex-col gap-y-[10px]">
                                        {item.classify?.filter((el) => el).map((item, index) => {
                                            return (
                                              <div className="div__classify__div__submenu__item__right__sub__submenu__div__nav__menu bg-white flex-col dir-rtl flex-wrap flex justify-start pt-[15px]" key={index}>
                                                <div className="huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu h-[40px] ps-[20px] flex flex-row flex-nowrap flex-start items-center gap-y-[5px] mb-[11px]">
                                                  <a className="a__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu font-[iranyekanmedium] text-[14px] pb-[20px] h-[50%] border-r-[2px] border-r-[#d82f4e] ps-[8px]" href="#">{item.titlehuge}
                                                  </a>
                                                  <div className="svg__huge__subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu relative pb-[2px]">
                                                    <img src={bottommenu.fleshbechap} alt=""/>
                                                  </div>
                                                </div>
                                                {item.items?.filter((el) => el).map((item, index) => {
                                                    return (
                                                      <div className="subdiv__div__classify__div__submenu__item__right__sub__submenu__div__nav__menu h-[40px] ps-[15px]" key={index}>
                                                        <a className="font-medium block font-[yekan] text-[13px] h-[40px] text-right text-[#66666b]  hover:text-[#d82f4e]" href="#">{item.body}{" "}</a>
                                                      </div>
                                                    );
                                                  })}
                                              </div>
                                            );
                                          })}
                                      </div>
                                    </div>
                                  );
                                })}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
          <span className="span__a"></span>
          {bottommenu.navbar?.map((item) => {
            return (
              <div className="div__2__nav__menu w-fit h-[100%] relative" key={item.id}>
                <a className="a__div__2__nav__menu w-[100%] h-[100%] text-[#3b383a] px-[10px] leading-[40px] font-[iranyekanmedium] text-[13px] flex items-center gap-y-[5px] hover:border-b-[2px] hover:border-b-[#d82f4e] ease-linear transition-all duration-[100ms]" href="./shegeftangiz.html">
                  <img src={item.svg} alt="" />
                  <div className="mx-[2px]">{item.body}</div>
                </a>
              </div>
            );
          })}
        </nav>
      </div>
      <div onClick={() => setShowCityModal(true)} className="labelforshow w-[17%] h-[inherit] relative font-[iranyekanmedium] text-[13px] text-[#8b868c] gap-y-[5px] cursor-pointer">
        <div className="child_labelforshow w-[100%] h-[100%] flex flex-row flex-nowrap justify-start items-center">
          <img src={bottommenu.shahr} alt="" />
          {bottommenu.chooseloc}
        </div>
      </div>
      {showCityModal && (
      <div className="subbottomcity z-[999] w-[100%] h-[100vh] bg-[#0c050580] absolute left-0 top-0">
        <div className="sub-subbottomcity w-[459px] h-[650px] bg-white rounded-[8px] absolute flex flex-col flex-wrap gap-x-[3px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-sub-subbottomcity flex h-[10%]  justify-center w-[inherit] flex-col flex-wrap gap-x-[5px] font-[yekan] mt-[25px] ps-[30px] text-[16px] text-[#2b2b2b] font-600">
            {bottommenu.chooseloc2}
          </div>
          <hr className="w-[80%] h-[1px] block mx-auto border-[1px] border-solid border-[#3d3a3a]/[0.5]" />
          <div className="live-city w-[inherit] h-[85%] overflow-x-hidden overflow-y-auto">
            <div className="live-location-sub-subbottomci font-[yekan] text-[16px] p-[25px] text-[#25bbce] font-600 flex flex-row flex-wrap justify-start items-center gap-y-[5px]"><img src={bottommenu.findloc} alt=""/>{bottommenu.automaticloc}
            </div>
            <div className="form-sub-subbottomcity w-[inherit]">
              {bottommenu.repeatloc?.map((item) => {
                return (
                  <div key={item.id}>
                    <a className="a-form-sub-subbottomcity w-[90%] h-[60px] decoration-0" href="#">
                      <div className="div-a-form-sub-subbottomcity flex w-[100%] h-[100%] flex-row flex-wrap justify-between px-[25px] items-center font-[500] font-[iranyekanmedium] text-[14px] mb-[15px] text-[#2b2b2b]">
                        {item.name}
                        <img src={bottommenu.fleshbechap} alt="" />
                      </div>
                    </a>
                    <hr className="hr-a-form-sub-subbottomcity w-[80%] border-none border-b-[1px] border-b-solid border-b-[lightgray]" />
                  </div>
                );
              })}
            </div>
          </div>
          <button  onClick={() => setShowCityModal(false)} className="block w-[35px] h-[35px] text-[#2b2b2b] text-center leading-[35px] font-bold cursor-pointer absolute left-0 top-0">
            &times;
          </button>
        </div>
      </div>
      )}
    </div>
  );
};

export default Bottommenu;
