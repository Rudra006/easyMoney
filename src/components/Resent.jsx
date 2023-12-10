import React from "react";


function Resent(props){
    return(
        <div className="res-main">
           <div className="resinn">
           <div className="Ricon">{props.icon}</div> <div className="from"> <div className="for"> {props.from} </div> <div className="date">{props.date}</div>  </div> </div>
           
           <div className="money" style={{color:props.color}}>{props.money} </div>
         
          
        </div>
    );
}

export default Resent;