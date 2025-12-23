import React from 'react'
import './carousel.css'
import Iphone from '../../../assets/img/products/iphone.webp'
import Laptop from '../../../assets/img/products/laptop.webp'
import Break from '../../../assets/img/products/break.webp'
import Pullover from '../../../assets/img/products/pullover.webp'
import Lamp from '../../../assets/img/products/lamp.webp'
import Sneaker from '../../../assets/img/products/sneaker.webp'
import Lego from '../../../assets/img/products/lego.webp'


export default function Carousel() {
    return (
        <>
            <div className="container">
                <h2 className='text-center'>SHOP WITH <span className='text-warning'>US</span></h2>
                <div className="wrapper">
                    <div className="carousel-card item1"><img className='object-fit-contain mt-1' src={Iphone} alt="" /></div>
                    <div className="carousel-card item2"><img className='object-fit-contain mt-1' src={Laptop} alt="" /></div>
                    <div className="carousel-card item3"><img className='object-fit-contain mt-1' src={Break} alt="" /></div>
                    <div className="carousel-card item4"><img className='object-fit-contain mt-1' src={Pullover} alt="" /></div>
                    <div className="carousel-card item5"><img className='object-fit-contain mt-1' src={Lamp} alt="" /></div>
                    <div className="carousel-card item6"><img className='object-fit-contain mt-1' src={Sneaker} alt="" /></div>
                    <div className="carousel-card item7"><img className='object-fit-contain mt-1' src={Lego} alt="" /></div>
                </div>
            </div>
        </>
    )
}


