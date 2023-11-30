import { useEffect, useState } from 'react';
import { CardsContainer, AddToCart, Card, ImgCard, Price } from './style';
import { getCategoryProducts } from '../../api/API_PATH';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
}

function ProductCard() {
  const dispatch = useDispatch();
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    const name = location.pathname.split('/').filter(Boolean).pop();
    const fetchData = async () => {
      setItems(await getCategoryProducts(name.split('-').join(' ')));
    };

    fetchData();
  }, []);

  return (
    <CardsContainer>
      {items.map((item) => (
        <Card key={item.id}>
          <a href={`/product/${item.id}`}>
            <ImgCard src={item.image} alt={item.title} />
          </a>

          <Price>{item.price}€</Price>
          <AddToCart
            onClick={() =>
              dispatch(
                addToCart({
                  id: `${item.id}`,
                  name: `${item.title}`,
                  price: `${item.price}`,
                })
              )
            }
          >
            Add To Cart
          </AddToCart>
        </Card>
      ))}
    </CardsContainer>
  );
}

export default ProductCard;
