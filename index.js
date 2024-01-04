let displayPod = document.querySelector(".top-sell");
let newCart = JSON.parse(localStorage.getItem("newCart")) || [];
let CartsLength = document.getElementById("cart-length");

let AllProducts = [];

const allPro = () => {
  AllProducts.map((pro) => {
    displayPod.innerHTML += `
            <div class="products" onclick="showEachPro(${pro.id})">
                <img src="${pro.thumbnail}" alt="">
                <p>${pro.title} </p>
                <p id="products-price"># ${pro.price}.00</p>
              </div>
            `;
  });
};

const getAllProducts = async () => {
  let data = await fetch("https://dummyjson.com/products");
  let res = await data.json();
  AllProducts = res.products;
  localStorage.setItem("jProducts", JSON.stringify(AllProducts));
  allPro();
};
getAllProducts();

CartsLength.innerHTML = newCart.length;

const showEachPro = (id) => {
  localStorage.setItem("jProductsID", id);
  window.location.href = "addToCart.html";
};

const showCart = () => {
  window.location.href = "cart.html";
};

const tablets = (a) => {
  cat = AllProducts.filter((f) => f.category == a);
  displayPod.innerHTML = "";
  cat.map((fil) => {
    displayPod.innerHTML += `
                <div class="products" onclick="showEachPro(${fil.id})">
                    <img src="${fil.thumbnail}" alt="">
                    <p>${fil.title} </p>
                    <p id="products-price"># ${fil.price}.00</p>
                  </div>
              `;
  });
};
const groceries = (b) => {
  cat = AllProducts.filter((f) => f.category == b);
  displayPod.innerHTML = "";
  cat.map((fil) => {
    displayPod.innerHTML += `
                <div class="products" onclick="showEachPro(${fil.id})">
                    <img src="${fil.thumbnail}" alt="">
                    <p>${fil.title} </p>
                    <p id="products-price"># ${fil.price}.00</p>
                  </div>
              `;
  });
};
const computing = (c) => {
  cat = AllProducts.filter((f) => f.category == c);
  displayPod.innerHTML = "";
  cat.map((fil) => {
    displayPod.innerHTML += `
                <div class="products" onclick="showEachPro(${fil.id})">
                    <img src="${fil.thumbnail}" alt="">
                    <p>${fil.title} </p>
                    <p id="products-price"># ${fil.price}.00</p>
                  </div>
              `;
  });
};
const skincare = (d) => {
  cat = AllProducts.filter((f) => f.category == d);
  displayPod.innerHTML = "";
  cat.map((fil) => {
    displayPod.innerHTML += `
                <div class="products" onclick="showEachPro(${fil.id})">
                    <img src="${fil.thumbnail}" alt="">
                    <p>${fil.title} </p>
                    <p id="products-price"># ${fil.price}.00</p>
                  </div>
              `;
  });
};
const fragrances = (e) => {
  cat = AllProducts.filter((f) => f.category == e);
  displayPod.innerHTML = "";
  cat.map((fil) => {
    displayPod.innerHTML += `
                <div class="products" onclick="showEachPro(${fil.id})">
                    <img src="${fil.thumbnail}" alt="">
                    <p>${fil.title} </p>
                    <p id="products-price"># ${fil.price}.00</p>
                  </div>
              `;
  });
};
const decoration = (g) => {
  cat = AllProducts.filter((f) => f.category == g);
  displayPod.innerHTML = "";
  cat.map((fil) => {
    displayPod.innerHTML += `
                <div class="products" onclick="showEachPro(${fil.id})">
                    <img src="${fil.thumbnail}" alt="">
                    <p>${fil.title} </p>
                    <p id="products-price"># ${fil.price}.00</p>
                  </div>
              `;
  });
};
