import { useState } from 'react';
import { Link } from 'react-router-dom';
import { money } from '../data/products.js';
import { useCart } from '../context/CartContext.jsx';
import Ph from './Ph.jsx';
import CategoryTag from './CategoryTag.jsx';

export default function ProductCard({ product, showActions = true }) {
  const [wished, setWished] = useState(false);
  const { add } = useCart();
  const p = product;

  return (
    <div className="bg-paper rounded-[18px] overflow-hidden shadow-sm2 hover:shadow-md2 hover:-translate-y-1 transition-all duration-200 flex flex-col">
      <div className="relative aspect-square">
        <Ph variant={p.ph} className="!rounded-none w-full h-full" />
        {p.badge && (
          <span className="absolute top-3 left-3 bg-ink text-ivory font-mono text-[10px] font-bold uppercase tracking-wide px-2.5 py-[5px] rounded-full">
            {p.badge}
          </span>
        )}
        <button
          onClick={() => setWished(w => !w)}
          aria-label="Save to wishlist"
          className={`absolute top-3 right-3 w-[34px] h-[34px] rounded-full bg-white/90 border-none flex items-center justify-center text-[15px] shadow-sm2 hover:scale-110 transition-transform ${wished ? 'text-orange' : ''}`}
        >
          {wished ? '♥' : '♡'}
        </button>
      </div>
      <div className="p-[18px] pb-5 flex flex-col gap-2 flex-1">
        <CategoryTag cat={p.cat} label={p.catLabel} />
        <h3 className="text-[17px]">{p.name}</h3>
        <p className="text-[13.5px] text-ink-soft leading-relaxed">{p.desc}</p>
        <div className="flex justify-between items-center mt-auto pt-2.5">
          <span className="font-mono font-bold text-base">{money(p.price)}</span>
        </div>
        {showActions && (
          <div className="flex gap-2 mt-3">
            <Link to={`/product/${p.id}`} className="flex-1 justify-center inline-flex items-center gap-2 font-semibold text-[13px] py-[9px] px-4 rounded-full border border-ink/[0.18] bg-paper text-ink hover:border-ink">
              View Details
            </Link>
            <button onClick={() => add(p.id)} className="flex-1 justify-center inline-flex items-center gap-2 font-semibold text-[13px] py-[9px] px-4 rounded-full bg-orange text-white shadow-[0_10px_22px_rgba(232,103,43,0.32)] hover:-translate-y-0.5 transition-transform">
              Add to Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
