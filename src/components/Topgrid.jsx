import React from "react";

function Topgrid({ icon, heading, cost, arrow, monthly }) {
    return (
        <div className='card'>
            <div className='card-inner'> <div className="card-i-i">
                <div className="icn"> {icon}</div>
                <div className="mm"> <h4>{heading}</h4>
                    <h3>{cost}</h3> </div> </div>
                <p>{arrow}{monthly} this month</p>
            </div>

        </div>
    )
}
export default Topgrid;