import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PRODUCTS, money } from '../data/products.js';
import { useCart } from '../context/CartContext.jsx';
import Ph from '../components/Ph.jsx';
import Eyebrow from '../components/Eyebrow.jsx';
import CategoryTag from '../components/CategoryTag.jsx';
import ProductCard from '../components/ProductCard.jsx';

export default function Product() {
  const { id } = useParams();
  const { add } = useCart();
  const [qty, setQty] = useState(1);

  const numericId = parseInt(id, 10) || PRODUCTS[0].id;
  const p = PRODUCTS.find(p => p.id === numericId) || PRODUCTS[0];
  const isSupari = p.heritage === true;

  useEffect(() => {
    document.title = p.name + ' — Artify';
    setQty(1);
  }, [p.id, p.name]);

  const related = PRODUCTS.filter(x => x.cat === p.cat && x.id !== p.id).slice(0, 4);

  return (
    <>
      <section className="py-16">
        <div className="max-w-[1240px] mx-auto px-8 sm:px-5">
          <Link to="/shop" className="text-[13.5px] text-ink-faint inline-flex items-center gap-1.5">← Back to the collection</Link>
        </div>
      </section>

      <section className="pt-3 pb-16">
        <div className="max-w-[1240px] mx-auto px-8 sm:px-5">
          <div className="grid md:grid-cols-2 gap-9 md:gap-16 items-start">
            <div>
              <Ph variant={p.ph} className="aspect-square shadow-md2" />
              <div className="flex gap-3 mt-3.5">
                <Ph variant={p.ph} className="w-[74px] h-[74px] rounded-[10px] cursor-pointer border-2 border-orange" />
                <Ph variant={`ph-${(p.id % 10) + 1}`} className="w-[74px] h-[74px] rounded-[10px] cursor-pointer border-2 border-transparent" />
                <Ph variant={`ph-${((p.id + 3) % 10) + 1}`} className="w-[74px] h-[74px] rounded-[10px] cursor-pointer border-2 border-transparent" />
              </div>
            </div>
            <div>
              <CategoryTag cat={p.cat} label={p.catLabel} />
              <h1 className="mt-1 text-[28px] sm:text-[33px] lg:text-[38px]">{p.name}</h1>
              <div className="flex items-center gap-3.5 mt-3">
                <span className="font-mono font-bold text-2xl">{money(p.price)}</span>
                <span className="text-xs font-bold text-emerald bg-emerald/10 py-[5px] px-3 rounded-full">In Stock</span>
              </div>
              <p className="text-ink-soft mt-3.5 text-[15.5px] leading-relaxed">{p.desc}</p>
              <div className="grid grid-cols-2 gap-3.5 gap-x-6 my-6 p-[22px] bg-ivory-deep rounded-xl">
                <div><span className="block font-mono text-[11px] uppercase text-ink-faint tracking-wide mb-1">Material</span><span className="text-[14.5px] font-semibold">{p.material}</span></div>
                <div><span className="block font-mono text-[11px] uppercase text-ink-faint tracking-wide mb-1">Dimensions</span><span className="text-[14.5px] font-semibold">{p.size}</span></div>
                <div><span className="block font-mono text-[11px] uppercase text-ink-faint tracking-wide mb-1">Handmade Time</span><span className="text-[14.5px] font-semibold">{p.time}</span></div>
                <div><span className="block font-mono text-[11px] uppercase text-ink-faint tracking-wide mb-1">Origin</span><span className="text-[14.5px] font-semibold">{p.tradition}</span></div>
              </div>
              <div className="flex items-center gap-4 my-[22px]">
                <div className="flex items-center border border-ink/[0.18] rounded-full overflow-hidden">
                  <button onClick={() => setQty(q => Math.max(1, q - 1))} aria-label="Decrease quantity" className="w-[38px] h-[38px] border-none bg-none text-base">−</button>
                  <span className="w-[34px] text-center font-semibold">{qty}</span>
                  <button onClick={() => setQty(q => q + 1)} aria-label="Increase quantity" className="w-[38px] h-[38px] border-none bg-none text-base">+</button>
                </div>
                <span className="text-[13px] text-ink-faint">Only handmade pieces — quantities are limited</span>
              </div>
              <div className="flex gap-3">
                <button onClick={() => add(p.id, qty)} className="flex-1 justify-center inline-flex items-center gap-2 font-semibold text-[14.5px] py-3.5 px-6 rounded-full border border-ink/[0.18] bg-paper text-ink hover:border-ink">
                  Add to Cart
                </button>
                <button onClick={() => add(p.id, qty)} className="flex-1 justify-center inline-flex items-center gap-2 font-semibold text-[14.5px] py-3.5 px-6 rounded-full bg-orange text-white shadow-[0_10px_22px_rgba(232,103,43,0.32)] hover:-translate-y-0.5 transition-transform">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          {/* STORY */}
          <div className="mt-[70px]">
            <Eyebrow color="orange">The story behind this piece</Eyebrow>
            <p className="font-serif italic text-xl text-ink-soft mt-3.5 max-w-[64ch] leading-relaxed">"{p.story}"</p>

            {isSupari ? (
              <div className="mt-[60px] flex gap-5 items-start bg-ivory-deep rounded-[18px] p-6 sm:p-7">
                <div className="w-[42px] h-[42px] rounded-full flex-shrink-0 bg-gradient-to-br from-maroon to-maroon-deep flex items-center justify-center text-white text-[17px]">✦</div>
                <div>
                  <h4 className="text-base">Part of the Rewa legacy</h4>
                  <p className="text-ink-soft text-sm leading-relaxed mt-1.5">This piece continues a craft first shaped in the royal court of Rewa in the 1930s–40s, by a toy maker named Ram Siya Kunder — carried on today by his family, the Kunders.</p>
                  <Link to="/shop#rewa-story" className="text-[13px] font-bold text-maroon underline whitespace-nowrap">Read the full story →</Link>
                </div>
              </div>
            ) : (
              <div className="mt-[60px] flex gap-5 items-start bg-ivory-deep rounded-[18px] p-6 sm:p-7">
                <div className="w-[42px] h-[42px] rounded-full flex-shrink-0 bg-gradient-to-br from-maroon to-maroon-deep flex items-center justify-center text-white text-[17px]">✦</div>
                <div>
                  <h4 className="text-base">Rooted in a real heritage</h4>
                  <p className="text-ink-soft text-sm leading-relaxed mt-1.5">Every piece in this collection continues a documented artisan tradition — much like our Supari Art collection, born in the royal court of Rewa in the 1930s–40s.</p>
                  <Link to="/shop#rewa-story" className="text-[13px] font-bold text-maroon underline whitespace-nowrap">Read that story →</Link>
                </div>
              </div>
            )}
          </div>

          {/* HOW IT WAS MADE */}
          <div>
            <Eyebrow color="gold" className="mt-[60px] inline-flex">How it was made</Eyebrow>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-9">
              <div className="bg-paper rounded-[10px] p-5 shadow-sm2"><span className="font-mono font-bold text-[13px] text-orange-deep">01</span><h4 className="mt-2.5 text-[16.5px]">Selected</h4><p className="text-[13.5px] text-ink-soft mt-1.5 leading-relaxed">{p.material.split(' ').slice(-1)[0]} is chosen and inspected for grain, density, and character.</p></div>
              <div className="bg-paper rounded-[10px] p-5 shadow-sm2"><span className="font-mono font-bold text-[13px] text-orange-deep">02</span><h4 className="mt-2.5 text-[16.5px]">Shaped</h4><p className="text-[13.5px] text-ink-soft mt-1.5 leading-relaxed">The rough form is established, setting proportion and posture.</p></div>
              <div className="bg-paper rounded-[10px] p-5 shadow-sm2"><span className="font-mono font-bold text-[13px] text-orange-deep">03</span><h4 className="mt-2.5 text-[16.5px]">Detailed</h4><p className="text-[13.5px] text-ink-soft mt-1.5 leading-relaxed">Fine tools bring in expression, texture, and ornament — the slowest stage.</p></div>
              <div className="bg-paper rounded-[10px] p-5 shadow-sm2"><span className="font-mono font-bold text-[13px] text-orange-deep">04</span><h4 className="mt-2.5 text-[16.5px]">Finished</h4><p className="text-[13.5px] text-ink-soft mt-1.5 leading-relaxed">Polished, sealed, and inspected by hand before it ever reaches a box.</p></div>
            </div>
          </div>

          {/* RISK STORY */}
          <div className="mt-[70px]">
            <Eyebrow color="terracotta">A delicate, unforgiving craft</Eyebrow>
            <h2 className="mt-3 text-2xl sm:text-3xl">Handmade also means high-risk.</h2>
            <p className="font-serif italic text-xl text-ink-soft mt-3.5 max-w-[66ch] leading-relaxed">This is not a craft with a reset button. Every finished piece represents every attempt that didn't go wrong.</p>
            <div className="mt-9 flex flex-col">
              {isSupari ? (
                <>
                  <RiskBeat icon="✂" title="There is no undo">A supari is a single small, dense nut — once the vice grips it and the first cut is made, the shape underneath is fixed. Cut too deep and the whole nut is ruined; there's no second piece hiding inside.</RiskBeat>
                  <RiskBeat icon="🪡" title="Detail work with a needle">Fine lines are engraved with a needle-like tool called a <em>munna</em>, and shaped with a small curved knife called a <em>tagi</em> — tools sharp enough that a moment's distraction can cost hours of work.</RiskBeat>
                  <RiskBeat icon="🖐" title="The material decides some of it">Every areca nut has its own grain and speckle pattern. The artisan doesn't fully control the outcome — part of the skill is reading the nut and working with what it gives you.</RiskBeat>
                  <RiskBeat icon="✓" title="Assembled and finished by hand" last>Finished pieces are filed smooth, joined with glue where needed, and painted or varnished — all without the forgiveness a larger material would allow.</RiskBeat>
                </>
              ) : (
                <>
                  <RiskBeat icon="✂" title="Mistakes cannot be undone">{p.material} doesn't forgive a wrong cut. Once material is removed, it's gone — there's no adding it back, only starting the section again.</RiskBeat>
                  <RiskBeat icon="🖐" title="Steady hands, slow hours">The maker works in short, controlled movements for hours at a time — the kind of concentration that can't be rushed or automated.</RiskBeat>
                  <RiskBeat icon="✓" title="Finished entirely by feel" last>The final polish and finish is judged by hand and eye, piece by piece — the same way it's been done throughout the {p.tradition.toLowerCase()} tradition.</RiskBeat>
                </>
              )}
            </div>
          </div>

          {/* CERTIFICATE */}
          <div className="mt-[50px] border-[1.5px] border-dashed border-ink/[0.18] rounded-[18px] p-6 sm:p-8 flex gap-5 items-start">
            <div className="w-14 h-14 rounded-full flex-shrink-0 bg-gradient-to-br from-gold to-orange flex items-center justify-center text-white text-[22px]">✓</div>
            <div>
              <h4 className="text-[17px]">Certificate of Authenticity</h4>
              <p className="text-ink-soft text-sm mt-1.5 leading-relaxed">Every piece in this collection is handmade and one of a kind. Small variations in shape, grain, and finish are not flaws — they're proof of the human hand behind it. This piece ships with a signed certificate naming the person who made it.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1240px] mx-auto px-8 sm:px-5">
          <div className="mt-20 mb-12">
            <Eyebrow color="emerald">You may also love</Eyebrow>
            <h2 className="mt-3 text-[28px] sm:text-[36px] lg:text-[44px]">More from this collection.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {related.map(r => <ProductCard key={r.id} product={r} />)}
          </div>
        </div>
      </section>
    </>
  );
}

function RiskBeat({ icon, title, children, last = false }) {
  return (
    <div className={`grid grid-cols-[56px_1fr] gap-5 py-6 border-t border-ink/10 ${last ? 'border-b' : ''}`}>
      <div className="w-[42px] h-[42px] rounded-full flex items-center justify-center bg-paper border-[1.5px] border-ink/[0.18] text-[17px]">{icon}</div>
      <div><h4 className="text-[16.5px]">{title}</h4><p className="text-ink-soft text-[14.5px] leading-relaxed mt-1.5 max-w-[62ch]">{children}</p></div>
    </div>
  );
}
