// ================== LOCAL STORAGE ==================
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// ================== ADD TO CART ==================
function addToCart(btn) {
    let card = btn.closest('.tel');
    let id = btn.dataset.id;

    let product = {
        id: id,
        html: card.innerHTML
    };

    let cart = getCart();

    if (!cart.some(item => item.id === id)) {
        cart.push(product);
        saveCart(cart);
        renderCart();
    }
}

// ================== RENDER CART ==================
function renderCart() {
    let cart = getCart();
    let wrapper = document.querySelector('.TS_sec2_div');

    wrapper.innerHTML = "";

    cart.forEach(item => {
        let div = document.createElement('div');
        div.classList.add('tel');
        div.innerHTML = item.html;
        wrapper.appendChild(div);
    });
}

// ================== FETCH PRODUCTS ==================
async function fetchProducts() {
    let res = await fetch("https://dummyjson.com/products/category/smartphones");
    let data = await res.json();

    let wrapper = document.querySelector('.products');
    wrapper.innerHTML = "";

    data.products.forEach(product => {
        let div = document.createElement('div');
        div.classList.add('tel');

        div.innerHTML = `
            <img src="${product.thumbnail}">
            <h3>${product.title}</h3>
            <p><b>${product.price} $</b></p>
            <button data-id="${product.id}" class="addBtn">
                Korzinkaga
            </button>
        `;

        wrapper.appendChild(div);
    });

    document.querySelectorAll('.addBtn').forEach(btn => {
        btn.addEventListener('click', () => addToCart(btn));
    });
}

// ================== START ==================
document.addEventListener("DOMContentLoaded", () => {
    fetchProducts();
    renderCart(); // localStorage → DOM
});
