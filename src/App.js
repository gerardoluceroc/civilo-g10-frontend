import { Route, Routes } from "react-router";
import { Header } from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import { HomePage } from "./pages/HomePage";
import { ClientRequestPage } from "./pages/ClientRequestPage";
import {RegisterPage } from "./pages/Register";
//import LoginPage from "./Pages/LoginPage";
import LoginPage from "./pages/LoginPage";



function App() {
  return (

    <>

    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/client/request" element={<ClientRequestPage/>}/>
      <Route path="/register" element={<RegisterPage/>} />

      
      <Route path="/login" element={<LoginPage/>} />
    </Routes>


  
    
    </>

  );
}

export default App;
