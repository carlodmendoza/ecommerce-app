import React, { useState } from "react";
import data from "../data/data";
import { useParams, Link } from "react-router-dom";

function EditProductPage(props) {
  const { getProducts } = props;
  const { products } = data;
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);

  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [imageURL, setImageURL] = useState(product.image);
  const [shortDesc, setShortDesc] = useState(product.shortDescription);
  const [longDesc, setLongDesc] = useState(product.longDescription);

  const updateProduct = (id) => {
    data.products = products.map((obj) => {
      if (obj.id === id) {
        return {
          ...obj,
          name: name,
          image: imageURL,
          shortDescription: shortDesc,
          longDescription: longDesc,
          price: price,
        };
      }

      return obj;
    });

    getProducts(data.products);
  };

  return (
    <div className="w-100">
      <div className="w-50 m-auto">
        <h2 className="mt-3">{`Editing Product ID: ${product.id}`}</h2>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.valueAsNumber)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="imageUrl" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="imageUrl"
            placeholder="Image URL"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="shortDesc" className="form-label">
            Short Description
          </label>
          <input
            type="text"
            className="form-control"
            id="shortDesc"
            placeholder="Short Description"
            value={shortDesc}
            onChange={(e) => setShortDesc(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="longDesc" className="form-label">
            Long Description
          </label>
          <input
            type="text"
            className="form-control"
            id="longDesc"
            placeholder="Long Description"
            value={longDesc}
            onChange={(e) => setLongDesc(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary">
          <Link
            className="text-white"
            to={`/`}
            onClick={() => updateProduct(product.id)}
          >
            Update
          </Link>
        </button>
      </div>
    </div>
  );
}

export default EditProductPage;
