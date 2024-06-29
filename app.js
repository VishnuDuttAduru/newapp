const wrapper = document.querySelector(".slider-wrapper");
const menu_item = document.querySelectorAll(".menu-item");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 9945,
        colors: [
            {
                code: "black",
                img: "./assets/air_jordan_shoe.jpg"
            },
            {
                code: "darkblue",
                img: "./assets/air_jordan_blue.jpg"
            }
        ]
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 12450,
        colors: [
            {
                code: "green",
                img: "./assets/sneaker_img.jpg"
            },
            {
                code: "gray",
                img: "./assets/air_jordan_blue.jpg"
            }
        ]
    },
    {
        id: 3,
        title: "Blazer",
        price: 9110,
        colors: [
            {
                code: "brown",
                img: "./assets/blazer.jpg"
            },
            {
                code: "lightblue",
                img: "./assets/blazer_blue.jpg"
            }
        ]
    },
    {
        id: 4,
        title: "Crater",
        price: 10770,
        colors: [
            {
                code: "navy",
                img: "./assets/crater.jpg"
            },
            {
                code: "teal",
                img: "./assets/crater_blue.jpg"
            }
        ]
    },
    {
        id: 5,
        title: "Adidas",
        price: 8299,
        colors: [
            {
                code: "black",
                img: "./assets/adidas.jpg"
            },
            {
                code: "skyblue",
                img: "./assets/adidas_blue.jpg"
            }
        ]
    }
];

let chosenProduct = products[0];
const currentProductImg = document.querySelector(".product-img");
const currentProductTitle = document.querySelector(".product-title");
const currentProductPrice = document.querySelector(".product-price");
const currentProductColor = document.querySelectorAll(".color");
const currentProductSize = document.querySelectorAll(".size");

menu_item.forEach((item, index) => {
    item.addEventListener("click", () => {
        // Change the Current Slide

        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // Change the Chosen Product

        chosenProduct = products[index];

        // Change title of Chosen Product
        currentProductTitle.textContent = chosenProduct.title;
        currentProductPrice.textContent = "Rs." + chosenProduct.price;
        currentProductImg.src = chosenProduct.colors[0].img;

        // Changing New Colors
        currentProductColor.forEach((color, index) => {
            color.style.backgroundColor = chosenProduct.colors[index].code;
        });
    })
});

currentProductColor.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = chosenProduct.colors[index].img;
    })
});

currentProductSize.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSize.forEach(size => {
            size.style.backgroundColor = "white",
            size.style.color = "black"
        })
        size.style.backgroundColor = "black",
        size.style.color = "white"
    })
});

const productButton = document.querySelector(".product-button");
const payment = document.querySelector(".payment");
const closePayment = document.querySelector(".pay-close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

closePayment.addEventListener("click", () => {
    payment.style.display = "none";
});