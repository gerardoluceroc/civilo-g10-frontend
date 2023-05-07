import React from "react";
import NavigationBarLogged from "../components/NavigationBarLogged";
import Footer from '../components/Footer'
import AdminHome from "../components/AdministratorView/AdminHome";

const AdminHomePage = () => {
  return (
    <>
      <NavigationBarLogged />;
      <AdminHome />;
      <Footer />;
    </>
  )
};

export default AdminHomePage;