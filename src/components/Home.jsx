import React from "react";

import NavBar from "./NavBar";
import Welcome from "./Welcome";
import ChooseUs from "./ChooseUs";
import Testimonis from "./Testimonis";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Welcome />
      <ChooseUs />
      <Testimonis />
      <Footer />
    </>
  );
}
