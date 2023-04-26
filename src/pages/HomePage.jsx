import React from 'react'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import ImageSlider from '../components/ImageSlider'
import styled from 'styled-components'
import { OurProducts } from '../components/OurProducts/OurProducts'


export const HomePage = () => {
  return (
    <>
        <NavigationBar/>
        <div>

          <ImageSlider/>

        </div>

        <OurProducts/>
        <Footer/>
  
    
    </>
  )
}
