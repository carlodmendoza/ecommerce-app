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
      <div>
        {cartItems.length === 0 ? (
          <div>Cart is empty.</div>
        ) : (
          <div className="row mt-3">
            <div className="col-3 fw-semibold">Product Name</div>
            <div className="col-2 fw-semibold">Unit Price</div>
            <div className="col-2 fw-semibold">Quantity</div>
            <div className="col-2 fw-semibold">Total</div>
            <div className="col-3 fw-semibold">Action</div>
          </div>
        )}
      </div>

      {cartItems.map((item) => {
        return (
          <div key={item.id} className="row mt-2">
            <div className="col-3">{item.name}</div>
            <div className="col-2">PHP {item.price.toFixed(2)}</div>
            <div className="col-2">{item.qty}</div>
            <div className="col-2">PHP {item.price * item.qty}</div>
            <div className="col-3">
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
          </div>
        );
      })}

      {cartItems.length !== 0 && (
        <>
          <hr />
          <div className="row">
            <div className="col-3"></div>
            <div className="col-2"></div>
            <div className="col-2"></div>
            <div className="col-2">
              <strong>Total Price</strong>
            </div>
            <div className="col-3">
              <strong>PHP {totalPrice.toFixed(2)}</strong>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
