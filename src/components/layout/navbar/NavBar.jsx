import React from 'react'
import './navbar.css'
import userId from '../../../assets/img/userid.svg'
import cart from '../../../assets/img/shopping-cart.svg'
import logo from '../../../assets/img/Logo.png'
import { NavLink } from 'react-bootstrap'




export default function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-transparent rounded rounded-4 mt-3 shadow opacity-75">
                <div className="container d-flex justify-content-between align-items-center">
                    <NavLink><img src={userId} width={30} height={30} alt="user-id" className='shadow rounded-circle'/></NavLink>
                    <NavLink className="navbar-brand" ><div className="logoContainer shadow rounded-circle">
                        <img loading='lazy' src={logo} width={67} height={67} alt="logo" className='rounded-circle bg-light-subtle text-light' /></div></NavLink>
                    <NavLink><img className='cart-icon shadow rounded-circle' src={cart} width={30} height={30} alt="cart-icon"/></NavLink>
                </div>
            </nav>
        </>
    )
}