
import React, { useEffect , useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../../redux/slices/productSlice';
import './ProductPage.css';

const ProductPage = () => {

    const { productId } = useParams();
    const dispatch = useDispatch();
    const { currentProduct, loading, error } = useSelector((state) => state.product);
    const [curProduct, setCurProduct] = useState(null);

    useEffect(() => {
     let res = dispatch(fetchProductById(productId));
    }, [dispatch, productId]);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
      <div className="product-page">
        {currentProduct && (
          <>
            <h1>{currentProduct.name}</h1>
            <img src={currentProduct.imageUrl} alt={currentProduct.name} />
            <p>{currentProduct.description}</p>
            <p>Price: ${currentProduct.price}</p>
            {currentProduct.discountPrice && <p>Discount Price: ${currentProduct.discountPrice}</p>}
            <p>In Stock: {currentProduct.stockQuantity}</p>
            
          </>
        )}
      </div>
    );
  };
  
  
  export default ProductPage;