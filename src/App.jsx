import React from "react";
import All from "./components/All";
import Articles from "./components/Articles";
import Main from "./components/Main";
import Sport from "./components/Sport";
import Slider from "./components/Slider";
import Swiper from "./components/Swiper";

function App() {
  return (
    <>
      <Main />
      <Swiper />
      <Sport />
      <Articles />
      <All />
      <Slider />
    </>
  );
}

export default App;
