import ClientHome from "../components/ClientView/ClientHome"
import Footer from "../components/Footer"
import NavbarResponsive from "../components/NavbarResponsive";
import NavigationBarLogged from "../components/NavigationBarLogged";

const ClientHomePage = () => {
    return (
        <>
            <NavigationBarLogged />
            <NavbarResponsive/>
            <ClientHome />
            <Footer />
        </>
    )
};

export default ClientHomePage;

