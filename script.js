// RESPONSIVE NAVBAR
function toggleMenu() {
  document.getElementById("mobile-nav").classList.toggle("show");
}
// Currency Conversion Setup
const currencyRates = {
  NGN: 1,
  USD: 0.0012,
  EUR: 0.0011,
  GBP: 0.001,
};
let currentCurrency = localStorage.getItem("apex-currency") || "NGN";

function convertPrice(price) {
  return Math.round(price * currencyRates[currentCurrency]);
}

function formatCurrency(amount) {
  const symbols = { NGN: "₦", USD: "$", EUR: "€", GBP: "£" };
  return symbols[currentCurrency] + amount;
}

function updateCurrency(newCurrency) {
  currentCurrency = newCurrency;
  localStorage.setItem("apex-currency", currentCurrency);
  updateCart();
  displayShopProducts();
  displayFeaturedProducts();
  displayBestSellers();
  displayLimitedDrops();
  displayCollections();
}

// Product Groups
const featuredProducts = [
  {
    id: 1,
    name: "Apex White Tee",
    price: 8000,
    category: "tshirt",
    image: "images/tshirt1.jpg",
    sizes: ["S", "M", "L", "XL"],
    stock: 10,
  },
  {
    id: 2,
    name: "Apex Hoodie",
    price: 15000,
    category: "hoodie",
    image: "images/hoodie1.jpg",
    sizes: ["M", "L", "2XL", "3XL"],
    stock: 0,
  },
  {
    id: 3,
    name: "Classic FaceCap",
    price: 5000,
    category: "facecap",
    image: "images/facecap1.jpg",
    sizes: ["1 Size"],
    stock: 20,
  },
  {
    id: 4,
    name: "Limited Edition Jacket",
    price: 20000,
    category: "jacket",
    image: "images/jacket1.jpg",
    sizes: ["L", "XL"],
    stock: 20,
  },
  {
    id: 5,
    name: "Apex Jeans",
    price: 8000,
    category: "jeans",
    image: "images/jean1.webp",
    sizes: ["S", "M", "L", "XL"],
    stock: 0,
  },
  {
    id: 6,
    name: "Apex White Tee",
    price: 8000,
    category: "tshirt",
    image: "images/tshirt1.jpg",
    sizes: ["S", "M", "L", "XL"],
    stock: 20,
  },
];

const bestSellers = [
  {
    id: 7,
    name: "Apex Hoodie",
    price: 15000,
    category: "hoodie",
    image: "images/hoodie1.jpg",
    sizes: ["M", "L", "2XL", "3XL"],
    stock: 20,
  },
  {
    id: 8,
    name: "Apex White Tee",
    price: 8000,
    category: "tshirt",
    image: "images/tshirt1.jpg",
    sizes: ["S", "M", "L", "XL"],
    stock: 0,
  },
  {
    id: 9,
    name: "Classic FaceCap",
    price: 5000,
    category: "facecap",
    image: "images/facecap1.jpg",
    sizes: ["1 Size"],
    stock: 20,
  },
  {
    id: 10,
    name: "Apex Jeans",
    price: 8000,
    category: "jeans",
    image: "images/jean1.webp",
    sizes: ["S", "M", "L", "XL"],
    stock: 0,
  },
  {
    id: 11,
    name: "Apex White Tee",
    price: 8000,
    category: "tshirt",
    image: "images/tshirt1.jpg",
    sizes: ["S", "M", "L", "XL"],
    stock: 20,
  },
  {
    id: 12,
    name: "Limited Edition Jacket",
    price: 20000,
    category: "jacket",
    image: "images/jacket1.jpg",
    sizes: ["L", "XL"],
    stock: 20,
  },
];

const limitedDrops = [
  {
    id: 13,
    name: "Limited Edition Jacket",
    price: 20000,
    category: "jacket",
    image: "images/jacket1.jpg",
    sizes: ["L", "XL"],
    stock: 20,
  },
  {
    id: 14,
    name: "Apex Jeans",
    price: 8000,
    category: "jeans",
    image: "images/jean1.webp",
    sizes: ["S", "M", "L", "XL"],
    stock: 5,
  },
  {
    id: 15,
    name: "Limited FaceCap",
    price: 5000,
    category: "facecap",
    image: "images/facecap1.jpg",
    sizes: ["1 Size"],
    stock: 20,
  },
  {
    id: 16,
    name: "Apex White Tee",
    price: 8000,
    category: "tshirt",
    image: "images/tshirt1.jpg",
    sizes: ["S", "M", "L", "XL"],
    stock: 10,
  },
  {
    id: 17,
    name: "Apex Jeans",
    price: 8000,
    category: "jeans",
    image: "images/jean1.webp",
    sizes: ["S", "M", "L", "XL"],
    stock: 5,
  },
  {
    id: 18,
    name: "Apex White Tee",
    price: 8000,
    category: "tshirt",
    image: "images/tshirt1.jpg",
    sizes: ["S", "M", "L", "XL"],
    stock: 0,
  },
];

const collections = [
  {
    id: 19,
    name: "Classic FaceCap",
    price: 5000,
    category: "facecap",
    image: "images/facecap1.jpg",
    sizes: ["1 Size"],
    stock: 20,
  },
  {
    id: 20,
    name: "Apex White Tee",
    price: 8000,
    category: "tshirt",
    image: "images/tshirt1.jpg",
    sizes: ["S", "M", "L", "XL"],
    stock: 0,
  },
  {
    id: 21,
    name: "Apex Jeans",
    price: 8000,
    category: "jeans",
    image: "images/jean1.webp",
    sizes: ["S", "M", "L", "XL"],
    stock: 5,
  },
  {
    id: 22,
    name: "Apex White Tee",
    price: 8000,
    category: "tshirt",
    image: "images/tshirt1.jpg",
    sizes: ["S", "M", "L", "XL"],
    stock: 0,
  },
  {
    id: 23,
    name: "Apex Hoodie",
    price: 15000,
    category: "hoodie",
    image: "images/hoodie1.jpg",
    sizes: ["M", "L", "2XL", "3XL"],
    stock: 20,
  },
];

const allProducts = [
  ...featuredProducts,
  ...bestSellers,
  ...limitedDrops,
  ...collections,
  {
    id: 24,
    name: "Apex Hoodie",
    price: 15000,
    category: "hoodie",
    image: "images/hoodie1.jpg",
    sizes: ["M", "L", "2XL", "3XL"],
    stock: 10, //new
  },
  {
    id: 25,
    name: "Apex Hoodie",
    price: 15000,
    category: "hoodie",
    image: "images/hoodie1.jpg",
    sizes: ["M", "L", "2XL", "3XL"],
    stock: 0, //sold out
  },
];

let cart = JSON.parse(localStorage.getItem("apex-cart")) || [];

function saveCart() {
  localStorage.setItem("apex-cart", JSON.stringify(cart));
}

function generateProductHTML(product, index, group = "") {
  const options = product.sizes
    .map((size) => `<option value="${size}">${size}</option>`)
    .join("");

  const stockStatus =
    product.stock === 0
      ? `<p class="stock sold-out">Sold Out</p>`
      : `<p class="stock in-stock">In Stock</p>`;

  const disabled = product.stock === 0 ? "disabled" : "";

  return `
    <div class="product">
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${formatCurrency(convertPrice(product.price))}</p>
      ${stockStatus}
      <select id="size-${group}-${index}" ${disabled}>${options}</select>
      <button onclick="addToCart('${group}', ${index})" ${disabled}>Add to Cart</button>
     <a href="product.html?id=${allProducts.findIndex(
       (p) => p.name === product.name && p.image === product.image
     )}" class="view-details">View Details</a>

    </div>
  `;
}

function displayFeaturedProducts() {
  const container = document.getElementById("featured-slider");
  if (!container) return;
  container.innerHTML = featuredProducts
    .map((product, index) => generateProductHTML(product, index, "featured"))
    .join("");
}

function displayBestSellers() {
  const container = document.getElementById("bestsellers-slider");
  if (!container) return;
  container.innerHTML = bestSellers
    .map((product, index) => generateProductHTML(product, index, "best"))
    .join("");
}

function displayLimitedDrops() {
  const container = document.getElementById("limited-slider");
  if (!container) return;
  container.innerHTML = limitedDrops
    .map((product, index) => generateProductHTML(product, index, "limited"))
    .join("");
}

function displayCollections() {
  const container = document.getElementById("collections-slider");
  if (!container) return;
  container.innerHTML = collections
    .map((product, index) => generateProductHTML(product, index, "collections"))
    .join("");
}

function displayShopProducts(productList = allProducts) {
  const container = document.getElementById("shop-products");
  if (!container) return;
  container.innerHTML = productList
    .map((product, index) => generateProductHTML(product, index, "all"))
    .join("");
}
function slideSection(sectionId, direction) {
  const slider = document.getElementById(sectionId);
  if (!slider) return;
  const scrollAmount = 300;
  slider.scrollBy({
    left: direction === "left" ? -scrollAmount : scrollAmount,
    behavior: "smooth",
  });
}

function addToCart(group, index) {
  let product;
  switch (group) {
    case "featured":
      product = featuredProducts[index];
      break;
    case "best":
      product = bestSellers[index];
      break;
    case "limited":
      product = limitedDrops[index];
      break;
    case "collections":
      product = collections[index];
      break;
    case "all":
    default:
      product = allProducts[index];
      break;
  }

  const sizeSelect = document.getElementById(`size-${group}-${index}`);
  const size = sizeSelect ? sizeSelect.value : "";
  if (!size) return alert("Please select a size");

  const existing = cart.find(
    (item) => item.name === product.name && item.size === size
  );

  if (existing && (!product.stock || existing.quantity < product.stock)) {
    existing.quantity++;
  } else if (!existing) {
    cart.push({ name: product.name, price: product.price, size, quantity: 1 });
  } else {
    alert("Cannot add more. Out of stock.");
  }
  updateCart();
}

function removeFromCart(name, size) {
  cart = cart.filter((item) => !(item.name === name && item.size === size));
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");
  if (!cartItems) return;

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const itemPrice = convertPrice(item.price);
    const itemTotal = itemPrice * item.quantity;
    total += itemTotal;

    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} [${item.size}] (x${item.quantity}) ${formatCurrency(
      itemTotal
    )}
      <button class="removebtn" onclick="removeFromCart('${item.name}', '${
      item.size
    }')">Remove</button>
    `;
    cartItems.appendChild(li);
  });

  if (cartCount)
    cartCount.textContent = cart.reduce((sum, i) => sum + i.quantity, 0);
  if (cartTotal) cartTotal.textContent = formatCurrency(total);
  saveCart();
}

function toggleCart() {
  const cartBox = document.getElementById("cart");
  if (cartBox) cartBox.classList.toggle("hidden");
}

function filterByCategory(category) {
  if (category === "all") {
    displayShopProducts();
  } else {
    const filtered = allProducts.filter((p) => p.category === category);
    displayShopProducts(filtered);
  }
}
function prepareCheckout() {
  const user = JSON.parse(localStorage.getItem("apex-current-user"));
  if (!user) {
    alert("You must be logged in to checkout.");
    return (location.href = "login.html");
  }

  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  localStorage.setItem("cartTotal", totalAmount * 100); // in kobo
  localStorage.setItem("userEmail", user.email);
  location.href = "checkout.html";
}

function logout() {
  localStorage.removeItem("apex-current-user");
  location.href = "index.html";
}

window.onload = () => {
  updateCart();

  const featured = document.getElementById("featured-slider");
  if (featured) displayFeaturedProducts();

  const best = document.getElementById("bestsellers-slider");
  if (best) displayBestSellers();

  const limited = document.getElementById("limited-slider");
  if (limited) displayLimitedDrops();

  const collect = document.getElementById("collections-slider");
  if (collect) displayCollections();

  const shop = document.getElementById("shop-products");
  if (shop) {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category") || "all";
    filterByCategory(category);
  }
  const currencyDropdown = document.getElementById("currency-switcher");
  if (currencyDropdown) {
    currencyDropdown.value = currentCurrency;
    currencyDropdown.addEventListener("change", (e) => {
      updateCurrency(e.target.value);
    });
  }
  localStorage.setItem("apex-all-products", JSON.stringify(allProducts));
  // Auto-scroll each slider every 4 seconds
  const autoScrollSliders = [
    { id: "featured-slider" },
    { id: "bestsellers-slider" },
    { id: "limited-slider" },
    { id: "collections-slider" },
  ];

  autoScrollSliders.forEach((slider) => {
    const el = document.getElementById(slider.id);
    if (el) {
      setInterval(() => {
        el.scrollBy({
          left: 300,
          behavior: "smooth",
        });

        // Reset to start if near end
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
          el.scrollTo({ left: 0, behavior: "smooth" });
        }
      }, 4000); // every 4 seconds
    }
  });
};
