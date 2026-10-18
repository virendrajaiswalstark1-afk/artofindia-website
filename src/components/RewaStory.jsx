import { Link } from 'react-router-dom';
import Eyebrow from './Eyebrow.jsx';

// The Rewa heritage story (moved here from the Shop page).
// Shown on the product detail page.
export default function RewaStory() {
  return (
    <section className="py-16">
      <div className="max-w-[1240px] mx-auto px-8 sm:px-5">
        <div
          id="rewa-story"
          className="scroll-mt-28 heritage-story-bg grid md:grid-cols-[0.85fr_1.15fr] gap-8 md:gap-14 items-center text-[#F3E2E6] rounded-[28px] p-8 sm:p-14"
        >
          <div className="aspect-[4/4.6] rounded-[18px] overflow-hidden shadow-lg2">
            <img
              src="/images/heritage/rewa-heritage.jpg"
              alt="Hand-carved supari (areca nut) sculptures from the Kunder family's Rewa workshop"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <Eyebrow dotColor="#E8B7C0" className="text-[#E8B7C0]">
              Where royalty met the hand of an artisan
            </Eyebrow>

            <h2 className="text-white mt-3 text-2xl sm:text-3xl lg:text-[34px]">
              The Rewa legacy behind our Supari Art.
            </h2>

            <p className="font-serif italic text-[19px] text-white leading-[1.55] mt-3.5">
              "He noticed something others might have overlooked — the intricate natural patterns hidden inside the humble areca nut."
            </p>

            <p className="text-[#E8D3D7] text-[15px] leading-[1.7] mt-3.5">
              Rewa is remembered as the Land of White Tigers — in 1951, Maharaja Martand Singh brought a rare white tiger named Mohan to the royal fort at Govindgarh, and his lineage went on to become the ancestor of nearly every white tiger in captivity today. But around that same royal era, a quieter story was taking shape in the same court — not in the forest, but in the hands of a toy maker named Ram Siya Kunder.
            </p>

            <p className="text-[#E8D3D7] text-[15px] leading-[1.7] mt-3.5">
              By one family account, Ram Siya was already crafting small supari pieces for the court of Maharaja Gulab Singh as early as 1932 — sindoor boxes made from areca nut, rewarded with fifty rupees at the durbar. Another account, recorded in detail, places the turning point in 1942: the King asked him to peel a supari, and while scraping away its outer layer, he noticed the intricate natural grain hidden inside. He began carving it — a tea set, a kangaroo, a mandir — and built a repertoire of around 40 designs. Ram Siya was later honored by the President of India for his work. He passed away in 1993; his family, the Kunders, still carve in Rewa today.
            </p>

            <div className="mt-[18px] p-4 sm:p-[18px] rounded-xl bg-white/[0.08] border-l-[3px] border-[#E8B7C0] text-[13.5px] leading-relaxed text-[#E8D3D7]">
              This craft is documented by the Government of Rewa as a local handicraft, credited to the Kunder family's "hard labor and continuous research." Every piece in our Supari Art collection is made by their family workshop, using the same hand tools used since the 1940s.
            </div>

            {/* Opens the Shop page already filtered to the Supari Art ("others") category */}
            <Link
              to="/shop?cat=others"
              className="mt-[22px] inline-flex items-center gap-2 font-semibold text-[14.5px] py-3.5 px-6 rounded-full border border-white/40 bg-transparent text-white hover:border-white transition-colors"
            >
              Shop the Supari Art Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
