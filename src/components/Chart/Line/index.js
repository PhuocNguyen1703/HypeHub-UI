import React from 'react';
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

function Linechart() {
    const data = [
        {
            name: 'Jan',
            uv: 1130,
            pv: 1360,
        },
        {
            name: 'Feb',
            uv: 1570,
            pv: 1320,
        },
        {
            name: 'Mar',
            uv: 2450,
            pv: 1690,
        },
        {
            name: 'Apr',
            uv: 2760,
            pv: 2350,
        },
        {
            name: 'May',
            uv: 1890,
            pv: 2180,
        },
        {
            name: 'Jun',
            uv: 976,
            pv: 1470,
        },
        {
            name: 'Jul',
            uv: 1347,
            pv: 1580,
        },
        {
            name: 'Aug',
            uv: 2670,
            pv: 1890,
        },
        {
            name: 'Sep',
            uv: 3490,
            pv: 2840,
        },
        {
            name: 'Oct',
            uv: 2372,
            pv: 1670,
        },
        {
            name: 'Nov',
            uv: 2270,
            pv: 1690,
        },
        {
            name: 'Dec',
            uv: 2560,
            pv: 2190,
        },
    ];
    return (
        <ResponsiveContainer height={400}>
            <LineChart
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default Linechart;
