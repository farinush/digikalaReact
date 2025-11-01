import { useDispatch, useSelector } from "react-redux";
import { fetchFooter } from "../Redux/Footer/ActionFooter";
import { useEffect, useState } from "react";

const Footer = () => {
  const { loading, error, footer } = useSelector((state) => state.footer);
  const dispatch = useDispatch();
  const [reverse, setReverse] = useState(false);
  const [see, setSee] = useState(false);
  const [close,setClose]=useState(false)
  function reversetop(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setReverse((prev) => !prev);
  }
  function seemore(){
    
    document.querySelector(".pbox63").classList.remove("hidden")
    document.querySelector(".pbox63").classList.add("block")
    document.querySelector(".a-active-box-6").classList.add("hidden")
    document.querySelector(".a-active-box-5").classList.remove("hidden")
    document.querySelector(".a-active-box-5").classList.add("block")
    setSee(see=>!see)
  }
  function closemore(){
   
    document.querySelector(".pbox63").classList.remove("block")
    document.querySelector(".pbox63").classList.add("hidden")
    setClose(close=>!close)
    document.querySelector(".a-active-box-5").classList.remove("block")
    document.querySelector(".a-active-box-5").classList.add("hidden")
     document.querySelector(".a-active-box-6").classList.remove("hidden")
    document.querySelector(".a-active-box-6").classList.add("block")
  }

  useEffect(() => {
    dispatch(fetchFooter());
  }, []);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  return (
    <>
    <footer className="w-[100%] mt-[50px] lg:border-[1px] lg:border-solid lg:border-[lightgray] box-border">
      <div className="subfooter w-[90%] h-[100%] m-auto box-border py-[30px]">
        <div className="box-1 w-[100%] h-[40px] flex flex-row flex-wrap justify-center lg:justify-between box-border px-[50px]">
          <div className="svg_box-1 w-[138px] h-[100%] hidden lg:!block">
            <img src={footer.subdigikala} alt="" />
          </div>
          <div className="buttonbox1 w-[138px] h-[100%] mx-[50px] lg:mx-0">
            <a
              onClick={reversetop}
              href="#"
              className="a_box-1 w-[137px] flex flex-row flex-wrap justify-center items-center h-[100%] lg:border-[1px] lg:border-solid lg:border-[lightgray] rounded-[10px] lg:text-[#a1a2ab] text-[#3fb6c4] font-bold  font-[iranyekanmedium] text-[12px] text-center leading-[40px] "
            >
              {footer.titlebtn}
              <img src={footer.fleshbala} alt="" />
            </a>
          </div>
        </div>
        <div className="box-2 w-[95%] lg:h-[27px] my-[10px] lg:flex  lg:flex-row flex-wrap text-center lg:text-start justify-center lg:justify-start items-center gap-x-[15px] px-[50px] box-border">
          {footer.information?.map((item) => {
            return (
              <div key={item.id}>
                <span className="span1 w-fit h-[100%] font-[yekan] text-[13px] text-[#a1a2ab] text-center leading-[27px]">
                  {item.title}
                </span>
                <hr className="h-[80%] text-center border-l-[1px] border-l-solid border-l-[lightgray] text-[#a1a2ab]" />
              </div>
            );
          })}
        </div>
        <div className="box-3 w-[100%] lg:w-[95%] h-[103px] my-[30px] flex flex-wrap flex-row justify-evenly items-center lg:px-[50px] box-border">
          {footer.box3?.map((item) => {
            return (
              <div className="div-box-3 w-[20%] h-[100%]" key={item.id}>
                <a
                  href="#"
                  className="a-div-box-3 text-[#a1a2ab] font-[yekan] w-[100%] h-[100%] text-center lg:text-start flex flex-col flex-wrap justify-center items-center text-[12px]"
                >
                  <img
                    src={item.svg}
                    alt=""
                    className="w-[56px] h-[56px] block"
                  />
                  <span>{item.title}</span>
                </a>
              </div>
            );
          })}
        </div>
        <div className="box-4 hidden  lg:!flex box-border w-[95%] py-[30px] px-[50px]  flex-row flex-wrap justify-center items-start">
          {footer.box4?.map((item) => {
            return (
              <div
                className="div1-box4 px-[50px] w-[25%] flex-grow-1 h-[100%] flex flex-col flex-wrap justify-start items-start gap-y-[10px]"
                key={item.id}
              >
                <a
                  href="#"
                  className="huge-div1-box4 text-[#2b2b2b] font-[iranyekanmedium] text-[14px] leading-[12px] text-right block w-[100%] h-[30px] font-700"
                >
                  {item.title}
                </a>
                {item.items?.map((item) => {
                  return (
                    <a key={item.id}
                      href="#"
                      className="simple-div1-box4 text-[#a1a2ab] hover:text-[#595a5f] text-[12px] font-[iranyekanmedium] leading-[10px] text-right block w-[100%] h-[27px]"
                    >
                      {item.body}
                    </a>
                  );
                })}
              </div>
            );
          })}
          <div className="div1-box4 w-[25%] active-box4 gap-y-[20px] flex-grow-1 h-[100%] flex flex-col flex-wrap justify-start items-start">
            <div className="span-div1-box4 font-[iranyekanmedium] text-[14px] text-[#2b2b2b]">
              <span>{footer.withus}</span>
            </div>
            <div className="svg-div1-box4 flex flex-row flex-wrap justify-center items-center gap-y-[7px] text-center">
              {footer.logos?.map((item) => {
                return <a key={item.id}><img src={item.image} alt="" /></a>;
              })}
            </div>
            <div className="span-div1-box4 font-[iranyekanmedium] text-[14px] text-[#2b2b2b]">
              <span>{footer.textlogos}</span>
            </div>
            <div className="email-div1-box4 font-[iranyekanmedium] text-[12px] flex flex-row flex-wrap justify-center items-center gap-y-[5px]">
              <input
                type="text"
                placeholder="ایمیل شما"
                id="submit"
                className="w-[178px] h-[40px] bg-[#f0f0f0] rounded-[10px] outline-none font-[iranyekanmedium] border-none px-[20px] leading-[40px]"
              />
              <label
                htmlFor="submit"
                className="w-[55px] h-[40px] bg-[#e0e0e2] mx-[20px] text-[whitesmoke] rounded-[10px] block text-center leading-[40px]"
              >
                ثبت
              </label>
            </div>
          </div>
        </div>
        <div className="join join-vertical w-full block lg:!hidden font-[iranyekanmedium] text-[13px]">
          {footer.box4?.map((item) => {
            return (
              <div className="collapse collapse-arrow join-item border-base-300 border" key={item.id}>
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-md font-bold">
                  {item.title}
                </div>
                <div className="collapse-content text-[#a09999]">
                  {item.items?.map((item) => {
                    return <div key={item.id}>{item.body}</div>;
                  })}
                </div>
              </div>
            );
          })}
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-md font-bold">شرکای تجاری</div>
            <div className="collapse-content text-[#a09999] flex flex-row flex-wrap gap-x-[7px] justify-center items-center">
              {footer.accordion?.map((item) => {
                return (
                  <div key={item.id}>
                    <img src={item.body} alt="partner" />
                    <hr className="w-[1px] h-[30%] bg-[#2b2b2b]" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="box-5 w-[95%] h-[76px] box-border bg-[#0c0c0c] lg:bg-[#3c4b6d] rounded-[8px] flex flex-row flex-wrap justify-start mt-[20px]">
          <div className="image-span-box-5 w-[100%] justify-center lg:w-[50%] h-[100%] flex flex-row flex-wrap items-center gap-x-[10px] lg:justify-start lg:ps-[30px]">
            <img
              src={footer.axdigikala}
              alt=""
              className="w-[44px] h-[44px]  object-cover text-center inline-block"
            />
            <a
              className="a-image-span-box-5 font-[iranyekanmedium] text-[20px] font-500 text-[white]"
              href="#"
            >
              {footer.Download}
            </a>
          </div>
          <div className="apps-box-5 w-[50%] h-[100%] hidden lg:!block">
            <a
              href="#"
              className="bma-apps-box-5 w-[100%] h-[100%] flex flex-row flex-wrap justify-end items-center pe-[30px] gap-x-[20px]"
            >
              {footer.apps?.map((item) => {
                return (
                  <div key={item.id}><img
                    src={item.image}
                    alt=""
                    className="w-[142px] h-[44px] object-cover"
                  /></div>
                );
              })}
              <img
                className="image-more-apps-box-5 w-[42px] h-[44px] bg-[white] rounded-[5px]"
                src="./public/images/footer/More.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="box-6 w-[95%] mt-[30px] justify-around py-8 border-t-[1px] border-t-solid border-t-[lightgray] border-b-[1px] border-b-solid border-b-[lightgray] lg:flex  flex-wrap lg:flex-row pt-[20px] ">
          <div className="tozihat-box-6 w-[100%] lg:w-[1050px] text-wrap py-8 lg:px-[40px]">
            <div className="subtozihat-box-6 w-[100%] lg:w-[1050px] flex  flex-col flex-wrap items-start gap-x-[10px]">
              <h5 className="font-[iranyekanmedium] text-[17px] text-[#6a6461]">
                {footer.titledigi}
              </h5>
              <p className="text-ellipsis font-[iranyekanmedium] text-[9px] lg:text-[11px] text-[#a1a2ab] leading-[25px]">
                دیجی کالا سال‌ها است که به انتخاب اول بسیاری از خریداران
                اینترنتی تبدیل شده است. دیجی کالا به عنوان بزرگ‌ترین و معتبرترین
                فروشگاه آنلاین ایران، شناخته‌شده‌ترین فروشگاه نیز محسوب می‌شود.
                این فروشگاه آنلاین نه‌تنها گسترده‌ترین تنوع کالا را در
                دسته‌بندی‌های مختلف ارائه می‌دهد، بلکه با خدمات بی‌نظیر، ارسال
                سریع، ضمانت اصل بودن کالا و پشتیبانی حرفه‌ای، استاندارد جدیدی در
                خرید اینترنتی ایران تعریف کرده است. این فروشگاه با سال‌ها تجربه
                و اعتماد مشتریان، کامل‌ترین و بهترین گزینه برای خرید آنلاین در
                ایران محسوب می‌شود.
              </p>
              <div className="pbox63 hidden font-[iranyekanmedium]  text-[9px] lg:text-[11px] text-[#a1a2ab] leading-[25px]">
                <span className="font-bold text-[15px] ">ویژگی های مهم دیجی کالا
                </span>
                 <p>یکی از ویژگی‌های مهم در خرید از دیجی
                کالا، تنوع بی‌نظیر محصولات است. این فروشگاه اینترنتی طیف وسیعی
                از کالاها را در دسته‌های مختلف از جمله لوازم دیجیتال، لوازم
                خانگی، مد و پوشاک، لوازم آرایشی و بهداشتی، محصولات سلامت و
                زیبایی، و بسیاری از محصولات دیگر ارائه می‌دهد. به عنوان مثال،
                اگر به دنبال خرید یک گوشی موبایل جدید باشید، دیجی کالا مجموعه‌ای
                از بهترین گوشی‌ها از برندهای معتبر اپل و سامسونگ مانند ایفون 16،
                گوشی S25، گوشی‌های مختلف از برند شیائومی مانند شیائومی نوت ۱۴ و
                بسیاری از برندهای دیگر را در اختیار شما قرار می‌دهد. همچنین برای
                علاقه‌مندان به لوازم دیجیتال، این فروشگاه اینترنتی انواع لپ تاپ،
                تلویزیون، اسپیکر، و هندزفری بلوتوثی با کیفیت بالا را برای خرید
                آنلاین ارائه می‌دهد. دیجی کالا، مقصدی بی‌پایان برای خرید آسان،
                سریع و مطمئن است. راهی که هر آنچه نیاز دارید از قیمت لپ تاپ تا
                یک ایرپاد مطمئن را در اختیار شما قرار می‌دهد. 
              </p> <span className="font-bold text-[15px]"> ارسال سریع و مطمئن
                کالا 
                </span> <p>یکی از مهم‌ترین دغدغه‌های کاربران خرید آنلاین، زمان تحویل
                کالا است. دیجی کالا برای حل این مشکل، گزینه‌های مختلف ارسال را
                در نظر گرفته است تا کاربران بتوانند بر اساس نیاز خود، روش ارسال
                مناسب را انتخاب کنند. به عنوان مثال، ارسال کالا به صورت تحویل
                امروز با ارسال سریع دیجی‌کالا، از جمله روش‌های خرید سریع از این
                فروشگاه اینترنتی است. این امکانات باعث می‌شود که خریداران
                بتوانند سفارش خود را در کوتاه‌ترین زمان ممکن دریافت کنند. علاوه
                بر این، در صورتی که کالای خریداری شده از لحاظ کیفیت یا هر دلیل
                دیگری رضایت مشتری را جلب نکرده باشد، دیجی کالا ضمانت بازگشت کالا
                را ارائه می‌دهد. این ویژگی موجب اعتماد بیشتر مشتریان به خرید
                آنلاین از فروشگاه اینترنتی دیجی کالا شده است.
               </p> <span className="font-bold text-[15px]"> تخفیف های ویژه و
                جشنواره ها 
               </span><p> دیجی کالا به طور منظم جشنواره‌ها و تخفیف‌های ویژه‌ای
                را برگزار می‌کند که برای مشتریان فرصت خرید کالاهای باکیفیت با
                قیمت‌های مناسب به همراه خواهد داشت. این تخفیف‌ها در ایام خاص
                مانند بلک فرایدی یا همان حراج جمعه سیاه و جشنواره‌های تابستانی
                توجه بسیاری از خریداران را جلب می‌کند. در این جشنواره‌ها، دیجی
                کالا تخفیف‌های عالی روی محصولات مختلف از جمله گوشی‌های موبایل،
                لپ تاپ‌ها، تلویزیون‌ها، و حتی محصولات زیبایی ارائه می‌دهد.
                می‌توانید گوشی ایفون ۱۶ یا گوشی S25 را با تخفیف‌های ویژه خریداری
                کنید و از قیمت مناسب بهره‌مند شوید. دیجی کالا فراتر از یک
                فروشگاه اینترنتی، یک تجربه خرید مطمئن در بین کاربران مختلف بوده
                است که با ارائه بزرگ‌ترین تنوع کالا، قیمت‌های مختلف و خدماتی
             بی‌نقص، به مقصد اول خریداران آنلاین در ایران تبدیل شده است.
              </p>
                <span className="font-bold text-[15px]">انواع محصولات فروشگاه دیجی کالا 
                </span>
               <p> دیجی کالا دارای محصولات متنوعی
                در گروه‌های مختلف است که خرید آنها بسیار راحت و سریع است. به
                عنوان مثال، اگر به دنبال قاب گوشی یا هندزفری بلوتوثی باشید،
                می‌توانید مدل‌های مختلف و برندهای گوناگونی را در این فروشگاه
                پیدا کنید.
               </p> <span> موبایل و کالای دیجیتال دیجی‌کالا 
                </span><p> انواع گوشی‌های
                هوشمند از برندهای معتبر جهانی مانند سامسونگ، اپل، شیائومی و
                هواوی را با مشخصات و قیمت‌های متنوع عرضه می‌کند. علاوه بر
                موبایل، دیجی‌کالا مجموعه‌ای از لوازم جانبی مانند هدفون، هندزفری،
                ساعت‌های هوشمند، تبلت‌ها و لپ تاپ را نیز در اختیار مشتریان قرار
                می‌دهد. با امکان مقایسه محصولات، مطالعه نظرات کاربران و دسترسی
                به جدیدترین مدل‌ها، دیجی‌کالا به یکی از مقاصد اصلی خرید آنلاین
                در حوزه موبایل و کالای دیجیتال تبدیل شده است. از دهه گذشته
                همواره دیجی کالا به عنوان اولین گزینه برای خرید گوشی های
                سامسونگ، آیفون های اپل و گوشی شیائومی محسوب می‌شده است و تا
                امروز هم در عرضه این موبایل های محبوب به بازار، دیجی‌کالا اولین
                فروشگاه آنلاین بوده است.
              </p> <span className="text-[15px] font-bold">  کتاب و لوازم تحریر 
                </span> <p>کتاب، لوازم تحریر و
                هنر در دیجی کالا یک مجموعه بی‌نظیر از محصولات فرهنگی و هنری است
                که به علاقه‌مندان به کتابخوانی، هنر و نوشتن کمک می‌کند تا دنیای
                خود را گسترش دهند. از کتاب‌های چاپی و کتاب‌های صوتی گرفته تا
                مجلات خارجی و داخلی و آثار معروف‌ترین نویسندگان مثل سعدی، حافظ،
                مولانا و فروغ فرخزاد، تمامی نیازهای کتابخوان‌ها را پوشش می‌دهد.
                همچنین با مجموعه‌ای از لوازم تحریر، ابزار نقاشی و رنگ‌آمیزی،
                آلبوم‌های عکس و فرش‌های دستبافت، به شما این امکان را می‌دهد تا
                دنیای هنر و خلاقیت خود را به بهترین نحو پرورش دهید. همچنین خر
                سال تقریبا همزمان با تهران و نمایشگاه بین المللی کتاب، دیجی کالا
                نمایشگاه مجازی کتاب خود را برگزار می‌کند تا آنها که فرصت حضور در
                نمایشگاه را ندارند، بتوانند مجازی از کتاب ها بازدید و خرید کنند.
              </p> <span className="text-[15px] font-bold"> لوازم آرایشی و بهداشتی 
              </span><p>  در دسته محصولات آرایشی و بهداشتی، دیجی
                کالا مجموعه‌ای از بهترین و پرطرفدارترین برندهای جهانی را در
                اختیار کاربران قرار می‌دهد. محصولات متنوعی همچون مرطوب كننده‌ها،
                كرم پودر، ضدآفتاب، ريمل و رژلب از برندهایی مانند لورال، کلینیک و
                میبلین در دیجی کالا موجود هستند که برای هر سلیقه و نیاز قابل
                انتخاب هستند. علاوه بر این، شما می‌توانید محصولات مراقبت از پوست
                و مو مانند شامپو، کرم‌های ضد چروک و ماسک صورت را در این فروشگاه
                بیابید و خرید آنلاین خود را به راحتی انجام دهید. دیجی کالا،
                بزرگ‌ترین و معتبرترین فروشگاه آنلاین لوازم آرایشی ایران، جایی که
                تنوع، کیفیت و اطمینان در خرید یکجا جمع شده‌اند.
               </p> <span className="text-[15px] font-bold"> خرید آنلاین طلا
                و جواهرات 
              </span> <p> دیجی کالا به عنوان بزرگترین فروشگاه اینترنتی ایران،
                یکی از بهترین گزینه‌ها برای خرید طلا و جواهرات آنلاین است. شما
                می‌توانید خريد گردنبند طلا، انگشتر طلا، گوشواره زنانه طلا و
                دستبند طلا را با بهترین قیمت‌ طلا از دیجی کالا انجام دهید. این
                فروشگاه مجموعه‌ای از بهترین برندهای طلا و جواهرات را در اختیار
                مشتریان قرار داده است که انتخاب خرید را برای آنها بسیار آسان
                می‌کند. همچنین می‌توانید خريد سكه، و حتی ربع سكه را نیز از این
                فروشگاه با راحت‌ترین روش انجام دهید. 
                </p> <span className="text-[15px] font-bold">اسباب بازی 
                </span><p> این قسمت شامل
                تمامی نیازهای ضروری برای مراقبت، بهداشت، سرگرمی و راحتی کودک از
                بدو تولد تا دوران کودکی است. از لوازم بهداشت و حمام کودک و نوزاد
                مانند پوشک، دستمال مرطوب، شامپو کودک، حوله و وان حمام نوزاد
                گرفته تا محصولات ویژه‌ای مثل مینی واش و شامپو کودک و نوزاد، همه
                در این مجموعه موجود هستند. همچنین برای راحتی بیشتر، انواع پوشاک
                و کفش کودک و نوزاد از لباس نوزادی تا کفش پسرانه، کوله پشتی
                پسرانه، لباس دخترانه و کفش دخترانه به صورت آنلاین در دسترس شما
                قرار دارند. کودکان به سرگرمی‌های ویژه نیاز دارند، از همین رو
                دیجی کالا مجموعه‌ای کامل از اسباب بازی‌ها از جمله پازل‌ها، لگو و
                ساختنی‌ها، عروسک‌ها، فیگورها و اسپینر‌ها را به شما ارائه می‌دهد.
                </p> <span className="text-[15px] font-bold">لوازم خانگی و مبلمان 
                </span><p> در دسته‌بندی لوازم خانگی، دیجی کالا محصولات
                متنوعی را ارائه می‌دهد که برای راحتی و زیبایی خانه و آشپزخانه
                شما طراحی شده‌اند. از جمله مبل راحتی، سرویس‌های خواب، آینه‌های
                دکوراتیو، و ظروف آشپزخانه که همگی از برندهای معتبر و با کیفیت
                تولید شده‌اند. شما می‌توانید قابلمه و تابه، یخچال، ماشین
                لباسشویی و بسیاری از لوازم خانگی دیگر را از دیجی کالا خریداری
                کنید. مبل‌های راحتی یکی از پرطرفدارترین محصولات خانگی در دیجی
                کالا هستند. این مبل‌ها در انواع طرح‌ها و رنگ‌ها و از برندهای
                معتبر ساخته شده‌اند که با هر دکوراسیونی هماهنگ می‌شوند. همچنین
                در دیجی کالا انواع سرویس خواب با کیفیت بالا و طراحی روز دنیا در
                دسترس است. علاوه بر این، اگر به دنبال آینه دکوراتیو یا سایر
                لوازم تزئینی منزل هستید، این فروشگاه بهترین انتخاب‌ها را به شما
                ارائه می‌دهد.
               </p>  <span className="text-[15px] font-bold">سوپرمارکت دیجی کالا 
                </span> <p>در دسته‌بندی خوراکی‌ها و
                کالاهای اساسی دیجی کالا، شما می‌توانید انواع محصولات ضروری و
                پرمصرف روزانه خود را پیدا کنید. از شیرینی و آجیل تا نان تازه و
                نبات خوشمزه گرفته و رب گوجه، ماکارونی، قند، رب انار، برنج و شکر
                و حتی شیر و لبنیات همه این محصولات با بالاترین کیفیت و از
                برندهای معتبر در دسترس شما قرار دارند. این مجموعه شامل همه آن
                چیزی است که برای تهیه یک وعده غذایی کامل و سالم به آن نیاز
                دارید. خرید از سوپر مارکت آنلاین کمک می‌کند که به راحتی و در
                کمترین زمان ممکن، مواد اولیه مورد نیاز خود را با قیمت‌های مناسب
                و با تضمین کیفیت دریافت کنید.
                </p><span className="text-[15px] font-bold"> محصولات بومی و محلی 
                </span> <p>در این بخش از
                دیجی کالا، از برنج، روغن، عسل طبیعی، حلوا شکری، ارده و کنجد سنتی
                گرفته تا کیک و شیرینی خانگی، لواشک، برگه و آلوچه خانگی، محصولات
                اصیل و با کیفیت ارائه می‌شود. همچنین، انواع لبنیات سنتی، کره
                گیاهی و حیوانی محلی، خرمای محلی و خشکبار و آجیل سنتی به همراه
                غلات و حبوبات ارگانیک، ادویه‌ها و چاشنی‌های ارگانیک نظیر زعفران
                و زرشک ارگانیک از دیگر گزینه‌های این دسته هستند. برای
                علاقه‌مندان به دکوراسیون سنتی نیز، محصولاتی مانند لوستر دست ساز،
                مجسمه‌های سنتی، گلدان و تابلو سنتی، کاشی و آینه سنتی و ظروف
                آشپزخانه دست ساز از جنس سنتی وجود دارد که خانه شما را به محیطی
                گرم و اصیل تبدیل خواهد کرد. 
              </p> <span className="text-[15px] font-bold"> ابزار آلات و تجهیزات 
               </span><p> این بخش شامل
                ابزار برقی و غیر برقی در دیجی کالا مجموعه‌ای کامل از ابزارهای
                مورد نیاز برای پروژه‌های صنعتی، تعمیرات و ساخت می‌شود. از
                ابزارهای برقی مانند دریل، پیچ گوشتی، فرز، سنگ رومیزی، موتور برق
                و مکنده-دمنده گرفته تا ابزارهای غیر برقی مثل ابزار دستی، نردبان،
                اره و مجموعه ابزار، این دسته برای هر نیازی ابزار مناسب را ارائه
                می‌دهد. همچنین کمپرسور هوا، دستگاه جوش، هویه و ابزار برش و
                تراشکاری برای انجام کارهای دقیق صنعتی موجود است. به‌علاوه انواع
                لوازم روانکاری، چسب صنعتی، پیچ و مهره، ماسک تنفسی، لوازم ایمنی و
                کار و شیرآلات به تکمیل نیازهای شما برای کارهای ساختمانی و صنعتی
                کمک می‌کند. دیجی کالا یک راهکار کامل برای پروژه‌های حرفه‌ای و
                خانگی است.
                </p><span className="text-[15px] font-bold"> پوشاک 
                </span> <p>از لباس‌های مردانه شامل هودی، سویشرت، ژاکت،
                پیراهن، شلوار جین، پالتو، کاپشن، کفش و اکسسوری تا پوشاک زنانه
                نظیر مانتو، بلوز، تیشرت، لباس مجلسی، لباس خواب، کاپشن و کفش
                زنانه، همگی در این دسته‌بندی موجود هستند. همچنین برای بچگانه‌ها،
                از لباس‌های راحتی و خواب، پوشاک ورزشی تا کفش و صندل بچگانه،
                به‌راحتی می‌توانید کالای مناسب را پیدا کنید. این بخش شامل
                برندهای معتبر مانند هامتو، چرم مشهد، اسمارا، کروم، گردیه و چرم
                عطارد است که پوشاک با کیفیت بالا را ارائه می‌دهند. خرید آنلاین
                لباس از دیجی کالا فرصتی برای همه فروشنده های شناخته شده کشور
                فراهم کرده است تا فروش اینترنتی بیشتری را تجربه کنند. همچنین شما
                کاربران می‌توانید طیف وسیعی از پوشاک و انواع ساعت برند را به
                راحتی و از طریق پروفایل همیشگی خود در Digikala خریداری کنید.
              </p> <span className="text-[15px] font-bold"> تجهیزات پزشکی و سلامت
                </span> <p>در این بخش از تجهیزات پزشکی مانند فشارسنج،
                ترازو، تب سنج و دماسنج گرفته تا دستگاه‌های تنفسی و تجهیزات
                حرفه‌ای پزشکی، موجود هستند. برای کنترل بیماری‌هایی مانند دیابت و
                سرماخوردگی، محصولات مناسبی از جمله کیسه نمک، رطوبت‌گیر، و
                دستگاه‌های تب سنج ارائه می‌شود. علاوه بر این، ماساژور و پد و
                کیسه آب گرم به شما کمک می‌کنند تا در خانه از تسکین درد و آرامش
                بیشتری برخوردار شوید.
               </p> <span className="text-[15px] font-bold"> محصولات ورزشی و سفر 
                </span> <p>دیجی کالا همچنین برای
                علاقه‌مندان به ورزش و سفر، محصولات متنوعی را در دسته‌بندی‌های
                مختلف ارائه می‌دهد. اگر به دنبال خرید وسایل ورزشی برای بدنسازی،
                ورزش‌های هوازی، یا کمپینگ هستید، دیجی کالا مجموعه‌ای از لوازم
                ورزشی از جمله وزنه، ساک ورزشی، قمقمه و بسیاری از لوازم دیگر را
                ارائه می‌دهد. همچنین شما می‌توانید برای سفرهای خود، ساک‌های
                مسافرتی، کوله پشتی‌های کوهنوردی و لوازم کمپینگ را از این فروشگاه
                خریداری کنید.
                </p> <span className="text-[15px] font-bold">کارت هدیه
                 </span><p> کارت هدیه‌ها راهی عالی برای هدیه دادن به
                عزیزانتان هستند و در دیجی کالا انواع مختلفی از آنها برای
                مناسبت‌های گوناگون وجود دارد. شما می‌توانید کارت هدیه فیزیکی
                دیجی کالا را به صورت عمومی یا براساس مناسبت‌های خاص همچون تولد
                یا سالگرد خریداری کنید. همچنین، کارت هدیه براساس قیمت امکان
                انتخاب هدیه‌ای مناسب با بودجه شما را فراهم می‌کند. علاوه بر
                کارت‌های فیزیکی، کارت هدیه الکترونیکی دیجی کالا هم برای افرادی
                که به دنبال یک گزینه سریع و آسان هستند، وجود دارد.
              </p> <span className="text-[15px] font-bold">  مکمل های
                غذایی 
               </span><p> دیجی کالا همچنین به عنوان یکی از مراجع معتبر برای خرید
                مکمل نیز شناخته می‌شود. شما می‌توانید انواع قرص‌های ویتامین،
                منيزيم، زينك، ويتامين C و بسیاری از مکمل‌های دیگر را از برندهای
                معروف و معتبر در دیجی کالا پیدا کنید. این مکمل‌ها به سلامت شما
                کمک می‌کنند و برای تقویت سیستم ایمنی بدن یا افزایش انرژی و بهبود
                وضعیت پوست و مو مفید هستند. 
              </p> <span className="text-[15px] font-bold">  خرید کالاهای کارکرده 
               </span> <p> خرید کالاهای
                کارکرده از دیجی کالا فرصتی عالی برای دسترسی به محصولات با کیفیت
                و قیمت مناسب است. تمامی کالاهای این دسته‌بندی در وضعیت مشابه‌نو
                قرار دارند و از نظر فنی و ظاهری کاملا سالم و بدون نقص هستند.
                همچنین هر کالای کارکرده‌ای که خریداری می‌کنید، دارای 7 روز مهلت
                تست و ضمانت اصالت است تا شما با خیال راحت از خرید خود اطمینان
                حاصل کنید. برای گوشی‌های موبایل کارکرده، این فروشگاه 3 ماه
                گارانتی دیجی کالا سرویس نیز ارائه می‌دهد. از جمله کالاهای
                کارکرده‌ای که می‌توانید در این دسته پیدا کنید می‌توان به گوشی
                موبایل کارکرده، لپ تاپ کارکرده، کنسول خانگی کارکرده و ساعت
                هوشمند کارکرده اشاره کرد. این محصولات با قیمت‌های به‌صرفه،
                گزینه‌ای مناسب برای کسانی است که به دنبال خرید کالاهای با کیفیت
                و در عین حال اقتصادی هستند. در آخر باید گفت خرید از دیجی کالا به
                دلیل تنوع بالای محصولات، خدمات ارسال سریع، تخفیف‌های ویژه، و
                امکان خرید آنلاین کالاهای متنوع از برندهای معتبر، یکی از بهترین
                انتخاب‌ها برای خریداران آنلاین در ایران است. با استفاده از خدمات
                دیجی کالا، خریدی مطمئن، سریع و راحت را تجربه خواهید کرد.
             </p> </div>
            </div>
            <button
              className="a-active-box-6 cursor-pointer  text-[#25bbce] font-[iranyekanmedium] text-[12px] flex flex-row flex-wrap justify-start items-center gap-y-[5px] relative"
              href="#"
              onClick={seemore}
            >
              مشاهده بیشتر
              <img
                src="./public/svg/subfooter/svgfleshbechap.svg"
                alt=""
                className="absolute right-[80px] top-[-3px]"
              />
            </button>
            <button
              className="a-active-box-5 hidden cursor-pointer  text-[#25bbce] font-[iranyekanmedium] text-[12px] flex-row flex-wrap justify-start items-center gap-y-[5px] relative"
              href="#"
              onClick={closemore}
            >
              بستن
              <img
                src="./public/svg/subfooter/svgfleshbechap.svg"
                alt=""
                className="absolute right-[80px] top-[-3px]"
              />
            </button>
          </div>
          <div className="standard-box-6 justify-center  gap-x-[10px] flex-row flex-wrap hidden lg:!flex">
            {footer.standard?.map((item) => {
              return (
                <a key={item.id}
                  href="#"
                  className="w-[109px] h-[109px] border-[1px] border-solid border-[lightgray] rounded-[5px]"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="w-[100px] h-[100px] object-contain"
                  />
                </a>
              );
            })}
          </div>
        </div>
        <div className="box-7 w-[95%] lg:h-[84px] mb-[50px] lg:mb-[5px] flex flex-row flex-wrap justify-center items-center">
          <p className="font-[iranyekanmedium] text-center text-[10px] lg:text-[12px] text-[#a1a2ab] lg:leading-[84px]">
            برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع»
            کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه
            (فروشگاه آنلاین دیجی‌کالا) است.
          </p>
        </div>
      </div>
     
    </footer>
     <div className="responsive z-50 fixed bottom-0 bg-gray-100 border-t border-t-gray-300 block lg:hidden w-[100%] h-[60px] ">
        <div className="subreponsive flex justify-around w-[100%] h-[60px] p-2">
          {footer.responsive?.map((item)=>{
            return <div className="w-[80px] hover:bg-gray-100  h-[25px] font-[yekan] text-center" key={item.id}>
             <a href="#" className="">
               <img className="w-[25px]  h-[25px] block object-fit mx-auto" src={item.image} alt="" />
              <h4 className="text-[12px] hover:bg-gray-100">{item.title}</h4>
             </a>
            </div>
          })}
        </div>
      </div>
    </>
  );
};

export default Footer;
