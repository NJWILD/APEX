// RESPONSIVE NAVBAR
function toggleMenu() {
  document.getElementById("mobile-nav").classList.toggle("show");
}

// Sample products with sizes
const products = [
  {
    name: "Apex T-Shirt",
    price: 8000,
    category: "tshirt",
    image: "images/tshirt1.jpg",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    name: "Apex Hoodie",
    price: 15000,
    category: "hoodie",
    image: "images/hoodie1.jpg",
    sizes: ["M", "L", "2XL", "3XL"],
  },
  {
    name: "Apex Jacket",
    price: 20000,
    category: "jacket",
    image: "images/jacket1.jpg",
    sizes: ["S", "L", "XL", "4XL"],
  },
  {
    name: "Apex Jeans",
    price: 20000,
    category: "jeans",
    image: "images/jean1.webp",
    sizes: ["S", "L", "XL", "4XL"],
  },
  {
    name: "Apex FaceCaps",
    price: 20000,
    category: "FaceCaps",
    image: "images/facecap1.jpg",
    sizes: ["S", "L", "XL", "4XL"],
  },
  {
    name: "Apex Jacket",
    price: 20000,
    category: "jacket",
    image: "images/jacket1.jpg",
    sizes: ["S", "L", "XL", "4XL"],
  },
  {
    name: "Apex Hoodie",
    price: 15000,
    category: "hoodie",
    image: "images/hoodie1.jpg",
    sizes: ["M", "L", "2XL", "3XL"],
  },
  {
    name: "Apex T-Shirt",
    price: 8000,
    category: "tshirt",
    image: "images/tshirt1.jpg",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    name: "Apex Jacket",
    price: 20000,
    category: "jacket",
    image: "images/jacket1.jpg",
    sizes: ["S", "L", "XL", "4XL"],
  },
];

let cart = JSON.parse(localStorage.getItem("apex-cart")) || [];

function saveCart() {
  localStorage.setItem("apex-cart", JSON.stringify(cart));
}

function generateProductHTML(product, index) {
  const options = product.sizes
    .map((size) => `<option value="${size}">${size}</option>`)
    .join("");

  return `
    <div class="product">
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>₦${product.price}</p>
      <select id="size-${index}">${options}</select>
      <button onclick="addToCart(${index})">Add to Cart</button>
    </div>
  `;
}

function displayFeaturedSlider() {
  const container = document.getElementById("featured-slider");
  if (!container) return;

  const limitedProducts = products.slice(0, 6);
  container.innerHTML = limitedProducts
    .map((product, index) => generateProductHTML(product, index))
    .join("");
}

function displayShopSlider() {
  const container = document.getElementById("shop-products");
  if (!container) return;

  container.innerHTML = products
    .map((product, index) => generateProductHTML(product, index))
    .join("");
}

function addToCart(index) {
  const product = products[index];
  const sizeSelect = document.getElementById(`size-${index}`);
  const size = sizeSelect ? sizeSelect.value : "";
  if (!size) return alert("Please select a size");

  const existing = cart.find(
    (item) => item.name === product.name && item.size === size
  );

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ name: product.name, price: product.price, size, quantity: 1 });
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
    total += item.price * item.quantity;
    const li = document.createElement("li");
    li.innerHTML = `  ${item.name} [${item.size}] (x${item.quantity}) ₦${
      item.price * item.quantity
    }
      <button onclick="removeFromCart('${item.name}', '${
      item.size
    }')">Remove</button>`;
    cartItems.appendChild(li);
  });

  if (cartCount)
    cartCount.textContent = cart.reduce((sum, i) => sum + i.quantity, 0);
  if (cartTotal) cartTotal.textContent = total;
  saveCart();
}

function toggleCart() {
  const cartBox = document.getElementById("cart");
  if (cartBox) cartBox.classList.toggle("hidden");
}

function slideProducts(direction) {
  // Try featured slider first
  let slider = document.getElementById("featured-slider");

  // If not found, try shop-products
  if (!slider) {
    slider = document.getElementById("shop-products");
  }

  if (!slider) return;

  const scrollAmount = 300;
  slider.scrollBy({
    left: direction === "left" ? -scrollAmount : scrollAmount,
    behavior: "smooth",
  });
}

// ✅ For both homepage and shop buttons
function slideFeatured(direction) {
  slideProducts(direction);
}
function slideShop(direction) {
  slideProducts(direction);
}

function checkout() {
  const user = JSON.parse(localStorage.getItem("apex-current-user"));
  if (!user) {
    alert("You must be logged in to checkout.");
    return (location.href = "login.html");
  }

  if (cart.length === 0) return alert("Your cart is empty!");

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (totalAmount <= 0) return alert("Cart total must be greater than ₦0");

  const handler = PaystackPop.setup({
    key: "pk_test_f5ed3e79b7c217ef827ad52a481bec40e2485ddb",
    email: user.email || "test@example.com",
    amount: totalAmount * 100,
    currency: "NGN",
    ref: "APEX_" + Math.floor(Math.random() * 1000000000 + 1),
    callback: function (response) {
      alert("Payment successful! Ref: " + response.reference);
      cart = [];
      saveCart();
      window.location.href = "success.html";
    },
    onClose: function () {
      alert("Transaction was not completed.");
    },
  });

  handler.openIframe();
}

function logout() {
  localStorage.removeItem("apex-current-user");
  location.href = "index.html";
}

window.onload = () => {
  const user = JSON.parse(localStorage.getItem("apex-current-user"));
  updateCart(); // Always show cart properly

  // Display homepage products if on index.html
  const featured = document.getElementById("featured-slider");
  if (featured) {
    displayFeaturedSlider();
  }

  // Display shop products if on shop.html
  const shop = document.getElementById("shop-products");
  if (shop) {
    displayShopSlider();
  }
};
