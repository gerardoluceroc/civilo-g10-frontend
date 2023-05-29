import React from 'react'
import NavbarResponsive from '../components/NavbarResponsive'
import Footer from '../components/Footer'
import { ClienList } from '../components/ClientList'

export const UsersListPage = () => {
  return (
    <>
        <NavbarResponsive/>
        <ClienList/>
        <Footer/>
    </>
  )
}
