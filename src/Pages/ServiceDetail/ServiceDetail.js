import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h2 className="text-center p-5">This is the detail of {serviceId}</h2>
            <div className="text-center">
                <Link to="/checkout">
                    <button className="btn btn-primary mb-5">Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;