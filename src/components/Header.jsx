import React from "react";
import {
  BsFillBellFill,
  BsSearch,
  BsJustify,
} from "react-icons/bs";

function Header({ OpenSidebar }) {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
        <h3>Dashboard</h3>
      </div>
      <div className="header-right">
        <div className="search-bar">
          <div className="searchinp">
            <BsSearch className="icon" />{" "}
            <input type="text" placeholder="Search for something..." />
          </div>

          <BsFillBellFill className="icon" />
          {/* <BsPersonCircle className="icon" /> */}
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc9w4Q2_5f1MPMOkMVFKAGpQKiAd1FDXEmAA&usqp=CAU" alt="profile" className="profile" />
        </div>
      </div>
    </header>
  );
}

export default Header;
