import React from "react";
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import AdminLoginForm from "../components/AdministratorView/LoginAdminForm";

const AdminLoginFormPage = () => {
  return (
    <>
      <NavigationBar />;
      <AdminLoginForm />;
      <Footer />;
    </>
  )
};

export default AdminLoginFormPage;