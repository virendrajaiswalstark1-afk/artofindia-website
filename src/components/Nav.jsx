import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, open } = useCart();

  const linkClass = ({ isActive }) =>
    `text-[14.5px] font-medium ${isActive ? 'text-ink' : 'text-ink-soft'} hover:text-ink`;

  return (
    <header className="sticky top-0 z-[200] bg-ivory/92 backdrop-blur-md border-b border-ink/10">
      <div className="max-w-[1240px] mx-auto px-8 sm:px-5 py-[18px] flex items-center justify-between gap-6">
        <Link to="/" className="font-serif font-bold text-[18px] sm:text-[22px] flex items-center gap-2.5 whitespace-nowrap">
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-orange to-gold" />
          Art of india
        </Link>

        <nav className={`gap-[30px] items-center ${menuOpen ? 'flex flex-col absolute top-16 left-0 right-0 bg-paper px-8 py-5 border-b border-ink/10' : 'hidden'} md:flex md:static md:flex-row md:bg-transparent md:px-0 md:py-0 md:border-0`}>
          <NavLink to="/" className={linkClass} end>Home</NavLink>
          <NavLink to="/shop" className={linkClass}>Shop</NavLink>
          <NavLink to="/about" className={linkClass}>About Us</NavLink>
          <NavLink to="/testimonials" className={linkClass}>Testimonials</NavLink>
          <Link to="/#footer" className="text-[14.5px] font-medium text-ink-soft hover:text-ink">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button aria-label="Search" className="w-[38px] h-[38px] rounded-full flex items-center justify-center bg-ivory-deep border border-ink/10">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-4 h-4"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </button>
          <button aria-label="Wishlist" className="w-[38px] h-[38px] rounded-full flex items-center justify-center bg-ivory-deep border border-ink/10">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
          </button>
          <button aria-label="Cart" onClick={open} className="relative w-[38px] h-[38px] rounded-full flex items-center justify-center bg-ivory-deep border border-ink/10">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] rounded-full bg-orange text-white font-mono text-[10px] font-bold flex items-center justify-center px-[3px]">{count}</span>
          </button>
          
          <button aria-label="Menu" onClick={() => setMenuOpen(o => !o)} className="md:hidden bg-none border-none text-[22px]">☰</button>
        </div>
      </div>
    </header>
  );
}
