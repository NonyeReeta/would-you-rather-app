import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";
import Login from "./components/Login";

const store = createStore(reducer, middleware);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </Provider>
  // <BrowserRouter>
  //   <Routes>
  //     <Route
  //       path="/login"
  //       element={
  //         <Provider store={store}>
  //           <Login />
  //         </Provider>
  //       }
  //     />
  //     <Route path="/" element={<App />} />
  //   </Routes>
  // </BrowserRouter>
);
