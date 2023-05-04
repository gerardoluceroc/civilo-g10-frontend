import React from "react";
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import ExecutiveLoginForm from "../components/ExecutiveView/LoginExecutiveForm";

const ExecutiveLoginFormPage = () => {
  return (
    <>
      <NavigationBar />;
      <ExecutiveLoginForm />;
      <Footer />;
    </>
  )
};

export default ExecutiveLoginFormPage;