import React from 'react';
import {AccountCircle, CheckCircle} from './assets';
import Footer from './Footer';
import Header from './Header'
import InfoAndChart from './InfoAndChart';
class Knex extends React.Component {

    render() {
        return (
            <div style={{width:"1280px"}}>
                <Header/>
                <InfoAndChart/>
                <Footer/>
            </div>
        );
    }
}

export default Knex;