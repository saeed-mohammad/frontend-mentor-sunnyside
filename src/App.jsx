import React from "react";
import "./App.scss";
import Cards from "./component/Cards";
import Egg from "./component/Egg";
import Footer from "./component/Footer";
import Fruit from "./component/Fruit";
import ImageList from "./component/ImageList";
import Hero from "./page/Hero";

const App = () => {
  return (
    <div>
      <Hero />
      <Egg />
      <Fruit />
      <Cards />
      <ImageList />
      <Footer />
    </div>
  );
};

export default App;
