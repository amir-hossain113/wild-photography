import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/amir-hossain113/images1/main/data.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div className="container mt-5 mb-5">
            {
                services.map(service => <Service key={service.id} service={service}></Service>)
            }
        </div>
    );
};

export default Services;