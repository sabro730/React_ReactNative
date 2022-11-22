import React from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import HeroImage from './HeroImage'
import Main from './Main'
import Scroll from '../../Components/Scroll'

export default function Home() {

  return (
    <div>
      <Header name={"GOLDEN BEAUTY"}/>
      <Scroll />
      <HeroImage />
      <Main />
      <Footer />
    </div>
  )
}
