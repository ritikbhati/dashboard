import React from 'react'
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify }
    from 'react-icons/bs'

function Header({ OpenSidebar }) {
    return (
        <header className='header'>
            <div className='menu-icon'>
                <BsJustify className='icon' onClick={OpenSidebar} />
            </div>
            <div className='header-left'>
                <h3 className='main-title'><BsPersonCircle className='icon' /> Hello Ritik </h3>


            </div>

            <div className='header-right'>
                <BsFillBellFill className='icon' />
                <BsFillEnvelopeFill className='icon' />
                <BsSearch className='icon' />

            </div>
        </header>
    )
}

export default Header