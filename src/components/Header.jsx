import React from 'react'
import 
 {BsFillBellFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <h3>DASHBOARD</h3>
        </div>
        <div className='header-right'>
        <div className="search-bar">
          <div className="searchinp">
        <BsSearch  className='icon'/> <input type="text" placeholder="Search for something..." />
        </div>
       

        <BsFillBellFill className='icon'/>
            <BsPersonCircle className='icon'/>
        
      </div>

        </div>
    </header>
  )
}

export default Header