import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { PRODUCTS, money } from '../data/products.js';
import Ph from './Ph.jsx';

export default function CartDrawer() {
  const { items, remove, close, isOpen, total } = useCart();

  return (
    <>
      <div
        onClick={close}
        className={`fixed inset-0 bg-[#140E08]/40 z-[400] transition-opacity duration-200 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />
      <div className={`fixed top-0 right-0 bottom-0 w-[380px] max-w-[92vw] bg-paper z-[401] shadow-[-10px_0_40px_rgba(20,14,8,0.2)] transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center px-6 py-[22px] border-b border-ink/10">
          <h3 className="text-[19px]">Your Cart</h3>
          <button onClick={close} aria-label="Close cart" className="bg-none border-none text-xl">✕</button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-[18px] flex flex-col gap-4">
          {items.length === 0 ? (
            <div className="text-center text-ink-faint py-[60px] px-5 text-sm">
              Your cart is empty.<br />Explore the collection to find your first piece.
            </div>
          ) : items.map(i => {
            const p = PRODUCTS.find(p => p.id === i.id);
            if (!p) return null;
            return (
              <div key={p.id} className="grid grid-cols-[56px_1fr_auto] gap-3 items-center">
                <Ph variant={p.ph} className="w-14 h-14 rounded-[10px]" />
                <div>
                  <div className="text-sm font-semibold">{p.name}</div>
                  <div className="text-[12.5px] text-ink-faint">{money(p.price)} × {i.qty}</div>
                  <button onClick={() => remove(p.id)} className="bg-none border-none text-ink-faint text-xs underline p-0">Remove</button>
                </div>
                <div className="font-mono font-bold text-ink">{money(p.price * i.qty)}</div>
              </div>
            );
          })}
        </div>
        <div className="px-6 pt-5 pb-6 border-t border-ink/10">
          <div className="flex justify-between font-bold mb-3.5">
            <span>Total</span><span>{money(total)}</span>
          </div>
          <Link onClick={close} to="/shop" className="btn-primary w-full justify-center inline-flex items-center gap-2 font-semibold text-sm py-3.5 px-6 rounded-full bg-orange text-white shadow-[0_10px_22px_rgba(232,103,43,0.32)]">
            Checkout
          </Link>
        </div>
      </div>
    </>
  );
}
