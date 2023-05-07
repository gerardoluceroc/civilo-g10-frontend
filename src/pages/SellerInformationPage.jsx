import React from "react";
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import SellerInformation from "../components/SellerView/SellerInformation";
import NavbarResponsive from "../components/NavbarResponsive";

const SellerInformationPage = () => {
  return (
    <>
      <NavbarResponsive/>
      <SellerInformation />
      <Footer />
    </>
  )
};

export default SellerInformationPage;