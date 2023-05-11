import React from 'react';

const bestProduct = () => {
  // 가격과 품절 여부를 인자로 받아서 품절일 경우 스타일을 변경하는 함수
  const renderProductStatus = (price, isSoldOut) => {
    if (isSoldOut) {
      return <div style={{ backgroundColor: 'black', color: 'white' }}>품절</div>;
    }
    return <div>{price}</div>;
  };

  return (
    <div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <hr style={{ flex: 0.05, height: '1px', backgroundColor: 'black' }} />
        </div>
        <div style={{ display:'flex', alignItems:'center',justifyContent:'center' }}>BEST ITEMS</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        Best Items
        {/* {products.map((product, index) => (
          <div key={index} style={{ width: 'calc(33.33% - 10px)', marginTop: 20 }}>
            <img src={product.image} alt="product" style={{ width: '100%' }} />
            <div>{product.name}</div>
            {renderProductStatus(product.price, product.isSoldOut)}
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default bestProduct;