import React from 'react';
import PropTypes from 'prop-types';
import { ExpandMore } from './assets';

class Information extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers :[50, 75, 100, 125, 150, 175, 200, 225, 250, 275,300, 325, 350, 375]
        }
        this.numbers = this.numbers.bind(this);
    }

    numbers() {
        let y=20,x=14;
        let arr = [];
        while(y>=1) {
            let data =[];
            for(let i= 0;i<x;i++) {
               data[i] =Math.ceil(Math.random()*100);
            }
            arr.push(data)
            y--;
        }
        return arr;
    }
    render() {
        return (
            <div className={this.props.className}>
                <div className="information_header">
                    <div className="forecast">
                        <div className="text">
                            FORECAST BASIC
                        </div>
                        <div className="expandmore">
                            <ExpandMore />
                        </div>
                    </div>
                    <div className="coloumns">
                        {
                            this.state.numbers ?
                                this.state.numbers.map((item, index) => {
                                    return (
                                        <span key={index} className="numbers">
                                            {item}
                                        </span>
                                    );
                                })
                                :
                                null
                        }
                    </div>
                </div>
                <div className="actualdata">
                 <div className="options">
                 <div className="selected">hello</div>
                 </div>
                 <div className="optionsdata">
                 {
                     this.numbers().map((item,index)=>{
                         return(
                            <div className ="row" key={index} >
                            {
                                item.map((item,index)=>{
                                    return(
                                        <span className="rowItem" key={index}>
                                          {item}
                                        </span>
                                    );
                                })
                            }
                            </div>
                         );
                     })
                 }
                 </div>
                </div>
            </div>
        );
    }
}

Information.propTypes = {
    className: PropTypes.string,
};

export default Information;