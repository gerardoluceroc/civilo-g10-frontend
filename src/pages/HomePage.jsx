import React from 'react'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import ImageSlider from '../components/ImageSlider'
import { OurProducts } from '../components/OurProducts/OurProducts'

export const HomePage = () => {
  return (
    <>
      <NavigationBar />
      <ImageSlider />
      <OurProducts />
      <Footer />

    </>
  )
}
