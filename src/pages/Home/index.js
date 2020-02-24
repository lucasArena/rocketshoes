import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from '../../utils/format';
import { ProductList } from './styles';

import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

export default function Home() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await api.get('/products');

        const data = response.map(product => ({
          ...product,
          formattedPrice: formatPrice(product.price),
        }));

        setProducts(data);
      } catch (err) {
        alert('Erro');
      }
    }

    loadProducts();
  }, []);

  function handleAddProduct(id, amount) {
    dispatch(CartActions.addToCartRequest(id, amount));
  }

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.formattedPrice}</span>
          <button
            type="button"
            onClick={() => handleAddProduct(product.id, amount[product.id])}
          >
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />
              <span>{amount[product.id] || 0}</span>
            </div>
            <span>Adicionar ao carrinho</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
