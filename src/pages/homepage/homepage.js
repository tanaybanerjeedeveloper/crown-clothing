import React from 'react'
//importing components
import Directory from '../../components/directory/directory.js'
import { HomePageContainer } from './homepage.styles' //styled-component

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  )
}

export default HomePage
