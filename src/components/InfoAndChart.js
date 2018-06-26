import React from 'react';
import Info from './Info';
import ChartData from './ChartData';

class InfoAndChart extends React.Component {
    render(){
        return(
            <div className="infoandchart">
                <Info/>
                <ChartData/>
            </div>
        );
    }
}

export default InfoAndChart;