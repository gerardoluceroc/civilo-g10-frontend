import React from "react";
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import ExecutiveLoginForm from "../components/ExecutiveView/LoginExecutiveForm";
import NavbarResponsive from "../components/NavbarResponsive";

const ExecutiveLoginFormPage = () => {
  return (
    <>
      <NavbarResponsive/>
      <ExecutiveLoginForm />;
      <Footer />;
    </>
  )
};

export default ExecutiveLoginFormPage;