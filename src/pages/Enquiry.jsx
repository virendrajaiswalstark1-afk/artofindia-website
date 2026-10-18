import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Eyebrow from '../components/Eyebrow.jsx';

// ✏️ EDIT THESE TWO LINES with your real details
const CONTACT_PHONE_DISPLAY = '+91 8878800215';
const CONTACT_PHONE_LINK = '+918878800215'; // digits only, no spaces
const CONTACT_EMAIL = 'artofindiamain@gmail.com';

export default function Enquiry() {
  const [params] = useSearchParams();
  const product = params.get('product');

  useEffect(() => {
    document.title = 'Enquiry — Art of India';
    // Jump to the top of the page. Without this, the browser keeps the scroll
    // position from the long product page, so this short page opens scrolled
    // down to the footer and the contact details look "missing".
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const subject = product
    ? `Enquiry: ${product}`
    : 'Enquiry: Bulk / Corporate / Special order';

  const body = product
    ? `Hello,\n\nI would like to enquire about "${product}".\n\nQuantity:\nCompany / Occasion (if any):\nDelivery city:\n\nThank you.`
    : `Hello,\n\nI would like to enquire about a bulk / corporate gift or special-price order.\n\nProduct(s):\nQuantity:\nCompany / Occasion (if any):\nDelivery city:\n\nThank you.`;

  const mailHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <section className="py-16">
      <div className="max-w-[1240px] mx-auto px-8 sm:px-5">

        <Link
          to="/shop"
          className="text-[13.5px] text-ink-faint inline-flex items-center gap-1.5"
        >
          ← Back to the collection
        </Link>

        <div className="mt-8 max-w-[720px]">
          <Eyebrow color="orange">Enquiry</Eyebrow>

          <h1 className="mt-3 text-[30px] sm:text-[38px] lg:text-[44px]">
            Corporate gifting &amp; special orders
          </h1>

          <p className="text-ink-soft mt-4 text-[15.5px] leading-relaxed">
            Looking for bulk gifts for your team, clients or an event? Want a
            special price on a larger order? Reach out to us directly and
            we'll get back to you with availability, timelines and the best
            price we can offer.
          </p>

          {product && (
            <p className="mt-4 inline-block text-[13.5px] bg-ivory-deep rounded-full py-2 px-4">
              Enquiring about: <strong>{product}</strong>
            </p>
          )}
        </div>

        {/* CONTACT CARDS */}
        <div className="grid sm:grid-cols-2 gap-5 mt-10 max-w-[720px]">

          <div className="bg-paper rounded-[18px] p-6 shadow-sm2">
            <span className="block font-mono text-[11px] uppercase text-ink-faint tracking-wide mb-2">
              Call us
            </span>
            <a
              href={`tel:${CONTACT_PHONE_LINK}`}
              className="text-[20px] font-bold text-maroon hover:underline"
            >
              {CONTACT_PHONE_DISPLAY}
            </a>
            <p className="text-ink-soft text-[13.5px] mt-2 leading-relaxed">
              Tap to call from your phone.
            </p>
          </div>

          <div className="bg-paper rounded-[18px] p-6 shadow-sm2">
            <span className="block font-mono text-[11px] uppercase text-ink-faint tracking-wide mb-2">
              Email us
            </span>
            <a
              href={mailHref}
              className="text-[20px] font-bold text-maroon hover:underline break-all"
            >
              {CONTACT_EMAIL}
            </a>
            <p className="text-ink-soft text-[13.5px] mt-2 leading-relaxed">
              Tap to open an email with the details pre-filled.
            </p>
          </div>

        </div>

        {/* WHAT TO SEND */}
        <div className="mt-8 max-w-[720px] bg-ivory-deep rounded-[18px] p-6 sm:p-7">
          <h4 className="text-base">What to include in your message</h4>
          <p className="text-ink-soft text-sm leading-relaxed mt-1.5">
            The product(s) you like, the quantity, your company or occasion,
            your delivery city and your expected date. This helps us reply
            with an accurate quote on the first go.
          </p>
        </div>

      </div>
    </section>
  );
}
