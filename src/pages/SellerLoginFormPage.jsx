import React from "react";
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import SellerLoginForm from "../components/SellerView/LoginSellerForm";

const SellerLoginFormPage = () => {
  return (
    <>
      <NavigationBar />;
      <SellerLoginForm />;
      <Footer />;
    </>
  )
};

export default SellerLoginFormPage;