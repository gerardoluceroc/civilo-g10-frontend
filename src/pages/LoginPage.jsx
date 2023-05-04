import React from "react";
//import LoginForm from "../Components/LoginForm";
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <>
      <NavigationBar />;
      <LoginForm />;
      <Footer />;
    </>
  )
};

export default LoginPage;