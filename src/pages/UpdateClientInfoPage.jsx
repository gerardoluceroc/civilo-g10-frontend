import Footer from "../components/Footer"
import NavbarResponsive from "../components/NavbarResponsive";
import { UpdateClientInfo } from "../components/ClientView/UpdateClientInfo";

const UpdateClientInfoPage = () => {
    return (
        <>
            <NavbarResponsive/>
            <UpdateClientInfo />
            <Footer />
        </>
    )
};

export default UpdateClientInfoPage;

