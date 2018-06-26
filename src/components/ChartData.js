import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'Recharts';
import { MoreVert } from './assets';

class ChartData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: '1', IPhone: 4000, Samsung: 2400, micromax: 2400 },
                { name: '2', IPhone: 3000, Samsung: 1398, micromax: 2210 },
                { name: '3', IPhone: 2000, Samsung: 9800, micromax: 2290 },
                { name: '4', IPhone: 2780, Samsung: 3908, micromax: 2000 },
                { name: '5', IPhone: 1890, Samsung: 4800, micromax: 2181 },
                { name: '6', IPhone: 2390, Samsung: 3800, micromax: 2500 },
                { name: '7', IPhone: 3490, Samsung: 4300, micromax: 2100 },
                { name: '8', IPhone: 6000, Samsung: 2500, micromax: 2400 },
                { name: '9', IPhone: 7000, Samsung: 3400, micromax: 2700 },
                { name: '10', IPhone: 8000, Samsung: 6400, micromax: 2560 },
                { name: '11', IPhone: 7900, Samsung: 5700, micromax: 2446 },
                { name: '12', IPhone: 4500, Samsung: 2400, micromax: 2421 },
                { name: '13', IPhone: 4780, Samsung: 8400, micromax: 2430 },
                { name: '14', IPhone: 4000, Samsung: 1400, micromax: 2400 },

            ]
        }
    }
    render() {
        return (
            <div className="ChartData">
                <div className="cheader">
                    SALES AND STATISTIC FORECAST
                    <div className="cmoremenu">
                        <MoreVert />
                    </div>

                </div>
                <LineChart
                    width={600}
                    height={300}
                    data={this.state.data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" />
                    <YAxis ticks={[0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]} tickSize={10} />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="IPhone" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Samsung" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="micromax" stroke="#82ca5d" />
                </LineChart>
            </div>
        );
    }
}

export default ChartData;