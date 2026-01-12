function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}
function addToCart(btn) {
    let card = btn.closest('.tel');
    let productId = btn.getAttribute('data-id');

    let productData = {
        id: productId,
        name: card.querySelector('h3').innerText,
        image: card.querySelector('img').src,
        price: card.querySelector('.text-lg').innerText,
        monthlyPrice: card.querySelector('.line-through') ? card.querySelector('.line-through').innerText : "",
        imageLabel: card.querySelector('.font-semibold') ? card.querySelector('.font-semibold').innerText : "",
        html: card.innerHTML
    };

    let cart = getCart();

    if (!cart.some(p => p.id === productId)) {
        cart.push(productData);
        saveCart(cart);
        console.log("Card added to cart:", productData);
        renderCart(); 
    } else {
        console.log("Card already in cart:", productData);
    }
}


function renderCart() {
    let data = getCart();
    let wrapper = document.querySelector('.TS_sec2_div');
    wrapper.innerHTML = "";

    data.forEach((sev) => {
        let div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = sev.html; 
        wrapper.appendChild(div);
    });
}


async function fetchData() {
    try {
let response = await fetch(`https://dummyjson.com/products/category/${category}`);
let data = await response.json();
console.log(data);

let wrapper = document.querySelector('.TS_sec2_div');
wrapper.innerHTML = "";

        data.forEach((product) => {
            let div = document.createElement('div');
            div.classList.add('.tel');
            div.innerHTML = `
                <div class="p-2 bg-white rounded-xl shadow-md flex flex-col gap-3 relative">
        <button onclick="" data-id="${product.id}" class="heart_btn absolute top-3 right-3 w-[32px] h-[32px] rounded-full flex items-center justify-center">
          <img src="./img.imoil/heart-svgrepo-com.svg" alt="">
        </button>
      <img src="${product.thumbnail}" class="w-full h-[220px] object-contain">
        <p class="font-semibold text-sm">${product.title}</p> 
        <p class="font-bold text-sm bg-yellow-400 w-[100px] text-center text-black rounded-md">
          ${product.price.toLocaleString()} $
        </p>

        <div class="flex justify-start items-center gap-2">
          <button class="border border-black rounded-md p-2 bg-white text-black hover:bg-black hover:text-white hover:border-white transition duration-300 active:scale-95">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
              <circle cx="10.07" cy="20.59" r="1.91" />
              <circle cx="18.66" cy="20.59" r="1.91" />
              <path d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"/>
              <polyline points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"/>
            </svg>
          </button>

          <button
            class="add_to_cart_btn border flex-1 border-[#da002b] text-[#da002b] font-medium py-2 rounded-md hover:bg-[#da002b] hover:text-white transition"
            data-id="${product.id}">
            Korzinkaga
          </button>
        </div>
      </div>
            `;
            wrapper.appendChild(div);
        });

    } catch (error) {
        console.error('Xatolik yuz berdi:', error);
    }
}

// document.addEventListener('DOMContentLoaded', () => {
    
// });

function nok() {
    // fetchData();
    renderCart(); 
}
nok();



