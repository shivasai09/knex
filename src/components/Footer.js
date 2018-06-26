import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="product">
                    PRODUCT
                </div>
                <div className="tag1">
                    Bi-Division/Department/<span className="div">Region</span>
                </div>
                <div className="customer">
                    Customer
                </div>
                <div className="tag2">
                   Division/Department/<span className="div">Location</span>
                </div>
                <div className="shadow"/>
                <div className="shadow2"/>
                <div className="shadow"/>
                <div className="shadow2"/>
                <div className="buttoncontainer">
                <button type="button" className="btn btn-outline-primary btn-sm">C</button>
                <button type="button" className="btn btn-primary btn-sm">G</button>
                </div>
            </div>
        );
    }
}

export default Footer;