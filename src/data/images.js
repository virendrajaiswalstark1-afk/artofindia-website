/* =========================================================
   ARTIFY — IMAGE MANIFEST
   This is the ONE file to edit to change the site's photos.

   How to use:
   1. Drop your real photo somewhere under /public/images/
      (e.g. /public/images/products/royal-ganesha.jpg).
   2. Replace the matching line in IMAGES below with that path, e.g.
        'ph-1': '/images/products/royal-ganesha.jpg',
   3. Save. That image now shows everywhere that key is used —
      no other file needs to change.

   PIC_PHOTOS is a full catalog of every photo that was supplied in the
   original "Pic" folder (copied into /public/images/products/, with
   web-safe file names). The 10 keys in IMAGES below already use the
   best-matching ones. Anything still listed only in PIC_PHOTOS is not
   shown on the site yet — copy its path into IMAGES (or straight into
   a product's "ph" field in src/data/products.js) to put it to use.
   ========================================================= */

const DIR = '/images/products/';

export const PIC_PHOTOS = {
  ganesh: [
    DIR + 'ganesh-ji.jpg',
    DIR + 'lord-ganesh2000.jpg',
    DIR + 'lord-ganesh-09-2500-10-inch.jpg',
    DIR + 'lord-ganesh-17-3500-12-inc.jpg',
    DIR + 'lord-ganesh-17-3800-12-inc.jpg',
    DIR + 'lord-ganesh-im-08-2000-inc-9-inc.jpg',
    DIR + 'lord-ganesh-im01-1600-inc-9-inc.jpg',
    DIR + 'lord-ganesh-im03-1800-in-9.jpg',
    DIR + 'lord-ganesh-im04-1800-inc-9-inc.jpg',
    DIR + 'lord-ganesh-im06-2000-inc-7.jpg',
    DIR + 'lord-ganesh-im10-2500-10inc.jpg',
    DIR + 'lord-ganesh-im11-2500-10inch.jpg',
    DIR + 'lord-ganesh-im12-1-2500.jpg',
    DIR + 'lord-ganesh-im12-2500.jpg',
    DIR + 'lord-ganesh-im13-1-2800.jpg',
    DIR + 'lord-ganesh-im13-2800.jpg',
    DIR + 'lord-ganesh-im13-3-2800.jpg',
    DIR + 'lord-ganesh-im14-1-2800-inc-10.jpg',
    DIR + 'lord-ganesh-im14-2800-inc-10.jpg',
    DIR + 'lord-ganesh-im15-1-3000-inc-9.jpg',
    DIR + 'lord-ganesh-im15-3000-inc-9.jpg',
    DIR + 'lord-ganesh-im18-1.jpg',
    DIR + 'lord-ganesh-im18.jpg',
    DIR + 'lord-ganesh-im22.jpg',
    DIR + 'lord-ganesh-im23.jpg',
    DIR + 'lord-ganesh-im24.jpg',
    DIR + 'lord-ganesh-im25.jpg',
    DIR + 'lord-ganesh-im26.jpg',
  ],
  krishna: [
    DIR + 'radhakrishna-im05-2000-7inch.jpg',
    DIR + 'radha-krishna-im16-3200-inc-11.jpg',
    DIR + 'radha-krishan.jpg',
    DIR + 'krihsna-ji-im02-1800.jpg',
  ],
  jewelry: [
    DIR + 'jewellery-im19.jpg',
    DIR + 'jewellery-im20.jpg',
    DIR + 'rings.jpg',
  ],
  others: [
    DIR + 'others-im19.jpg',
    DIR + 'others-im21.jpg',
    DIR + 'ravana10-inch-2800.jpg',
    DIR + 'turtal.jpg',
    DIR + 'turtal2.jpg',
    DIR + '885003a8-371b-4d7f-94bc-b1a3b436f81b.jpg',
  ],
};

export const IMAGES = {
  // ph-1 — Products: "Royal Ganesha" (#1), "Ancestral Mask" (#12),
  // "Rewa Miniature Tea Set" (#13). Home: gallery "Royal Ganesha",
  // process step "From Supari to a Canvas". Testimonials avatar: Emily Carter.
  'ph-1': PIC_PHOTOS.ganesh[0],

  // ph-2 — Products: "Heritage Elephant" (#2), "Sacred Peacock" (#11).
  // Home testimonial avatar: Priya Nambiar. Testimonials avatar: Rohan Kapoor.
  'ph-2': PIC_PHOTOS.others[0],

  // ph-3 — Products: "Village at Dusk" (#5), "Kundan Choker Set" (#18).
  // Home: gallery "Village at Dusk" & "Kundan Choker Set". About: photo grid.
  // Testimonials avatar: Arjun Desai.
  'ph-3': PIC_PHOTOS.jewelry[2],

  // ph-4 — Products: "Divine Blessing Ganesh Relief" (#4), "Radha Krishna Panel" (#16).
  // Home: gallery "Divine Blessing Relief" & "Radha Krishna Panel", testimonial
  // avatar Ananya Sharma. Testimonials: featured "our story" photo, avatar Priya Nambiar.
  'ph-4': PIC_PHOTOS.ganesh[1],

  // ph-5 — Products: "Festival Procession" (#10). Home: "No two pieces are
  // ever quite the same" section photo.
  'ph-5': PIC_PHOTOS.others[2],

  // ph-6 — Products: "Carved Wall Panel" (#6), "Temple Jhumka Earrings" (#17).
  // Home: gallery "Temple Jhumka Earrings", process step "Carving a World by Hand".
  // About: "What we actually do" section photo. Testimonials avatar: Naomi Tan.
  'ph-6': PIC_PHOTOS.jewelry[1],

  // ph-7 — Products: "Temple Guardian" (#3). Home: gallery "Temple Guardian",
  // testimonial avatar Sara Mitchell. About: photo grid (large photo).
  // Testimonials avatar: Sara Mitchell.
  'ph-7': PIC_PHOTOS.others[1],

  // ph-8 — Products: "Nataraja" (#8), "Rewa Supari Mandir" (#14).
  // Home: gallery "Nataraja". About: "Why we exist" section photo.
  // Testimonials avatar: Kavya Iyer.
  'ph-8': PIC_PHOTOS.others[4],

  // ph-9 — Products: "Blessing Diya Set" (#7), "Bal Gopal Krishna" (#15).
  // Home: gallery "Bal Gopal Krishna", process step "Where the Smallest Details Matter".
  // About: photo grid. Testimonials avatar: Vikram Joshi.
  'ph-9': PIC_PHOTOS.krishna[0],

  // ph-10 — Products: "Terracotta Wall Mural" (#9). Home: gallery "Terracotta Wall Mural".
  'ph-10': PIC_PHOTOS.others[3],

  // Full-bleed heritage photos (not part of the ph-1..10 rotation).
  // Used by: Home.jsx, "The royal legacy behind our Supari Art" section.
  heroRoyalLegacy: '/images/heritage/royal-legacy.jpg',

  // Used by: Shop.jsx, "The Rewa legacy behind our Supari Art" section.
  rewaHeritage: '/images/heritage/rewa-heritage.jpg',
};
