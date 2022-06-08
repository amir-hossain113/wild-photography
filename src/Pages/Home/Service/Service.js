import React from 'react';
import './Service.css';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const { id, name, price, description, img} = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }

    return (
        <div className="service mb-4">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3>{name}</h3>
                <p>Price: ${price}</p>
                <p>{description}</p>
                <button onClick={() => navigateToServiceDetail(id)} className="btn btn-warning">Buy this {name} photo</button>
            </div>
        </div>
    );
};

export default Service;