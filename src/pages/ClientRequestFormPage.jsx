import Footer from "../components/Footer"
import NavigationBarLogged from "../components/NavigationBarLogged";
import ClientRequest from "../components/ClientView/ClientRequest";
import NavbarResponsive from "../components/NavbarResponsive";

const ClientRequestFormPage = () => {
    return (
        <>
            <NavbarResponsive/>
            <ClientRequest />
            <Footer />
        </>
    )
};

export default ClientRequestFormPage;

