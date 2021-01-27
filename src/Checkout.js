import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal';
function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://m.media-amazon.com/images/G/31/img17/Home/LA/CBCC_Javed/Jan_ART/NTB_P_PC_Head._CB411882388_.jpg" alt="" className="checkout__ad"/>

                <div>
                    <h2 className="checkout__title">Your Shopping Cart</h2>
                    {/*cat item*/}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal></Subtotal>
            </div>
        </div>
    )
}

export default Checkout
