import { useDispatch, useSelector } from "react-redux";
import { fetchPoshtibani } from "../Redux/Poshtibani/ActionPoshtibani";
import { useEffect, useState } from "react";

const Poshtibani = () => {
  const { loading, error, poshtibani } = useSelector(
    (state) => state.poshtibani
  );
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  function opening() {
    document.querySelector(".subposhtibani").classList.remove("hidden");
    document.querySelector(".subposhtibani").classList.add("block");
    setOpen((open) => !open);
  }
  function closing() {
    document.querySelector(".subposhtibani").classList.remove("block");
    document.querySelector(".subposhtibani").classList.add("hidden");
  }
  useEffect(() => {
    dispatch(fetchPoshtibani());
  }, []);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  return (
    <>
      <button
        onClick={opening}
        className="labelposhtibani hidden lg:!flex w-[50px] h-[50px] bg-[#ef4055] sticky bottom-[30px] right-[40px] z-0 border-none justify-center text-center items-center box-border rounded-[50%] cursor-pointer"
      >
        <img
          src={poshtibani.poshtiban}
          alt=""
          className="w-[30px] inline-block h-[30px] text-[whitesmoke]"
        />
      </button>
      <div className="subposhtibani w-[100%] h-[100vh] z-[3] fixed -left-[100px] top-[250px] hidden">
        <div className="sub-subposhtibani w-[361px] h-[550px] bg-[white] rounded-[15px] flex flex-col flex-wrap gap-x-[3px] border-[1px] absolute border-solid border-[#ef4055]">
          <div className="redbox-sub-subposhtibani w-[100%] h-[10%] bg-[#ef4055] font-[iranyekanmedium] text-[whitesmoke] leading-[55px] ps-[15px] rounded-tl-[15px] rounded-tr-[15px]">
            پشتیبانی آنلاین
          </div>
          <div className="hi-sub-subposhtibani font-[iranyekanmedium] text-[16px] py-[10px] px-[20px]">
            سلام
          </div>
          <div className="text-sub-subposhtibani font-[iranyekanmedium] text-[13px] px-[20px] leading-[25px]">
            اینجا می توانید تعدادی از پرسش های متداول را ببینید یا در صورت تمایل
            با ما آنلاین گفتگو کنید!
          </div>
          <div className="lastbox-sub-subposhtibani w-[100%] h-[290px] flex flex-col flex-wrap">
           {poshtibani.category?.map((item)=>{
            return  <div className="collapse collapse-arrow bg-base-200 text-[13px]" key={item.id}>
              <input type="radio" name="my-accordion-2" checked="checked" />
              <div className="collapse-title text-[14px] font-medium">
            {item.title} </div>
              <div class="collapse-content">
                <p>
                 {item.body}</p>
              </div>
            </div>
           })}
          
           
          </div>
          <div className="answer-sub-subposhtibani flex flex-col flex-wrap items-center justify-center font-[iranyekanmedium] text-[13px] mx-auto gap-x-[5px]">
            جواب سوالتون رو پیدا نکردید؟
            <div className="bluebox w-[206px] h-[48px] bg-[#25bbce] rounded-[25px] mt-[10px] text-[whitesmoke] text-center font-600 leading-[48px] flex justify-center items-center flex-row flex-wrap relative">
              گفتگو با پشتیبان آنلاین
              <img
                src={poshtibani.fleshchap}
                alt=""
                className="buttonflesh4  w-[24px] h-[24px] block absolute bottom-[10px] left-[11px]"
              />
            </div>
          </div>
          <button
            onClick={closing} className="closebtn block w-[35px] h-[35px] text-center leading-[35px] font-bold cursor-pointer absolute left-[5px] top-[15px]">
            <img src={poshtibani.closeflesh} alt="" className=" w-[24px] h-[24px]"/>
          </button>
        </div>
      </div>
    </>
  );
};

export default Poshtibani;
