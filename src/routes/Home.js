import React from 'react';
import Slide from '../components/Slide';

const Home = () => {
    return (
        <>
            <div className="slider">
                <Slide />
            </div>
            <div className="new-products">
                {/* 신상품 내용 */}
            </div>
            <div className="best-items">
                {/* 베스트 아이템 내용 */}
            </div>
            <div className="image">
                {/* 이미지 내용 */}
            </div>
            <div className="other-products">
                {/* 다른 상품들 내용 */}
            </div>
            <div className="instagram-feed">
                {/* 인스타그램 피드 내용 */}
            </div>
        </>
  );
};

export default Home;
