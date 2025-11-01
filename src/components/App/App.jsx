import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "../Redux/store";
import LoginForm from "../../pages/Login";
import Home from "../../pages/Home";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter
        basename="/digikalaReact"
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
