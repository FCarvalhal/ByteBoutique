import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getProduct } from '../../api/API_PATH';
import {
  ProductPageDisplay,
  ProductImage,
  ProductImgContainer,
  ProductDescription,
  AddToCartBtn,
} from './style';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';

interface ProductDetails {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductDetailsDisplay: React.FC = () => {
  const dispatch = useDispatch();
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<ProductDetails | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await getProduct(productId);
        setProduct(fetchedProduct);
        console.log('Fetched Product:', fetchedProduct);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <>
      {product && (
        <ProductPageDisplay>
          <ProductImgContainer>
            <ProductImage
              src={product.image}
              alt={product.title}
            ></ProductImage>
          </ProductImgContainer>
          <ProductDescription>
            <h1>{product.title}</h1>
            <h3>Product Price: {product.price}€</h3>
            <p>Product Description: {product.description}</p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <p>Rate: {product.rating.rate}/5</p>
              <span className='material-symbols-outlined'>star_rate_half</span>
            </div>
            <p>{product.rating.count} Reviews</p>
            <AddToCartBtn
              onClick={() =>
                dispatch(
                  addToCart({
                    id: `${product.id}`,
                    name: `${product.title}`,
                    price: `${product.price}`,
                  })
                )
              }
            >
              Add to Cart
            </AddToCartBtn>
          </ProductDescription>
        </ProductPageDisplay>
      )}
    </>
  );
};

export default ProductDetailsDisplay;
