import React, { useState } from "react";
import "./Home.css";
import Header from "../../Header/Header";
import ExploreMenu from "../../ExploreMenu/ExploreMenu";
import FoodDisplay from "../../FoodDisplay/FoodDisplay";
import ContactUs from "../../ContactUs/ContactUs";
import Landing from "../../Landing/Landing";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Landing />
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <ContactUs/>
    </div>
  );
};

export default Home;
