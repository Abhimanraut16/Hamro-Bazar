import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowCase from './CategoryShowCase'
import Register from './Register'
import Location from './Location'
import AboutUs from './AboutUs'
import Appsection from './Appsection'
import Sponsor from './Sponsor'

function Home() {
  return (
    <div>
      <Banner />
      <HomeCategory />
      <CategoryShowCase />
      <Register />
      <Location />
      <AboutUs />
      <Appsection/>
      <Sponsor/>

    </div>
  )
}

export default Home