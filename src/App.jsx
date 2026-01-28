import './index.css'
import './App.css'
import NavBar from './components/layout/navbar/NavBar'
import Hero from './components/ui/hero/Hero'
import Grid from './components/ui/gridlayout/Grid'
import CarouselCards from './components/ui/carouselCards/CarouselCards'
import WhyFashion from './components/ui/whyFashion/whyFashion'
import Footer from './components/layout/Footer'
import MainI from './components/layout/main/MainI'
import PromotionBanner1 from './components/ui/Banners/PromotionBanner1'
import PromotionBanner2 from './components/ui/Banners/PromotionBanner2'
import Premium from './components/ui/Premium/Premium'
import Promo from './components/ui/promo/Promo'
import Customer from './components/ui/customer/Customer'
import Sub from './components/ui/subscription/Sub'
import QuickView from './components/ui/quickView/QuickView'
import Register from './pages/register/register'
import Login from './pages/login/login'


function App() {
  
  return (
    <>
      <NavBar />
      <MainI />
      <Hero />
      <QuickView />
      <Grid />
      <CarouselCards />
      <PromotionBanner1 />
      <Promo />
      <PromotionBanner2 />
      <Premium />
      <Customer />
      <WhyFashion />
      <Sub />
      <Footer />

    </>
  )
}

export default App
