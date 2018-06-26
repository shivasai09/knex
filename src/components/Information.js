import React from 'react';
import PropTypes from 'prop-types';
import { ExpandMore } from './assets';

class Information extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: [50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375],
            selected: "KF1",
            selectedPage:1,
            mainOptions: ["KF1", "KF2", "KF3", "KF4"],
            options: ["Iphone-7", "Samsung-7", "MIA1-4", "OnePlust-3t", "Nexus"]
        }
        this.numbers = this.numbers.bind(this);
        this.changeSelected = this.changeSelected.bind(this);
        this.changePage = this.changePage.bind(this); 
    }

    numbers() {
        let y = 20, x = 14;
        let arr = [];
        while (y >= 1) {
            let data = [];
            for (let i = 0; i < x; i++) {
                data[i] = Math.ceil(Math.random() * 100);
            }
            arr.push(data)
            y--;
        }
        return arr;
    }

    changeSelected(event) {
        let selected = event.target.innerText;
        this.setState({
            selected
        })
    }

    changePage(event) {
       let selectedPage = event.target.innerText;
       if(selectedPage == "Next"){
           if(this.state.selectedPage == 3) {
               alert("no More pages");
           }
           else{
               let _selectedPage = this.state.selectedPage;
               _selectedPage++;
               this.setState({
                   selectedPage:_selectedPage
               })
           }
       }
       else{
           this.setState({
                selectedPage:parseInt(selectedPage,10)
           })
       }
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
                        {
                            this.state.mainOptions.map((item, index) => {
                                return (
                                    <div>
                                        <div className={this.state.selected == item ? "selected" : "not_selected"} key={index} onClick={this.changeSelected}>{item}</div>
                                        {
                                            this.state.selected === item ?
                                                <div className="childcontainer">
                                                    {
                                                        this.state.options.map((item, index) => {
                                                            return (
                                                                <div className="child" key={index}>
                                                                    <div className="bar"></div>
                                                                    <div className="value">{item}</div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                :
                                                null
                                        }
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className="optionsdata">
                        {
                            this.numbers().map((item, index) => {
                                return (
                                    <div className="row" key={index} >
                                        {
                                            item.map((item, index) => {
                                                return (
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
                <div className="information_footer" />
                <div className="page_navigation"> 
                    <div className="notselectedpage" onClick={this.changePage}>Next</div>
                    <div className={this.state.selectedPage==3?"selectedpage":"notselectedpage"} onClick={this.changePage}>3</div>
                    <div className={this.state.selectedPage==2?"selectedpage":"notselectedpage"} onClick={this.changePage}>2</div>
                    <div className={this.state.selectedPage==1?"selectedpage":"notselectedpage"} onClick={this.changePage}>1</div>
                </div>
            </div>
        );
    }
}

Information.propTypes = {
    className: PropTypes.string,
};

export default Information;