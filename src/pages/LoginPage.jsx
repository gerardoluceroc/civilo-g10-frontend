import React from "react";
//import LoginForm from "../Components/LoginForm";
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import LoginForm from "../components/LoginForm";
import NavbarResponsive from "../components/NavbarResponsive";

const LoginPage = () => {
  return (
    <>
      <NavbarResponsive/>
      <LoginForm />;
      <Footer />;
    </>
  )
};

export default LoginPage;