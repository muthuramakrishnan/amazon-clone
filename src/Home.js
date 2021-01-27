import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

                <div className="home__row">
                 <Product title="The lean startup" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/61fkjbrjnUL._SL1500_.jpg" rating={4}></Product>
                 <Product title="iPhone 11 Pro" price={699.99} image="https://images-na.ssl-images-amazon.com/images/I/71i2XhHU3pL._SL1500_.jpg" rating={5}></Product>
                 {/*product*/}
                </div>
                <div className="home__row">
                    <Product title="Samsung m51" price={399.99} image="https://images-na.ssl-images-amazon.com/images/I/710weRkP-nL._SL1500_.jpg" rating={2}></Product>
                    <Product title="Samsung Note 20 Ultra" price={699.99} image="https://images-na.ssl-images-amazon.com/images/I/81afQk-7AjL._SL1500_.jpg" rating={4}></Product>
                    <Product title="Samsung Note 20 Ultra" price={699.99} image="https://images-na.ssl-images-amazon.com/images/I/81afQk-7AjL._SL1500_.jpg" rating={4}></Product>
                </div>
                <div className="home__row">
                    <Product title="Mac Book Pro" price={1500.00} image="https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._SL1500_.jpg" rating={4}></Product>
                </div>
            </div>
        </div>
    );
};

export default Home
