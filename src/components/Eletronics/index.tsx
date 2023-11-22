import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Button,
  DropdownContainer,
  DropdownContent,
  DropdownItem,
} from '../MensClothing/style';

interface Product {
  id: number;
  title: string;
}

const ElectronicsDropdown: React.FC = () => {
  const [items, setItems] = useState<Product[]>([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Product[]>(
          'https://fakestoreapi.com/products/category/electronics'
        );
        setItems(response.data.slice(0, 5));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <DropdownContainer>
      <Button onClick={toggleDropdown}>Electronics</Button>
      <DropdownContent isVisible={isDropdownVisible}>
        {items.map((item) => (
          <DropdownItem key={item.id} href={`#product-${item.id}`}>
            {item.title}
          </DropdownItem>
        ))}
        <DropdownItem href='/electronics'>More...</DropdownItem>
      </DropdownContent>
    </DropdownContainer>
  );
};

export default ElectronicsDropdown;
