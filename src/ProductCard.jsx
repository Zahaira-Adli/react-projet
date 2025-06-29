function ProductCard({ name, price }) {
  // <-- شوف شنو وقع هنا
  return (
    <div>
      <h3>{name}</h3> {/* مابقيتش محتاج نكتب props. */}
      <p>{price} درهم</p>
    </div>
  );
}

// Add this export line (either default or named)
export default ProductCard; // Recommended for single component files
