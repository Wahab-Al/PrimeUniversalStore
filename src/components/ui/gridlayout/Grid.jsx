import React from 'react'
import './grid.css'
import Lap from '../../../assets/img/most-bought/lap-most-bought-grid.jpg'
import Boots from '../../../assets/img/most-bought/boots.jpg'
import Playstation from '../../../assets/img/most-bought/playstation.jpg'
import Kitchen from '../../../assets/img/most-bought/kitchen.jpg'
import Drone from '../../../assets/img/most-bought/drone.jpg'

function Grid() {
    return (
        <>
            <div className="container-fluid d-none d-md-block bg-body-tertiary rounded rounded-5 p-3 mt-3 mt-md-5">

                <div className="container-fluid container-md most-bought m-auto mt-2 mt-md-4">
                    <div className="title bg-body-secondary border-1 border-bottom border-end border-secondary rounded rounded-3 m-1 pe-1 pt-2 shadow text-center"><h4 className='mt-4 fs-5 fs-md-4'>FLAT <span className='title-span'>45% DISCOUNT</span> ON ALL THESE BRANDS</h4></div>
                    <div className="first-most-bought border-1 border-bottom border-end border-secondary rounded rounded-3 m-1 pe-1 pb-1 shadow"><img className='w-100 h-100 rounded-1' src={Drone} alt="" /></div>
                    <div className="second-most-bought border-1 border-bottom border-end border-secondary rounded rounded-3 m-1 pe-1 pb-1 shadow"><img className='w-100 h-100 rounded-1' src={Playstation} alt="" /></div>
                    <div className="third-most-bought border-1 border-bottom border-end border-secondary rounded rounded-3 m-1 pe-1 pb-1 shadow"><img className='w-100 h-100 rounded-1' src={Boots} alt="" /></div>
                    <div className="fourth-most-bought border-1 border-bottom border-end border-secondary rounded rounded-3 m-1 pe-1 pb-1 overflow-hidden shadow ps-1"><img className='w-100 h-100 rounded-1' src={Lap} alt="" /></div>
                    <div className="fifth-most-bought border-1 border-bottom border-end border-secondary rounded rounded-3 m-1 pe-1 pb-1 shadow"><img className='w-100 h-100 rounded-1' src={Kitchen} alt="" /></div>
                </div>
            </div>
        </>
    )
}

export default Grid
