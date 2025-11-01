import { combineReducers } from "redux";
import ReducerTopmenu from "./Topmenu/ReducerTopmenu";
import ReducerCentermenu from "./Centermenu/ReducerCentermenu";
import ReducerBottommenu from "./Bottommenu/ReducerBottommenu";
import ReducerStory from "./Story/ReducerStory";
import ReducerSlider from "./Slider/ReducerSlider";
import ReducerDigitype from "./Digitype/ReducerDigitype";
import ReducerAmazing from "./Amazing/ReducerAmazing";
import ReducerFourpics from "./Fourpics/ReducerFourpics";
import ReducerSooperamazing from "./Sooperamazing/ReducerSooperamazing";
import ReducerFourpics2 from "./Fourpics2/ReducerFourpics2";
import ReducerClassifyshop from "./Classifyshop/ReducerClassifyshop";
import ReducerTwopics from "./Twopics/ReducerTwopics";
import ReducerFavoritebrand from "./Favoritebrand/ReducerFavoritebrand";
import ReducerTwopics2 from "./Twopics2/ReducerTwopics2";
import ReducerFoursection from "./Foursection/ReducerFoursection";
import ReducerHotsale from "./Hotsale/ReducerHotsale";
import ReducerFoursection2 from "./Foursection2/ReducerFoursection2";
import ReducerMontakhab from "./Montakhab/ReducerMontakhab";
import ReducerHotsale2 from "./Hotsale2/ReducerHtsale2";
import ReducerKhandaniha from "./khandaniha/ReducerKhandaniha";
import ReducerFooter from "./Footer/ReducerFooter";
import ReducerDigichild from "./Digichild/ReducerDigichild";
import ReducerLabelsooper from "./Labelsooper/ReducerLabelsooper";
import ReducerPoshtibani from "./Poshtibani/ReducerPoshtibani";
import ReducerLogin from "./Login/ReducerLogin";
import ReducerCart from "./Cart/ReducerCart";

const rootreducer = combineReducers({
  topmenu: ReducerTopmenu,
  centermenu: ReducerCentermenu,
  bottommenu: ReducerBottommenu,
  story: ReducerStory,
  slider: ReducerSlider,
  digitype: ReducerDigitype,
  amazing: ReducerAmazing,
  fourpics: ReducerFourpics,
  sooperamazing: ReducerSooperamazing,
  fourpics2: ReducerFourpics2,
  classifyshop: ReducerClassifyshop,
  twopics: ReducerTwopics,
  favoritebrand: ReducerFavoritebrand,
  twopics2: ReducerTwopics2,
  foursection: ReducerFoursection,
  hotsale: ReducerHotsale,
  foursection2: ReducerFoursection2,
  montakhab: ReducerMontakhab,
  hotsale2: ReducerHotsale2,
  khandaniha: ReducerKhandaniha,
  footer: ReducerFooter,
  digichild: ReducerDigichild,
  labelsooper: ReducerLabelsooper,
  poshtibani: ReducerPoshtibani,
  login: ReducerLogin,
  cart: ReducerCart,
});
export default rootreducer;
