import React from "react";
import {  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
    from 'recharts';
function Overview({data}){
    return(
        <div className="midd "><h3>Overview </h3>

        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={500}
                height={500}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" fill="#8c55fa" fillOpacity={0.3}/>
                <XAxis dataKey="name" />
                <YAxis width={30}
                />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
            </LineChart>
        </ResponsiveContainer>




    </div>
    )
}

export default Overview;