import React, { Component } from 'react';

export default class Cart extends Component {
  render() {
    return (
      <>
        <div className="">
          <h2 className="cart-items my-5 pt-5 text-center">Cart Items</h2>
          {this.props.cartItems.length === 0 ? <h5 className='text-center mb-4'>Cart is empty</h5> : ''}

          <div className="container">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">image</th>
                  <th scope="col">QTY</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>

              {this.props.cartItems.map((value, index) => {
                return (
                  <tbody key={value.id}>
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{value.title}</td>
                      <td>{value.price}</td>
                      <td>
                        <img width="60" src={value.image} alt="" />
                      </td>
                      <td>
                        {' '}
                        <button
                          onClick={() => {
                            this.props.decrementItem(value);
                          }}
                          className="btn  btn-danger"
                        >
                          -
                        </button>
                        <span className="px-3">{value.qty}</span>
                        <button
                          onClick={() => {
                            this.props.addItem(value);
                          }}
                          className="btn  btn-info mr-3"
                        >
                          +
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            this.props.removeProduct(value);
                          }}
                          className="btn  btn-danger"
                        >
                          <i className="fa-solid fa-trash-can"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </>
    );
  }
}
