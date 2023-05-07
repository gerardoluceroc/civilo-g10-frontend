import React from "react";
import NavigationBarLogged from "../components/NavigationBarLogged";
import Footer from '../components/Footer'
import ReadCurtains from "../components/AdministratorView/AdministrateCurtains/ReadCurtains";

const AdminReadCurtainsPage = () => {
  return (
    <>
      <NavigationBarLogged />;
      <ReadCurtains />;
      <Footer />;
    </>
  )
};

export default AdminReadCurtainsPage;