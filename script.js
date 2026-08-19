/* =========================================================
   ARTIFY — shared product data & site behavior
   To add a product: add an object to PRODUCTS below.
   To change a price: edit the "price" field.
   Everything else (shop grid, filters, product page) reads
   from this one array — no other file needs to change.
   ========================================================= */

const PRODUCTS = [
  {
    id: 1, img:"D:\myside\files new 19-08- 2-30 pm\Pic\Jewellery_IM19.jpg", cat: "ganesh", catLabel: "Lord Ganesh",
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

const CATEGORY_LABELS = {
  "ganesh": "Lord Ganesh", "krishna": "Lord Krishna", "decorative": "Decorative",
  "jewelry": "Jewelry", "others": "Others"
};

function money(n){ return "₹" + n.toLocaleString("en-IN"); }

/* ---------------- CART (in-memory only, resets on reload by design) ---------------- */
const Cart = {
  items: [], // {id, qty}
  add(id, qty){
    qty = qty || 1;
    const existing = this.items.find(i => i.id === id);
    if(existing){ existing.qty += qty; } else { this.items.push({ id, qty }); }
    this.render();
    this.open();
  },
  remove(id){
    this.items = this.items.filter(i => i.id !== id);
    this.render();
  },
  count(){ return this.items.reduce((a,i)=>a+i.qty,0); },
  total(){
    return this.items.reduce((sum,i)=>{
      const p = PRODUCTS.find(p=>p.id===i.id);
      return sum + (p ? p.price*i.qty : 0);
    },0);
  },
  open(){ document.getElementById('cartDrawer')?.classList.add('open'); document.getElementById('cartOverlay')?.classList.add('open'); },
  close(){ document.getElementById('cartDrawer')?.classList.remove('open'); document.getElementById('cartOverlay')?.classList.remove('open'); },
  render(){
    document.querySelectorAll('.cart-count').forEach(el => el.textContent = this.count());
    const list = document.getElementById('cartItems');
    if(!list) return;
    if(this.items.length === 0){
      list.innerHTML = '<div class="cart-empty">Your cart is empty.<br>Explore the collection to find your first piece.</div>';
    } else {
      list.innerHTML = this.items.map(i=>{
        const p = PRODUCTS.find(p=>p.id===i.id);
        if(!p) return '';
        return `<div class="cart-item">
          <div class="ph ${p.ph}"></div>
          <div>
            <div class="ci-name">${p.name}</div>
            <div class="ci-meta">${money(p.price)} × ${i.qty}</div>
            <button class="ci-remove" onclick="Cart.remove(${p.id})">Remove</button>
          </div>
          <div class="price">${money(p.price*i.qty)}</div>
        </div>`;
      }).join('');
    }
    const totalEl = document.getElementById('cartTotal');
    if(totalEl) totalEl.textContent = money(this.total());
  }
};

/* ---------------- NAV / MOBILE MENU ---------------- */
function initNav(){
  const toggle = document.getElementById('navToggle');
  const links = document.querySelector('nav.links');
  if(toggle && links){
    toggle.addEventListener('click', ()=>{
      const open = links.style.display === 'flex';
      links.style.display = open ? 'none' : 'flex';
      links.style.cssText += open ? '' : 'position:absolute; top:64px; left:0; right:0; background:var(--paper); flex-direction:column; padding:20px 32px; border-bottom:1px solid var(--line); gap:16px;';
    });
  }
  document.getElementById('cartToggle')?.addEventListener('click', ()=>Cart.open());
  document.getElementById('cartClose')?.addEventListener('click', ()=>Cart.close());
  document.getElementById('cartOverlay')?.addEventListener('click', ()=>Cart.close());
}

/* ---------------- NEWSLETTER / REVIEW FORMS ---------------- */
function initForms(){
  document.querySelectorAll('.newsletter-form').forEach(form=>{
    form.addEventListener('submit', e=>{
      e.preventDefault();
      const btn = form.querySelector('button');
      const original = btn.textContent;
      btn.textContent = 'Subscribed ✓';
      form.querySelector('input').value = '';
      setTimeout(()=>{ btn.textContent = original; }, 2500);
    });
  });

  const reviewForm = document.getElementById('reviewForm');
  if(reviewForm){
    let rating = 5;
    const stars = reviewForm.querySelectorAll('.rating-select button');
    stars.forEach(btn=>{
      btn.addEventListener('click', ()=>{
        rating = parseInt(btn.dataset.star, 10);
        stars.forEach(s => s.classList.toggle('on', parseInt(s.dataset.star,10) <= rating));
      });
    });
    reviewForm.addEventListener('submit', e=>{
      e.preventDefault();
      reviewForm.reset();
      stars.forEach(s => s.classList.toggle('on', parseInt(s.dataset.star,10) <= 5));
      document.getElementById('reviewSuccess')?.classList.add('show');
    });
  }
}

/* ---------------- SHOP PAGE ---------------- */
function initShop(){
  const grid = document.getElementById('productGrid');
  if(!grid) return;

  let activeCat = 'all';
  let sortBy = 'featured';
  let query = '';

  function renderGrid(){
    let list = PRODUCTS.slice();
    if(activeCat !== 'all') list = list.filter(p => p.cat === activeCat);
    if(query) list = list.filter(p => p.name.toLowerCase().includes(query) || p.material.toLowerCase().includes(query));
    if(sortBy === 'price-low') list.sort((a,b)=>a.price-b.price);
    if(sortBy === 'price-high') list.sort((a,b)=>b.price-a.price);
    if(sortBy === 'new') list.sort((a,b)=> (b.badge==='New Arrival') - (a.badge==='New Arrival'));

    if(list.length === 0){
      grid.innerHTML = '<div class="no-results">No pieces match that search — try another material, category, or keyword.</div>';
      return;
    }

    grid.innerHTML = list.map(p => `
      <div class="product-card">
        <div class="product-media ph ${p.ph}">
          ${p.badge ? `<span class="badge-pill">${p.badge}</span>` : ''}
          <button class="wish-btn" aria-label="Save to wishlist" onclick="this.classList.toggle('active'); this.textContent=this.classList.contains('active')?'♥':'♡';">♡</button>
        </div>
        <div class="product-body">
          <span class="cat-tag cat-${p.cat}">${p.catLabel}</span>
          <h3>${p.name}</h3>
          <p class="pdesc">${p.desc}</p>
          <div class="product-meta-row">
            <span class="price">${money(p.price)}</span>
          </div>
          <div class="product-actions">
            <a href="product.html?id=${p.id}" class="btn btn-outline btn-sm btn-block">View Details</a>
            <button class="btn btn-primary btn-sm btn-block" onclick="Cart.add(${p.id})">Add to Cart</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  document.querySelectorAll('.chip').forEach(chip=>{
    chip.addEventListener('click', ()=>{
      document.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));
      chip.classList.add('active');
      activeCat = chip.dataset.cat;
      renderGrid();
    });
  });
  document.getElementById('sortSelect')?.addEventListener('change', e=>{
    sortBy = e.target.value; renderGrid();
  });
  document.getElementById('searchInput')?.addEventListener('input', e=>{
    query = e.target.value.trim().toLowerCase(); renderGrid();
  });

  renderGrid();
}

/* ---------------- PRODUCT DETAIL PAGE ---------------- */
function initProductPage(){
  const root = document.getElementById('productDetail');
  if(!root) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'), 10) || PRODUCTS[0].id;
  const p = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
  let qty = 1;

  document.title = p.name + " — Artify";

  const isSupari = p.heritage === true;

  const heritageNoteHtml = isSupari
    ? `<div class="heritage-note">
        <div class="mark">✦</div>
        <div>
          <h4>Part of the Rewa legacy</h4>
          <p>This piece continues a craft first shaped in the royal court of Rewa in the 1930s–40s, by a toy maker named Ram Siya Kunder — carried on today by his family, the Kunders.</p>
        </div>
        <a href="shop.html#rewa-story">Read the full story →</a>
      </div>`
    : `<div class="heritage-note">
        <div class="mark">✦</div>
        <div>
          <h4>Rooted in a real heritage</h4>
          <p>Every piece in this collection continues a documented artisan tradition — much like our Supari Art collection, born in the royal court of Rewa in the 1930s–40s.</p>
        </div>
        <a href="shop.html#rewa-story">Read that story →</a>
      </div>`;

  const riskBeatsHtml = isSupari ? `
      <div class="risk-beat">
        <div class="rb-icon">✂</div>
        <div><h4>There is no undo</h4><p>A supari is a single small, dense nut — once the vice grips it and the first cut is made, the shape underneath is fixed. Cut too deep and the whole nut is ruined; there's no second piece hiding inside.</p></div>
      </div>
      <div class="risk-beat">
        <div class="rb-icon">🪡</div>
        <div><h4>Detail work with a needle</h4><p>Fine lines are engraved with a needle-like tool called a <em>munna</em>, and shaped with a small curved knife called a <em>tagi</em> — tools sharp enough that a moment's distraction can cost hours of work.</p></div>
      </div>
      <div class="risk-beat">
        <div class="rb-icon">🖐</div>
        <div><h4>The material decides some of it</h4><p>Every areca nut has its own grain and speckle pattern. The artisan doesn't fully control the outcome — part of the skill is reading the nut and working with what it gives you.</p></div>
      </div>
      <div class="risk-beat">
        <div class="rb-icon">✓</div>
        <div><h4>Assembled and finished by hand</h4><p>Finished pieces are filed smooth, joined with glue where needed, and painted or varnished — all without the forgiveness a larger material would allow.</p></div>
      </div>`
    : `
      <div class="risk-beat">
        <div class="rb-icon">✂</div>
        <div><h4>Mistakes cannot be undone</h4><p>${p.material} doesn't forgive a wrong cut. Once material is removed, it's gone — there's no adding it back, only starting the section again.</p></div>
      </div>
      <div class="risk-beat">
        <div class="rb-icon">🖐</div>
        <div><h4>Steady hands, slow hours</h4><p>The maker works in short, controlled movements for hours at a time — the kind of concentration that can't be rushed or automated.</p></div>
      </div>
      <div class="risk-beat">
        <div class="rb-icon">✓</div>
        <div><h4>Finished entirely by feel</h4><p>The final polish and finish is judged by hand and eye, piece by piece — the same way it's been done throughout the ${p.tradition.toLowerCase()} tradition.</p></div>
      </div>`;

  root.innerHTML = `
    <div class="pd-layout">
      <div>
        <div class="ph pd-main-photo ${p.ph}" id="pdMainPhoto"></div>
        <div class="pd-thumbs">
          <div class="ph ${p.ph} active"></div>
          <div class="ph ph-${(p.id % 10) + 1}"></div>
          <div class="ph ph-${((p.id + 3) % 10) + 1}"></div>
        </div>
      </div>
      <div class="pd-info">
        <span class="cat-tag cat-${p.cat}">${p.catLabel}</span>
        <h1>${p.name}</h1>
        <div class="pd-price-row">
          <span class="price">${money(p.price)}</span>
          <span class="stock-pill">In Stock</span>
        </div>
        <p style="color:var(--ink-soft); margin-top:14px; font-size:15.5px; line-height:1.6;">${p.desc}</p>
        <div class="pd-specs">
          <div><span class="label">Material</span><span class="val">${p.material}</span></div>
          <div><span class="label">Dimensions</span><span class="val">${p.size}</span></div>
          <div><span class="label">Handmade Time</span><span class="val">${p.time}</span></div>
          <div><span class="label">Origin</span><span class="val">${p.tradition}</span></div>
        </div>
        <div class="qty-row">
          <div class="qty-control">
            <button id="qtyMinus" aria-label="Decrease quantity">−</button>
            <span id="qtyVal">1</span>
            <button id="qtyPlus" aria-label="Increase quantity">+</button>
          </div>
          <span style="font-size:13px; color:var(--ink-faint);">Only handmade pieces — quantities are limited</span>
        </div>
        <div class="pd-actions">
          <button class="btn btn-outline" id="addToCartBtn">Add to Cart</button>
          <button class="btn btn-primary" id="buyNowBtn">Buy Now</button>
        </div>
      </div>
    </div>

    <div class="pd-story">
      <span class="eyebrow orange">The story behind this piece</span>
      <p class="lede">"${p.story}"</p>
      ${heritageNoteHtml}
    </div>

    <div>
      <span class="eyebrow gold" style="margin-top:60px; display:inline-flex;">How it was made</span>
      <div class="steps-visual">
        <div class="step-card"><span class="stepnum">01</span><h4>Selected</h4><p>${p.material.split(' ').slice(-1)[0]} is chosen and inspected for grain, density, and character.</p></div>
        <div class="step-card"><span class="stepnum">02</span><h4>Shaped</h4><p>The rough form is established, setting proportion and posture.</p></div>
        <div class="step-card"><span class="stepnum">03</span><h4>Detailed</h4><p>Fine tools bring in expression, texture, and ornament — the slowest stage.</p></div>
        <div class="step-card"><span class="stepnum">04</span><h4>Finished</h4><p>Polished, sealed, and inspected by hand before it ever reaches a box.</p></div>
      </div>
    </div>

    <div class="risk-story">
      <span class="eyebrow terracotta">A delicate, unforgiving craft</span>
      <h2 style="margin-top:12px;">Handmade also means high-risk.</h2>
      <p class="lede">This is not a craft with a reset button. Every finished piece represents every attempt that didn't go wrong.</p>
      <div class="risk-beats">
        ${riskBeatsHtml}
      </div>
    </div>

    <div class="certificate">
      <div class="seal">✓</div>
      <div>
        <h4>Certificate of Authenticity</h4>
        <p>Every piece in this collection is handmade and one of a kind. Small variations in shape, grain, and finish are not flaws — they're proof of the human hand behind it. This piece ships with a signed certificate naming the person who made it.</p>
      </div>
    </div>
  `;

  document.getElementById('addToCartBtn')?.addEventListener('click', ()=> Cart.add(p.id, qty));
  document.getElementById('buyNowBtn')?.addEventListener('click', ()=>{ Cart.add(p.id, qty); });
  document.getElementById('qtyMinus')?.addEventListener('click', ()=>{ qty = Math.max(1, qty-1); document.getElementById('qtyVal').textContent = qty; });
  document.getElementById('qtyPlus')?.addEventListener('click', ()=>{ qty = qty+1; document.getElementById('qtyVal').textContent = qty; });

  // related products: same category, excluding current
  const relatedEl = document.getElementById('relatedGrid');
  if(relatedEl){
    const related = PRODUCTS.filter(x => x.cat === p.cat && x.id !== p.id).slice(0,4);
    relatedEl.innerHTML = related.map(r => `
      <div class="product-card">
        <div class="product-media ph ${r.ph}"></div>
        <div class="product-body">
          <span class="cat-tag cat-${r.cat}">${r.catLabel}</span>
          <h3>${r.name}</h3>
          <div class="product-meta-row"><span class="price">${money(r.price)}</span></div>
          <div class="product-actions">
            <a href="product.html?id=${r.id}" class="btn btn-outline btn-sm btn-block">View Details</a>
          </div>
        </div>
      </div>
    `).join('');
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  initNav();
  initForms();
  Cart.render();
  initShop();
  initProductPage();
});
