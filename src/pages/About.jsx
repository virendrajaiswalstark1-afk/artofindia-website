import Ph from '../components/Ph.jsx';
import Eyebrow from '../components/Eyebrow.jsx';

const TIMELINE = [
  { num: '01', label: 'Search', title: "We go looking for what's fading", body: "We seek out craft forms that are little-known outside their own region, or that have quietly shrunk to just one or two remaining family workshops." },
  { num: '02', label: 'Learn', title: 'We sit with the family, not just the product', body: "Before anything goes online, we spend time understanding where the craft came from, who's still practicing it, and what it actually takes to make." },
  { num: '03', label: 'Introduce', title: "We bring the work — and its story — to new eyes", body: "Every piece keeps its real history attached. We'd rather someone understand what they're buying than just see a product photo." },
  { num: '✦', label: 'Sustain', title: 'We help the craft keep going', body: 'Attention and income are what keep a fading art alive. Every purchase is a small vote that this craft, and this family, should continue.' },
];

export default function About() {
  return (
    <>
      <section className="py-16 bg-ivory-deep">
        <div className="max-w-[780px] mx-auto px-8 sm:px-5 text-center">
          <Eyebrow color="terracotta">About us</Eyebrow>
          <h1 className="mt-3.5 text-[30px] sm:text-[42px] lg:text-[54px]">We go looking for the art India is forgetting.</h1>
          <p className="text-lg sm:text-xl text-ink-soft mx-auto mt-4 leading-relaxed">
            We're a platform that searches out art from India that people have started to forget, or that is so deeply rooted it rarely travels beyond its own village — and we introduce that work to the world.
          </p>
        </div>
      </section>

      

      <section className="py-[88px]">
        <div className="max-w-[1240px] mx-auto px-8 sm:px-5 grid md:grid-cols-2 gap-9 md:gap-16 items-center">
          <div><Ph src="/images/products/lord_Ganesh/lord-ganesh-im10-2500-10inc.jpg" className="aspect-[4/3.2] shadow-md2" /></div>
          <div>
            <Eyebrow color="orange">Why we exist</Eyebrow>
            <h2 className="mt-3 text-[26px] sm:text-[34px] lg:text-[42px] leading-tight">Some art doesn't disappear because it stops being beautiful. It disappears because no one is looking.</h2>
            <p className="text-ink-soft text-base leading-[1.7] mt-4">
              A craft like Rewa's supari carving can survive four generations in a royal court and still come within a family's reach of dying out, simply because too few people beyond one town ever heard of it. That's the gap Art of india tries to close — not by inventing new craft, but by finding the art that's already there: rooted, real, and often overlooked.
            </p>
          </div>
        </div>
      </section>

      <section className="py-[88px]">
        <div className="max-w-[1240px] mx-auto px-8 sm:px-5 grid md:grid-cols-2 gap-9 md:gap-16 items-center md:[&>*:first-child]:order-2">
          <div><Ph src="/images/products/lord_Ganesh/lord-ganesh-im03-1800-in-9.jpg" className="aspect-[4/3.2] shadow-md2" /></div>
          <div>
            <Eyebrow color="gold">What we actually do</Eyebrow>
            <h2 className="mt-3 text-[26px] sm:text-[34px] lg:text-[42px] leading-tight">We help the art grow — and the family behind it.</h2>
            <p className="text-ink-soft text-base leading-[1.7] mt-4">
              Every piece we bring onto Art of india comes from a real workshop, usually a family one. We don't mass-produce it, redesign it, or simplify it for speed. We introduce it as it is — the same tools, the same techniques, the same hands — to people who wouldn't otherwise have found it. When a piece sells, that income goes back to the artisan's family, which is often what keeps a fading craft alive one more generation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory-deep rounded-[32px] mx-4 sm:mx-8 py-16 sm:py-[88px]">
        <div className="max-w-[1240px] mx-auto px-8 sm:px-5">
          <div className="max-w-[680px] mb-12">
            <Eyebrow dotColor="#2C3E8C" className="text-royal">How we work</Eyebrow>
            <h2 className="mt-3 text-[28px] sm:text-[36px] lg:text-[44px] leading-tight">Search, learn, introduce, sustain.</h2>
          </div>
          <div className="relative mt-5">
            <div className="absolute left-[29px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-gold via-orange via-royal to-emerald" />
            {TIMELINE.map((g, i) => (
              <div key={i} className={`relative pl-[76px] ${i === TIMELINE.length - 1 ? 'pb-0' : 'pb-11'}`}>
                <div className="absolute left-4 top-0.5 w-7 h-7 rounded-full bg-paper border-2 border-orange flex items-center justify-center font-mono text-[10px] font-bold text-orange">{g.num}</div>
                <span className="font-mono text-[11.5px] text-ink-faint uppercase tracking-wide">{g.label}</span>
                <h3 className="text-[21px] mt-1">{g.title}</h3>
                <p className="text-ink-soft text-[15.5px] mt-2 max-w-[56ch] leading-[1.65]">{g.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
