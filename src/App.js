import { Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import { ClientRequestPage } from "./pages/ClientRequestPage";
import {RegisterPage } from "./pages/Register";
//import LoginPage from "./Pages/LoginPage";
import LoginPage from "./pages/LoginPage";
import ClientHomePage from "./pages/ClientHomePage";
import ClientRequestFormPage from "./pages/ClientRequestFormPage";
import SellerLoginFormPage from "./pages/SellerLoginFormPage";
import SellerHomePage from "./pages/SellerHomePage";
import SellerMyRequestsPage from "./pages/SellerMyRequestsPage";



function App() {
  return (

    <>

    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/client/request" element={<ClientRequestPage/>}/>
      <Route path="/register" element={<RegisterPage/>} />

      <Route path="/seller/assignnedRequest" element={<SellerMyRequestsPage />} />
      <Route path="/request" element={<ClientRequestFormPage />} />
      <Route path="/client" element={<ClientHomePage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/loginSeller" element={<SellerLoginFormPage/>} />
      <Route path="/seller" element={<SellerHomePage />} />
    </Routes>


  
    
    </>

  );
}

export default App;
