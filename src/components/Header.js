import React from 'react';
import { AccountCircle, SaveIcon, DriveScript, TodayButton } from './assets';

class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="menu">
                        <img src="https://png.icons8.com/ios/50/000000/menu-filled.png" />
                    </div>
                    <div className="logo">
                        LOGO
                </div>
                    <div className="heading">
                        <span className="for">FOR</span>
                        <span>
                            <img src="https://png.icons8.com/ios/50/000000/menu-filled.png" />
                        </span>
                        <span className="cast">CAST</span>
                    </div>
                    <div className="notification">
                        <img src="https://png.icons8.com/ios-glyphs/50/000000/appointment-reminders.png" />
                    </div>
                    <div className="settings">
                        <img src="https://png.icons8.com/ios/50/000000/settings-filled.png" />
                    </div>
                    <div className="user">
                        <AccountCircle />
                    </div>
                    <div className="username">
                        ANURAG
                </div>
                </div>
                <div className="header2">
                    <div className="save">
                        <SaveIcon />
                    </div>
                    <div className="drivescript">
                        <DriveScript />
                    </div>
                    <div className="downarrow">
                        <i class="fas fa-long-arrow-alt-down"></i>
                        <div className="linescontainer">
                            <div className="line1" />
                            <div className="line2" />
                            <div className="line3" />
                            <div className="line4" />
                        </div>
                    </div>
                    <div className="uparrow">
                        <i class="fas fa-long-arrow-alt-down"></i>
                        <div className="linescontainer2">
                            <div className="line1" />
                            <div className="line2" />
                            <div className="line3" />
                            <div className="line4" />
                        </div>
                    </div>
                    <div className="seprate1" />
                    <div className="inputfield">
                        <input type="text" className="input" />
                    </div>
                    <div className="seprate2" />
                    <div className="leftright">
                        <div className="left" />
                    </div>
                    <div className="updown">
                        <div className="up" />
                    </div>
                    <div className="fill" />
                    <div className="blank" />
                    <div className="today">
                        <TodayButton />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;