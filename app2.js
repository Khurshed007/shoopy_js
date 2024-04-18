let exit = document.querySelectorAll(".exit");
const productForm = document.getElementById("product-form");
const productEditor = document.querySelector(".product-editor");
const change = document.querySelectorAll(".change");
const ball = document.querySelectorAll(".ball");
const productName = document.getElementById("product-name").value;
const category = document.getElementById("category").value;
const price = parseFloat(document.getElementById("price").value);
const details = document.getElementById("product-detail").value;
const photoInput = document.getElementsByName("photo");
const photoFile = [photoInput[0].value];
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-ul_menu");
const sidePadding = document.querySelector(".side_padding");
const accButton = document.querySelector(".accordion-button");
const nav_ul = document.querySelector(".nav-ul_menu");
const acc_cat = document.querySelector(".accordion-category");

let checkbox = document.querySelectorAll(".label");
checkbox.forEach((checkbox, index) => {
  checkbox.onclick = function () {
    document.body.classList.toggle("light");
    if (document.body.classList.contains("light")) {
      localStorage.setItem("theme", "light");

      ball.forEach((balls) => balls.classList.add("light"));
    } else {
      localStorage.setItem("theme", "");

      ball.forEach((balls) => balls.classList.remove("light"));
    }
  };
});
if (localStorage.getItem("theme") == "light") {
  document.body.classList.add("light");
  ball.forEach((balls) => balls.classList.add("light"));
} else {
  document.body.classList.remove("light");
  ball.forEach((balls) => balls.classList.remove("light"));
}

const userRole = localStorage.getItem("userRole");
if (userRole != "Customer") {
  change.forEach((changes) => (changes.style.display = "block"));
} else {
  change.forEach((changes) => (changes.style.display = "none"));
}

const modalShown = localStorage.getItem("modalShown");
if (modalShown == "false") {
  if (userRole == "Admin") {
    alert("Hallo " + userRole);
  } else {
    alert("Hallo " + localStorage.getItem("fullName"));
  }
  localStorage.setItem("modalShown", "true");
}

exit.forEach(
  (btns) =>
    (btns.onclick = function () {
      window.location.href = "index.html";

      localStorage.setItem("modalShown", "false");
    })
);

let products = [
  {
    id: 1,
    title: "Nike Air Jordan",
    price: 16,
    category: "Sneakers",
    image: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ea3a034a-351d-4d5e-9e39-6ebe24eebd23/air-jordan-1-mid-herrenschuh-83Lm6R.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f3c594b4-5e8a-4327-87c4-4d55aa3aa69e/air-jordan-1-mid-herrenschuh-83Lm6R.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3587121c-5ff8-45b0-90b2-2cef3cb78b61/air-jordan-1-mid-herrenschuh-83Lm6R.png",
    ],
    sex: "man",
    details:
      "Step out in style with the Nike Low Sneakers. Designed for men, these sneakers offer a perfect blend of comfort and fashion. The low-top design is perfect for casual outings, while the high-quality materials ensure durability for everyday wear.",
  },
  {
    id: 2,
    title: "Nike High Sneakers",
    price: 20,
    sex: "woman",
    category: "Sneakers",
    details:
      "Elevate your style with the Nike High Sneakers. These sneakers are specially designed for women, featuring a modern and fashionable high-top design. The combination of high-quality materials ensures both comfort and durability, making them a trendy choice for any casual occasion.",

    image: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1169bec8-e520-4f4f-a2fd-85e4b82cb081/air-jordan-legacy-312-herrenschuh-H0d7S3.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/eeda5660-1e5a-45bd-a688-fe40e0801e61/air-jordan-legacy-312-herrenschuh-H0d7S3.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1a52d65f-4c70-4549-b93e-e74199675aa3/air-jordan-legacy-312-herrenschuh-H0d7S3.png",
    ],
  },
  {
    id: 3,
    title: "Nike Low Sneakers",
    price: 25,
    sex: "man",
    category: "Sneakers",
    details:
      "Step out in style with the Nike Low Sneakers. Designed for men, these sneakers offer a perfect blend of comfort and fashion. The low-top design is perfect for casual outings, while the high-quality materials ensure durability for everyday wear.",
    image: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/017cb46d-0f12-45c9-833c-0ef00b868f85/air-alpha-force-88-herrenschuh-DBbM4L.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/28c37044-aa38-492d-bb24-85281357b4a7/air-alpha-force-88-herrenschuh-DBbM4L.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e2ae4339-190b-4e4d-b6b9-ffe56b7322d0/air-alpha-force-88-herrenschuh-DBbM4L.png",
    ],
  },
  {
    id: 4,
    title: "Nike Air Max",
    sex: "man",
    price: 30,
    category: "sneakers",
    image: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/14de6943-8c87-4b9b-9585-80dea96a70d3/air-max-97-herrenschuh-R4T3zC.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c7376d02-9013-482f-80d0-016daf36d35a/air-max-97-herrenschuh-R4T3zC.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f75082ae-6ef7-4922-a356-d52665aa587c/air-max-97-herrenschuh-R4T3zC.png",
    ],
    details:
      "The Nike Air Max jeans combine style and comfort effortlessly. Made from high-quality denim, these jeans are perfect for any casual occasion. The classic design with the Air Max logo adds a touch of sporty flair to your everyday look.",
  },
  {
    id: 5,
    title: "Nike Sportswear Classic Puffer",
    price: 35,
    category: "jackets",
    details:
      "The Nike Sportswear Classic Puffer is a black jacket made of 100% polyester. It features a Nike logo, a hood, a zipper closure, and two side pockets. The material is durable, and the jacket can be easily maintained by hand washing and ironing at a low temperature.",
    image: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6c7ee040-717a-43b4-aeeb-fb27d70a529e/sportswear-classic-puffer-lockere-jacke-mit-kapuze-fur-ft53SK.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4f8fec65-998b-4be6-a482-00513c40f134/sportswear-classic-puffer-lockere-jacke-mit-kapuze-fur-ft53SK.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9070c25d-edd3-4641-8274-86d40774a750/sportswear-classic-puffer-lockere-jacke-mit-kapuze-fur-ft53SK.png",
    ],
  },
  {
    id: 6,
    title: "Jordan Brooklyn Fleece",
    price: 35,
    category: "Shirts",
    details:
      "The Jordan Brooklyn Fleece is a stylish gray sweatshirt made of 80% cotton and 20% polyester. It has the iconic Jordan logo, a round neck, and elastic cuffs and hem for a comfortable fit. Available in size 3.",
    image: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/75023c79-5809-446c-9315-e1b5d9f7d950/jordan-brooklyn-fleece-sweatshirt-mit-rundhalsausschnitt-SPwT5W.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ab3ac1df-31f7-411b-ab09-c1e01055012a/jordan-brooklyn-fleece-sweatshirt-mit-rundhalsausschnitt-SPwT5W.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fe76e0b7-297c-458c-9e49-20446fbef31d/jordan-brooklyn-fleece-sweatshirt-mit-rundhalsausschnitt-SPwT5W.png",
    ],
  },
  {
    id: 7,
    title: "Midweight Daunenjacke",
    price: 35,
    category: "jeans",
    details:
      "The Midweight Daunenjacke is a vibrant red jacket from Adidas, made of 100% polyester. It features the Adidas logo, a zipper closure, and is water-resistant. With its midweight design, it's perfect for various occasions.",
    image: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a64882b221ee4287b643b4f8c0409d06_9366/Midweight_Daunenjacke_Rot_IR7132_21_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c85908dddada48dbbcc65246c84e5e04_9366/Midweight_Daunenjacke_Rot_IR7132_25_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/799fb2a8d62b46cfb07fd11ade1d91bc_9366/Midweight_Daunenjacke_Rot_IR7132_23_hover_model.jpg",
    ],
  },
  {
    id: 8,
    title: "Adicolor T-Shirt",
    price: 35,
    sex: "woman",
    category: "Shirts",
    details:
      "The Adicolor T-Shirt is a classic white shirt made of 100% cotton. It features the Adidas logo, a round neck, and has a comfortable fit. Available in size 3.",
    image: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cf94eb6698c3436b81afaefc00e39181_9366/adicolor_Essentials_T-Shirt_Weiss_IA6461_21_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c378865ea5514256b000aefc00e3a232_9366/adicolor_Essentials_T-Shirt_Weiss_IA6461_25_outfit.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/82e350f14633499693e6aefc00e39913_9366/adicolor_Essentials_T-Shirt_Weiss_IA6461_23_hover_model.jpg",
    ],
  },
  {
    id: 9,
    title: "Adicolor T-Shirt",
    price: 35,
    sex: "man",
    category: "Shirts",
    details:
      "The Adicolor T-Shirt is a classic white shirt made of 100% cotton. It features the Adidas logo, a round neck, and has a comfortable fit. Available in size 3.",
    image: [
      "https://dfcdn.defacto.com.tr/6/R1124AZ_23WN_BK27_06_01.jpg",
      "https://dfcdn.defacto.com.tr/6/R1124AZ_23WN_BK27_05_02.jpg",
      "https://dfcdn.defacto.com.tr/6/R1124AZ_23WN_BK27_08_01.jpg",
    ],
  },
  {
    id: 10,
    title: "Skinny Jeans",
    price: 35,
    sex: "woman",
    category: "Jeans",
    details:
      "These Skinny Jeans are made of 98% cotton and 2% elastane, offering both comfort and style. With a standard fit, zipper and button closure, and the classic five-pocket style, these blue jeans are a timeless addition to your wardrobe. Available in size 3.",
    image: [
      "https://dfcdn.defacto.com.tr/6/A7008AX_23AU_NM40_04_03.jpg",
      "https://dfcdn.defacto.com.tr/6/A7008AX_23AU_NM40_03_03.jpg",
      "https://dfcdn.defacto.com.tr/6/A7008AX_23AU_NM40_07_03.jpg",
    ],
  },
  {
    id: 11,
    title: "Skinny Jeans",
    price: 35,
    sex: "man",
    category: "Jeans",
    details: "55555555555",
    image: [
      "https://dfcdn.defacto.com.tr/6/Z6298AZ_23WN_NM41_02_01.jpg",
      "https://dfcdn.defacto.com.tr/6/Z6298AZ_23WN_NM41_03_01.jpg",
      "https://dfcdn.defacto.com.tr/6/Z6298AZ_23WN_NM41_06_01.jpg",
    ],
  },
  {
    id: 12,
    title: "Oversize Fit T-Shirt",
    price: 35,
    category: "Shirts",
    sex: "man",
    details:
      "The Oversize Fit T-Shirt is a loose-fitting white shirt made of 100% cotton. It has a comfortable round neck and is available in size 3.",
    image: [
      "https://dfcdn.defacto.com.tr/6/V1870AZ_22SM_WT34_02_02.jpg",
      "https://dfcdn.defacto.com.tr/6/V1870AZ_22SM_WT34_04_02.jpg",
      "https://dfcdn.defacto.com.tr/6/V1870AZ_22SM_WT34_05_02.jpg",
    ],
  },
  {
    id: 13,
    title: "Oversize Fit Shirt",
    price: 35,
    sex: "woman",
    category: "Shirts",
    details:
      "The Oversize Fit Shirt is a loose-fitting beige shirt made of 100% viscose. It features a collar, button closure, and is available in size 3.",
    image: [
      "https://dfcdn.defacto.com.tr/7/W4515AZ_23SP_BE458_01_02.jpg",
      "https://dfcdn.defacto.com.tr/7/W4515AZ_23SP_BE458_02_02.jpg",
      "https://dfcdn.defacto.com.tr/7/W4515AZ_23SP_BE458_03_02.jpg",
    ],
  },
  {
    id: 14,
    title: "Fit Pullover Gerippt",
    price: 35,
    sex: "woman",
    category: "Pullover",
    details:
      "The Fit Pullover Gerippt is a stylish red pullover made of 79% acrylic and 21% polyester. It features a ribbed pattern, a loose fit, and a round neck. Available in size 3.",
    image: [
      "https://dfcdn.defacto.com.tr/6/A8606AX_23WN_AR104_01_01.jpg",
      "https://dfcdn.defacto.com.tr/6/A8606AX_23WN_AR104_02_01.jpg",
      "https://dfcdn.defacto.com.tr/6/A8606AX_23WN_AR104_06_01.jpg",
    ],
  },
  {
    id: 15,
    title: "Standard Fit Pullover",
    price: 35,
    sex: "man",
    category: "Pullover",
    details: `Maße des Modells: Größe: 1,71 Brust: 83 Taille: 62 Hüfte: 90
               Modellgröße: M
               Material : Acryl 79%,Polyester 21%`,
    image: [
      "https://dfcdn.defacto.com.tr/6/A5234AX_23WN_BK27_02_01.jpg",
      "https://dfcdn.defacto.com.tr/6/A5234AX_23WN_BK27_04_01.jpg",
      "https://dfcdn.defacto.com.tr/6/A5234AX_23WN_BK27_06_01.jpg",
    ],
    size: 3,
  },
  {
    id: 16,
    title: "Slim Fit Mantel aus Wildleder",
    price: 35,
    sex: "man",
    category: "Jacket",
    details: `Maße des Modells: Größe: 1,88 Brust: 99 Taille: 77 Hüfte: 97
               Modellgröße: M
               Material : Polyester 100%`,
    image: [
      "https://dfcdn.defacto.com.tr/6/R5080AZ_23WN_BN324_01_01.jpg",
      "https://dfcdn.defacto.com.tr/6/R5080AZ_23WN_BN324_04_01.jpg",
      "https://dfcdn.defacto.com.tr/6/R5080AZ_23WN_BN324_06_01.jpg",
    ],
  },
];

let greeting_text = document.querySelectorAll(".greeting p");

let getSex = localStorage.getItem("sex");

try {
  if (getSex == "Man") {
    greeting_text.forEach(
      (item) =>
        (item.innerHTML +=
          " Herr " + localStorage.getItem("fullName").split(" ")[1])
    );
    // greeting_text.innerHTML += " Herr " + localStorage.getItem("fullName").split(" ")[1]
  } else {
    greeting_text.forEach(
      (item) =>
        (item.innerHTML +=
          " Frau " + localStorage.getItem("fullName").split(" ")[1])
    );
  }
} catch {
  alert("Logen Sie sich bitte aus, danach wiedern einlogen");
}

// Отложенное получение значений полей формы после отправки
productForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Отменяем стандартное действие отправки формы

  // Получаем значения полей формы после отправки
  const productName = document.getElementById("product-name").value;
  const category = document.getElementById("categories").value;
  const gender = document.getElementById("sex").value;
  const price = parseFloat(document.getElementById("price").value);
  const details = document.getElementById("product-detail").value;
  const photoInput = document.getElementsByName("photo");
  const photoFile = [
    photoInput[0].value,
    photoInput[1].value,
    photoInput[2].value,
  ];

  // Проверяем обязательные поля
  if (!productName || isNaN(price) || !photoFile) {
    alert("Пожалуйста, заполните все обязательные поля.");
    return;
  }

  // Создаем новый продукт с полученными данными
  const newProduct = {
    id: products.length + 1,
    title: productName,
    price: price,
    category: category,
    details: details,
    image: [photoFile[0], photoFile[1], photoFile[2]],
    sex: gender,
  };

  console.log(category);
  products.push(newProduct);

  productForm.reset();

  localStorage.setItem("products", JSON.stringify(products));
  appear();
  location.reload();
});
let storedProducts;

function appear() {
  let storedProducts = localStorage.getItem("products");
  products = products;

  if (storedProducts) {
    products = JSON.parse(storedProducts);
  }

  let newDiv = document.createElement("div");
  newDiv.className = "newdiv";
  let itemCounter = 0;
  let carouselIndex = 1;
  let find_cont = document.querySelector(".finded-content");
  const goodsContainer = document.querySelector(".goods");
  const numContainer = document.querySelector(".num");

  products.forEach((items, index) => {
    if (itemCounter >= 8) {
      carouselIndex++;
      goodsContainer.appendChild(newDiv);
      newDiv = document.createElement("div");
      newDiv.className = "newdiv";
      itemCounter = 0;
    }

    // newDiv.innerHTML += `<div class="goods_item" data-category="${items.category}" data-sex="${items["sex"]}" data-nuts="${items["no_nuts"]}" data-range="${items.range ?? 0}">
    //     <div class="goods_item_img" onclick="openItemBlock(${index})">
    //         <p>${index + 1}</p>
    //         <img src="${items.image[0]}" alt="">
    //     </div>
    //     <div class="goods_item_title">
    //         <h1>${items.title}</h1>
    //         <button onclick="addToCart(${index})">+</button>
    //     </div>
    // </div>

    // `;
    newDiv.innerHTML += `<div class="goods_item  active" data-category="${items.category}" data-sex="${items.sex}" data-index="${items.index}">
        <div class="goods_item_img" >
            <img src="${items.image[0]}" alt="${items["title"]}"/>
        </div>
        <div class="goods_item_cover" onclick="openItemBlock(event, ${index})" >
            <button class="addTocart" onclick="addToCart(event, ${index})">+</button>
        </div>
        <div class="goods_item_title">
            <h1>${items.title}</h1>
        </div>
    </div>`;

    find_cont.innerHTML += `<div class="finded-content-box" data-category="${
      items.category
    }" data-sex="${items["sex"]}" data-nuts="${items["no_nuts"]}" data-range="${
      items.range ?? 0
    }" >
            <div class="finded-content-item-left" onclick="openItemBlock(${index})">
                <div class="finded-content-item-left-image">
                    <img src=${items.image[0]}>
                </div>
                <div class="finded-content-item-left-description">
                    <h2>${items.title}</h2>
                    <h2>${items.sex ?? "not indicated"}</h2>
                </div>
            </div>
            <div class="finded-content-item-right">
                <div class="finded-content-item-right-price">
                    <h2> $${items.price}</h2>
                    <button class = "v-btn addTocart" onclick="addToCart(event, ${index})"">Add to cart</button>
                </div>
            </div>
            
        </div>`;

    itemCounter++;
  });

  if (itemCounter > 0) {
    goodsContainer.appendChild(newDiv);
  }
}

appear();

function mainCarousel() {
  let carouselContent = document.querySelector(".carousel-content");
  let images = document.querySelectorAll(".items");
  let prevBtn = document.querySelector(".prev");
  let nextBtn = document.querySelector(".next");

  for (let i = 0; i < images.length; i++) {
    document.querySelector(
      ".circle_item"
    ).innerHTML += `<span class="circle" data-index="${i}"></span>`;
  }

  let circles = document.querySelectorAll(".circle");
  let left = 0;
  let count = 0;

  circles[0].classList.add("active");

  circles.forEach((e, index) => {
    e.onclick = function () {
      circles.forEach((circle) => circle.classList.remove("active"));

      this.classList.add("active");

      count = this.dataset.index;
      // images.forEach(img => img.classList.remove("active-img"));
      // images[count].classList.add("active-img");

      left = -count * images[0].clientWidth;
      carouselContent.style.left = left + "px";
    };
  });

  nextBtn.onclick = function () {
    circles.forEach((circle) => circle.classList.remove("active"));

    left -= carouselContent.clientWidth;
    if (left <= -carouselContent.clientWidth * images.length) {
      left = 0;
    }

    count++;
    if (count + 1 == images.length + 1) {
      count = 0;
    }

    circles[count].classList.add("active");
    carouselContent.style.left = left + "px";
  };

  function prev() {
    circles.forEach((circle) => circle.classList.remove("active"));

    count--;
    if (count + 1 == 0) {
      count = images.length - 1;
    }

    circles[count].classList.add("active");

    left += carouselContent.clientWidth;
    if (left == carouselContent.clientWidth) {
      left = -carouselContent.clientWidth * (images.length - 1);
    }

    carouselContent.style.left = left + "px";
  }

  prevBtn.onclick = prev;
}
mainCarousel();
let categorys = document.querySelectorAll(".item_category");
let goods = document.querySelectorAll(".finded-content-box");
let carousel_category = document.querySelector(".sidebar-carousel-category");
let carousel_wrapper = document.querySelector(".carousel-wrapper");
let find_cont = document.querySelector(".finded-content");
let sidebar = document.querySelector(".sidebar");
let logo = document.querySelector(".logo");
let title_container = document.querySelector(".title_container");

let activeMassiv = [
  carousel_category,
  carousel_wrapper,
  find_cont,
  sidebar,
  title_container,
  document.querySelector("footer"),
];

let sex_option = document.getElementById("sex_option");
let selectedCategory = "all";
let sexCategory = "both";
let activeElasticIndex = 0; // Индекс активного эластик-поля (0 или 1)

Array.from(categorys).forEach((btn) => {
  btn.onclick = function () {
    Array.from(categorys).forEach((items) => items.classList.remove("active"));
    this.classList.add("active");
    selectedCategory = this.dataset.category;
    Array.from(activeMassiv).forEach((e) => e.classList.add("active"));
    console.log(navMenu);
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
    filtered(activeElasticIndex);
  };
});

sex_option.oninput = function () {
  sexCategory = this.value;
  activeMassiv.forEach((e) => e.classList.add("active"));
  filtered(activeElasticIndex);
};

let search_btn = document.querySelectorAll(".search-container .v-btn");
search_btn[0].onclick = function () {
  title_container.style.display = "none";
  activeMassiv.forEach((e) => e.classList.add("active"));
  activeElasticIndex = 0;
  filtered(activeElasticIndex);
};
search_btn[1].onclick = function () {
  title_container.style.display = "none";
  activeMassiv.forEach((e) => e.classList.add("active"));
  activeElasticIndex = 1;
  filtered(activeElasticIndex);
};

function filtered(elasticIndex) {
  let val = document
    .querySelectorAll(".elastic")
    [elasticIndex].value.toLowerCase()
    .trim();
  let elItems = document.querySelectorAll(".finded-content-box");
  let sexCategory = sex_option.value;
  elItems.forEach((elem, index) => {
    let text = elem.children[0].children[1].children[0].innerText.toLowerCase();
    let sexChecked =
      sexCategory.toLowerCase() == "both".toLowerCase() ||
      sexCategory.toLowerCase() == elem.dataset.sex.toLowerCase() ||
      !elem.dataset.sex.toLowerCase().trim();
    let categoryChecked =
      selectedCategory.toLowerCase().trim() == "all".toLowerCase().trim() ||
      selectedCategory.toLowerCase().trim() ==
        elem.dataset.category.toLowerCase().trim();

    if (
      (text.includes(val) ||
        elem.dataset.category.toLowerCase().includes(val)) &&
      sexChecked &&
      categoryChecked
    ) {
      elem.style.display = "flex";
    } else {
      elem.style.display = "none";
    }
  });
}
console.log(activeElasticIndex);
filtered(activeElasticIndex);

let listCards;

function addToCart(e, index) {
  listCards = JSON.parse(localStorage.getItem("list")) || [];
  if (listCards[index] == undefined) {
    listCards[index] = { ...products[index] };
    listCards[index].count = 0;
  }
  listCards[index]["count"]++;
  localStorage.setItem("list", JSON.stringify(listCards));
  resolved();
  return listCards;
}
document
  .querySelector(".delivery_order_accept")
  .addEventListener("click", function () {
    let message = "No goods in Cart to purchase";

    JSON.parse(localStorage.getItem("list")).forEach((item) => {
      if (item != null || item != undefined) {
        message = "Purchase accepted";
      }
    });
    listCards = [];

    localStorage.setItem("list", JSON.stringify(listCards));

    alert(message);
    resolved();
  });

let cartPrice = document.querySelector(".delivery_order_price");
let cart = document.querySelectorAll(".cart");
let cartCount = document.querySelectorAll(".cart .count");
let mail_content = document.querySelector(".mail_cont");
let mail_exit = document.querySelector(".mail_content span");
mail_exit.onclick = () => {
  document.querySelector(".mail_container").style.display = "none";
  document.body.style.overflow = "unset";
};
cart.forEach(
  (carts) =>
    (carts.onclick = () => {
      document.querySelector(".mail_container").style.display = "flex";
      document.body.style.overflowY = "hidden";
    })
);
function resolved() {
  mail_content.innerHTML = "";
  let totalPrice = 0;
  let count = 0;
  let listCards = JSON.parse(localStorage.getItem("list")) || [];

  listCards.forEach((item, index) => {
    if (item) {
      totalPrice += item.count * item.price;
      count += item.count;

      let Order = `
                   
                        <div class="cart_item">
                            <img src="${item.image[0]}" alt="">
                            <h3>${item.title}</h3>
                            <h4>$${item.price}</h4>
                        </div>
                        <div class="cart_item_quantity">
                            <button class = "addTocart" onclick="addToCart(event, ${index})">+</button>
                            <p>${item.count}</p>
                            <button onclick="deleteCart(${index})">-</button>
                            <p>$${Number(item.price) * item.count}</p>
                            <button onclick="removeCart(${index})">R</button>
                        </div>
                 
                `;

      const newDiv = document.createElement("div");
      newDiv.className = "cart_box";
      newDiv.innerHTML += Order;

      mail_content.appendChild(newDiv);
    }
  });

  if (count === 0) {
    const noOrdersMessage = document.createElement("h1");
    noOrdersMessage.textContent = "Sorry, but no orders";
    mail_content.appendChild(noOrdersMessage);
    mail_content.style.display = "flex";
    mail_content.style.justifyContent = "center";
  }

  cartCount.forEach((carts) => (carts.innerHTML = count));
  cartPrice.innerHTML = totalPrice;
}
resolved();
function removeCart(index) {
  addToCart();
  if (listCards[index]["count"]) {
    delete listCards[index];
  }
  localStorage.setItem("list", JSON.stringify(listCards));
  resolved();
}
function deleteCart(index) {
  addToCart();

  listCards[index]["count"]--;
  if (listCards[index]["count"] <= 0) {
    delete listCards[index];
  }
  localStorage.setItem("list", JSON.stringify(listCards));
  resolved();
}

let newDiv = document.querySelectorAll(".newdiv");

let ul = document.querySelector(".pagination ul");
let carouselContent = document.querySelector(".goods");
let totalPages = newDiv.length;

function element(totalPages, page) {
  let count = 0;
  let liTag = "";
  let activeLi;
  let beforePages = page - 1;
  let afterPages = page + 1;
  if (page > 1) {
    liTag += ` <li class=" b btn_prev" onclick="element(totalPages, ${
      page - 1
    })">Prev</li>`;
  }
  if (page > 2) {
    liTag += ` <li class="numb" onclick="element(totalPages, ${
      page / page
    })">1</li>`;
  }
  if (page > 2) {
    liTag += ` <li class="dots">...</li>`;
  }
  for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
    if (pageLength == 0) {
      pageLength = pageLength + 1;
    } else if (pageLength > totalPages) {
      count = totalPages - 1;
      continue;
    }
    if (page == pageLength) {
      activeLi = "activeLi";
    } else {
      activeLi = "";
    }
    liTag += `<li class="numb ${activeLi}" data-index = ${pageLength}  onclick="element(totalPages, ${pageLength})">${pageLength}</li>`;
    count = pageLength - 2;
  }

  if (page < totalPages - 1) {
    if (page < totalPages - 2) {
      liTag += ` <li class="dots">...</li>`;
    }
    liTag += ` <li class="numb" onclick="element(totalPages, ${totalPages})" >${totalPages}</li>`;
  }

  if (page < totalPages) {
    liTag += ` <li class=" b btn_next" onclick="element(totalPages, ${
      page + 1
    })" >Next</li>`;
  }
  ul.innerHTML = liTag;
  newDiv.forEach((item, index) => {
    if (count === 0 && index === 0) {
      item.style.left = "0px";
    } else {
      item.style.left = -10 * newDiv[0].clientWidth + "px";
    }
  });
  newDiv[count].style.left = 0 + "px";
}
element(totalPages, totalPages / totalPages);

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
function toggleCategory(categoryId) {
  const category = document.getElementById(categoryId);
  accButton.classList.toggle("active");
  if (category.style.display === "block") {
    category.style.display = "none";
  } else {
    category.style.display = "block";
  }
}
let displayCheckItems = [
  document.querySelector(".sidebar-carousel-wrapper"),
  document.querySelector(".title_container"),
  document.querySelector(".search-container.mobile-none"),
];
function openItemBlock(e, index) {
  console.log(e.target.classList);
  if (e.target.classList.contains("addTocart")) return false;
  let screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  if (screenWidth < 899) {
    document.querySelector("footer").style.display = "none";
  }
  displayCheckItems.forEach((item) => {
    item.style.display = "none";
  });

  let box_content = document.querySelector(".box-container-content-item-img");
  document.querySelector(".box-container").style.display = "block";
  let box_details = document.querySelector(
    ".box-container-content-item-details"
  );

  box_content.innerHTML = `
                        <div class="item-img-image">
                            <div class="main-img">
                                <img src="${products[index].image[0]}" alt="">
                            </div>
                            <div class="secondary">
                                <img class="secondary-img active" src="${products[index].image[0]}" alt="">
                                <img class="secondary-img" src="${products[index].image[1]}" alt="">
                                <img class="secondary-img" src="${products[index].image[2]}" alt="">
                            </div>
                        </div>
                    `;

  box_details.innerHTML = `
                        <div class="item-details-category">
                            <h3>Category: ${products[index].category}</h3>
                        </div>
                        <div class="item-details-choice">
                            <h3>Name: "${products[index].title}"</h3>
                            <div class="item-details-choice-buy">
                                <h3>${products[index].price}$</h3>
                                <button class="item-details-btn add" onclick="addToCart(event, ${index})">Add to Cart</button>
                            </div>
                        </div>
                        <div class="item-details-charkteristik">
                            <h2>Product details</h2>
                            <p>${products[index].details ?? "No details"}</p>
                        </div>
                    `;
  let secondaryImg = document.querySelectorAll(".secondary-img");
  secondaryImg.forEach((btns, index) => {
    btns.addEventListener("click", () => {
      document.querySelector(".main-img img").src = btns.src;
      secondaryImg.forEach((btns) => btns.classList.remove("active"));
      btns.classList.add("active");
    });
  });
}

let closeBtn = document.querySelector(".close-button");
let exitBoxCont = document.querySelector(".box-container-content span");
let exitBtns = [exitBoxCont, logo, closeBtn];

exitBtns.forEach((btns) => (btns.onclick = () => location.reload()));

change.forEach((changes) => {
  changes.onclick = function () {
    displayCheckItems.forEach((item) => {
      item.style.display = "none";
    });
    document.querySelector(".box-container").style.display = "none";
    productEditor.classList.toggle("active");
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  };
});

let menuBlocks = document.querySelectorAll(".menu-block");

let text = document.querySelector(".copyright-text p");
text.innerHTML += "@ " + new Date().getFullYear() + " @ Shopy.com";
