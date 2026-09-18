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


const DIR_GANESH = '/images/products/lord_Ganesh/';
const DIR_KRISHNA = '/images/products/Krishna/';
const DIR_JEWELRY = '/images/products/jewellery/';
const DIR_OTHERS = '/images/products/others/';


export const PIC_PHOTOS = {
  ganesh: [
    DIR_GANESH + 'lord-ganesh-00-3800-12-inc.jpg', 
    DIR_GANESH + 'lord-ganesh-09-2500-10-inch.jpg',
    DIR_GANESH + 'lord-ganesh-im-08-2000-inc-9-inc.jpg',
    DIR_GANESH + 'lord-ganesh-im01-1600-inc-9-inc.jpg',
    DIR_GANESH + 'lord-ganesh-im02-1800-inc-9-inc.jpg',
    DIR_GANESH + 'lord-ganesh-im03-1800-in-9.jpg',
    DIR_GANESH + 'lord-ganesh-im06-2000-inc-7.jpg',
    DIR_GANESH + 'lord-ganesh-im10-2500-10inc.jpg',
    DIR_GANESH + 'lord-ganesh-im11-2500-10inch.jpg',
    DIR_GANESH + 'lord-ganesh-im13-1-2500.jpg',
    DIR_GANESH + 'lord-ganesh-im14-1-2800.jpg',
    DIR_GANESH + 'lord-ganesh-im15-2800.jpg',
    DIR_GANESH + 'lord-ganesh-im16-1-2800-inc-10.jpg',
    DIR_GANESH + 'lord-ganesh-im17-2800-inc-10.jpg',
    DIR_GANESH + 'lord-ganesh-im18-1-3000-inc-9.jpg',
    DIR_GANESH + 'lord-ganesh-im19-3000-inc-9.jpg',
    DIR_GANESH + 'lord-ganesh-im20-1.jpg',
    DIR_GANESH + 'lord-ganesh-im21.jpg',
    DIR_GANESH + 'lord-ganesh-im22.jpg',
    DIR_GANESH + 'lord-ganesh-im23.jpg',
    DIR_GANESH + 'lord-ganesh-im24.jpg',
    DIR_GANESH + 'lord-ganesh-im25.jpg',
    DIR_GANESH + 'lord-ganesh-im26.jpg',
    DIR_GANESH + 'lord-ganesh-im27.jpg',
    DIR_GANESH + 'lord-ganesh-im28.jpg',
    DIR_GANESH + 'lord-ganesh-im29-2500.jpg',
    DIR_GANESH + 'lord-ganesh-im30-2500.jpg',
  ],
  krishna: [
    DIR_KRISHNA + 'radhakrishna-im05-2000-7inch.jpg',
    DIR_KRISHNA + 'radha-krishna-im16-3200-inc-11.jpg',
    DIR_KRISHNA + 'radha-krishan.jpg',
    DIR_KRISHNA + 'krihsna-ji-im02-1800.jpg',
  ],
  jewelry: [
    DIR_JEWELRY + 'jewellery-im19.jpg',
    DIR_JEWELRY + 'jewellery-im20.jpg',
    DIR_JEWELRY + 'rings.jpg',
  ],
  others: [
    DIR_OTHERS + 'others-im19.jpg',
    DIR_OTHERS + 'others-im21.jpg',
    DIR_OTHERS + 'ravana10-inch-2800.jpg',
    DIR_OTHERS + 'turtal.jpg',
    DIR_OTHERS + 'turtal2.jpg',
  ],
};

export const IMAGES = {
  // ph-1 — Products: "Royal Ganesha" (#1), "Ancestral Mask" (#12),
  // "Rewa Miniature Tea Set" (#13). Home: gallery "Royal Ganesha",
  // process step "From Supari to a Canvas". Testimonials avatar: Emily Carter.
  'ph-1': PIC_PHOTOS.ganesh[0],

  // ph-2 — Products: "Heritage Elephant" (#2), "Sacred Peacock" (#11).
  // Home testimonial avatar: Priya Nambiar. Testimonials avatar: Rohan Kapoor.
  'ph-2': PIC_PHOTOS.ganesh[1],

  // ph-3 — Products: "Village at Dusk" (#5), "Kundan Choker Set" (#18).
  // Home: gallery "Village at Dusk" & "Kundan Choker Set". About: photo grid.
  // Testimonials avatar: Arjun Desai.
  'ph-3': PIC_PHOTOS.ganesh[2],

  // ph-4 — Products: "Divine Blessing Ganesh Relief" (#4), "Radha Krishna Panel" (#16).
  // Home: gallery "Divine Blessing Relief" & "Radha Krishna Panel", testimonial
  // avatar Ananya Sharma. Testimonials: featured "our story" photo, avatar Priya Nambiar.
  'ph-4': PIC_PHOTOS.ganesh[3],

  // ph-5 — Products: "Festival Procession" (#10). Home: "No two pieces are
  // ever quite the same" section photo.
  'ph-5': PIC_PHOTOS.ganesh[4],
  'ph-6': PIC_PHOTOS.ganesh[5],
  'ph-7': PIC_PHOTOS.ganesh[6],
  'ph-8': PIC_PHOTOS.ganesh[7],
  'ph-9': PIC_PHOTOS.ganesh[8],
  'ph-10': PIC_PHOTOS.ganesh[9],
  'ph-11': PIC_PHOTOS.ganesh[10],
  'ph-12': PIC_PHOTOS.ganesh[11],
  'ph-13': PIC_PHOTOS.ganesh[12],
  'ph-14': PIC_PHOTOS.ganesh[13],
  'ph-15': PIC_PHOTOS.ganesh[14],
  'ph-16': PIC_PHOTOS.ganesh[15],
  'ph-17': PIC_PHOTOS.ganesh[16],
  'ph-18': PIC_PHOTOS.ganesh[17],
  'ph-19': PIC_PHOTOS.ganesh[18],
  'ph-20': PIC_PHOTOS.ganesh[19],
  'ph-21': PIC_PHOTOS.ganesh[20],
  'ph-22': PIC_PHOTOS.ganesh[21],
  'ph-23': PIC_PHOTOS.ganesh[22],
  'ph-24': PIC_PHOTOS.ganesh[23],
  'ph-25': PIC_PHOTOS.ganesh[24],
  'ph-26': PIC_PHOTOS.ganesh[25],
  'ph-27': PIC_PHOTOS.ganesh[26],


  // ph-6 — Products: "Carved Wall Panel" (#6), "Temple Jhumka Earrings" (#17).
  // About: "What we actually do" section photo. Testimonials avatar: Naomi Tan.
  'ph-28': PIC_PHOTOS.jewelry[0],
  'ph-29': PIC_PHOTOS.jewelry[1],
  'ph-30': PIC_PHOTOS.jewelry[2],
  

  // ph-7 — Products: "Temple Guardian" (#3). Home: gallery "Temple Guardian",
  // testimonial avatar Sara Mitchell. About: photo grid (large photo).
  // Testimonials avatar: Sara Mitchell.
  'ph-31': PIC_PHOTOS.others[0],

  // ph-8 — Products: "Nataraja" (#8), "Rewa Supari Mandir" (#14).
  // Home: gallery "Nataraja". About: "Why we exist" section photo.
  // Testimonials avatar: Kavya Iyer.
  'ph-32': PIC_PHOTOS.others[1],
  'ph-33': PIC_PHOTOS.others[2],
  'ph-34': PIC_PHOTOS.others[3],
  'ph-35': PIC_PHOTOS.others[4],

  // ph-9 — Products: "Blessing Diya Set" (#7), "Bal Gopal Krishna" (#15).
  // Home: gallery "Bal Gopal Krishna", process step "Where the Smallest Details Matter".
  // About: photo grid. Testimonials avatar: Vikram Joshi.
  'ph-36': PIC_PHOTOS.krishna[0],
  'ph-37': PIC_PHOTOS.krishna[1],
  'ph-38': PIC_PHOTOS.krishna[2],
  'ph-39': PIC_PHOTOS.krishna[3],

  // ph-10 — Products: "Terracotta Wall Mural" (#9). Home: gallery "Terracotta Wall Mural".

  // Full-bleed heritage photos (not part of the ph-1..10 rotation).
  // Used by: Home.jsx, "The royal legacy behind our Supari Art" section.
  heroRoyalLegacy: '/images/heritage/royal-legacy.jpg',

  // Used by: Shop.jsx, "The Rewa legacy behind our Supari Art" section.
  rewaHeritage: '/images/heritage/rewa-heritage.jpg',

  // used by: src={IMAGES.making}
};

