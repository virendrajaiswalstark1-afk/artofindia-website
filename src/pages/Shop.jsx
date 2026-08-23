import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../data/products.js';
import { IMAGES } from '../data/images.js';
import Eyebrow from '../components/Eyebrow.jsx';
import ProductCard from '../components/ProductCard.jsx';

const CHIPS = [
  { cat: 'all', label: 'All' },
  { cat: 'ganesh', label: 'Lord Ganesh' },
  { cat: 'krishna', label: 'Lord Krishna' },
  { cat: 'decorative', label: 'Decorative' },
  { cat: 'jewelry', label: 'Jewelry' },
  { cat: 'others', label: 'Others' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCat, setActiveCat] = useState(searchParams.get('cat') || 'all');
  const [sortBy, setSortBy] = useState('featured');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const cat = searchParams.get('cat');
    if (cat) setActiveCat(cat);
  }, [searchParams]);

  const selectCat = (cat) => {
    setActiveCat(cat);
    setSearchParams(cat === 'all' ? {} : { cat });
  };

  const list = useMemo(() => {
    let items = PRODUCTS.slice();
    if (activeCat !== 'all') items = items.filter(p => p.cat === activeCat);
    if (query) {
      const q = query.trim().toLowerCase();
      items = items.filter(p => p.name.toLowerCase().includes(q) || p.material.toLowerCase().includes(q));
    }
    if (sortBy === 'price-low') items.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') items.sort((a, b) => b.price - a.price);
    if (sortBy === 'new') items.sort((a, b) => (b.badge === 'New Arrival') - (a.badge === 'New Arrival'));
    return items;
  }, [activeCat, sortBy, query]);

  return (
    <>
      <section className="py-16 bg-ivory-deep">
        <div className="max-w-[1240px] mx-auto px-8 sm:px-5 text-center">
          <Eyebrow color="orange">Shop the collection</Eyebrow>
          <h1 className="mt-3.5 text-[32px] sm:text-[42px] lg:text-[52px]">Explore the Collection</h1>
          <p className="text-lg sm:text-xl text-ink-soft max-w-[52ch] mx-auto mt-4 leading-relaxed">
            Handmade pieces created with patience, tradition, and soul — some of them from art forms most people have never had the chance to hear about.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1240px] mx-auto px-8 sm:px-5">
          <div id="rewa-story" className="heritage-story-bg grid md:grid-cols-[0.85fr_1.15fr] gap-8 md:gap-14 items-center text-[#F3E2E6] rounded-[28px] p-8 sm:p-14">
            <div className="aspect-[4/4.6] rounded-[18px] overflow-hidden shadow-lg2">
              <img
                src={IMAGES.rewaHeritage}
                alt="Hand-carved supari (areca nut) sculptures from the Kunder family's Rewa workshop"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <Eyebrow dotColor="#E8B7C0" className="text-[#E8B7C0]">Where royalty met the hand of an artisan</Eyebrow>
              <h2 className="text-white mt-3 text-2xl sm:text-3xl lg:text-[34px]">The Rewa legacy behind our Supari Art.</h2>
              <p className="font-serif italic text-[19px] text-white leading-[1.55] mt-3.5">
                "He noticed something others might have overlooked — the intricate natural patterns hidden inside the humble areca nut."
              </p>
              <p className="text-[#E8D3D7] text-[15px] leading-[1.7] mt-3.5">
                Rewa is remembered as the Land of White Tigers — in 1951, Maharaja Martand Singh brought a rare white tiger named Mohan to the royal fort at Govindgarh, and his lineage went on to become the ancestor of nearly every white tiger in captivity today. But around that same royal era, a quieter story was taking shape in the same court — not in the forest, but in the hands of a toy maker named Ram Siya Kunder.
              </p>
              <p className="text-[#E8D3D7] text-[15px] leading-[1.7] mt-3.5">
                By one family account, Ram Siya was already crafting small supari pieces for the court of Maharaja Gulab Singh as early as 1932 — sindoor boxes made from areca nut, rewarded with fifty rupees at the durbar. Another account, recorded in detail, places the turning point in 1942: the King asked him to peel a supari, and while scraping away its outer layer, he noticed the intricate natural grain hidden inside. He began carving it — a tea set, a kangaroo, a mandir — and built a repertoire of around 40 designs. Ram Siya was later honored by the President of India for his work. He passed away in 1993; his family, the Kunders, still carve in Rewa today.
              </p>
              <div className="mt-4.5 mt-[18px] p-4 sm:p-[18px] rounded-xl bg-white/[0.08] border-l-[3px] border-[#E8B7C0] text-[13.5px] leading-relaxed text-[#E8D3D7]">
                This craft is documented by the Government of Rewa as a local handicraft, credited to the Kunder family's "hard labor and continuous research." Every piece in our Supari Art collection is made by their family workshop, using the same hand tools used since the 1940s.
              </div>
              <button onClick={() => selectCat('others')} className="mt-[22px] inline-flex items-center gap-2 font-semibold text-[14.5px] py-3.5 px-6 rounded-full border border-white/40 bg-transparent text-white hover:border-white transition-colors">
                Shop the Supari Art Collection
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0 pb-16">
        <div className="max-w-[1240px] mx-auto px-8 sm:px-5">
          <div className="flex items-center justify-between gap-5 flex-wrap mb-8">
            <div className="flex gap-2.5 flex-wrap">
              {CHIPS.map(c => (
                <button
                  key={c.cat}
                  onClick={() => selectCat(c.cat)}
                  className={`text-[13.5px] font-semibold py-[9px] px-[18px] rounded-full border ${activeCat === c.cat ? 'bg-ink text-ivory border-ink' : 'bg-paper text-ink-soft border-ink/[0.18]'}`}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <div className="flex gap-3 items-center flex-wrap">
              <div className="flex items-center gap-2 bg-paper border border-ink/[0.18] rounded-full py-2 px-4">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <input
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Search artwork..."
                  className="border-none outline-none bg-transparent text-sm w-[150px]"
                />
              </div>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="border border-ink/[0.18] rounded-full py-[9px] px-3.5 bg-paper text-[13.5px] font-semibold text-ink"
              >
                <option value="featured">Featured</option>
                <option value="new">New Arrivals</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {list.length === 0 ? (
            <div className="text-center py-16 text-ink-faint text-[15px]">
              No pieces match that search — try another material, category, or keyword.
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {list.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
        </div>
      </section>

      <section className="quote-band-full text-[#F3E9D6] text-center py-16 sm:py-[90px] px-8">
        <p className="font-serif italic font-medium text-2xl sm:text-3xl leading-relaxed max-w-[26ch] mx-auto">
          "When you buy handmade, you don't just take home an object. You take home someone's time, knowledge, patience, and story."
        </p>
      </section>
    </>
  );
}
