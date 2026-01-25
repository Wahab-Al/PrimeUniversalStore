import './index.css'
import './App.css'
import NavBar from './components/layout/navbar/NavBar'
import Hero from './components/ui/hero/Hero'
import Grid from './components/ui/gridlayout/Grid'
import CarouselCards from './components/ui/carouselCards/CarouselCards'
import WhyFashion from './components/ui/whyFashion/whyFashion'
import Footer from './components/layout/Footer'
import MainI from './components/layout/main/MainI'


// TODO: [URGENT]: SIMULATE FETCHING API :  setTimeout(() => setItems(products), 500) ([URGENT], [HIGH], [LOW], [PRIORITY])

function App() {
  
  return (
    <>
      <NavBar />
      <MainI />
      <Hero />
      <Grid />
      <CarouselCards />
      <WhyFashion />
      <Footer />
    </>
  )
}

export default App
