import { Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import { ClientRequestPage } from "./pages/ClientRequestPage";
import {RegisterPage } from "./pages/Register";
//import LoginPage from "./Pages/LoginPage";
import LoginPage from "./pages/LoginPage";
import ClientHomePage from "./pages/ClientHomePage";
import ClientRequestFormPage from "./pages/ClientRequestFormPage";



function App() {
  return (

    <>

    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/client/request" element={<ClientRequestPage/>}/>
      <Route path="/register" element={<RegisterPage/>} />

      <Route path="/request" element={<ClientRequestFormPage />} />
      <Route path="/client" element={<ClientHomePage/>} />
      <Route path="/login" element={<LoginPage/>} />
    </Routes>


  
    
    </>

  );
}

export default App;
