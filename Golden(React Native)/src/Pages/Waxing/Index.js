import React from 'react'
import Header from '../../Components/Header'
import Scroll from '../../Components/Scroll'
import WaxingImage from './WaxingImage'
import Main from './Main'
import Footer from '../../Components/Footer'

export default function Waxing() {
  return (
    <>
      <Header name={"GOLDEN BEAUTY"} navigation={navigation}/>
      <Scroll />
      <WaxingImage />
      <Main />
      <Footer />
    </>
  )
}
