import React from "react";
import data from "../data/data";
import { useParams } from "react-router-dom";

function SingleProductPage(props) {
  const { addToCart } = props;
  const { products } = data;
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);

  return (
    <div className="w-100">
      <section className="section-content padding-y bg mt-5">
        <div className="container">
          <article className="card">
            <div className="card-body">
              <div className="row">
                <aside className="col-md-6">
                  <article className="gallery-wrap">
                    <div className="card img-big-wrap">
                      <img src={product.image} alt={product.name} />
                    </div>
                  </article>
                  <div className="mt-3">{product.longDescription}</div>
                </aside>
                <main className="col-md-6">
                  <article>
                    <h3 className="title">{product.name}</h3>
                    <hr />
                    <div className="mb-3">
                      <h4>{`Price: PHP ${product.price}`}</h4>
                    </div>
                    <div className="mb-3">
                      <h5>Categories:</h5>
                      {product.categories.map((cat) => {
                        return (
                          <React.Fragment key={cat}>
                            <a href="#/" className="text-primary btn-link">
                              {cat}
                            </a>{" "}
                          </React.Fragment>
                        );
                      })}
                    </div>
                    <div className="mb-3">
                      <h6>{`${product.shortDescription}`}</h6>
                    </div>
                    <div className="mb-4">
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
                    </div>
                  </article>
                </main>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default SingleProductPage;
