import React from "react";
import NavigationBarLogged from "../components/NavigationBarLogged";
import Footer from '../components/Footer'
import ReadRequests from "../components/AdministratorView/AdministrateRequests/ReadRequests";

const AdminReadRequestsPage = () => {
  return (
    <>
      <NavigationBarLogged />
      <ReadRequests />
      <Footer />
    </>
  )
};

export default AdminReadRequestsPage;