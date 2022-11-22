import React from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import HeroImage from './HeroImage'
import Main from './Main'
import Scroll from '../../Components/Scroll'
import { View, Button } from 'react-native'

export default function Home({navigation}) {

  return (
    <View>
      <Header name={"GOLDEN BEAUTY"} navigation={navigation}/>
      <Scroll />
      <HeroImage />
      <Main navigation={navigation}/>
      <Footer />
    </View>
  )
}
