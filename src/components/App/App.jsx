import React from "react";
import { Provider } from "react-redux";
import store from "../Redux/store";
import Topmenu from "../Header/topmenu";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Topmenu />
      </Provider>
    </>
  );
};

export default App;
