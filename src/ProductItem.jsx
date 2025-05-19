function ProductItem({ product }) {
  return (
    <div className="product-item">
      <img
        src={product.image || "https://via.placeholder.com/250"}
        alt={product.name}
      />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
      <p className="product-category">{product.category}</p>
      <button className="btn">Add to Cart</button>
    </div>
  );
}

export default ProductItem;
