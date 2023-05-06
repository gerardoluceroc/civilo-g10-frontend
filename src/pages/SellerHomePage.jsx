import SellerHome from "../components/SellerView/SellerHome";
import Footer from "../components/Footer"
import NavigationBarLogged from "../components/NavigationBarLogged";
import NavbarResponsive from "../components/NavbarResponsive";

const SellerHomePage = () => {
    return (
        <>
            <NavigationBarLogged />
            <NavbarResponsive/>
            <SellerHome />
            <Footer />
        </>
    )
};

export default SellerHomePage;

