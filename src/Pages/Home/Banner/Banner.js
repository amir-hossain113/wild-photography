import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import bannerImg1 from '../../../images/banner/wild1.jpg';
import bannerImg2 from '../../../images/banner/wild2.jpg';
import bannerImg3 from '../../../images/banner/wild3.jpg';

const Banner = () => {
    const [index, setIndex] = useState(0);
      
    const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
    };
        

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={bannerImg1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={bannerImg2}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={bannerImg3}
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;