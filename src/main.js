import { products } from './data.js';

const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const modal = document.getElementById('variantModal');
const modalTitle = document.getElementById('modalTitle');
const modalVariants = document.getElementById('modalVariants');
const closeModal = document.querySelector('.close-modal');

const featuredGrid = document.getElementById('featuredGrid');
const categoryBtns = document.querySelectorAll('.category-btn');
let currentCategory = 'all';

// Render Featured
function renderFeatured() {
    const featuredProducts = products.filter(p => p.featured);
    featuredGrid.innerHTML = '';

    featuredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'featured-card';
        card.onclick = () => openModal(product);

        // Logic for Image/Logo with Fallback
        let mediaHtml;
        if (product.image) {
            mediaHtml = `
            <div class="img-wrapper">
                <img src="${product.image}" alt="${product.name}" onerror="this.parentElement.style.display='none'; this.parentElement.nextElementSibling.style.display='flex';">
            </div>
            <div class="logo-wrapper" style="display:none; color: ${product.color}">
                ${product.logoText}
            </div>
          `;
        } else {
            mediaHtml = `
            <div class="logo-wrapper" style="color: ${product.color}">
                ${product.logoText}
            </div>
          `;
        }

        card.innerHTML = `
      <span class="featured-badge">Terlaris</span>
      ${mediaHtml}
      <h3 class="product-name">${product.name}</h3>
      <p class="starting-price">Mulai ${getMinPrice(product.variants)}</p>
    `;

        featuredGrid.appendChild(card);
    });
}

// Render Products (Filtered)
function renderProducts(filter = '') {
    productGrid.innerHTML = '';

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(filter.toLowerCase());
        const matchesCategory = currentCategory === 'all' || product.category === currentCategory;
        return matchesSearch && matchesCategory;
    });

    if (filteredProducts.length === 0) {
        productGrid.innerHTML = '<p style="text-align:center;width:100%;color:var(--text-muted)">Tidak ada produk ditemukan.</p>';
        return;
    }

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.onclick = () => openModal(product);

        // Logic for Image/Logo with Fallback
        let mediaHtml;
        if (product.image) {
            mediaHtml = `
            <div class="img-wrapper">
                <img src="${product.image}" alt="${product.name}" onerror="this.parentElement.style.display='none'; this.parentElement.nextElementSibling.style.display='flex';">
            </div>
            <div class="logo-wrapper" style="display:none; color: ${product.color}">
                ${product.logoText}
            </div>
          `;
        } else {
            mediaHtml = `
            <div class="logo-wrapper" style="color: ${product.color}">
                ${product.logoText}
            </div>
          `;
        }

        card.innerHTML = `
      ${mediaHtml}
      <h3 class="product-name">${product.name}</h3>
      <p class="starting-price">Mulai ${getMinPrice(product.variants)}</p>
      <span class="cta-text">Pesan Sekarang &rarr;</span>
    `;

        productGrid.appendChild(card);
    });
}

function getMinPrice(variants) {
    if (!variants || variants.length === 0) return '-';
    // Simple parsed comparison or just return the first one's price as "Mulai..."
    // Since formats vary (Rp40.000), let's just grab the lowest number.
    // Actually, usually the first item or the cheapest is fine to display.
    // Let's just display the lowest price value string found.

    const prices = variants.map(v => {
        const num = parseInt(v.price.replace(/[^\d]/g, ''));
        return { str: v.price, val: num };
    });

    prices.sort((a, b) => a.val - b.val);
    return prices[0].str;
}

// Category Filter Handling
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        categoryBtns.forEach(b => b.classList.remove('active'));
        // Add active to clicked
        btn.classList.add('active');

        currentCategory = btn.dataset.category;
        renderProducts(searchInput.value);
    });
});

// Modal Functions
function openModal(product) {
    modalTitle.innerText = product.name;
    modalVariants.innerHTML = '';

    product.variants.forEach(variant => {
        const btn = document.createElement('a');
        btn.className = 'variant-btn';
        btn.href = generateWhatsappLink(product.name, variant.name);
        btn.target = '_blank';

        btn.innerHTML = `
      <span class="variant-name">${variant.name}</span>
      <span class="variant-price">${variant.price}</span>
    `;

        modalVariants.appendChild(btn);
    });

    modal.classList.add('active');
}

function closeModalFunc() {
    modal.classList.remove('active');
}

function generateWhatsappLink(productName, variantName) {
    const phone = '62895321547404';
    const text = `Halo min, saya mau order ${productName} - ${variantName}`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

// Event Listeners
searchInput.addEventListener('input', (e) => renderProducts(e.target.value));

closeModal.addEventListener('click', closeModalFunc);

window.onclick = (event) => {
    if (event.target == modal) {
        closeModalFunc();
    }
};

// Start
renderFeatured();
renderProducts();
