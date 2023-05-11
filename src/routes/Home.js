import React from 'react';
import Slide from '../components/Slide';
import NewProduct from '../UI/Home/newProduct';
import BestProduct from '../UI/Home/bestProduct';
import ImageSlide from '../UI/Home/imageSlide';
import LivingProduct from '../UI/Home/livingProuction';
import InstargramFeed from '../UI/Home/instarFeed';

const Home = () => {
    return (
        <>
            <div className="slider">
                <Slide />
            </div>
            <div className="new-products">
                <NewProduct />
            </div>
            <div className="best-items">
                <BestProduct />
            </div>
            <div className="image">
                <ImageSlide />
            </div>
            <div className="other-products">
                <LivingProduct />
            </div>
            <div className="instagram-feed">
                <InstargramFeed />
            </div>
        </>
  );
};

export default Home;
