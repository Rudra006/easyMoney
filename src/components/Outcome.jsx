import React from "react";
import {  ResponsiveContainer, PieChart, Pie, Cell }
    from 'recharts';
import { piedata, COLORS, renderCustomizedLabel } from '../datas/Pichartdata';



function Outcome(){
    return(
        <div className="btminn btminn-second"><h3>Outcome category</h3>
        

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
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>


                </div>
    )
}

export default Outcome;