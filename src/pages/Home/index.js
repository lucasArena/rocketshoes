import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { formatPrice } from '../../utils/format';
import { ProductList } from './styles';

import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    try {
      const products = await api.get('/products');

      const data = products.map(product => ({
        ...product,
        formattedPrice: formatPrice(product.price),
      }));

      this.setState({ products: data });
    } catch (err) {
      alert('Erro');
    }
  }

  handleAddProduct = product => {
    const { addToCart } = this.props;
    addToCart(product);
  };

  render() {
    const { products } = this.state;
    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.formattedPrice}</span>
            <button
              type="button"
              onClick={() => this.handleAddProduct(product)}
            >
              <div>
                <MdAddShoppingCart size={16} color="#FFF" />
                <span>3</span>
              </div>
              <span>Adicionar ao carrinho</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
