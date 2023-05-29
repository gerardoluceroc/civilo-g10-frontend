import React from "react";
import NavigationBarLogged from "../components/Papelera/NavigationBarLogged";
import Footer from '../components/Footer'
import ReadStatus from "../components/AdministratorView/AdministrateStatus/ReadStatus";

const AdminReadStatusPage = () => {
  return (
    <>
      <NavigationBarLogged />
      <ReadStatus />
      <Footer />
    </>
  )
};

export default AdminReadStatusPage;