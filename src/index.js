import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";
// import Login from "./components/Login";
import Question from "./components/Question";
import AddPoll from "./components/AddPoll";
import LeaderBoard from "./components/LeaderBoard";

const store = createStore(reducer, middleware);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/questions/:id" element={<Question />}></Route>
        <Route path="/add" element={<AddPoll />}></Route>
        <Route path="/leaderboard" element={<LeaderBoard />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
  // <BrowserRouter>
  //   <Routes>
  //     <Route
  //       path="/"
  //       element={
  //         <Provider store={store}>
  //           <App />
  //         </Provider>
  //       }
  //     />
  //     <Route path="/login" element={<Login />} />
  //   </Routes>
  // </BrowserRouter>
);
