export default function Ph({ src, className = '', children }) {
  // `src` is a direct image path, e.g. "/images/products/lord_Ganesh/photo.jpg"
  return (
    <div className={`ph ${className}`} style={src ? { backgroundImage: `url(${src})` } : undefined}>
      {children}
    </div>
  );
}
