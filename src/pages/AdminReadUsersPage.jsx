import React from "react";
import NavigationBarLogged from "../components/NavigationBarLogged";
import Footer from '../components/Footer'
import ReadUsers from "../components/AdministratorView/AdministrateUsers/ReadUsers";

const AdminReadUsersPage = () => {
  return (
    <>
      <NavigationBarLogged />;
      <ReadUsers />;
      <Footer />;
    </>
  )
};

export default AdminReadUsersPage;