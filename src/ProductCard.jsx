// Make sure to include the export
function ProductCard() {
  const product = {
    name: "سماعات لاسلكية",
    price: 250,
    inStock: true
  };

  return (
    <div className="product-card">
      <h3>{product.name.toUpperCase()}</h3>
      <p>الثمن: {product.price * 1.2} درهم (مع الضريبة)</p>
      {product.inStock ? (
        <p className="in-stock">متوفر فالمخزون</p>
      ) : (
        <p className="out-of-stock">غير متوفر حالياً</p>
      )}
      <button>أضف إلى السلة</button>
    </div>
  );
}

// Add this export line
export default ProductCard;