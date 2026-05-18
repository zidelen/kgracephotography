/* KGrace Photography — main.js */

const PHOTO_PATH = 'assets/photosbykgrace/';

const photos = [
  { file: 'graduation_01.jpg', cat: 'graduation', desc: 'A graduate in cap and gown poses for a portrait outdoors in front of historic campus buildings.' },
  { file: 'graduation_02.jpg', cat: 'graduation', desc: 'A smiling graduate in cap and gown poses for a portrait in front of a historic campus building.' },
  { file: 'graduation_03.jpg', cat: 'graduation', desc: 'A graduate in cap and gown poses for a portrait outdoors in front of a historic campus building.' },
  { file: 'graduation_04.jpg', cat: 'graduation', desc: 'A graduate poses on outdoor steps wearing a cap and gown with a sorority stole.' },
  { file: 'graduation_05.jpg', cat: 'graduation', desc: 'A graduate wearing Texas State Class of 2025 regalia poses for a portrait in an outdoor garden setting.' },
  { file: 'graduation_06.jpg', cat: 'graduation', desc: 'A graduate in cap and gown poses with a statue at an outdoor campus location.' },
  { file: 'graduation_07.jpg', cat: 'graduation', desc: 'A graduate wearing a white dress and university stole poses outdoors against a backdrop of ivy and grass.' },
  { file: 'graduation_08.jpg', cat: 'graduation', desc: 'A graduate wearing a college honor sash and holding a diploma cap while posing on outdoor steps.' },
  { file: 'graduation_09.jpg', cat: 'graduation', desc: 'A graduate wearing a Texas State Class of 2025 sash and white dress poses outdoors in front of a brick building archway.' },
  { file: 'graduation_10.jpg', cat: 'graduation', desc: 'A graduate poses outdoors in cap and gown while holding her diploma in a landscaped garden setting.' },
  { file: 'graduation_11.jpg', cat: 'graduation', desc: 'A young woman wearing a graduation stole poses for a portrait outdoors in natural sunlight.' },
  { file: 'graduation_12.jpg', cat: 'graduation', desc: 'A young woman wearing a graduation stole poses for a portrait outdoors in a campus setting.' },
  { file: 'graduation_13.jpg', cat: 'graduation', desc: 'A graduate in cap and gown posing outdoors in front of university signage with natural landscaping.' },
  { file: 'graduation_14.jpg', cat: 'graduation', desc: 'A graduate in cap and gown poses for a portrait outdoors in front of a modern building with colorful architectural features.' },
  { file: 'graduation_15.jpg', cat: 'graduation', desc: 'A graduate in cap and gown poses for a portrait in front of a modern building with colorful architectural details.' },
  { file: 'graduation_16.jpg', cat: 'graduation', desc: 'A graduate in nursing regalia tosses their cap in the air outside a School of Nursing building.' },
  { file: 'graduation_17.jpg', cat: 'graduation', desc: 'A graduate in cap and gown wearing an orange honor stole poses for a portrait outdoors on campus.' },
  { file: 'graduation_18.jpg', cat: 'graduation', desc: 'A smiling graduate wearing a black gown and colorful honor cords poses on a university campus courtyard.' },
  { file: 'graduation_19.jpg', cat: 'graduation', desc: 'A graduate wearing academic regalia poses outdoors in front of a UT Health San Antonio campus sign.' },
  { file: 'graduation_20.jpg', cat: 'graduation', desc: 'A graduate in cap and gown poses outdoors in front of a university building and signage.' },
  { file: 'graduation_21.jpg', cat: 'graduation', desc: 'A graduate in cap, gown, and stethoscope poses for a portrait on a university campus outdoors.' },
  { file: 'graduation_22.jpg', cat: 'graduation', desc: 'A graduate wearing a mortarboard and stethoscope poses against a colorful tiled studio backdrop.' },
  { file: 'graduation_23.jpg', cat: 'graduation', desc: 'A graduate poses on an urban street wearing a graduation stole and holding their diploma under colorful neon signs.' },
  { file: 'graduation_24.jpg', cat: 'graduation', desc: 'A high school graduate wearing a Class of 2026 sash poses for a portrait on an urban street with neon signs overhead.' },

  { file: 'portrait_01.jpg', cat: 'portrait', desc: 'A smiling woman poses for a headshot against a colorful geometric background in a studio setting.' },
  { file: 'portrait_02.jpg', cat: 'portrait', desc: 'A woman in graduation regalia poses outdoors under a UT Health San Antonio banner during golden hour.' },
  { file: 'portrait_03.jpg', cat: 'portrait', desc: 'A young woman poses for a portrait outdoors in front of UT Health San Antonio banners.' },
  { file: 'portrait_04.jpg', cat: 'portrait', desc: 'A young graduate wearing academic regalia and stethoscope poses outdoors on a university campus.' },
  { file: 'portrait_05.jpg', cat: 'portrait', desc: 'A woman poses with a large colorful flower bouquet against a white fabric backdrop in a studio setting.' },
  { file: 'portrait_06.jpg', cat: 'portrait', desc: 'A woman in a white outfit posing on green tiled stairs with a relaxed, smiling expression.' },
  { file: 'portrait_07.jpg', cat: 'portrait', desc: 'A young woman in a white dress posing on green tiled stairs in an indoor architectural setting.' },
  { file: 'portrait_08.jpg', cat: 'portrait', desc: 'A woman in a flowing white dress poses on a green tile staircase in an indoor architectural setting.' },
  { file: 'portrait_09.jpg', cat: 'portrait', desc: 'A smiling young woman in a white halter dress posed against a green tiled wall backdrop.' },
  { file: 'portrait_10.jpg', cat: 'portrait', desc: 'A young woman in white casual clothing poses on green tiled stairs with a warm, natural smile.' },
  { file: 'portrait_11.jpg', cat: 'portrait', desc: 'A woman poses on a city street under a vintage neon sign.' },
  { file: 'portrait_12.jpg', cat: 'portrait', desc: 'A young woman posing under vintage neon signs on an urban street.' },
  { file: 'portrait_13.jpg', cat: 'portrait', desc: 'A young woman wearing sunglasses and a graduation sash poses at a table with a beverage in an indoor setting.' },
  { file: 'portrait_14.jpg', cat: 'portrait', desc: 'A woman poses on a city street beneath vintage neon signs in an urban outdoor setting.' },

  { file: 'family_01.jpg', cat: 'family', desc: 'A mother and young child share a tender moment in an open field during golden hour.' },
  { file: 'family_02.jpg', cat: 'family', desc: 'A mother holding her young son in an outdoor field with trees in the background, captured in black and white.' },
  { file: 'family_03.jpg', cat: 'family', desc: 'A mother holding her young son in an open field during golden hour with trees in the background.' },
  { file: 'family_04.jpg', cat: 'family', desc: 'A family of four enjoying playtime together in a home interior space during construction.' },
  { file: 'family_05.jpg', cat: 'family', desc: 'A happy family of four poses together indoors in a studio setting.' },
  { file: 'family_06.jpg', cat: 'family', desc: 'A mother joyfully holds and interacts with her infant in a brightly lit indoor space.' },
  { file: 'family_07.jpg', cat: 'family', desc: 'A woman and man playfully interact with two young children inside an unfinished house.' },
  { file: 'family_08.jpg', cat: 'family', desc: 'A candid family moment showing parents and a young child together in an indoor home setting.' },
  { file: 'family_09.jpg', cat: 'family', desc: 'A family of four plays together in an unfinished indoor space, with two young children engaging with their parents.' },
  { file: 'family_10.jpg', cat: 'family', desc: 'A family of four enjoys time together outside their new construction home on a sunny day.' },
  { file: 'family_11.jpg', cat: 'family', desc: 'A family of four stands together in a doorway with natural light streaming in.' },
  { file: 'family_12.jpg', cat: 'family', desc: 'A young family exploring an under-construction home with children running through the wooden-framed hallway.' },
  { file: 'family_13.jpg', cat: 'family', desc: 'A mother and toddler enjoying food and drinks together at an outdoor event or gathering.' },

  { file: 'maternity_01.jpg', cat: 'maternity', desc: 'A pregnant woman in a blue dress poses with her young child in a golden field at sunset.' },
  { file: 'maternity_02.jpg', cat: 'maternity', desc: 'A pregnant woman in profile pose standing in a dry field during golden hour light.' },
  { file: 'maternity_03.jpg', cat: 'maternity', desc: 'A pregnant woman posing on a stool in an outdoor field during golden hour.' },
  { file: 'maternity_04.jpg', cat: 'maternity', desc: 'A pregnant woman in a blue dress posing in a field during golden hour sunset.' },
  { file: 'maternity_05.jpg', cat: 'maternity', desc: 'A pregnant woman in a blue off-shoulder dress poses in an outdoor field during golden hour.' },
  { file: 'maternity_06.jpg', cat: 'maternity', desc: 'A pregnant woman cradling her belly outdoors in natural sunlight.' },
  { file: 'maternity_07.jpg', cat: 'maternity', desc: 'A pregnant woman posing with a bouquet of flowers against a white studio backdrop.' },
  { file: 'maternity_08.jpg', cat: 'maternity', desc: 'A pregnant woman and her partner kissing in a studio setting while holding a colorful flower bouquet.' },
  { file: 'maternity_09.jpg', cat: 'maternity', desc: 'A pregnant woman poses for a portrait against a white studio backdrop while holding a colorful bouquet of flowers.' },
  { file: 'maternity_10.jpg', cat: 'maternity', desc: 'A pregnant woman with her partner and young child posing together against a white studio backdrop.' },
  { file: 'maternity_11.jpg', cat: 'maternity', desc: 'A pregnant woman holding her toddler against her belly in a studio setting with a white backdrop.' },
  { file: 'maternity_12.jpg', cat: 'maternity', desc: 'A pregnant woman and her partner pose together in a studio setting with a floral bouquet.' },
  { file: 'maternity_13.jpg', cat: 'maternity', desc: 'A pregnant woman in profile holding a bouquet of flowers against a white studio backdrop.' },
  { file: 'maternity_14.jpg', cat: 'maternity', desc: 'A pregnant woman poses with her toddler and shadow in a studio setting with dramatic lighting.' },

  { file: 'children-kids_01.jpg', cat: 'children-kids', desc: 'A delighted toddler wearing a festive Santa hat poses with holiday lights in a cheerful seasonal portrait.' },
  { file: 'children-kids_02.jpg', cat: 'children-kids', desc: 'Two young toddlers sitting on a concrete floor sharing pizza in an unfinished indoor space.' },
  { file: 'children-kids_03.jpg', cat: 'children-kids', desc: 'A young child peeking playfully around a doorframe with a rural landscape visible in the background.' },
  { file: 'children-kids_04.jpg', cat: 'children-kids', desc: 'A cheerful toddler in a white shirt smiling and playing on a concrete floor in natural sunlight.' },
  { file: 'children-kids_05.jpg', cat: 'children-kids', desc: 'Young baseball players in action during a youth league game at an outdoor field.' },
  { file: 'children-kids_06.jpg', cat: 'children-kids', desc: 'A young baseball player swings at the plate during an outdoor game with teammates in the field.' },
  { file: 'children-kids_07.jpg', cat: 'children-kids', desc: 'A young softball player catches a ball during an outdoor game at a sports field.' },
  { file: 'children-kids_08.jpg', cat: 'children-kids', desc: 'A young baseball player running the bases during a game at an outdoor field.' },
  { file: 'children-kids_09.jpg', cat: 'children-kids', desc: 'Young girls playing softball at bat during a game with an umpire officiating on an outdoor field.' },
  { file: 'children-kids_10.jpg', cat: 'children-kids', desc: 'Two young children sitting on a blanket outdoors on grass, enjoying snacks during a casual outdoor gathering.' },
  { file: 'children-kids_11.jpg', cat: 'children-kids', desc: 'Young softball player in batting stance at home plate during a game with teammates in the field.' },
  { file: 'children-kids_12.jpg', cat: 'children-kids', desc: 'A young baseball player in full uniform poses on a baseball field with a bat and helmet.' },

  { file: 'newborn-baby_1.jpg', cat: 'newborn-baby', desc: 'A delighted baby dressed in a festive Santa hat poses with Christmas lights and tree decorations.' },
  { file: 'newborn-baby_2.jpg', cat: 'newborn-baby', desc: 'A delighted infant wearing a Santa hat surrounded by Christmas lights and holiday décor.' },
  { file: 'newborn-baby_3.jpg', cat: 'newborn-baby', desc: "A baby's hand reaching toward evergreen branches and warm holiday lights in a festive, cozy setting." },
  { file: 'newborn-baby_4.jpg', cat: 'newborn-baby', desc: 'A smiling baby wearing a Santa hat posed with Christmas decorations and lights in a studio setting.' },
  { file: 'newborn-baby_5.jpg', cat: 'newborn-baby', desc: 'A delighted baby wearing a festive Santa hat posed on white fur with holiday lights and decorations in the background.' },
  { file: 'newborn-baby_6.jpg', cat: 'newborn-baby', desc: 'A smiling baby with white fluffy hair playing with holiday ornaments and lights indoors.' },
  { file: 'newborn-baby_7.jpg', cat: 'newborn-baby', desc: 'A smiling baby dressed in a festive Santa hat and red outfit surrounded by holiday decorations and lights.' },
  { file: 'newborn-baby_8.jpg', cat: 'newborn-baby', desc: 'A baby wearing a Santa hat plays with holiday lights on a white fluffy surface in a controlled studio setting.' },
  { file: 'newborn-baby_9.jpg', cat: 'newborn-baby', desc: 'A happy baby wearing a white fuzzy Santa hat posed with holiday decorations and twinkling lights in the background.' },

  { file: 'lifestyle_1.jpg', cat: 'lifestyle', desc: 'Three young women enjoying drinks and socializing at a casual bar or restaurant venue with neon signage and colorful tile walls.' },
  { file: 'lifestyle_2.jpg', cat: 'lifestyle', desc: 'Three young women posing together under neon signs on an urban street.' },
  { file: 'lifestyle_3.jpg', cat: 'lifestyle', desc: 'Three young women posing together under neon signage on an urban street.' },
];

/* ── Gallery ──────────────────────────────── */
const grid        = document.getElementById('galleryGrid');
const filterBtns  = document.querySelectorAll('.filter-btn');
let   activeFilter = 'all';
let   visiblePhotos = [];
let   currentIndex  = 0;

function buildGallery() {
  grid.innerHTML = '';
  photos.forEach((photo, i) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.dataset.cat = photo.cat;
    item.dataset.index = i;

    const img = document.createElement('img');
    img.src = PHOTO_PATH + photo.file;
    img.alt = photo.desc;
    img.loading = 'lazy';
    img.onload = () => img.classList.add('loaded');
    if (img.complete) img.classList.add('loaded');

    const overlay = document.createElement('div');
    overlay.className = 'gallery-item-overlay';

    item.append(img, overlay);
    item.addEventListener('click', () => openLightbox(i));
    grid.appendChild(item);
  });
}

function applyFilter(filter) {
  activeFilter = filter;
  const items = grid.querySelectorAll('.gallery-item');
  visiblePhotos = [];

  items.forEach(item => {
    const match = filter === 'all' || item.dataset.cat === filter;
    item.classList.toggle('hidden', !match);
    if (match) visiblePhotos.push(parseInt(item.dataset.index));
  });
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilter(btn.dataset.filter);
  });
});

/* ── Lightbox ─────────────────────────────── */
const lightbox  = document.getElementById('lightbox');
const lbImg     = document.getElementById('lbImg');
const lbCaption = document.getElementById('lbCaption');

function openLightbox(photoIndex) {
  currentIndex = visiblePhotos.indexOf(photoIndex);
  if (currentIndex === -1) currentIndex = 0;
  showPhoto();
  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
}

function showPhoto() {
  const photo = photos[visiblePhotos[currentIndex]];
  lbImg.src = PHOTO_PATH + photo.file;
  lbImg.alt = photo.desc;
  lbCaption.textContent = photo.desc;
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = '';
  lbImg.src = '';
}

document.querySelector('.lb-close').addEventListener('click', closeLightbox);

document.querySelector('.lb-prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + visiblePhotos.length) % visiblePhotos.length;
  showPhoto();
});

document.querySelector('.lb-next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % visiblePhotos.length;
  showPhoto();
});

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', e => {
  if (lightbox.hidden) return;
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowLeft')  { currentIndex = (currentIndex - 1 + visiblePhotos.length) % visiblePhotos.length; showPhoto(); }
  if (e.key === 'ArrowRight') { currentIndex = (currentIndex + 1) % visiblePhotos.length; showPhoto(); }
});

/* ── Navbar scroll ────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ── Mobile nav toggle ────────────────────── */
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});

/* ── Misc ─────────────────────────────────── */
document.getElementById('year').textContent = new Date().getFullYear();

setTimeout(() => document.getElementById('hero').classList.add('loaded'), 100);

/* Init */
buildGallery();
applyFilter('all');
