import { IMAGES } from '../data/images.js';

export default function Ph({ variant = 'ph-1', className = '', children }) {
  const src = IMAGES[variant] || IMAGES['ph-1'];
  return (
    <div className={`ph ${className}`} style={{ backgroundImage: `url(${src})` }}>
      {children}
    </div>
  );
}
