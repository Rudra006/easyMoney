import React from "react";


function Invoice (props) {
 

    return(
        <div className="inv-main">
           
         <div className="inv"> <div className="inv-inn"> <div className="iconn">{props.icon}</div> <div className="name">{props.name} <div className="time">{props.time} ago</div></div> </div>  </div> <div className="bal">{props.rs} </div>
         
          
        </div>
    );
}

export default Invoice;