import styled from "styled-components";
import Footer from "../components/Footer"
import NavbarResponsive from "../components/NavbarResponsive";
import RequestManagementUI from "../components/RequestManegementUI";

const Div = styled.div`
      max-height: 100vh; /* Establece un tamaño máximo para la tabla */
`;

const RequestManagementPage = () => {
    return (
        <>
            <NavbarResponsive/>
            <RequestManagementUI/>
            <Footer />
        </>
    )
};

export default RequestManagementPage;