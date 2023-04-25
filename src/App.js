import { Route, Routes } from "react-router";
import { Header } from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import { HomePage } from "./pages/HomePage";





function App() {
  return (

    <>

    <Routes>
      <Route path="/" element={<HomePage/>} />
    </Routes>


  
    
    </>

  );
}

export default App;
