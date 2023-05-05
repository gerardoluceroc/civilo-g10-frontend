import React from "react";
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import SellerInformation from "../components/SellerView/SellerInformation";

const SellerInformationPage = () => {
  return (
    <>
      <NavigationBar />;
      <SellerInformation />;
      <Footer />;
    </>
  )
};

export default SellerInformationPage;