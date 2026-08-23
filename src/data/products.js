/* =========================================================
   ARTIFY — shared product data
   To add a product: add an object to PRODUCTS below.
   To change a price: edit the "price" field.
   Everything else (shop grid, filters, product page) reads
   from this one array — no other file needs to change.
   ========================================================= */

export const PRODUCTS = [
  {
    id: 1, ph: "ph-1", cat: "ganesh", catLabel: "Lord Ganesh",
    name: "Royal Ganesha", material: "Hand-carved wood", size: "12 × 8 × 6 in",
    price: 8500, badge: "Bestseller",
    desc: "A seated Ganesha carved from a single block of seasoned rosewood.",
    story: "Carved over two weeks from a single piece of seasoned rosewood, this Ganesha was shaped using the same point-chisel technique passed down through a family workshop for three generations. No two are ever quite the same — the wood itself decides some of the final form.",
    craft: "Wood carving, 3rd generation workshop",
    time: "14 days", tradition: "South Indian temple wood-carving"
  },
  {
    id: 2, ph: "ph-2", cat: "others", catLabel: "Others",
    name: "Heritage Elephant", material: "Hand-carved sheesham wood", size: "10 × 6 × 5 in",
    price: 6200, badge: "New Arrival",
    desc: "A traditional standing elephant, carved and finished by hand.",
    story: "Elephants have long stood for memory and good fortune across village workshops — this piece keeps that meaning intact, right down to the hand-etched cloth pattern on its back.",
    craft: "Wood carving, sandalwood specialists",
    time: "9 days", tradition: "Sheesham wood carving"
  },
  {
    id: 3, ph: "ph-7", cat: "others", catLabel: "Others",
    name: "Temple Guardian", material: "Cast brass", size: "14 × 7 × 7 in",
    price: 12500, badge: "Collector's Piece",
    desc: "A lost-wax cast brass guardian figure, hand-finished and polished.",
    story: "Cast using the lost-wax method — a technique little changed in a thousand years — this guardian figure took three separate firings to get right. The final polish alone takes a full day.",
    craft: "Lost-wax bronze & brass casting",
    time: "21 days", tradition: "Lost-wax casting"
  },
  {
    id: 4, ph: "ph-4", cat: "ganesh", catLabel: "Lord Ganesh",
    name: "Divine Blessing Ganesh Relief", material: "Hand-shaped terracotta", size: "9 × 9 × 4 in",
    price: 4800, badge: "",
    desc: "A Ganesh relief panel shaped entirely by hand and fired in a wood kiln.",
    story: "Shaped without a mold, this relief panel carries the faint press of fingertips along its edges — a small signature no two panels ever share.",
    craft: "Terracotta relief work",
    time: "6 days", tradition: "Wood-fired terracotta"
  },
  {
    id: 5, ph: "ph-3", cat: "decorative", catLabel: "Decorative",
    name: "Village at Dusk", material: "Natural pigment on canvas", size: "24 × 18 in",
    price: 7200, badge: "Bestseller",
    desc: "A traditional folk-style painting made with hand-ground natural pigments.",
    story: "Every pigment here is ground by hand from stone, earth, and plant dye, using a layered technique taught in the family workshop for three decades.",
    craft: "Folk painting, natural pigments",
    time: "11 days", tradition: "Natural pigment folk painting"
  },
  {
    id: 6, ph: "ph-6", cat: "decorative", catLabel: "Decorative",
    name: "Carved Wall Panel", material: "Hand-carved teak", size: "20 × 14 in",
    price: 9600, badge: "",
    desc: "An intricately carved decorative wall panel in teak.",
    story: "This panel's lattice pattern is carved freehand — no stencil, no repeat template — so the negative space is never quite symmetrical, which is exactly the point.",
    craft: "Wood carving, 3rd generation workshop",
    time: "16 days", tradition: "Teak lattice carving"
  },
  {
    id: 7, ph: "ph-9", cat: "others", catLabel: "Others",
    name: "Blessing Diya Set", material: "Hand-painted brass", size: "Set of 5, 3 in each",
    price: 2400, badge: "New Arrival",
    desc: "A set of five hand-painted brass oil lamps.",
    story: "Made as a set for festival gifting, each lamp is cast separately and hand-painted, so the set carries small variations that mark them as made, not manufactured.",
    craft: "Lost-wax bronze & brass casting",
    time: "5 days", tradition: "Brass casting & hand painting"
  },
  {
    id: 8, ph: "ph-8", cat: "others", catLabel: "Others",
    name: "Nataraja", material: "Cast bronze", size: "16 × 12 × 6 in",
    price: 18500, badge: "Collector's Piece",
    desc: "A bronze Nataraja cast in the classical lost-wax tradition.",
    story: "This form has been cast in bronze for over a thousand years using the same lost-wax method. This particular casting took a master workshop five weeks from wax model to final polish.",
    craft: "Lost-wax bronze & brass casting",
    time: "35 days", tradition: "Chola-era lost-wax bronze casting"
  },
  {
    id: 9, ph: "ph-10", cat: "decorative", catLabel: "Decorative",
    name: "Terracotta Wall Mural", material: "Hand-shaped terracotta tiles", size: "30 × 20 in",
    price: 11200, badge: "",
    desc: "A multi-tile terracotta mural depicting a village scene.",
    story: "Built from fourteen separate hand-shaped tiles fired together, this mural took three kiln firings to complete without a single crack.",
    craft: "Terracotta relief work",
    time: "19 days", tradition: "Wood-fired terracotta"
  },
  {
    id: 10, ph: "ph-5", cat: "decorative", catLabel: "Decorative",
    name: "Festival Procession", material: "Natural pigment on canvas", size: "30 × 20 in",
    price: 9800, badge: "New Arrival",
    desc: "A large folk-style painting depicting a traditional festival procession.",
    story: "Painted over three weeks, this piece uses the same layered pigment technique passed down across four generations of one workshop.",
    craft: "Folk painting, natural pigments",
    time: "18 days", tradition: "Natural pigment folk painting"
  },
  {
    id: 11, ph: "ph-2", cat: "decorative", catLabel: "Decorative",
    name: "Sacred Peacock", material: "Hand-carved rosewood", size: "11 × 9 × 5 in",
    price: 5400, badge: "",
    desc: "A finely carved peacock, a traditional symbol of grace.",
    story: "The feather detail alone takes four full days of fine carving with tools no wider than a pencil tip.",
    craft: "Wood carving, sandalwood specialists",
    time: "10 days", tradition: "Rosewood fine carving"
  },
  {
    id: 12, ph: "ph-1", cat: "others", catLabel: "Others",
    name: "Ancestral Mask", material: "Hand-carved and painted wood", size: "13 × 9 in",
    price: 6800, badge: "",
    desc: "A ceremonial-style wall mask, carved and hand-painted.",
    story: "Modeled after masks once used in village storytelling performances, this piece is carved, then hand-painted with the same mineral pigments used generations ago.",
    craft: "Wood carving, 3rd generation workshop",
    time: "8 days", tradition: "Ceremonial mask carving"
  },
  {
    id: 13, ph: "ph-1", cat: "others", catLabel: "Others", heritage: true,
    name: "Rewa Miniature Tea Set", material: "Hand-carved supari (areca nut)", size: "Miniature, tray 4 × 3 in",
    price: 3200, badge: "Heritage Craft",
    desc: "A miniature tea set carved entirely from supari, in the Rewa royal tradition.",
    story: "This design descends from the very first supari creations made in Rewa, when a royal toy maker discovered a hidden pattern inside an areca nut while peeling it for the King. Each cup and saucer here is carved from a single piece of supari, following the same technique passed down through generations of one family workshop.",
    craft: "Supari (areca nut) carving, Rewa",
    time: "5 days", tradition: "Rewa royal supari carving"
  },
  {
    id: 14, ph: "ph-8", cat: "others", catLabel: "Others", heritage: true,
    name: "Rewa Supari Mandir", material: "Hand-carved supari (areca nut)", size: "Miniature, 5 × 3 × 3 in",
    price: 4600, badge: "Heritage Craft",
    desc: "A miniature temple carved from supari, one of the earliest forms in this royal Rewa craft.",
    story: "The mandir was among the first forms ever carved in supari, part of a repertoire of roughly forty designs developed by the craft's originator in the royal court of Rewa. Every arch and pillar is scraped by hand from the natural shape of the nut, so no two temples ever come out quite the same.",
    craft: "Supari (areca nut) carving, Rewa",
    time: "6 days", tradition: "Rewa royal supari carving"
  },
  {
    id: 15, ph: "ph-9", cat: "krishna", catLabel: "Lord Krishna",
    name: "Bal Gopal Krishna", material: "Cast brass", size: "10 × 6 × 6 in",
    price: 7400, badge: "New Arrival",
    desc: "A brass Krishna, cast playing the flute in the classic Bal Gopal pose.",
    story: "Cast in brass using the lost-wax method, this Krishna keeps the gentle curve and playful stance found in temple bronzes centuries old — right down to the peacock feather in his crown.",
    craft: "Lost-wax bronze & brass casting",
    time: "17 days", tradition: "Classical brass idol casting"
  },
  {
    id: 16, ph: "ph-4", cat: "krishna", catLabel: "Lord Krishna",
    name: "Radha Krishna Panel", material: "Natural pigment on canvas", size: "22 × 16 in",
    price: 8200, badge: "",
    desc: "A folk-style painting of Radha and Krishna, hand-painted with natural pigments.",
    story: "Painted in a layered folk style, this piece uses mineral and plant-based pigments ground by hand, following a technique carried through one family's workshop for generations.",
    craft: "Folk painting, natural pigments",
    time: "13 days", tradition: "Natural pigment folk painting"
  },
  {
    id: 17, ph: "ph-6", cat: "jewelry", catLabel: "Jewelry",
    name: "Temple Jhumka Earrings", material: "Hand-finished oxidized brass", size: "2.2 in drop",
    price: 1800, badge: "New Arrival",
    desc: "Bell-shaped temple jhumkas, hand-finished in oxidized brass.",
    story: "Each pair is cast, filed, and oxidized by hand to bring out the antique temple finish — a technique carried over from larger temple brass work into wearable pieces.",
    craft: "Brass casting & finishing",
    time: "4 days", tradition: "Temple-style brass jewelry"
  },
  {
    id: 18, ph: "ph-3", cat: "jewelry", catLabel: "Jewelry",
    name: "Kundan Choker Set", material: "Kundan stones on brass base", size: "Adjustable, 14 in base",
    price: 3600, badge: "Bestseller",
    desc: "A hand-set Kundan choker with matching earrings, on an oxidized brass base.",
    story: "Every stone is set by hand into a brass base, one at a time, using a traditional Kundan setting technique that dates back to royal courts.",
    craft: "Kundan stone-setting",
    time: "7 days", tradition: "Kundan jewelry setting"
  }
];

export const CATEGORY_LABELS = {
  ganesh: "Lord Ganesh", krishna: "Lord Krishna", decorative: "Decorative",
  jewelry: "Jewelry", others: "Others"
};

export function money(n){ return "₹" + n.toLocaleString("en-IN"); }
