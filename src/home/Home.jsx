import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowCase from './CategoryShowCase'
import Register from './Register'
import LocationSprade from './LocationSprade'
import AboutUs from './AboutUs'
import AppSection from './AppSection'

const Home = () => {
  return (
    <div>
      <Banner/>
      <HomeCategory/>
      <CategoryShowCase/>
      <Register/>
      <LocationSprade/>
      <AboutUs/>
      <AppSection/>
    </div>
  )
}

export default Home