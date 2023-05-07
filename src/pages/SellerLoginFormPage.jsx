import React from "react";
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import SellerLoginForm from "../components/SellerView/LoginSellerForm";
import NavbarResponsive from "../components/NavbarResponsive";

const SellerLoginFormPage = () => {
  return (
    <>
      <NavbarResponsive/>
      <SellerLoginForm />;
      <Footer />;
    </>
  )
};

export default SellerLoginFormPage;