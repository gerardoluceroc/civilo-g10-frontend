import ClientHome from "../components/ClientView/ClientHome"
import Footer from "../components/Footer"
import NavigationBarLogged from "../components/NavigationBarLogged";

const ClientHomePage = () => {
    return (
        <>
            <NavigationBarLogged />
            <ClientHome />
            <Footer />
        </>
    )
};

export default ClientHomePage;

