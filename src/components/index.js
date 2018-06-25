import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [],
        };
        this.logOut = this.logOut.bind(this);
        this.getInfo = this.getInfo.bind(this);
        this.shareItOnFeed = this.shareItOnFeed.bind(this);
    }

    logOut() {
        logout();
    }
    getInfo() {
        FB.api('/me?fields=birthday,gender,name', (response) => {
            if (response && !response.error) {
                this.setState({
                    userData: response
                });
                console.log(response)
            }
        });
    }

    shareItOnFeed() {
        FB.ui({
            method: 'share',
            display: 'popup',
            hashtag: '#simplysuperb',
            quote: 'a very good hard disk',
            href: 'https://www.amazon.in/Seagate-Portable-External-Creative-Photography/dp/B00GASLJK6/ref=sr_1_1?s=computers&ie=UTF8&qid=1529072059&sr=1-1&keywords=hard+disk+1tb+external+portable+3.0',
        }, function (response) { });
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a className="navbar-brand" href="#">Single Post</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item ">
                                <button className="nav-link" onClick={this.getInfo} style={{ color: "black" }}>get My info(will work if logged in)</button>
                            </li>
                        </ul>
                        <form className="form-inline mt-2 mt-md-0">
                            <button className="nav-link" onClick={this.logOut}>Log out</button>
                        </form>
                    </div>
                </nav>
                <div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Birthday</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>{this.state.userData ? this.state.userData.id : "click get info"}</td>
                                <td>{this.state.userData ? this.state.userData.name : 'click get info'}</td>
                                <td>{this.state.userData ? this.state.userData.birthday : 'click get info'}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">$3000</h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li>Hard disk</li>
                        <li>1 TB of storage</li>
                        <li>Phone and email support</li>
                        <li>Help center access</li>
                    </ul>
                    <button type="button" className="btn btn-lg btn-block btn-primary" onClick={this.shareItOnFeed}> share it on facebook(will work if you loged in) </button>
                </div>
            </div>
        );
    }
}

export default Form;