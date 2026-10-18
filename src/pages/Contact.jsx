import { useEffect } from 'react';
import ContactDetails from '../components/ContactDetails.jsx';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact Us — Art of India';
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <section style={{ padding: '56px 20px 72px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* heading */}
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 40px' }}>
          <h1
            style={{
              margin: 0,
              color: '#6B1F2E',
              fontSize: 'clamp(28px, 3.6vw, 42px)',
              lineHeight: 1.15,
              letterSpacing: '-0.015em',
            }}
          >
            Contact <span className="italic" style={{ color: '#D2561C' }}>Us</span>
          </h1>

          <div
            aria-hidden="true"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, margin: '20px 0 18px' }}
          >
            <span style={{ display: 'block', width: 72, height: 1, background: 'linear-gradient(to right, rgba(210,86,28,0), rgba(210,86,28,0.8))' }} />
            <span style={{ color: '#D2561C', fontSize: 14, lineHeight: 1 }}>✦</span>
            <span style={{ display: 'block', width: 72, height: 1, background: 'linear-gradient(to left, rgba(210,86,28,0), rgba(210,86,28,0.8))' }} />
          </div>

          <p style={{ margin: 0, color: '#5B3A21', fontSize: 17, lineHeight: 1.7, fontWeight: 500 }}>
            Feel free to contact us — we are happy to serve you.
          </p>
          <p style={{ margin: '10px 0 0', color: '#8A6F5A', fontSize: 15, lineHeight: 1.7 }}>
            Questions about a piece, an order or a custom request? Reach us using
            any of the details below and we will get back to you as soon as possible.
          </p>
        </div>

        <ContactDetails
          mailSubject="Enquiry from the website"
          mailBody={'Hello,\n\nI would like to get in touch regarding:\n\nName:\nPhone:\n\nThank you.'}
        />
      </div>
    </section>
  );
}
