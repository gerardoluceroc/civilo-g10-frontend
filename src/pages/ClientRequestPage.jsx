import { ClientRequestList } from "../components/ClientView/ClientRequestList"
import Footer from "../components/Footer"
import NavbarResponsive from "../components/NavbarResponsive"
import NavigationBar from "../components/NavigationBar"

export const ClientRequestPage = () => {
  return (
    <>
    <NavbarResponsive>
    <ClientRequestList/>
    <Footer/>

    </NavbarResponsive>

    </>
  )
}
