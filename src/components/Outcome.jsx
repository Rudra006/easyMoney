import React from "react";
import {  ResponsiveContainer, PieChart, Pie, Cell }
    from 'recharts';
import { piedata, COLORS, renderCustomizedLabel } from '../datas/Pichartdata';



function Outcome(){
    return(
        <div className="btminn btminn-second"><h3>Outcome category</h3>
        
              <div className="pi">
                    <ResponsiveContainer width="90%" height="90%">
                        <PieChart width={400} height={400}>
                            <Pie
                                data={piedata}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {piedata.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} opacity={0.5}  />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    </div>
                    <h4>Legends</h4>
                    <div className="legendspi" >
                        <div className="colorpi"><div className="clr" style={{backgroundColor:"green" , opacity:0.5}}></div> <span className="nam" >Monthy need</span></div>
                        <div className="costpi">763</div>
                    </div>
                    <div className="legendspi">
                        <div className="colorpi"><div className="clr"style={{backgroundColor:"orange", opacity:0.5}}></div> <span className="nam">Groceries(11%)</span></div>
                        <div className="costpi">321</div>
                    </div>
                    <div className="legendspi">
                        <div className="colorpi"><div className="clr" style={{backgroundColor:"aqua", opacity:0.5}}></div> <span className="nam">Subscribing(22%)</span></div>
                        <div className="costpi">69</div>
                    </div>
                    <div className="legendspi">
                        <div className="colorpi"><div className="clr" style={{backgroundColor:"blue", opacity:0.5}} ></div> <span className="nam">Tax(15%)</span></div>
                        <div className="costpi">154</div>
                    </div>


                </div>
    )
}

export default Outcome;