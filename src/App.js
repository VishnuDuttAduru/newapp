import React, { useContext } from 'react'
import Intro from './components/intro/Intro'
import About from './components/intro/about/About'
import ProductList from './components/productList/ProductList'
import Contact from './components/contact/Contact'
import Toggle from './components/toggle/Toggle'
import { themeContext } from './context'

const App = () => {
  const {state} = useContext(themeContext);
  const darkMode = state?.darkMode;
  return (
    <div style={{
      backgroundColor: darkMode ? "#222" : "white", 
      color: darkMode && "white"
    }}>
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  )
}

export default App
