import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../data/products.js';
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
      {/* ================= HERO ================= */}
      <section
        className="relative overflow-hidden bg-ivory-deep"
        style={{ padding: '56px 20px 52px' }}
      >
        {/* soft glows */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', top: -140, left: -120, width: 380, height: 380,
            borderRadius: '50%', pointerEvents: 'none',
            background: 'radial-gradient(circle, rgba(232,103,43,0.18), rgba(232,103,43,0) 70%)',
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', bottom: -160, right: -120, width: 420, height: 420,
            borderRadius: '50%', pointerEvents: 'none',
            background: 'radial-gradient(circle, rgba(201,162,39,0.20), rgba(201,162,39,0) 70%)',
          }}
        />

        <div
          className="relative max-w-[1240px] mx-auto text-center"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          {/* heading */}
          <h1
            style={{
              margin: 0,
              color: '#6B1F2E',
              fontSize: 'clamp(28px, 3.6vw, 42px)',
              lineHeight: 1.15,
              letterSpacing: '-0.015em',
            }}
          >
            Explore the <span className="italic" style={{ color: '#D2561C' }}>Collection</span>
          </h1>

          {/* divider */}
          <div
            aria-hidden="true"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, margin: '20px 0 18px' }}
          >
            <span style={{ display: 'block', width: 72, height: 1, background: 'linear-gradient(to right, rgba(210,86,28,0), rgba(210,86,28,0.8))' }} />
            <span style={{ color: '#D2561C', fontSize: 14, lineHeight: 1 }}>✦</span>
            <span style={{ display: 'block', width: 72, height: 1, background: 'linear-gradient(to left, rgba(210,86,28,0), rgba(210,86,28,0.8))' }} />
          </div>

          {/* one-line quote on wide screens, wraps neatly on small ones */}
          <p
            style={{
              margin: 0,
              color: '#5B3A21',
              fontSize: 'clamp(14px, calc((100vw - 160px) / 64), 19px)',
              lineHeight: 1.65,
              fontWeight: 500,
              letterSpacing: '0.005em',
              textWrap: 'balance',
            }}
          >
            <span style={{ color: '#D2561C', fontSize: '1.4em', lineHeight: 0, verticalAlign: '-0.15em', marginRight: 4 }}>“</span>
            When you buy handmade, you don't just take home an object. You take home{' '}
            <span style={{ color: '#8A2236', fontWeight: 700 }}>
              someone's time, knowledge, patience, and story.
            </span>
            <span style={{ color: '#D2561C', fontSize: '1.4em', lineHeight: 0, verticalAlign: '-0.15em', marginLeft: 2 }}>”</span>
          </p>
        </div>
      </section>

      <section className="pb-16" style={{ paddingTop: 40 }}>
        <div className="max-w-[1240px] mx-auto px-8 sm:px-5">
          {/* ================= FILTER BAR (responsive) ================= */}
          <style>{`
            /* ---------- Desktop / laptop ---------- */
            .shopbar {
              display: flex;
              align-items: center;
              justify-content: space-between;
              flex-wrap: wrap;
              gap: 16px;
              padding: 16px 20px;
              margin-bottom: 32px;
              background: #FFFFFF;
              border-radius: 20px;
              border: 1px solid rgba(43,29,20,0.10);
              box-shadow: 0 8px 28px rgba(43,29,20,0.07);
            }
            .shopbar-chips { display: flex; flex-wrap: wrap; gap: 10px; }
            .shopbar-chip {
              display: inline-flex; align-items: center; justify-content: center;
              height: 44px; padding: 0 22px; border-radius: 999px;
              font-size: 14.5px; font-weight: 600; white-space: nowrap; cursor: pointer;
              border: 1px solid rgba(91,58,33,0.18);
              background: #FFF6E8; color: #5B3A21;
              transition: all .2s ease;
            }
            .shopbar-chip.is-active {
              border-color: #2B1D14; background: #2B1D14; color: #FFF8EC;
              box-shadow: 0 6px 14px rgba(43,29,20,0.22);
            }
            .shopbar-tools { display: flex; align-items: center; gap: 12px; }
            .shopbar-search {
              display: flex; align-items: center; gap: 10px;
              height: 44px; padding: 0 18px; border-radius: 999px;
              background: #FFF6E8; border: 1px solid rgba(91,58,33,0.18); color: #5B3A21;
            }
            .shopbar-search input {
              border: none; outline: none; background: transparent;
              font-size: 14.5px; width: 170px; color: #2B1D14;
            }
            .shopbar-sort {
              height: 44px; padding: 0 16px; border-radius: 999px;
              border: 1px solid rgba(91,58,33,0.18); background: #FFF6E8;
              font-size: 14.5px; font-weight: 600; color: #2B1D14;
              cursor: pointer; outline: none;
            }

            /* ---------- Phones ---------- */
            @media (max-width: 767px) {
              .shopbar {
                flex-direction: column;
                align-items: stretch;
                flex-wrap: nowrap;
                gap: 10px;
                padding: 10px;
                margin-bottom: 20px;
                border-radius: 16px;
                box-shadow: 0 4px 14px rgba(43,29,20,0.06);
              }
              /* chips: one swipeable row instead of wrapping */
              .shopbar-chips {
                flex-wrap: nowrap;
                gap: 8px;
                overflow-x: auto;
                -webkit-overflow-scrolling: touch;
                scrollbar-width: none;
                padding: 2px 2px 4px;
              }
              .shopbar-chips::-webkit-scrollbar { display: none; }
              .shopbar-chip {
                flex: 0 0 auto;
                height: 36px; padding: 0 16px; font-size: 13.5px;
              }
              /* search + sort share one row */
              .shopbar-tools { gap: 8px; }
              .shopbar-search {
                flex: 1 1 auto; min-width: 0; height: 40px; padding: 0 14px; gap: 8px;
              }
              .shopbar-search input { width: 100%; min-width: 0; font-size: 14px; }
              .shopbar-sort {
                flex: 0 0 auto; width: 128px; height: 40px; padding: 0 10px; font-size: 13px;
              }
            }
          `}</style>

          <div className="shopbar">
            {/* category chips */}
            <div className="shopbar-chips">
              {CHIPS.map(c => (
                <button
                  key={c.cat}
                  type="button"
                  onClick={() => selectCat(c.cat)}
                  className={`shopbar-chip${activeCat === c.cat ? ' is-active' : ''}`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* search + sort */}
            <div className="shopbar-tools">
              <div className="shopbar-search">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0 }}><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <input
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Search artwork..."
                />
              </div>
              <select
                className="shopbar-sort"
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
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
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
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
