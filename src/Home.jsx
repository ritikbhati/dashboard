import React from 'react'
// import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill }
//     from 'react-icons/bs'

import { Text, PieChart, Pie, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer }
    from 'recharts';
import { FcCurrencyExchange, FcList, FcDebt, FcSalesPerformance } from "react-icons/fc";

function Home() {
    const data1 = [
        {
            name: 'Jan',
            Earning: 4000
        },
        {
            name: 'Feb',
            Earning: 3000
        },
        {
            name: 'Mar',
            Earning: 2000
        },
        {
            name: 'Apr',
            Earning: 2780
        },
        {
            name: 'May',
            Earning: 1890
        },
        {
            name: 'Jun',
            Earning: 2390
        },
        {
            name: 'Jul',
            Earning: 3490
        },
        {
            name: 'Aug',
            Earning: 7490
        },
        {
            name: 'Sep',
            Earning: 3990
        },
        {
            name: 'Oct',
            Earning: 2490
        },
        {
            name: 'Nov',
            Earning: 2500
        },
        {
            name: 'Dec',
            Earning: 2000
        }
    ];

    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


    return (
        <main className='main-container'>
            {/* <div className='main-title'>
                <h3>DASHBOARD</h3>
            </div> */}

            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Earning</h3>
                        <FcCurrencyExchange className='card_icon' />
                    </div>
                    <h1>$198k</h1>
                    <p><b style={{ color: "green" }}> &uarr; 37.8% </b> this month</p>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Orders</h3>
                        <FcList className='card_icon' />
                    </div>
                    <h1>2.4k</h1>
                    <p><b style={{ color: "red" }}> &darr; 7.8% </b> this month</p>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Balance</h3>
                        <FcDebt className='card_icon' />
                    </div>
                    <h1>$2.4k</h1>
                    <p><b style={{ color: "red" }}> &darr; 7.8% </b> this month</p>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Total Sales</h3>
                        <FcSalesPerformance className='card_icon' />
                    </div>
                    <h1>$89k</h1>
                    <p><b style={{ color: "green" }}> &darr; 7.8% </b> this week</p>
                </div>
            </div>

            <div className='charts'>
                <ResponsiveContainer id="grid-item" width="100%" height="100%">

                    <BarChart
                        width={700}
                        height={300}
                        data={data1}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >

                        <XAxis dataKey="name" />

                        <Tooltip />
                        <Legend />

                        <Bar dataKey="Earning" fill="rgb(120, 217, 241)" />
                    </BarChart>
                </ResponsiveContainer>

                <PieChart width={300} height={300} >

                    <Pie
                        data={data}
                        cx={120}
                        cy={200}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"

                    >

                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>


            {/* <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table> */}
        </main>
    )
}

export default Home
