import React from "react";
import NavigationBarLogged from "../components/NavigationBarLogged";
import Footer from '../components/Footer'
import ReadRoles from "../components/AdministratorView/AdministrateRoles/ReadRoles";

const AdminReadRolesPage = () => {
  return (
    <>
      <NavigationBarLogged />
      <ReadRoles />
      <Footer />
    </>
  )
};

export default AdminReadRolesPage;