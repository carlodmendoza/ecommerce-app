import React from "react";
import Product from "./shared/Product";

function ProductPage(props) {
  const { products, addToCart } = props;

  return (
    <main>
      <div className="w-100">
        <h2 className="mt-3">Store</h2>
        <div className="row row-cols-1 row-cols-md-5 g-4 mt-3 mx-3">
          {products.map((product) => {
            return (
              <Product
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default ProductPage;
