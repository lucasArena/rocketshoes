import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 4px;

  footer {
    display: flex;
    justify-content: space-between;
    padding: 20px;

    button {
      padding: 10px 20px;
      background: #7159c1;
      border: 0;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
      font-size: 14px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }
    }

    div {
      span {
        color: #666;
        font-size: 16px;
        font-weight: bold;
        margin-right: 5px;
      }

      strong {
        color: #161616;
        font-size: 26px;
      }
    }
  }
`;

export const ProductTable = styled.table`
  list-style: none;
  width: 100%;
  padding: 20px;

  thead {
    color: #666;
    font-weight: bold;
    font-size: 16px;
  }

  tbody {
    margin: 30px;
    width: 100%;

    td {
      align-items: center;
      border-bottom: 1px solid #eee;

      img {
        height: 150px;
      }

      span {
        display: block;
        color: #161616;
        font-weight: bold;
        color: #666;
      }

      strong {
        margin-top: 5px;
        display: block;
        color: #161616;
        font-size: 18px;
        font-weight: bold;
      }

      div {
        display: flex;
        align-items: center;

        button {
          justify-content: center;
          background: #FFF;
        }

        input {
          max-width: 50px;
          padding: 5px 10px;
          border: 1px solid #666;
          border-radius: 4px;
          margin: 0 10px;
          color: #666;
        }
      }

      button {  
        background: transparent;
        svg {
          cursor: pointer;
        }
      }
    }
  }
`;
