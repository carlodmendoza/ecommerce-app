import React from "react";

function CartPage(props) {
  const { cartItems, addToCart, removeFromCart } = props;
  const itemsPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  const totalPrice = itemsPrice;

  return (
    <div className="w-100">
      <h2 className="mt-3">Cart Page</h2>
      <div>{cartItems.length === 0 && <div>Cart is empty.</div>}</div>

      {cartItems.map((item) => {
        return (
          <div key={item.id} className="row">
            <div className="col-4">{item.name}</div>
            <div className="col-4">
              <button
                type="button"
                className="btn btn-danger btn-sm me-2"
                onClick={() => removeFromCart(item)}
              >
                -
              </button>
              <button
                type="button"
                className="btn btn-success btn-sm"
                onClick={() => addToCart(item)}
              >
                +
              </button>
            </div>
            <div className="col-4">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        );
      })}

      {cartItems.length !== 0 && (
        <>
          <hr />
          <div className="row">
            <div className="col-4">
              <strong>Total Price</strong>
            </div>
            <div className="col-4"></div>
            <div className="col-4">
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
