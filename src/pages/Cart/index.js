import React from 'react';
import { connect } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { bindActionCreators } from 'redux'
import { Container, ProductTable } from './styles';

import { formatPrice } from '../../utils/format';

import * as CartActions from '../../store/modules/cart/actions';

function Cart({ cart, RemoveFromCart }) {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <td />
            <td>Produto</td>
            <td>Qtd</td>
            <td>Subtotal</td>
            <td />
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.name} />
              </td>
              <td>
                <span>{product.title}</span>
                <strong>{product.formattedPrice}</strong>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button">
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.formattedPrice}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => RemoveFromCart(product.id)}
                >
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar Pedido</button>
        <div>
          <span>TOTAL</span>
          <strong>R$1929,00</strong>
        </div>
      </footer>
    </Container>
  );
}

const mapStatetoProps = state => ({
  cart: state.cart,
  formattedPrice: formatPrice(state.cart.price),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStatetoProps, mapDispatchToProps)(Cart);
