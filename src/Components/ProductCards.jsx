export default function ProductCard({ image, title }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
}
