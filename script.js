// ===== DATA =====
// allProducts is injected by build.js as a <script> block before this file loads.
// Collections, home products, and instagram images are rendered at build time (static HTML).

const categoriesList = ['All', 'Living Room', 'Bedroom', 'Dining'];
const materialsList = ['Teak', 'Oak', 'Sheesham'];
const stylesList = ['Modern', 'Classic', 'Contemporary', 'Scandinavian'];
const priceRanges = [
  { label: 'Under ₹50,000', min: 0, max: 50000 },
  { label: '₹50,000 – ₹1,00,000', min: 50000, max: 100000 },
  { label: 'Above ₹1,00,000', min: 100000, max: 999999 },
];

// ===== SVG ICONS =====
const icons = {
  search: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  bag: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
  menu: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
  x: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  arrowRight: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  arrowRight20: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  heart: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
  star: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  phone: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  messageCircle: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>',
  mail: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  instagram: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>',
  facebook: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
  twitter: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>',
  youtube: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>',
  mapPin: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  clock: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  sliders: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/></svg>',
  chevronDown: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  xCircle: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>',
  armchair: '<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5H7V11a2 2 0 0 0-4 0z"/><path d="M5 18v2"/><path d="M19 18v2"/></svg>',
  send: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="m22 2-11 11"/></svg>',
  check: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
  checkSmall: '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6L5 9L10 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};

// ===== STATE =====
let currentPage = 'home';
let activeNav = 'Home';
let mobileMenuOpen = false;
let selectedCategory = 'All';
let selectedMaterials = [];
let selectedStyles = [];
let selectedPriceRange = null;
let sortBy = 'featured';
let showMobileFilters = false;
let contactSubmitted = false;

// ===== DOM REFS =====
const header = document.getElementById('main-header');
const mobileMenu = document.getElementById('mobile-menu');
const mobileToggleBtn = document.getElementById('mobile-toggle');
const homePage = document.getElementById('page-home');
const shopPage = document.getElementById('page-shop');
const contactPage = document.getElementById('page-contact');

// ===== SCROLL HANDLER =====
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ===== NAVIGATION =====
function navigateTo(page, navLabel) {
  currentPage = page;
  activeNav = navLabel || page;
  mobileMenuOpen = false;
  mobileMenu.classList.remove('open');
  if (mobileToggleBtn) mobileToggleBtn.innerHTML = icons.menu;

  // Toggle pages
  homePage.classList.remove('active');
  shopPage.classList.remove('active');
  contactPage.classList.remove('active');

  if (page === 'home') {
    homePage.classList.add('active');
    header.classList.remove('inner-page');
  } else if (page === 'shop') {
    shopPage.classList.add('active');
    header.classList.add('inner-page');
  } else if (page === 'contact') {
    contactPage.classList.add('active');
    header.classList.add('inner-page');
  }

  // Update active nav links
  document.querySelectorAll('.nav-link').forEach(el => {
    el.classList.toggle('active', el.dataset.nav === activeNav);
  });
  document.querySelectorAll('.mobile-nav-link').forEach(el => {
    el.classList.toggle('active', el.dataset.nav === activeNav);
  });

  window.scrollTo(0, 0);
}

// Desktop nav clicks
document.querySelectorAll('.nav-link').forEach(btn => {
  btn.addEventListener('click', () => {
    const nav = btn.dataset.nav;
    if (nav === 'Shop' || nav === 'Collections') navigateTo('shop', nav);
    else if (nav === 'Home') navigateTo('home', 'Home');
    else if (nav === 'Contact') navigateTo('contact', 'Contact');
  });
});

// Mobile nav clicks
document.querySelectorAll('.mobile-nav-link').forEach(btn => {
  btn.addEventListener('click', () => {
    const nav = btn.dataset.nav;
    if (nav === 'Shop' || nav === 'Collections') navigateTo('shop', nav);
    else if (nav === 'Home') navigateTo('home', 'Home');
    else if (nav === 'Contact') navigateTo('contact', 'Contact');
  });
});

// Mobile toggle
mobileToggleBtn.addEventListener('click', () => {
  mobileMenuOpen = !mobileMenuOpen;
  mobileMenu.classList.toggle('open', mobileMenuOpen);
  mobileToggleBtn.innerHTML = mobileMenuOpen ? icons.x : icons.menu;
});

// Logo Home link
document.getElementById('logo-link')?.addEventListener('click', (e) => {
  e.preventDefault();
  navigateTo('home', 'Home');
});

// Breadcrumb Home link
document.getElementById('breadcrumb-home')?.addEventListener('click', () => navigateTo('home', 'Home'));

// ===== SHOP FILTERS & RENDERING =====
function getFilteredProducts() {
  let result = allProducts.filter(p => {
    if (selectedCategory !== 'All' && p.category !== selectedCategory) return false;
    if (selectedMaterials.length > 0 && !selectedMaterials.includes(p.material)) return false;
    if (selectedStyles.length > 0 && !selectedStyles.includes(p.style)) return false;
    if (selectedPriceRange !== null) {
      const range = priceRanges[selectedPriceRange];
      if (p.numPrice < range.min || p.numPrice > range.max) return false;
    }
    return true;
  });

  result.sort((a, b) => {
    if (sortBy === 'price-low') return a.numPrice - b.numPrice;
    if (sortBy === 'price-high') return b.numPrice - a.numPrice;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  return result;
}

function getActiveFilterCount() {
  return (selectedCategory !== 'All' ? 1 : 0) + selectedMaterials.length + selectedStyles.length + (selectedPriceRange !== null ? 1 : 0);
}

function renderShopProducts() {
  const filtered = getFilteredProducts();
  const grid = document.getElementById('shop-products-grid');
  const countEl = document.getElementById('product-count');
  const clearBtn = document.getElementById('clear-filters-toolbar');
  const filterCount = getActiveFilterCount();

  countEl.innerHTML = `<strong>${filtered.length}</strong> ${filtered.length === 1 ? 'product' : 'products'}`;

  if (filterCount > 0) {
    clearBtn.classList.add('has-filters');
  } else {
    clearBtn.classList.remove('has-filters');
  }

  // Update filter badge on mobile
  const badge = document.getElementById('filter-badge');
  if (filterCount > 0) {
    badge.textContent = filterCount;
    badge.style.display = 'flex';
  } else {
    badge.style.display = 'none';
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column: 1/-1;">
        ${icons.armchair}
        <h3>No products found</h3>
        <p>Try adjusting your filters to find what you're looking for.</p>
        <button class="btn-amber-sm" onclick="clearAllFilters()">Clear All Filters</button>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="product-card">
      <div class="img-container">
        <div class="aspect"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
        ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ''}
        <button class="wishlist-btn">${icons.heart}</button>
        <div class="quick-view-wrap"><button class="quick-view-btn">View Details</button></div>
      </div>
      <div class="shop-product-info">
        <div>
          <h3>${p.name}</h3>
          <p class="shop-product-meta">${p.material} · ${p.style}</p>
        </div>
        <p class="shop-product-price">${p.price}</p>
      </div>
    </div>
  `).join('');
}

function renderSidebarFilters() {
  // Material counts
  document.querySelectorAll('.material-check').forEach(el => {
    const mat = el.dataset.material;
    const isChecked = selectedMaterials.includes(mat);
    const cb = el.querySelector('.checkbox');
    cb.classList.toggle('checked', isChecked);
    // Update count
    const count = allProducts.filter(p => p.material === mat && (selectedCategory === 'All' || p.category === selectedCategory)).length;
    const countEl = el.querySelector('.filter-count');
    if (countEl) countEl.textContent = `(${count})`;
  });

  // Style checks
  document.querySelectorAll('.style-check').forEach(el => {
    const sty = el.dataset.style;
    const isChecked = selectedStyles.includes(sty);
    el.querySelector('.checkbox').classList.toggle('checked', isChecked);
  });

  // Price range
  document.querySelectorAll('.price-btn').forEach(el => {
    const idx = parseInt(el.dataset.index);
    el.classList.toggle('active', selectedPriceRange === idx);
  });

  // Category tabs
  document.querySelectorAll('.cat-tab').forEach(el => {
    el.classList.toggle('active', el.dataset.category === selectedCategory);
  });

  // Clear all buttons
  const count = getActiveFilterCount();
  document.querySelectorAll('.sidebar-clear').forEach(el => {
    el.style.display = count > 0 ? 'inline-flex' : 'none';
  });
}

// Category tabs
document.querySelectorAll('.cat-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    selectedCategory = btn.dataset.category;
    renderSidebarFilters();
    renderShopProducts();
  });
});

// Sort
document.getElementById('sort-select')?.addEventListener('change', (e) => {
  sortBy = e.target.value;
  renderShopProducts();
});

// Material filter (desktop + mobile)
document.querySelectorAll('.material-check').forEach(el => {
  el.addEventListener('click', () => {
    const mat = el.dataset.material;
    if (selectedMaterials.includes(mat)) {
      selectedMaterials = selectedMaterials.filter(m => m !== mat);
    } else {
      selectedMaterials.push(mat);
    }
    renderSidebarFilters();
    renderShopProducts();
  });
});

// Style filter
document.querySelectorAll('.style-check').forEach(el => {
  el.addEventListener('click', () => {
    const sty = el.dataset.style;
    if (selectedStyles.includes(sty)) {
      selectedStyles = selectedStyles.filter(s => s !== sty);
    } else {
      selectedStyles.push(sty);
    }
    renderSidebarFilters();
    renderShopProducts();
  });
});

// Price range filter
document.querySelectorAll('.price-btn').forEach(el => {
  el.addEventListener('click', () => {
    const idx = parseInt(el.dataset.index);
    selectedPriceRange = selectedPriceRange === idx ? null : idx;
    renderSidebarFilters();
    renderShopProducts();
  });
});

// Clear all
function clearAllFilters() {
  selectedCategory = 'All';
  selectedMaterials = [];
  selectedStyles = [];
  selectedPriceRange = null;
  renderSidebarFilters();
  renderShopProducts();
}

document.querySelectorAll('.clear-all-trigger').forEach(el => {
  el.addEventListener('click', clearAllFilters);
});

// Mobile filters toggle
document.getElementById('mobile-filter-toggle')?.addEventListener('click', () => {
  showMobileFilters = true;
  document.getElementById('mobile-filters-overlay').classList.add('open');
});
document.getElementById('close-mobile-filters')?.addEventListener('click', () => {
  showMobileFilters = false;
  document.getElementById('mobile-filters-overlay').classList.remove('open');
});
document.getElementById('show-results-btn')?.addEventListener('click', () => {
  showMobileFilters = false;
  document.getElementById('mobile-filters-overlay').classList.remove('open');
});

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contact-form');
const formArea = document.getElementById('form-area');
const thankYou = document.getElementById('thank-you');

contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  formArea.style.display = 'none';
  thankYou.style.display = 'block';
});

document.getElementById('send-another')?.addEventListener('click', () => {
  contactForm.reset();
  formArea.style.display = 'block';
  thankYou.style.display = 'none';
});

// ===== "Explore Collection" & "View All" navigation =====
document.querySelectorAll('[data-goto-shop]').forEach(el => {
  el.addEventListener('click', () => navigateTo('shop', 'Shop'));
});
document.querySelectorAll('[data-goto-contact]').forEach(el => {
  el.addEventListener('click', () => navigateTo('contact', 'Contact'));
});

// ===== INIT =====
renderShopProducts();
renderSidebarFilters();
