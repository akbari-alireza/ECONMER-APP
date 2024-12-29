import React from 'react'
import Hero from '../components/Hero'
import Latestcollection from '../components/Latestcollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import { NewsLetterBox } from '../components/NewsLetterBox'

function Home() {
  return (
    <div>
      <Hero/>
      <Latestcollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsLetterBox/>
    </div>
  )
}

export default Home