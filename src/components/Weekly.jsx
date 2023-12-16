import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer }
    from 'recharts';

// Custom shape for the bars with border radius
const CustomBar = (props) => {
  const { x, y, width, height, fill } = props;
  const borderRadius = 5; // You can adjust the border radius as needed

  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      rx={borderRadius}
      ry={borderRadius}
      fill={fill}
    />
  );
};

function Weekly({data2}) {
    return (
        <div className="btmlft1">
            <h3>Weekly Activity</h3>

            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={200}
                    height={100}
                    data={data2}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#f09c0c" shape={<CustomBar />} barSize={15} />
                    <Bar dataKey="uv" fill="#10b804" shape={<CustomBar />} barSize={15} />
                    {/* Adjust the barSize prop to set the width of the bars */}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Weekly;
