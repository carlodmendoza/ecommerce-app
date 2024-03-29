import React from "react";
import { Link } from "react-router-dom";

function Product(props) {
  const { product, addToCart, switchAdmin } = props;

  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={product.image}
          className="card-img-top"
          style={{ height: "150px", width: "100%" }}
          alt={product.name}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">PHP {product.price}</p>
          <Link
            className="text-primary btn-link"
            to={`/products/${product.id}`}
          >
            More details
          </Link>
        </div>
        <div className="card-footer">
          {switchAdmin ? (
            <button type="button" className="btn btn-primary">
              <Link className="text-white" to={`/products/edit/${product.id}`}>
                Edit Product
              </Link>
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => addToCart(product)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cart-plus me-2 mb-1"
                viewBox="0 0 16 16"
              >
                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
