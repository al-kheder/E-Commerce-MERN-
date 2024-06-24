import React from "react";
import { Hero } from "../components/Hero/Hero";
import { Pobular } from "../components/Pobular/Pobular";
import { Offer } from "../components/Offer/Offer";
import { NewCollections } from "../components/NewCollection/NewCollections";
import { Footer } from "../components/Footer/Footer";
import Newsletter from "../components/Newsletter/Newsletter";
export const Shop = () => {
  return (
    <div>
      <Hero />
      <Pobular />
      <Offer />
      <NewCollections />
      <Newsletter />
      <Footer />
    </div>
  );
};
