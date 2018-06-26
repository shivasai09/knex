import React from 'react';
import { MoreVert } from './assets';
import Information from './Information';

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            days: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"],
            underline:[0,142,172,204,238,270,302,333,366,398,434,471,509,547,585]
        };
        this.changeUnderLine = this.changeUnderLine.bind(this);
    }

    changeUnderLine(event) {
        let value = event.target.innerText;
        let pixel = this.state.underline[value] + "px";
        document.getElementById("Iunderline").style.left = pixel;
    }

    render() {
        return (
            <div className="info">
                <div className="textcontainer">
                    <div className="text">
                        Dashboard
                    </div>
                </div>
                <div className="more_menu">
                    <MoreVert />
                </div>
                <div class="btn-group">
                    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {`DAY    `}
                    </button>
                    <div class="dropdown-menu">
                        {
                            this.state.days ?
                                this.state.days.map((item, index) => {
                                    return (
                                        <a key={index} className="dropdown-item" onClick={this.changeUnderLine}>{item}</a>
                                    );
                                }) :
                                null
                        }
                    </div>
                </div>
                {
                    <div className="underline" id="Iunderline"/>
                }
                <div className="header_numbers">
                    {
                        this.state.days ?
                            this.state.days.map((item, index) => {
                                return (
                                    <div key={index} className="numbers" >{item}</div>
                                );
                            }) :
                            null
                    }
                </div>
                <Information className="information"/>
            </div>
        );
    }
}

export default Info;