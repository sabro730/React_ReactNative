import React from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Scroll from '../../Components/Scroll'
import Main from './Main'
import NailsImage from './NailsImage'

export default function Nails() {
  return (
    <div>
      <Header name={"GOLDEN DAY"} navigation={navigation}/>
      <Scroll />
      <NailsImage />
      <Main />
      <Footer />
    </div>
  )
}
