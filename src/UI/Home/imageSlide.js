import React from 'react';
import { Link } from 'react-router-dom';
import './imageSlideStyle.css';

const imageSlide = () => {
  return (
    <div className="image-slide">
      <div className="image-slide-bg">
        {/* 중앙에 배치될 버튼 */}
        <Link to="/OnlineStore">
          <button className="image-slide-btn">
            {' { L I V I N G }  k y u n g  s u n g  c o f f e e '}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default imageSlide;
