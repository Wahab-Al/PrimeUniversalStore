import React from 'react';
import Men from '../../../assets/img/mubariz-mehdizadeh-t3zrEm88ehc-unsplash.jpg'
import './categroies.css'

export default function Categories () {
    return (
        <>
            <div className="categories mt-4 d-flex justify-content-around align-items-center">
                <img src={Men} width={60} height={60}  alt="" className='border-bottom shadow border-1 border-info rounded-circle'/>
                <img src={Men} width={60} height={60}  alt="" className='border-bottom shadow border-1 border-info rounded-circle'/>
                <img src={Men} width={60} height={60}  alt="" className='border-bottom shadow border-1 border-info rounded-circle'/>
                <img src={Men} width={60} height={60}  alt="" className='border-bottom shadow border-1 border-info rounded-circle'/>
            </div>
        </>
    );
};

