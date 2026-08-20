export default function Ph({ variant = 'ph-1', className = '', children }) {
  return <div className={`ph ${variant} ${className}`}>{children}</div>;
}
