import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "../components/Redux/Login/ActionLogin";
import { useEffect } from "react";

const Login = () => {
  const { loading, error, login } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLogin());
  }, []);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  return (
    <form className="xl:w-[30%] md:w-[80%] mx-[20px] h-[440px] border-[1px] border-solid border-[lightgrey] absolute left-1/3 top-1/4 p-[40px] flex flex-col flex-wrap border-box rounded-[5px]" action="#" method="post">
      <div className="svg mx-auto block">
        <img src={login.digikala} alt=""/>
      </div>
        <div className="text w-[400px] h-[50px] font-[iranyekanmedium] flex flex-row flex-wrap items-center justify-start gap-y-[5px] mt-[20px]">
            <span className="vorod h-[50px] justify-center flex leading-[50px] text-[16px]" >ورود</span>
            <span className="devider w-[2px] mx-[5px] h-[40%] bg-[#2b2b2b]"></span>
            <span className="sabtenam h-[50px] flex justify-center text-[16px] leading-[50px]" >ثبت نام</span>
        </div>
        <label htmlFor="fullname" className="font-[iranyekanmedium] text-[13px] mt-[18px] capitalize text-[#7c888b]">سلام
            <br/>
           لطفا شماره موبایل یا ایمیل خود را وارد کنید
        </label>
        <input className="w-[95%] h-[35px] block my-[20px] rounded-[5px] border-[1px] border-solid border-[#25bbce]" type="text" name="fullname" id="fullname"/>
        <input className="w-[100%] h-[46px] text-[13px] font-[iranyekanmedium] capitalize bg-[#f04055] text-center rounded-[5px] text-[white]" type="submit" value="ورود"/>
        <div className="text2 font-[iranyekanmedium] text-[10px] mt-[15px] text-[#7c888b] pe-[5px]">ورود شما به معنای پذیرش<span className="text-[#25bbce]">شرایط ذیجی کالا</span> و<span className="text-[#25bbce]">قوانین حریم خصوصی</span> است.</div>
    </form>
  );
};

export default Login;
