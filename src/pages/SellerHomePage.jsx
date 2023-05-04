import SellerHome from "../components/SellerView/SellerHome";
import Footer from "../components/Footer"
import NavigationBarLogged from "../components/NavigationBarLogged";

const SellerHomePage = () => {
    return (
        <>
            <NavigationBarLogged />
            <SellerHome />
            <Footer />
        </>
    )
};

export default SellerHomePage;

