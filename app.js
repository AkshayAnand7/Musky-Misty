/* ========================================
   MUSKY & MISTY — App Logic v4
   Lenis smooth scroll + Parallax + Reveals
   ======================================== */

const products = [
  {no:1,name:"Adidas",p30:200,p50:340,p100:520,cat:"fruity-floral"},
  {no:2,name:"Afnan 9pm",p30:310,p50:520,p100:880,cat:"fruity-floral"},
  {no:3,name:"Ameer Al Oud",p30:290,p50:480,p100:800,cat:"oud-wood"},
  {no:4,name:"Anar Musk",p30:470,p50:780,p100:1400,cat:"fruity-floral"},
  {no:5,name:"Armani Code",p30:250,p50:400,p100:780,cat:"oud-wood"},
  {no:6,name:"Armani Passion",p30:340,p50:570,p100:980,cat:"fruity-floral"},
  {no:7,name:"Armani Stronger with you",p30:270,p50:450,p100:740,cat:"oud-wood"},
  {no:8,name:"Aseel",p30:240,p50:400,p100:650,cat:"oud-wood"},
  {no:9,name:"Azzaro Most Wanted",p30:330,p50:550,p100:940,cat:"oud-wood"},
  {no:10,name:"Baccarat Rouge",p30:290,p50:480,p100:800,cat:"oud-wood"},
  {no:11,name:"Bin Sheikh",p30:560,p50:930,p100:1700,cat:"oud-wood"},
  {no:12,name:"Binth Shukri",p30:250,p50:420,p100:780,cat:"fruity-floral"},
  {no:13,name:"Biscuit",p30:190,p50:310,p100:460,cat:"fruity-floral"},
  {no:14,name:"Black Opium",p30:320,p50:530,p100:900,cat:"fruity-floral"},
  {no:15,name:"Black Orchid",p30:320,p50:530,p100:900,cat:"luxury"},
  {no:16,name:"Black XS",p30:240,p50:400,p100:640,cat:"fruity-floral"},
  {no:17,name:"Blue De Chanel",p30:300,p50:500,p100:860,cat:"luxury"},
  {no:18,name:"Blue for men",p30:300,p50:500,p100:830,cat:"fruity-floral"},
  {no:19,name:"Blue Lady",p30:210,p50:350,p100:540,cat:"fruity-floral"},
  {no:20,name:"Bombshell",p30:230,p50:380,p100:600,cat:"fruity-floral"},
  {no:21,name:"Bright Crystal",p30:230,p50:390,p100:620,cat:"luxury"},
  {no:22,name:"Brown Orchid",p30:300,p50:500,p100:830,cat:"oud-wood"},
  {no:23,name:"Brut",p30:220,p50:370,p100:580,cat:"fresh-citrus"},
  {no:24,name:"Bvlgari Aqva",p30:300,p50:500,p100:860,cat:"fresh-citrus"},
  {no:25,name:"212 Sexy Men",p30:250,p50:420,p100:780,cat:"oud-wood"},
  {no:26,name:"Good Girl",p30:220,p50:370,p100:580,cat:"fruity-floral"},
  {no:27,name:"Chanel Coco",p30:290,p50:470,p100:800,cat:"luxury"},
  {no:28,name:"Chelsea",p30:260,p50:440,p100:720,cat:"fruity-floral"},
  {no:29,name:"Chembakam",p30:220,p50:370,p100:580,cat:"fruity-floral"},
  {no:30,name:"Chocolate",p30:180,p50:300,p100:430,cat:"fruity-floral"},
  {no:31,name:"Cool water",p30:240,p50:420,p100:630,cat:"fresh-citrus"},
  {no:32,name:"Copper",p30:530,p50:890,p100:1620,cat:"fresh-citrus"},
  {no:33,name:"CR 7",p30:300,p50:490,p100:820,cat:"fruity-floral"},
  {no:34,name:"Aventus",p30:250,p50:420,p100:680,cat:"luxury"},
  {no:35,name:"Silver Mountain",p30:280,p50:470,p100:780,cat:"luxury"},
  {no:36,name:"Farenheit",p30:250,p50:410,p100:660,cat:"luxury"},
  {no:37,name:"Poison",p30:310,p50:520,p100:880,cat:"luxury"},
  {no:38,name:"Sauvage",p30:280,p50:460,p100:760,cat:"luxury"},
  {no:39,name:"Dove",p30:190,p50:320,p100:480,cat:"fruity-floral"},
  {no:40,name:"Dunhill Desire",p30:260,p50:440,p100:720,cat:"oud-wood"},
  {no:41,name:"Elanchi",p30:200,p50:320,p100:480,cat:"fresh-citrus"},
  {no:42,name:"Esquisite",p30:220,p50:370,p100:580,cat:"oud-wood"},
  {no:43,name:"Eternal Love",p30:250,p50:410,p100:660,cat:"fruity-floral"},
  {no:44,name:"Eternity Women",p30:230,p50:380,p100:600,cat:"fresh-citrus"},
  {no:45,name:"Fendi",p30:280,p50:470,p100:780,cat:"oud-wood"},
  {no:46,name:"Fogg",p30:250,p50:420,p100:780,cat:"fruity-floral"},
  {no:47,name:"Fruit Punch",p30:300,p50:500,p100:860,cat:"fruity-floral"},
  {no:48,name:"Golden Lady",p30:300,p50:500,p100:830,cat:"fresh-citrus"},
  {no:49,name:"Gucci Flora",p30:240,p50:400,p100:650,cat:"luxury"},
  {no:50,name:"Gucci Lady",p30:340,p50:570,p100:980,cat:"luxury"},
  {no:51,name:"Gucci Rush",p30:260,p50:440,p100:720,cat:"luxury"},
  {no:52,name:"HHH",p30:240,p50:400,p100:640,cat:"fresh-citrus"},
  {no:53,name:"Hugo Boss",p30:350,p50:570,p100:990,cat:"oud-wood"},
  {no:54,name:"Ignite Oud",p30:440,p50:730,p100:1300,cat:"oud-wood"},
  {no:55,name:"Imperial Valley",p30:500,p50:830,p100:1500,cat:"oud-wood"},
  {no:56,name:"Invictus",p30:300,p50:490,p100:820,cat:"oud-wood"},
  {no:57,name:"Jaguar Black",p30:250,p50:415,p100:680,cat:"fresh-citrus"},
  {no:58,name:"Jasmine SP",p30:240,p50:400,p100:650,cat:"fruity-floral"},
  {no:59,name:"Jordan",p30:350,p50:580,p100:1000,cat:"oud-wood"},
  {no:60,name:"JPG Ultramale",p30:240,p50:410,p100:660,cat:"luxury"},
  {no:61,name:"Kasturi",p30:250,p50:415,p100:680,cat:"oud-wood"},
  {no:62,name:"Lamsat Harrir",p30:270,p50:450,p100:740,cat:"fruity-floral"},
  {no:63,name:"LV Afternoon",p30:560,p50:930,p100:1700,cat:"luxury"},
  {no:64,name:"Lovely",p30:200,p50:340,p100:520,cat:"fruity-floral"},
  {no:65,name:"Lux",p30:180,p50:300,p100:440,cat:"fruity-floral"},
  {no:66,name:"M & M Fresh",p30:250,p50:410,p100:660,cat:"fresh-citrus"},
  {no:67,name:"Mariyam",p30:400,p50:670,p100:1200,cat:"fruity-floral"},
  {no:68,name:"Marj",p30:650,p50:1080,p100:2000,cat:"oud-wood"},
  {no:69,name:"Mega Mare",p30:830,p50:1380,p100:2600,cat:"fresh-citrus"},
  {no:70,name:"Musk Abyad",p30:360,p50:600,p100:1040,cat:"fresh-citrus"},
  {no:71,name:"Musk Rijali",p30:860,p50:1430,p100:2700,cat:"luxury"},
  {no:72,name:"Mysore Sandal",p30:400,p50:660,p100:1170,cat:"oud-wood"},
  {no:73,name:"Nivea cream",p30:210,p50:350,p100:540,cat:"fresh-citrus"},
  {no:74,name:"Noora",p30:240,p50:400,p100:650,cat:"fresh-citrus"},
  {no:75,name:"One & Only",p30:800,p50:1330,p100:2500,cat:"fruity-floral"},
  {no:76,name:"One Man Show",p30:220,p50:370,p100:580,cat:"oud-wood"},
  {no:77,name:"One Million",p30:300,p50:490,p100:820,cat:"oud-wood"},
  {no:78,name:"Oud & Rose",p30:780,p50:1300,p100:2450,cat:"oud-wood"},
  {no:79,name:"Oud Kalimath",p30:470,p50:780,p100:1400,cat:"oud-wood"},
  {no:80,name:"Oud Khamrah",p30:400,p50:670,p100:1180,cat:"oud-wood"},
  {no:81,name:"Oud Kuwaity",p30:860,p50:1430,p100:2700,cat:"oud-wood"},
  {no:82,name:"Oud Lavender",p30:410,p50:880,p100:1200,cat:"fruity-floral"},
  {no:83,name:"OUD Maraccuja",p30:720,p50:1200,p100:2240,cat:"oud-wood"},
  {no:84,name:"Oud Premium",p30:300,p50:500,p100:830,cat:"oud-wood"},
  {no:85,name:"Oud Rasheeqa",p30:260,p50:440,p100:720,cat:"fruity-floral"},
  {no:86,name:"Oud Saffron",p30:630,p50:1050,p100:1950,cat:"oud-wood"},
  {no:87,name:"Oud Shrivani",p30:615,p50:1030,p100:1900,cat:"oud-wood"},
  {no:88,name:"Oud Turkey",p30:560,p50:930,p100:1700,cat:"oud-wood"},
  {no:89,name:"Oud Wood",p30:300,p50:490,p100:820,cat:"oud-wood"},
  {no:90,name:"Paradise",p30:230,p50:380,p100:600,cat:"fruity-floral"},
  {no:91,name:"Pasha De Cartier",p30:540,p50:900,p100:1650,cat:"luxury"},
  {no:92,name:"Pistachio Musk",p30:330,p50:550,p100:960,cat:"fresh-citrus"},
  {no:93,name:"Purple Oud",p30:340,p50:570,p100:980,cat:"fresh-citrus"},
  {no:94,name:"Royal Black",p30:360,p50:600,p100:1050,cat:"oud-wood"},
  {no:95,name:"Royal Mirage",p30:250,p50:420,p100:680,cat:"fresh-citrus"},
  {no:96,name:"Sandal",p30:280,p50:470,p100:780,cat:"oud-wood"},
  {no:97,name:"Sandal FT",p30:410,p50:680,p100:2000,cat:"luxury"},
  {no:99,name:"Shurooq",p30:240,p50:400,p100:650,cat:"fruity-floral"},
  {no:100,name:"Signature",p30:260,p50:430,p100:710,cat:"fruity-floral"},
  {no:101,name:"Solid Dubai",p30:300,p50:500,p100:840,cat:"oud-wood"},
  {no:102,name:"Sweet Burberry",p30:470,p50:780,p100:1400,cat:"luxury"},
  {no:103,name:"Swiss Musk",p30:1250,p50:2080,p100:4000,cat:"fruity-floral"},
  {no:104,name:"Tam Dao",p30:650,p50:1080,p100:2000,cat:"oud-wood"},
  {no:105,name:"Tobacco Vanilla",p30:560,p50:930,p100:1700,cat:"luxury"},
  {no:106,name:"Noir Extreme",p30:360,p50:600,p100:1050,cat:"luxury"},
  {no:107,name:"Tuscan Leather",p30:270,p50:450,p100:740,cat:"luxury"},
  {no:108,name:"Vanilla",p30:210,p50:340,p100:530,cat:"fruity-floral"},
  {no:109,name:"Vanilla Candy",p30:400,p50:670,p100:1180,cat:"fruity-floral"},
  {no:110,name:"Versace Eros",p30:230,p50:370,p100:600,cat:"luxury"},
  {no:111,name:"White Oud",p30:350,p50:580,p100:1000,cat:"oud-wood"},
  {no:112,name:"LV Imagination",p30:560,p50:930,p100:1700,cat:"fresh-citrus"},
  {no:113,name:"24 Carrot Gold",p30:1100,p50:1830,p100:3500,cat:"fruity-floral"},
  {no:114,name:"AHL",p30:650,p50:1100,p100:2000,cat:"fruity-floral"},
  {no:115,name:"MOUSUF",p30:420,p50:700,p100:1300,cat:"oud-wood"}
];

// ---- Helpers ----
function getSlug(n){
  let s = n.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  
  // Custom mapping for cases where app.js name doesn't match filename
  if (n === "Aventus") return "aventus";
  if (n === "Farenheit") return "farenheit";
  if (n === "Poison") return "poison";
  if (n === "Sauvage") return "sauvage";
  if (n === "212 Sexy Men") return "212-sexy-men";
  if (n === "Good Girl") return "good-girl";
  if (n === "One & Only") return "one-only";
  if (n === "Armani Stronger with you") return "stronger-with-you";
  if (n === "JPG Ultramale") return "ultramale";
  
  return s;
}

function getImagePath(n){
  return `assets/products/${getSlug(n)}.webp`;
}

const $=id=>document.getElementById(id);

// ---- State ----
const INIT=24,MORE=24;
let shown=INIT,filtered=[...products],sort_='default',cat_='all',query='';

// ---- DOM ----
const grid=$('productsGrid'),count=$('productsCount'),sinput=$('searchInput'),
  sortSel=$('sortSelect'),catSel=$('catSelect'),lmBtn=$('loadMoreBtn'),lmC=$('loadMoreContainer'),
  lmInfo=$('productsShownInfo'),homeV=$('appHomeView'),prodV=$('appProductView'),
  pdImg=$('pdImage'),pdNm=$('pdName'),pdNotes=$('pdNotes'),
  pdSizes=$('pdSizes'),pdOrd=$('pdOrderBtn'),pdBk=$('pdBackBtn'),
  pdRelated=$('pdRelated');

// ---- Render Products ----
function render(){
  const list=filtered.slice(0,shown);
  if(!list.length){
    grid.innerHTML='<div class="no-results"><h3>No fragrances found</h3><p>Try a different search term</p></div>';
    lmC.style.display='none';count.textContent='0';return;
  }
  count.textContent=filtered.length;
  grid.innerHTML=list.map((p,i)=>`
    <div class="product-card" onclick="openPD(${p.no-1})">
      <div class="product-card-visual">
        <span class="product-card-badge">INSPIRED</span>
        <img src="${getImagePath(p.name)}" alt="${p.name}" class="product-card-img" onerror="this.onerror=null;this.src='assets/images/perfume-bottle.png'">
        <span class="btn-view-overlay">VIEW DETAILS</span>
      </div>
      <div class="product-card-info">
        <h3 class="product-card-name">${p.name}</h3>
        <p class="product-card-price-start">From <span>₹${p.p30}</span></p>
      </div>
    </div>`).join('');
  lmC.style.display=shown>=filtered.length?'none':'block';
  if(lmInfo)lmInfo.textContent=`Showing ${Math.min(shown,filtered.length)} of ${filtered.length}`;
}

// ---- Filter/Sort ----
function apply(){
  filtered = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(query.toLowerCase());
    const matchesCat = (cat_ === 'all' || p.cat === cat_);
    return matchesSearch && matchesCat;
  });

  switch(sort_){
    case'name-asc':filtered.sort((a,b)=>a.name.localeCompare(b.name));break;
    case'name-desc':filtered.sort((a,b)=>b.name.localeCompare(a.name));break;
    case'price-asc':filtered.sort((a,b)=>a.p30-b.p30);break;
    case'price-desc':filtered.sort((a,b)=>b.p30-a.p30);break;
    default:filtered.sort((a,b)=>a.no-b.no);
  }
  shown=INIT;render();
}
// ---- Product Detail ----
let sel=null;
function openPD(i){
  sel=products[i];if(!sel)return;
  // Image
  pdImg.innerHTML=`<img src="${getImagePath(sel.name)}" alt="${sel.name}" style="width:80%;height:80%;object-fit:contain" onerror="this.onerror=null;this.src='assets/images/perfume-bottle.png'"><span class="img-disclaimer pd-disclaimer">*For display purposes only. Actual product appearance may vary.</span>`;
  pdNm.textContent=sel.name;

  // Sizes
  const sz=[];
  if(sel.p30)sz.push({l:'30ml',p:sel.p30});if(sel.p50)sz.push({l:'50ml',p:sel.p50});if(sel.p100)sz.push({l:'100ml',p:sel.p100});
  pdSizes.innerHTML=sz.map((s,idx)=>`<div class="pd-size-pill${idx===0?' active':''}" onclick="selectSize(this)"><span class="pd-size-ml">${s.l}</span><span class="pd-size-price">₹${s.p}</span></div>`).join('');
  // Order link
  updatePDOrder();
  // Related products (4 random, excluding current)
  const others=products.filter(p=>p.no!==sel.no).sort(()=>Math.random()-0.5).slice(0,4);
  pdRelated.innerHTML=others.map(p=>`
    <div class="product-card" onclick="openPD(${p.no-1})">
      <div class="product-card-visual">
        <img src="${getImagePath(p.name)}" alt="${p.name}" class="product-card-img" onerror="this.onerror=null;this.src='assets/images/perfume-bottle.png'">
        <span class="btn-view-overlay">VIEW DETAILS</span>
      </div>
      <div class="product-card-info"><h3 class="product-card-name">${p.name}</h3><p class="product-card-price-start">From <span>₹${p.p30}</span></p></div>
    </div>`).join('');
  homeV.style.display='none';prodV.style.display='block';window.scrollTo(0,0);
  history.pushState({view:'product',id:sel.no},'','#/product/'+sel.no);
}
window.openPD=openPD;

function selectSize(el){
  el.parentElement.querySelectorAll('.pd-size-pill').forEach(p=>p.classList.remove('active'));
  el.classList.add('active');
  updatePDOrder();
}
window.selectSize=selectSize;

function updatePDOrder(){
  if(!sel)return;
  const activePill = document.querySelector('.pd-size-pill.active');
  let sizeLabel = '30ml', sizePrice = `₹${sel.p30}`;
  if(activePill){
    sizeLabel = activePill.querySelector('.pd-size-ml').textContent.trim();
    sizePrice = activePill.querySelector('.pd-size-price').textContent.trim();
  }
  const msg = `Hey there! 👋\n\nI'd like to place an order:\n\nProduct: ${sel.name}\nSize: ${sizeLabel}\nPrice: ${sizePrice}\n\nPlease let me know if it's available 😊`;
  pdOrd.href=`https://wa.me/919633586868?text=${encodeURIComponent(msg)}`;
}

function closePD(){prodV.style.display='none';homeV.style.display='block';history.pushState({view:'home'},'',location.pathname);window.scrollTo(0,0);requestAnimationFrame(checkNav)}
window.addEventListener('popstate',()=>{
  if(location.hash.includes('#/product/')){const n=parseInt(location.hash.split('/').pop(),10);const i=products.findIndex(p=>p.no===n);if(i!==-1)openPD(i);}
  else{prodV.style.display='none';homeV.style.display='block';requestAnimationFrame(checkNav)}
});
if(pdBk)pdBk.addEventListener('click',closePD);

// ---- Events ----
let deb;
sinput.addEventListener('input',e=>{clearTimeout(deb);deb=setTimeout(()=>{query=e.target.value.trim();apply()},250)});
sortSel.addEventListener('change',e=>{sort_=e.target.value;apply()});
catSel.addEventListener('change',e=>{cat_=e.target.value;apply()});
lmBtn.addEventListener('click',()=>{shown+=MORE;render()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&prodV.style.display==='block')closePD()});

// Categories Click (cards)
document.querySelectorAll('.category-card').forEach(c=>{
  c.addEventListener('click',()=>{
    const f=c.dataset.filter;
    cat_=f;
    catSel.value=f; // Sync the dropdown
    apply();
    $('products').scrollIntoView({behavior:'smooth'});
  });
});

// ---- Nav ----
const nav=$('navbar');
const heroEl=$('home');
function checkNav(){
  const past=window.scrollY>heroEl.offsetHeight-100;
  nav.classList.toggle('scrolled',window.scrollY>50);
  if(past)nav.classList.remove('hero-dark');
  else nav.classList.add('hero-dark');
}
window.addEventListener('scroll',checkNav,{passive:true});

const mt=$('menuToggle'),nl=$('navLinks'),nb=$('navbar');
let menuScrollLock = false;

function closeMenu(){
  mt.classList.remove('active');
  nl.classList.remove('active');
  nb.classList.remove('menu-active');
  document.body.classList.remove('menu-open');
  menuScrollLock = false;
}

mt.addEventListener('click',()=>{
  const isOpen = nl.classList.toggle('active');
  mt.classList.toggle('active');
  nb.classList.toggle('menu-active', isOpen);
  document.body.classList.toggle('menu-open', isOpen);
  if(isOpen){
    menuScrollLock = true;
    setTimeout(()=>{ menuScrollLock = false; }, 400);
  }
});

nl.querySelectorAll('.nav-link, .nav-cta').forEach(l=>l.addEventListener('click', closeMenu));
window.addEventListener('scroll', ()=>{ if(nl.classList.contains('active') && !menuScrollLock) closeMenu(); }, {passive:true});

// ---- Smooth anchor ----
document.querySelectorAll('a[href^="#"]:not([data-product])').forEach(a=>{
  a.addEventListener('click',function(e){
    const href = this.getAttribute('href');
    
    // If it's just "#" (like the logo), and we're in product view, go home
    if(href === '#'){
      if(prodV && prodV.style.display === 'block'){
        e.preventDefault();
        closePD();
      }
      return;
    }

    const t=document.querySelector(href);
    if(t){
      e.preventDefault();
      
      // If we are in product view, switch back to home view first
      if(prodV && prodV.style.display === 'block'){
        prodV.style.display = 'none';
        homeV.style.display = 'block';
        history.pushState({view:'home'},'',location.pathname);
        requestAnimationFrame(checkNav);
      }
      
      // Small timeout to ensure layout has updated if we just switched display:block
      setTimeout(() => {
        window.scrollTo({top:t.getBoundingClientRect().top+window.scrollY-80,behavior:'smooth'});
      }, 10);
    }
  });
});


// ---- Footer Popular Picks → open product detail ----
document.querySelectorAll('[data-product]').forEach(a=>{
  a.addEventListener('click',function(e){
    e.preventDefault();
    const name = this.dataset.product.toLowerCase();
    const idx = products.findIndex(p => p.name.toLowerCase() === name);
    if(idx !== -1) openPD(idx);
  });
});

// ---- Init ----
document.addEventListener('DOMContentLoaded',()=>{
  render();
  checkNav();
});
