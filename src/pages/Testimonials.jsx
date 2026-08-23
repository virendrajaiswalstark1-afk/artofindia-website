import { useState } from 'react';
import Ph from '../components/Ph.jsx';
import Eyebrow from '../components/Eyebrow.jsx';

const TESTIMONIALS = [
  { quote: "I've bought a lot of decor over the years — nothing compares to owning something an actual person carved by hand.", product: 'Heritage Elephant', avatar: 'ph-2', initials: 'RK', who: 'Rohan Kapoor', loc: 'Mumbai, India' },
  { quote: "The Nataraja bronze arrived more beautiful than the photos. It's now the centerpiece of our living room.", product: 'Nataraja', avatar: 'ph-7', initials: 'SM', who: 'Sara Mitchell', loc: 'London, UK' },
  { quote: "Reading the artisan's story before it arrived made it feel like a gift from a person, not a purchase from a website.", product: 'Divine Blessing', avatar: 'ph-4', initials: 'PN', who: 'Priya Nambiar', loc: 'Bengaluru, India' },
  { quote: "We gifted the Blessing Diya Set at my sister's wedding — every guest asked where it was from.", product: 'Blessing Diya Set', avatar: 'ph-9', initials: 'VJ', who: 'Vikram Joshi', loc: 'Pune, India' },
  { quote: 'The certificate of authenticity and the artisan\'s photo made this feel like buying from a gallery, not a warehouse.', product: 'Temple Guardian', avatar: 'ph-1', initials: 'EC', who: 'Emily Carter', loc: 'Toronto, Canada' },
  { quote: "Fast shipping, careful packaging, and a piece that feels like it belongs in a museum, not my hallway — though it's perfect there too.", product: 'Village at Dusk', avatar: 'ph-3', initials: 'AD', who: 'Arjun Desai', loc: 'Ahmedabad, India' },
  { quote: "I've ordered three pieces now, each from a different artisan. Every one arrived with its own personality.", product: 'Carved Wall Panel', avatar: 'ph-6', initials: 'NT', who: 'Naomi Tan', loc: 'Singapore' },
  { quote: 'My grandmother had a piece just like this growing up. Finding Artify felt like reconnecting with that memory.', product: 'Ancestral Mask', avatar: 'ph-8', initials: 'KI', who: 'Kavya Iyer', loc: 'Chennai, India' },
];

export default function Testimonials() {
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', product: '', text: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({ name: '', product: '', text: '' });
    setRating(5);
    setSubmitted(true);
    e.target.reset();
  };

  return (
    <>
      <section className="py-16 bg-ivory-deep">
        <div className="max-w-[760px] mx-auto px-8 sm:px-5 text-center">
          <Eyebrow color="gold">Happy buyers</Eyebrow>
          <h1 className="mt-3.5 text-[32px] sm:text-[42px] lg:text-[52px] leading-tight">Loved by People.<br />Treasured for Generations.</h1>
          <p className="text-lg sm:text-xl text-ink-soft mx-auto mt-4 leading-relaxed">
            Our happiest moments are when a piece we went looking for becomes part of someone's home — and, in turn, keeps an artisan family's craft going.
          </p>
        </div>
      </section>

      <section className="py-[88px]">
        <div className="max-w-[1240px] mx-auto px-8 sm:px-5">
          <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-14 items-center bg-ivory-deep rounded-[28px] p-8 sm:p-14 mb-16">
            <Ph variant="ph-4" className="aspect-[4/4.6] shadow-md2" />
            <div>
              <div className="text-gold text-sm tracking-[2px]">★★★★★</div>
              <p className="font-serif italic text-xl sm:text-2xl lg:text-3xl leading-relaxed mt-3">
                "The craftsmanship is unbelievable. It feels completely different from something bought from a normal store. You can actually see the human touch in it."
              </p>
              <div className="font-bold text-[15px] mt-5">Ananya Sharma</div>
              <div className="text-ink-faint text-[13.5px] mt-0.5">Delhi, India · Purchased Royal Ganesha</div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
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
        </div>
      </section>

      <section className="bg-ivory-deep pt-20 pb-[88px]">
        <div className="max-w-[600px] mx-auto px-8 sm:px-5 text-center">
          <Eyebrow color="orange">Your stories matter</Eyebrow>
          <h2 className="mt-3.5">Share your experience.</h2>
          <p className="text-ink-soft mt-3 text-[15.5px]">Tell us — and future collectors — about the piece that became part of your story.</p>
        </div>
        <div className="max-w-[1240px] mx-auto px-8 sm:px-5 mt-10">
          <form onSubmit={handleSubmit} className="bg-paper rounded-[18px] p-6 sm:p-9 shadow-sm2 max-w-[640px] mx-auto">
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="rName" className="text-[13px] font-semibold block mb-1.5">Your name</label>
                <input id="rName" type="text" placeholder="Full name" required
                  value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full py-[11px] px-3.5 rounded-[10px] border border-ink/[0.18] text-sm bg-ivory" />
              </div>
              <div>
                <label htmlFor="rProduct" className="text-[13px] font-semibold block mb-1.5">Product purchased</label>
                <input id="rProduct" type="text" placeholder="e.g. Royal Ganesha" required
                  value={form.product} onChange={e => setForm(f => ({ ...f, product: e.target.value }))}
                  className="w-full py-[11px] px-3.5 rounded-[10px] border border-ink/[0.18] text-sm bg-ivory" />
              </div>
            </div>
            <div className="mb-4">
              <label className="text-[13px] font-semibold block mb-1.5">Your rating</label>
              <div className="flex gap-1.5">
                {[1, 2, 3, 4, 5].map(n => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setRating(n)}
                    className={`bg-none border-none text-2xl ${n <= rating ? 'text-gold' : 'text-ink/[0.18]'}`}
                  >★</button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="rText" className="text-[13px] font-semibold block mb-1.5">Your review</label>
              <textarea id="rText" placeholder="Tell us about the piece and what it means to you" required
                value={form.text} onChange={e => setForm(f => ({ ...f, text: e.target.value }))}
                className="w-full py-[11px] px-3.5 rounded-[10px] border border-ink/[0.18] text-sm bg-ivory resize-y min-h-[90px]" />
            </div>
            <div className="mb-1.5">
              <label htmlFor="rPhoto" className="text-[13px] font-semibold block mb-1.5">Photo (optional)</label>
              <input id="rPhoto" type="file" accept="image/*" className="w-full text-sm" />
            </div>
            <button type="submit" className="w-full justify-center inline-flex items-center gap-2 font-semibold text-[14.5px] py-3.5 px-6 rounded-full bg-orange text-white shadow-[0_10px_22px_rgba(232,103,43,0.32)] mt-3.5">
              Share Your Experience
            </button>
            {submitted && (
              <div className="bg-emerald/10 text-emerald py-3.5 px-4.5 rounded-[10px] text-sm font-semibold mt-4">
                Thank you — your story has been submitted for review.
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
