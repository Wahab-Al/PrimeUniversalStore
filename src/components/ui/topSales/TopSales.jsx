import React from 'react'
import Men from '../../../assets/img/mubariz-mehdizadeh-t3zrEm88ehc-unsplash.jpg'
import './topSales.css'

export default function TopSales() {
    return (
        <> 
            <div className="container bg-transparent top-sales rounded-5 mt-4 mb-4 m-auto d-md-flex justify-content-between align-items-center sale p-3" id='sale'>
                <div className="sale border-start border-top border-warning rounded-bottom-5 w-100 w-md-75 p-5 shadow me-1 text-light bg-dark">
                    <h2 className='text-center '>Sales <span className='text-warning'>90%</span></h2>
                </div>
                <div className="rest-categories w-md-25 ms-1 p-5  ">
                    <div className="rest1 d-flex m-2 ">
                        <img src={Men} width={70} height={70}  alt="" className='border-end shadow border-1 border-warning rounded-circle m-auto m-md-3 '/>
                        <img src={Men} width={70} height={70}  alt="" className='border-end shadow border-1 border-warning rounded-circle m-auto m-md-3 '/>
                    </div>
                    <div className="rest2 d-flex m-2">
                        <img src={Men} width={70} height={70}  alt="" className='border-end shadow border-1 border-warning rounded-circle m-auto m-md-3 '/>
                        <img src={Men} width={70} height={70}  alt="" className='border-end shadow border-1 border-warning rounded-circle m-auto m-md-3 '/>
                    </div>
                </div>
            </div>
        </>
    )
}
// bg-body-tertiary