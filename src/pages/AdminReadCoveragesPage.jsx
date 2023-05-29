import React from "react";
import NavigationBarLogged from "../components/Papelera/NavigationBarLogged";
import Footer from '../components/Footer'
import ReadCoverages from "../components/AdministratorView/AdministrateCoverages/ReadCoverages";

const AdminReadCoveragesPage = () => {
  return (
    <>
      <NavigationBarLogged />
      <ReadCoverages />
      <Footer />
    </>
  )
};

export default AdminReadCoveragesPage;