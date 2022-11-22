import React from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Scroll from '../../Components/Scroll'
import ErrorMain from './ErrorMain'

export default function PageNotFound() {
  return (
    <>
      <Header name={"GOLDEN BEAUTY"}/>
      <Scroll />
      <ErrorMain />
      <Footer />
    </>
  )
}
