import ExecutiveAssignmentUI from "../components/ExecutiveAssignmentUI";
import ExecutiveAssignment from "../components/ExecutiveView/ExecutiveAssignment";
import Footer from "../components/Footer"
import NavbarResponsive from "../components/NavbarResponsive";
import NavigationBarLogged from "../components/Papelera/NavigationBarLogged";

const ExecutiveAssignmentPage = () => {
    return (
        <>
            <NavbarResponsive/>
            <ExecutiveAssignment />
            <ExecutiveAssignmentUI/>
            <Footer />
        </>
    )
};

export default ExecutiveAssignmentPage;

