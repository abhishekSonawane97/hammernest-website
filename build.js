const fs = require('fs');
const path = require('path');

// ===== SVG ICONS (used in generated HTML) =====
const ICON_ARROW = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>';
const ICON_HEART = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>';
const ICON_INSTAGRAM = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>';

// ===== READ FILES =====
const templatePath = path.join(__dirname, 'templates', 'index.html');
const contentPath = path.join(__dirname, 'content', 'home.json');
const outputPath = path.join(__dirname, 'index.html');

console.log('📦 Reading template and content...');
const template = fs.readFileSync(templatePath, 'utf-8');
const content = JSON.parse(fs.readFileSync(contentPath, 'utf-8'));

let output = template;

// ===== GENERATE HTML FOR ARRAY SECTIONS =====

// 1. Collections
const collectionsHtml = content.collections.map(c => `
        <div class="collection-card">
          <div class="img-wrap"><img src="${c.image}" alt="${c.image_alt}"></div>
          <div class="overlay"></div>
          <div class="card-content"><p class="tagline">${c.tagline}</p><h3>${c.name}</h3><span class="shop-link">Shop Now ${ICON_ARROW}</span></div>
        </div>`).join('\n');

// 2. Home Products (bestsellers on home page)
const homeProductsHtml = content.home_products.map(p => `
        <div class="product-card">
          <div class="img-container">
            <div class="aspect"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
            ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ''}
            <button class="wishlist-btn">${ICON_HEART}</button>
            <div class="quick-view-wrap"><button class="quick-view-btn">Quick View</button></div>
          </div>
          <h3>${p.name}</h3>
          <p class="price">${p.price}</p>
        </div>`).join('\n');

// 3. Features
const featuresHtml = content.features.map(f => `
        <div class="feature-item"><div class="feature-icon">${f.icon}</div><h3>${f.title}</h3><p>${f.text}</p></div>`).join('\n');

// 4. Instagram
const instagramHtml = content.instagram_images.map(src => `
        <div class="insta-item">
          <img src="${src}" alt="Hammernest on Instagram" loading="lazy">
          <div class="insta-overlay">${ICON_INSTAGRAM}</div>
        </div>`).join('\n');

// 5. All Products (inject as JSON for shop JS filtering)
const allProductsJson = JSON.stringify(content.all_products, null, 2);

// ===== REPLACE GENERATED SECTIONS =====
output = output.replace('{{COLLECTIONS_HTML}}', collectionsHtml);
output = output.replace('{{HOME_PRODUCTS_HTML}}', homeProductsHtml);
output = output.replace('{{FEATURES_HTML}}', featuresHtml);
output = output.replace('{{INSTAGRAM_HTML}}', instagramHtml);
output = output.replace('{{ALL_PRODUCTS_JSON}}', allProductsJson);

// ===== REPLACE SIMPLE {{key}} PLACEHOLDERS =====
Object.keys(content).forEach(key => {
  if (typeof content[key] === 'string') {
    const regex = new RegExp(`\\{\\{${key}\\}\\}`, 'g');
    output = output.replace(regex, content[key]);
  }
});

// ===== VERIFY NO REMAINING PLACEHOLDERS =====
const remaining = output.match(/\{\{[A-Za-z_]+\}\}/g);
if (remaining) {
  console.warn('⚠️  Warning: Unresolved placeholders found:', [...new Set(remaining)].join(', '));
} else {
  console.log('✅ All placeholders resolved successfully.');
}

// ===== WRITE OUTPUT =====
fs.writeFileSync(outputPath, output);
console.log(`✅ Build complete! Output written to: ${outputPath}`);
console.log(`📄 File size: ${(Buffer.byteLength(output) / 1024).toFixed(1)} KB`);
