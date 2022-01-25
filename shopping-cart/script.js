// Data
const items = [
  {
    id: 0,
    imgURL:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/88c3280a-1b77-4cf9-957f-d71b91e90393/revolution-6-next-nature-road-running-shoes-NC0P7k.png",
    name: "Nike Revolution 6 Next Nature",
    price: 359.9,
  },
  {
    id: 1,
    imgURL:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/0e30f5e9-964b-4c64-ba28-6b36055c9343/court-vision-mid-shoes-DdhXk6.png",
    name: "Nike Court Vision Mid",
    price: 309,
  },
  {
    id: 2,
    imgURL:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/cd905fdc-42a5-4fe5-bffb-1a56ab3b3ad2/air-force-1-shadow-shoes-mN8Glx.png",
    name: "Nike Air Force 1 Shadow",
    price: 455,
  },
  {
    id: 3,
    imgURL:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/7ea697ac-86c7-4ae1-b609-2786657147c2/court-vision-mid-next-nature-shoes-VKCWFj.png",
    name: "Nike Court Vision Mid Next Nature",
    price: 389.9,
  },
  {
    id: 4,
    imgURL:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/a4042d5e-4ee8-4df7-8cc8-d81d2518717d/metcon-7-training-shoes-knCh3v.png",
    name: "Nike Metcon 7",
    price: 559,
  },
  {
    id: 5,
    imgURL:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/3c0bf130-4622-4ebd-b9d1-d203f5209458/react-metcon-turbo-training-shoes-V0kjXQ.png",
    name: "Nike React Metcon Turbo",
    price: 619,
  },
  {
    id: 6,
    imgURL:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/1d5a475d-d08b-4d51-8171-61e9d0761a16/blazer-mid-77-jumbo-shoes-kWXfC7.png",
    name: "Nike Blazer Mid '77 Jumb",
    price: 479.9,
  },
];

const cart = {
  items: [],
  totalPrice: "",
};

// Utils
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

// DOM Elements
const navBurger = document.querySelector(".navbar-burger");
const totalShoesText = document.getElementById("total-shoes-text");
const itemList = document.getElementById("item-list");

// Functions
const handleNavClick = () => {
  const dataTarget = navBurger.dataset.target;
  const target = document.getElementById(dataTarget);
  navBurger.classList.toggle("is-active");
  target.classList.toggle("is-active");
};

const renderItems = () => {
  items.forEach((item) => {
    itemList.innerHTML += `
    <div class="column is-one-fifth-widescreen is-one-quarter-desktop is-one-third-tablet">
    <div class="card">
      <div class="card-image">
        <figure class="image is-3by3">
          <img
            src="${item.imgURL}"
            alt="$${item.name}"
          />
        </figure>
      </div>
      <div class="card-content w-100 text-ellipsis">${item.name}</div>
      <div class="card-footer">
        <p class="card-footer-item">${formatter.format(item.price)}</p>
        <div class="card-footer-item">
          <button class="button is-primary">
            <span class="icon is-medium"
              ><i class="fas fa-cart-plus"></i
            ></span>
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  </div>
    `;
  });
};


// Event listeners
navBurger.addEventListener("click", handleNavClick);
document.addEventListener("DOMContentLoaded", renderItems);
