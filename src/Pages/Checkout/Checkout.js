import React from 'react';
import './Checkout.css';

const Checkout = () => {

    const handleSubmit = () =>{
        alert('Thank you for checkout');
    }

    return (
        <div className="text-center mt-5 mb-5 p-5 checkout-form">
            <h2 className='mb-4'>Please checkout your booking</h2>
            <div className=''>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Your Name</label><br />
                    <input type="text" name="name" id="" placeholder="Enter Your Name" required/>
                    <br />
                    <label htmlFor="">Your Email Address</label><br />
                    <input type="email" name="email" id="" placeholder="Enter Your Email" required/>
                    <br />
                    <label htmlFor="">Your Phone</label><br />
                    <input type="text" name="phone" id="" placeholder="Enter Your Phone Number" required/>
                    <br />
                    <label htmlFor="">Your Address</label><br />
                    <textarea name="address" id="" cols="30" rows="5" required></textarea>
                    <br />
                    
                    <input className="btn btn-primary w-50 mx-auto mb-3 mt-3" type="submit" value="Checkout" />
                </form>
            </div>
        </div>
    );
};

export default Checkout;