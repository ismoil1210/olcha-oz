function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
async function getProductsByCategory(category) {
  const res = await fetch(`https://dummyjson.com/products/category/${category}`);
  const data = await res.json();
  return data.products;
}
async function renderCategory(category, containerId) {
  const products = await getProductsByCategory(category);
  const container = document.getElementById(containerId);
  if (!container) return;

  products.splice(0, 10).forEach(element => {
    let div = document.createElement("div");
    div.className = "tel";
    div.dataset.id = element.id;
    div.dataset.title = element.title
    div.innerHTML = `
      <div class="p-2 bg-white rounded-xl shadow-md flex flex-col gap-3 relative">
        <button onclick="" data-id="${element.id}" class="heart_btn absolute top-3 right-3 w-[32px] h-[32px] rounded-full flex items-center justify-center">
          <img src="./img.imoil/heart-svgrepo-com.svg" alt="">
        </button>
      <img src="${element.thumbnail}" class="w-full h-[220px] object-contain">
        <p class="font-semibold text-sm">${element.title}</p> 
        <p class="font-bold text-sm bg-yellow-400 w-[100px] text-center text-black rounded-md">
          ${element.price.toLocaleString()} $
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
            data-id="${element.id}">
            Korzinkaga
          </button>
        </div>
      </div>
    `;

    container.appendChild(div);
  });
}
renderCategory("smartphones", "phones");
renderCategory("beauty", "sovit");
renderCategory("groceries", "food");
renderCategory("smartphones", "phone");
renderCategory("beauty", "yugur");
async function banercate(category, containerId) {
  const products = await getProductsByCategory(category);
  const container = document.getElementById(containerId);
  if (!container) return;

  products.slice(0, 2).forEach(element => {
  let div = document.createElement("div");
  div.dataset.title = element.title

  div.innerHTML = `
    <div class="flex justify-start gap-[20px] bg-white rounded-[15px] p-4 m-[10px] w-[520px]">
    <img src="${element.thumbnail}" class="w-[180px] h-[180px] object-contain">
    <div class="flex flex-col justify-start gap-[40px]">
      <h2 class="divbesh_h2 text-[20px]">${element.title}</h2>
      <div class="flex flex-col justify-between">
        <p class="divbesh_p text-[24px] text-[#da002b] font-semibold">
          ${element.price} so'm
        </p>
        <p class="divbesh_p text-[21px] bg-[yellow] rounded-[10px] p-2">
          ${element.price} so'm x 12 oy
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-[20px]">
      <img class="w-[24px] h-[24px]" src="./img.imoil/heart-svgrepo-com.svg">
      <img class="w-[24px] h-[24px]" src="./img.imoil/stats.png">
    </div>
    </div>
  `;

  container.appendChild(div); 
  });
}
banercate("smartphones", "baner");
async function banercate2(category, containerId) {
  const products = await getProductsByCategory(category);
  const container = document.getElementById(containerId);
  if (!container) return;

  products.slice(0, 3).forEach(element => {
  let div = document.createElement("div");
  div.className = "tel";
  div.dataset.id = element.id;
  div.dataset.title = element.title

  div.innerHTML = `
    <div class="p-2 w-[200px] bg-white rounded-xl shadow-md flex flex-col m-[10px] gap-3 relative">
        <button onclick="" data-id="${element.id}" class="heart_btn absolute top-3 right-3 w-[32px] h-[32px] rounded-full flex items-center justify-center">
          <img src="./img.imoil/heart-svgrepo-com.svg" alt="">
        </button>
      <img src="${element.thumbnail}" class="w-full h-[220px] object-contain">
      <p class="font-semibold text-sm">${element.title}</p> 
        <p class="font-bold text-sm bg-yellow-400 w-[100px] text-center text-black rounded-md">
        ${element.price.toLocaleString()} $
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
        data-id="${element.id}">
        Korzinkaga
        </button>
        </div>
        </div>
        `;

        container.appendChild(div); 
      });
    }
    banercate2("smartphones", "baner2");
    async function banercate3(category, containerId) {
  const products = await getProductsByCategory(category);
  const container = document.getElementById(containerId);
  if (!container) return;

  products.slice(0, 3).forEach(element => {
  let div = document.createElement("div");
  div.className = "tel";
  div.dataset.id = element.id;
  div.dataset.title = element.title

  div.innerHTML = `
    <div class="w-[180px] bg-white rounded-xl shadow-md">
    <div class="relative">
      <img  class="w-[160px] object-cover"
        src="${element.thumbnail}"
        alt="MSI Raider"
      />

      <div class="">
        <button class="heart_btn absolute top-3 left-[130px] w-[32px] h-[32px] flex items-center justify-center">
          <img src="./img.imoil/heart-svgrepo-com.svg" alt="">
        </button>
      </div>
    </div>

    <div class="p-3 space-y-2">
      <p class="text-sm text-gray-800 leading-snug">
        ${element.title}
      </p>

      <div class="text-lg font-bold text-black">
        ${element.price} so'm
      </div>

      <span class="inline-block bg-yellow-400 text-black text-xs font-medium px-2 py-1 rounded-md">
        ${element.price} so'm x 12 oy
      </span>
    </div>

  </div>
        `;

        container.appendChild(div); 
      });
    }
    banercate3("smartphones", "notbukla");

async function renderCategory2(category, containerId) {
  const products = await getProductsByCategory(category);
  const container = document.getElementById(containerId);
  if (!container) return;

  products.splice(0, 4).forEach(element => {
    let div = document.createElement("div");
    div.className = "tel";
    div.dataset.id = element.id;
    div.dataset.title = element.title
    div.innerHTML = `
                  <div class="bg-white flex flex-col justify-center rounded-md p-3">

                  <img
                    src="${element.thumbnail}"
                    alt="">
                  <div class="flex flex-col justify-around items-stretch gap-6 py-4">
                    <p class="font-medium">${element.title}</p>
                    <div class="flex flex-col justify-center items-start">
                      <span class=" font-medium">${element.price} сум</span>
                      <span class="bg-yellow-500 font-medium text-center p-2 rounded-lg"> ${element.price} сум x 12 mec</span>
                    </div>
                    <div class="flex justify-start items-center gap-2">
                      <button
                        class="border border-black rounded-md p-2 bg-white text-black hover:bg-black hover:text-white hover:border-white transition duration-300 active:scale-95">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          stroke-width="1.2">
                          <circle cx="10.07" cy="20.59" r="1.91" />
                          <circle cx="18.66" cy="20.59" r="1.91" />
                          <path
                            d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10" />
                          <polyline points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91" />
                        </svg>
                      </button>
                      <button id="${element.id}"
                        class="add_to_cart_btn border flex-1  border-red-600 text-red-600 font-medium py-2 rounded-md hover:bg-red-600 hover:text-white transition">
                        Korzinkaga
                      </button>
                    </div>
                  </div>
                </div>
    `;

    container.appendChild(div);
  });
}
renderCategory2("smartphones", "jonimmani");
let totalSeconds = 24 * 60 * 60; 
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const timer = setInterval(() => {
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  hoursEl.innerText = String(hours).padStart(2, "0");
  minutesEl.innerText = String(minutes).padStart(2, "0");
  secondsEl.innerText = String(seconds).padStart(2, "0");

  if (totalSeconds <= 0) {
    clearInterval(timer);
    hoursEl.innerText = "00";
    minutesEl.innerText = "00";
    secondsEl.innerText = "00";
  }

  totalSeconds--;
}, 1000);

const catalogMenu = document.getElementById("catalog-menu")
    
    function catalogBtn() {
        catalogMenu.classList.toggle("open")
    
        if (!catalogMenu.classList.contains("open")) {
            let box = document.querySelector('.boxxx')
            if (box) {
                box.innerHTML = ""
            }
        }
    }













    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("add_to_cart_btn")) {
        const btn = e.target;
        const card = btn.closest(".tel"); 
        const productId = Number(btn.getAttribute("data-id")); 
        const productData = {
          id: productId,
          html: card.innerHTML
        };
    
        let cart = getCart();
    
        if (!cart.some(p => p.id === productId)) {
          cart.push(productData);
          saveCart(cart);
          console.log("Saqlandi", productData);
        } else {
          console.log("Allaqachon bor", productData);
        }
      }
    });

document.addEventListener("click", (e) => {
  const heartBtn = e.target.closest(".heart_btn");
  if (!heartBtn) return; 

  const card = heartBtn.closest(".tel");
  if (!card) return;

  const productId = Number(heartBtn.getAttribute("data-id"));
  if (!productId) return;

  const productData = { id: productId, html: card.innerHTML };

  let cart = getCart();

  const img = heartBtn.querySelector("img");
  if (img) {
    if (img.src.includes("heart-svgrepo-com.svg")) {
      img.src ="./img.imoil/Ellipse 1 (1).png"; 
    } else {
     img.src="./img.imoil/heart-svgrepo-com.svg"; 
    }
  }
 
  if (cart.findIndex(p => p.id === productId)) {
    cart.push(productData);
    saveCart(cart); 
    console.log("Saqlandi", productData);
  } else {
    cart.splice(index, 1);
    saveCart(cart);
    console.log("Allaqachon bor", productData);
  }
});



    

