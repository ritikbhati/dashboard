import React from 'react'
import {
    BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
    BsListCheck, BsMenuButtonWideFill, BsFillGearFill
}
    from 'react-icons/bs'

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>

                    <BsGrid1X2Fill className='icon' /> Dashboard
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <a >
                        <BsCart3 className='icon_header' /> SHOP
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a >
                        <BsFillArchiveFill className='icon' /> Products
                    </a>
                </li>
                {/* <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillGrid3X3GapFill className='icon' /> Categories
                    </a>
                </li> */}
                <li className='sidebar-list-item'>
                    <a >
                        <BsPeopleFill className='icon' /> Customers
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a >
                        <BsListCheck className='icon' /> Inventory
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a >
                        <BsMenuButtonWideFill className='icon' /> Reports
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a >
                        <BsFillGearFill className='icon' /> Settings
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar