import React from 'react'
import { BsFillGearFill} from 'react-icons/bs'
 import { FaHome , FaWallet, FaFileInvoice , FaCreditCard,  FaDollarSign} from "react-icons/fa";
 import { GrTransaction } from "react-icons/gr";

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <div className="logo"><img src="https://yt3.googleusercontent.com/gdh7rAvpxhpHaZONePMncpaUKJgOAllPLRv3ZurNYKmW7ctY_hrxjNSrcAAFHTQEX71KF-keGQ=s900-c-k-c0x00ffffff-no-rj" alt="logo"  /></div>
               <span className='icn'> < FaDollarSign  className='icon_header'/> </span>Easy Money
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item active'>
                <a href="/">
                    <FaHome className='icon' />Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/">
                    <FaWallet className='icon'/> Balance
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/">
                    <FaFileInvoice className='icon' />Invoice
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/">
                    <FaCreditCard className='icon' /> Cards
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/">
                    <GrTransaction className='icon' /> Transactions
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar