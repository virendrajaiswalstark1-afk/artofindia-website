import { Link } from 'react-router-dom';
import Ph from '../components/Ph.jsx';
import Eyebrow from '../components/Eyebrow.jsx';
import { IMAGES } from '../data/images.js';

const GALLERY_ITEMS = [
  { ph: 'ph-1', name: 'Royal Ganesha', cat: 'Lord Ganesh', catKey: 'ganesh' },
  { ph: 'ph-9', name: 'Bal Gopal Krishna', cat: 'Lord Krishna', catKey: 'krishna' },
  { ph: 'ph-3', name: 'Village at Dusk', cat: 'Decorative', catKey: 'decorative' },
  { ph: 'ph-6', name: 'Temple Jhumka Earrings', cat: 'Jewelry', catKey: 'jewelry' },
  { ph: 'ph-7', name: 'Temple Guardian', cat: 'Others', catKey: 'others' },
  { ph: 'ph-4', name: 'Divine Blessing Relief', cat: 'Lord Ganesh', catKey: 'ganesh' },
  { ph: 'ph-4', name: 'Radha Krishna Panel', cat: 'Lord Krishna', catKey: 'krishna' },
  { ph: 'ph-10', name: 'Terracotta Wall Mural', cat: 'Decorative', catKey: 'decorative' },
  { ph: 'ph-3', name: 'Kundan Choker Set', cat: 'Jewelry', catKey: 'jewelry' },
  { ph: 'ph-8', name: 'Nataraja', cat: 'Others', catKey: 'others' },
];

const PROCESS_STEPS = [
  {
    eyebrow: 'gold', num: '01 — Selection & Preparation', title: 'From Supari to a Canvas', ph: 'ph-1', reverse: false,
    body: "Every piece begins with choosing the right supari. The nut is carefully selected, prepared, and cleaned before the real work begins. Its small, hard surface becomes the artist's canvas. There is no room for careless cuts — the maker works slowly, understanding the natural shape of the supari and imagining what it can become. What looks like an ordinary nut at first is gradually prepared for a transformation that depends almost entirely on patience and a steady hand.",
  },
  {
    eyebrow: 'orange', num: '02 — Carving & Shaping', title: 'Carving a World by Hand', ph: 'ph-6', reverse: true,
    body: 'Once the surface is ready, the artisan begins carving. Using delicate hand tools, tiny cuts are made one after another to create the basic form of the design. Traditional motifs, objects, animals, and architectural forms can emerge from a surface only a few centimetres wide. The craft demands extraordinary control: a cut that is too deep can destroy the entire piece. Every movement is deliberate, turning a simple supari into a miniature work of art.',
  },
  {
    eyebrow: 'terracotta', num: '03 — Detailing & Finishing', title: 'Where the Smallest Details Matter', ph: 'ph-9', reverse: false,
    body: 'The final stage is where the character of the artwork truly appears. The artisan carefully refines the carved shapes, removes unwanted material, and works on the smallest details until the design becomes clear. Finishing requires the same patience as carving, because even the tiniest imperfection can change the appearance of the piece. When the work is finally complete, the humble supari has become something far more valuable — a record of skill, patience, and a craft carried forward through generations.',
  },
];

const TESTIMONIALS_GLIMPSE = [
  { quote: 'The craftsmanship is unbelievable. You can actually see the human touch in it.', product: 'Royal Ganesha', avatar: 'ph-4', initials: 'AS', who: 'Ananya Sharma', loc: 'Delhi, India' },
  { quote: "The Nataraja bronze arrived more beautiful than the photos. It's the centerpiece of our living room.", product: 'Nataraja', avatar: 'ph-7', initials: 'SM', who: 'Sara Mitchell', loc: 'London, UK' },
  { quote: "Reading the artisan's story before it arrived made it feel like a gift from a person, not a website.", product: 'Divine Blessing', avatar: 'ph-2', initials: 'PN', who: 'Priya Nambiar', loc: 'Bengaluru, India' },
];

function GalleryCard({ item, hidden = false }) {
  return (
    <Link
      to={`/shop?cat=${item.catKey}`}
      className="mcard relative w-[230px] flex-none block"
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
    >
      <Ph variant={item.ph} className="aspect-[4/5] rounded-2xl shadow-sm2" />
      <div className="mt-4 flex flex-col gap-0.5">
        <span className="font-serif font-semibold text-[15px] text-ink">{item.name}</span>
        <span className="font-mono text-[10.5px] uppercase tracking-wide text-ink-faint">{item.cat}</span>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="pt-16 pb-10 bg-gradient-to-b from-ivory-deep to-ivory">
        <div className="max-w-[1240px] mx-auto px-8 sm:px-5 text-center max-w-[760px]">
          <Eyebrow color="orange">A platform for art India almost forgot</Eyebrow>
          <h1 className="mt-4 text-[42px] sm:text-[56px] lg:text-[72px] leading-[1.03]">
            History, <span className="text-orange italic font-medium">Crafted by Hand</span>.
          </h1>
          <p className="text-lg sm:text-xl text-ink-soft max-w-[52ch] mx-auto mt-[22px] leading-relaxed">
            We search out handmade art that's fading from memory, or so deeply rooted it rarely leaves its own village — and help it, and the families behind it, be seen again.
          </p>
          <p className="text-lg sm:text-xl text-orange font-semibold mt-2.5 max-w-[52ch] mx-auto leading-relaxed">
            Every piece carries the hands, stories, and traditions of generations.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap mt-8">
            <Link to="/shop" className="inline-flex items-center gap-2 font-semibold text-[14.5px] py-3.5 px-6 rounded-full bg-orange text-white shadow-[0_10px_22px_rgba(232,103,43,0.32)] hover:-translate-y-0.5 transition-transform">
              Explore Our Art
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY MARQUEE */}
      <section className="py-16">
        <div className="max-w-[1240px] mx-auto px-8 sm:px-5">
          <div className="max-w-[680px] mb-12">
            <Eyebrow color="gold">Art we went looking for</Eyebrow>
            <h2 className="mt-3 text-[28px] sm:text-[36px] lg:text-[44px] leading-tight">A gallery, not just a shop.</h2>
            <p className="text-ink-soft text-[17px] leading-relaxed mt-3.5">
              Drag your eye across the collection — Each piece is made entirely by hand, with immense patience and care, and many are carved entirely from supari (areca nut).
            </p>
          </div>
        </div>
        <div className="gallery-marquee-wrap mt-9">
          <div className="gallery-marquee overflow-hidden py-2.5 pb-[26px]">
            <div className="marquee-track flex gap-[26px] w-max">
              {[...GALLERY_ITEMS, ...GALLERY_ITEMS].map((item, i) => (
                <GalleryCard key={i} item={item} hidden={i >= GALLERY_ITEMS.length} />
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto px-8 sm:px-5 mt-5">
          <p className="text-[12.5px] text-ink-faint font-mono">Hover to pause · tap any piece to shop its category</p>
        </div>
      </section>

      {/* NO TWO PIECES */}
      <section className="py-[88px]">
        <div className="max-w-[1240px] mx-auto px-8 sm:px-5 grid md:grid-cols-2 gap-9 md:gap-16 items-center">
          <div><Ph variant="ph-5" className="aspect-[4/3.2] shadow-md2" /></div>
          <div>
            <Eyebrow color="terracotta">Every piece has a story</Eyebrow>
            <h2 className="mt-3 text-[28px] sm:text-[36px] lg:text-[44px] leading-tight">No two pieces are ever quite the same.</h2>
            <p className="font-serif italic font-medium text-[22px] leading-relaxed text-ink mt-4">
              A handmade object carries the small imperfections of the person who made it — and that's exactly what makes it worth keeping.
            </p>
            <p className="text-ink-soft text-base leading-[1.7] mt-4">
              A slight asymmetry in a carved petal. A brushstroke that wanders half a millimeter off course. These aren't flaws — they're proof that a real person, with a real history, shaped this object with their own two hands. Nothing here comes off an assembly line, and nothing here will ever be made in quite the same way twice.
            </p>
          </div>
        </div>
      </section>

      {/* ROYAL HERITAGE SECTION — full bleed */}
      <section id="royal-history" className="royal-section relative overflow-hidden py-20 sm:py-[110px] text-[#E4E8F5] border-t border-b border-gold/45">
        <div className="max-w-[1240px] mx-auto px-8 sm:px-5 relative">
          <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-9 md:gap-[72px] items-center">
            <div className="relative aspect-[3/4] rounded-md p-3.5 bg-gradient-to-br from-[#8a6a1f] via-gold to-[#8a6a1f] shadow-[0_30px_70px_rgba(0,0,0,0.4)]">
              <div className="royal-portrait relative">
                <div className="frame-inner w-full h-full rounded-sm border border-white/45 relative overflow-hidden aspect-[3/4]">
                  <img
                    src={IMAGES.heroRoyalLegacy}
                    alt="A hand-carved supari (areca nut) sculpture from the Rewa Supari Art lineage"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-widest uppercase text-[#F3E3C4] bg-black/32 px-3.5 py-1.5 rounded whitespace-nowrap">
                  Supari Art — the Rewa lineage, continued today
                </span>
              </div>
            </div>
            <div>
              <Eyebrow dotColor="#E8B7C0" className="text-[#E8B7C0]">Where royalty met the hand of a craftsman</Eyebrow>
              <h2 className="text-white mt-3 text-[26px] sm:text-[34px] lg:text-[42px]">The royal legacy behind our Supari Art.</h2>
              <p className="font-serif italic text-[21px] text-white leading-relaxed mt-4">
                "He noticed something others might have overlooked — the intricate natural patterns hidden inside the humble areca nut."
              </p>
              <p className="text-[#C7CEEA] text-[15px] leading-[1.75] mt-4">
                Rewa is remembered as the Land of White Tigers — in 1951, Maharaja Martand Singh brought a rare white tiger named Mohan to the royal fort at Govindgarh, and his lineage became the ancestor of nearly every white tiger in captivity today. But around that same royal era, a quieter story was taking shape in the same court — not in the forest, but in the hands of a toy maker who served it.
              </p>
              <p className="text-[#C7CEEA] text-[15px] leading-[1.75] mt-4">
                By one family account, small supari pieces were already being made for the court of Maharaja Gulab Singh as early as 1932. Another account places the turning point in 1942: the King asked for a supari to be peeled, and while scraping away its outer layer, the craftsman noticed the intricate natural grain hidden inside — the beginning of a repertoire of nearly 40 designs.
              </p>
              <div className="flex gap-7 flex-wrap mt-[30px]">
                <div className="min-w-[120px]"><span className="font-serif font-bold text-[27px] text-gold block">1932</span><span className="font-mono text-[10.5px] uppercase tracking-wide text-[#9FA8CC] mt-1 block">First royal commission</span></div>
                <div className="min-w-[120px]"><span className="font-serif font-bold text-[27px] text-gold block">~40</span><span className="font-mono text-[10.5px] uppercase tracking-wide text-[#9FA8CC] mt-1 block">Original designs</span></div>
                <div className="min-w-[120px]"><span className="font-serif font-bold text-[27px] text-gold block">3</span><span className="font-mono text-[10.5px] uppercase tracking-wide text-[#9FA8CC] mt-1 block">Generations carving</span></div>
              </div>
              <div className="mt-6 p-4 sm:p-[18px] rounded-xl bg-white/[0.06] border-l-[3px] border-gold text-[13.5px] leading-relaxed text-[#C7CEEA]">
                This craft is documented by the Government of Rewa as a local handicraft, credited to the workshop's "hard labor and continuous research." Every piece in our collection is still made using the same hand tools used since the 1940s.
              </div>
              <Link to="/shop?cat=others" className="mt-7 inline-flex items-center gap-2 font-semibold text-[14.5px] py-3.5 px-6 rounded-full border border-white/40 bg-transparent text-white hover:border-white transition-colors">
                Shop the Supari Art Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS FLOW */}
      <section className="bg-ivory-deep rounded-[32px] mx-4 sm:mx-8 py-16 sm:py-[88px]">
        <div className="max-w-[1240px] mx-auto px-8 sm:px-5">
          <div className="max-w-[680px] mx-auto text-center mb-12">
            <Eyebrow dotColor="#2C3E8C" className="text-royal">Made by hands. Almost lost, then found.</Eyebrow>
            <h2 className="mt-3 text-[28px] sm:text-[36px] lg:text-[44px] leading-tight">Behind every piece, a workshop someone almost stopped visiting.</h2>
            <p className="text-ink-soft text-[17px] leading-relaxed mt-3.5">
              These are not factories. They're small family workshops — some well known, some we had to go looking for. Here's how one piece of Supari Art actually comes together, from raw nut to finished form.
            </p>
          </div>

          <div className="mt-14 flex flex-col gap-11 sm:gap-16">
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} className={`grid md:grid-cols-2 gap-9 md:gap-16 items-center ${step.reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>
                <div><Ph variant={step.ph} className="aspect-[4/3.4] shadow-md2" /></div>
                <div>
                  <Eyebrow color={step.eyebrow}>{step.num}</Eyebrow>
                  <h3 className="mt-2 text-[22px] sm:text-[26px] lg:text-[30px]">{step.title}</h3>
                  <p className="text-ink-soft text-base leading-[1.7] mt-3.5">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS GLIMPSE */}
      <section className="py-[88px]">
        <div className="max-w-[1240px] mx-auto px-8 sm:px-5">
          <div className="max-w-[680px] mx-auto text-center mb-12">
            <Eyebrow color="gold">Happy buyers</Eyebrow>
            <h2 className="mt-3 text-[28px] sm:text-[36px] lg:text-[44px] leading-tight">Loved by people, treasured for generations.</h2>
            <p className="text-ink-soft text-[17px] leading-relaxed mt-3.5">A few words from collectors who brought a piece of this story home.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {TESTIMONIALS_GLIMPSE.map((t, i) => (
              <div key={i} className="bg-paper rounded-[18px] p-[26px] shadow-sm2 flex flex-col gap-3.5">
                <div className="text-gold text-sm tracking-[2px]">★★★★★</div>
                <p className="text-[15px] leading-relaxed text-ink">"{t.quote}"</p>
                <div className="font-mono text-[11px] text-ink-faint uppercase tracking-wide">Purchased: {t.product}</div>
                <div className="flex items-center gap-3 mt-auto">
                  <Ph variant={t.avatar} className="w-11 h-11 rounded-full flex items-center justify-center text-white font-serif font-bold text-sm flex-shrink-0">{t.initials}</Ph>
                  <div><div className="text-sm font-semibold">{t.who}</div><div className="text-[12.5px] text-ink-faint">{t.loc}</div></div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-11">
            <Link to="/testimonials" className="inline-flex items-center gap-2 font-semibold text-[14.5px] py-3.5 px-6 rounded-full border border-ink/[0.18] bg-paper text-ink hover:border-ink">
              Read More Stories
            </Link>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-[88px]">
        <div className="max-w-[1240px] mx-auto px-8 sm:px-5 text-center">
          <h2 className="text-2xl sm:text-3xl max-w-[28ch] mx-auto">Ready to bring home a piece of art that almost went unnoticed?</h2>
          <div className="flex gap-3.5 justify-center flex-wrap mt-7">
            <Link to="/shop" className="inline-flex items-center gap-2 font-semibold text-[14.5px] py-3.5 px-6 rounded-full bg-orange text-white shadow-[0_10px_22px_rgba(232,103,43,0.32)] hover:-translate-y-0.5 transition-transform">
              Explore the Collection
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
