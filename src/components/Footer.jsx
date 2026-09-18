import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
    e.target.reset();
    setTimeout(() => setSubscribed(false), 2500);
  };

  return (
    <footer id="footer" className="bg-ink text-[#EFE7D8] pt-[76px] pb-8 mt-10">
      <div className="max-w-[1240px] mx-auto px-8 sm:px-5">
        <div className="grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr] gap-10 pb-11 border-b border-[#EFE7D8]/[0.14]">
          <div className="col-span-2 md:col-span-1">
            <div className="font-serif font-bold text-[22px] flex items-center gap-2.5 text-white">
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-orange to-gold" />
              Artify
            </div>
            <p className="text-[#CBBFA9] text-[14.5px] leading-relaxed mt-3.5 max-w-[30ch]">
              We search for the art India is forgetting — and help it, and the families behind it, be seen again.
            </p>
    
          </div>
          <div>
            <h5 className="font-mono text-xs tracking-widest uppercase text-[#B8AA92] mb-4">Shop</h5>
            <Link to="/shop" className="block text-[#EFE7D8] text-[14.5px] mb-[11px] opacity-90 hover:opacity-100 hover:text-gold">All Products</Link>
            <Link to="/shop" className="block text-[#EFE7D8] text-[14.5px] mb-[11px] opacity-90 hover:opacity-100 hover:text-gold">Collections</Link>
            <Link to="/shop" className="block text-[#EFE7D8] text-[14.5px] mb-[11px] opacity-90 hover:opacity-100 hover:text-gold">New Arrivals</Link>
          </div>
          <div>
            <h5 className="font-mono text-xs tracking-widest uppercase text-[#B8AA92] mb-4">Company</h5>
            <Link to="/about" className="block text-[#EFE7D8] text-[14.5px] mb-[11px] opacity-90 hover:opacity-100 hover:text-gold">About Us</Link>
            <Link to="/testimonials" className="block text-[#EFE7D8] text-[14.5px] mb-[11px] opacity-90 hover:opacity-100 hover:text-gold">Testimonials</Link>
          </div>
          <div>
            <h5 className="font-mono text-xs tracking-widest uppercase text-[#B8AA92] mb-4">Support</h5>
            <a href="#" className="block text-[#EFE7D8] text-[14.5px] mb-[11px] opacity-90 hover:opacity-100 hover:text-gold">Contact</a>
            <a href="#" className="block text-[#EFE7D8] text-[14.5px] mb-[11px] opacity-90 hover:opacity-100 hover:text-gold">Returns</a>
            
          </div>
          <div>
            <h5 className="font-mono text-xs tracking-widest uppercase text-[#B8AA92] mb-4">Stay in touch</h5>
            <p className="text-[13.5px] text-[#CBBFA9]">Stories, new collections &amp; handmade treasures.</p>
            <form onSubmit={handleSubmit} className="flex gap-2 mt-3.5">
              <div className="flex gap-3 mt-5">
              {['IG', 'FB', 'PN', 'YT'].map(s => (
                <a key={s} href="#" aria-label={s} className="w-9 h-9 rounded-full border border-[#EFE7D8]/25 flex items-center justify-center text-sm hover:border-gold hover:text-gold">{s}</a>
              ))}
            </div>   
            </form>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2.5 pt-[26px] text-[12.5px] text-ink-faint font-mono">
          <span>© 2026 Artify. All rights reserved.</span>
          <span>Handmade heritage, delivered worldwide</span>
        </div>
      </div>
    </footer>
  );
}
