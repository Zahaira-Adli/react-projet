function ProductCard(props) {
  return (
    <div className="product-card">
      <h3>{props.name}</h3>
      <p>الثمن: {props.price} درهم</p>
      <button>أضف إلى السلة</button>
    </div>
  );
}

// Add this export line (either default or named)
export default ProductCard; // Recommended for single component files