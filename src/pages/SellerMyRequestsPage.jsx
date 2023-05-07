import SellerMyRequests from "../components/SellerView/SellerMyRequests"; 
import Footer from "../components/Footer"
import NavigationBarLogged from "../components/NavigationBarLogged";
import NavbarResponsive from "../components/NavbarResponsive";

const SellerMyRequestsPage = () => {
    return (
        <>
            <NavbarResponsive/>
            <SellerMyRequests />
            <Footer />
        </>
    )
};

export default SellerMyRequestsPage;

