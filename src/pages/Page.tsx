import React from "react";
import PagesList from "../components/PagesList";
import PromotionAD from "../components/PromotionAD";
import Footer from "../components/Footer";

const Page = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-8">
          <PagesList />
        </div>
        <div className="col-3">
          <PromotionAD />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Page;
