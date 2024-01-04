let eachProduct = JSON.parse(localStorage.getItem("jProducts"));
let disFindPro = document.querySelector(".prod-info-box");
let addToCarts = JSON.parse(localStorage.getItem("Carts"));
let eachProdId = localStorage.getItem("jProductsID");
let newCart = JSON.parse(localStorage.getItem("newCart")) || [];
let CartsLength = document.getElementById("cart-length");

localStorage.setItem("disableBtn", "false")
let showDisBtn; 

console.log(showDisBtn);

const getEachProduct = () => {
    showDisBtn = localStorage.getItem("disableBtn")
  let findProd = eachProduct.find((eachProd) => eachProd.id == eachProdId);

  localStorage.setItem("find", JSON.stringify(findProd));
  

  disFindPro.innerHTML += `
    <div class="prod-info">
            <div class="img-box">
                <img src="${findProd.thumbnail}" alt="">
                <div class="img-dis">
                    <img src="${findProd.images[3]}" alt="">
                    <img src="${findProd.images[1]}" alt="">
                    <img src="${findProd.images[2]}" alt="">
                </div>
            </div>
            <div class="info-box">
                <h3>${findProd.description}</h3>
                <p>${findProd.brand}</p>
                <hr/>
                <h2># ${findProd.price}.00</h2>
                <p>In stock</p>
                <p class="back" onclick="back()">Back</p>

                ${(showDisBtn == "false"
                    ? `
                    <button id="add-to-cart" onclick="addToCart()">Add To Cart</button>
                    `:
                     `
                     <div class="disable-btn">
                         <button>-</button>
                         <span>1</span>
                         <button>+</button>
                         <p>(1 items(1) added)</p>
                  </div>
                     ` )}
                
                
            </div>
        </div>
        <div class="prod-address"></div>
    `;

    

};

getEachProduct();
CartsLength.innerHTML = newCart.length;

let find = JSON.parse(localStorage.getItem("find"));
const addToCart = () => {
  newCart.push(find);

  console.log(newCart, "yoo");
  CartsLength.innerHTML = newCart.length;

  localStorage.setItem("disableBtn", "true")
  showDisBtn = localStorage.getItem("disableBtn")

  console.log(showDisBtn);

  localStorage.setItem("newCart", JSON.stringify(newCart));

};

const showCart = () => {
  window.location.href = "cart.html";
};
const back = () => {
  window.location.href = "index.html";
};



//   <button id="add-to-cart" onclick="addToCart()">Add To Cart</button>
                  
                //   `
                //   : `
                //   <div class="disable-btn">
                //         <button>-</button>
                //         <span>1</span>
                //         <button>+</button>
                //         <p>(1 items(1) added)</p>
                //  </div>
                // `)}