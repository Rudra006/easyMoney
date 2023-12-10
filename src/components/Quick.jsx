import React from "react";
import Quick from "../datas/QuickTransfer";
import { IoIosSend } from "react-icons/io";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

function Quickt() {
    return (<div className="qck">
        <div className="quick1">
            {Quick.map((emp, index) => {
                // key= index
                return (
                    <div key={index} className="quickinn">
                        <div className="img"><img src={emp.url} alt="emp" /></div>
                        <div className="Qname">{emp.name}</div>
                        <div className="deg">{emp.deg}</div>

                    </div>)
            })}
              <MdOutlineKeyboardDoubleArrowRight className="more" />

        </div>
        <div className="Send"><span className="sendin">Amount</span> <input type="text" placeholder="525.50" /> <button className="btn">Send <IoIosSend /> </button> </div>
    </div>
    )
}

export default Quickt;