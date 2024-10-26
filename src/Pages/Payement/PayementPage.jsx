import React, { useState, useEffect } from "react";
import PricingComponent from "../../Components/Pricing/PricingComponent";
import Layout from "../../Layout/Layout";

const PayementPage = () => {
  

  return (
    <Layout page = {true}>
      <PricingComponent/>
    </Layout>
  );
};

export default PayementPage;
