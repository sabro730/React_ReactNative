import React from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Scroll from '../../Components/Scroll'
import Main from './Main'
import RelaxImage from './RelaxImage'

export default function Relaxing() {
  return (
    <>
      <Header name={"GOLDEN BEAUTY"} navigation={navigation}/>
      <Scroll />
      <RelaxImage />
      <Main />
      <Footer />
    </>
  )
}
