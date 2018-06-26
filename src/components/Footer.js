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
            </div>
        );
    }
}

export default Footer;