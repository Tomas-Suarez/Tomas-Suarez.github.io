const products = [
    {
        productName: "Capuchino",
        price: 2000,
        img: "../IMG/imgtortas/cafeteria/cafeteria1.jpg",
        category: "Bebidas Calientes"
    },
    {
        productName: "Cafe Latte",
        price: 1900,
        img: "../IMG/imgtortas/cafeteria/cafeteria2.jpg",
        category: "Bebidas Calientes"
    },
    {
        productName: "Cafe Americano",
        price: 2900,
        img: "../IMG/imgtortas/cafeteria/cafeteria3.webp",
        category: "Bebidas Calientes"
    },
    {
        productName: "Chocolate Caliente",
        price: 1500,
        img: "../IMG/imgtortas/cafeteria/cafeteria4.webp",
        category: "Bebidas Calientes"
    },
    {
        productName: "Clasico Te Verde",
        price: 2200,
        img: "../IMG/imgtortas/cafeteria/cafeteria5.webp",
        category: "Bebidas Calientes"
    },
    {
        productName: "Clasico Te Negro",
        price: 2200,
        img: "../IMG/imgtortas/cafeteria/cafeteria6.webp",
        category: "Bebidas Calientes"
    },
    {
        productName: "Cafe Escoces",
        price: 2200,
        img: "../IMG/imgtortas/cafeteria/cafeteria7.webp",
        category: "Bebidas Calientes"
    },
    {
        productName: "Cafe Frappe",
        price: 2200,
        img: "../IMG/imgtortas/cafeteria/cafeteria8.jpg",
        category: "Bebidas Frias"
    },
    {
        productName: "Cafe Cold Brew",
        price: 2200,
        img: "../IMG/imgtortas/cafeteria/cafeteria9.jpg",
        category: "Bebidas Frias"
    },
    {
        productName: "Jugo de Naranja Natural",
        price: 2200,
        img: "../IMG/imgtortas/cafeteria/cafeteria10.jpg",
        category: "Bebidas Frias"
    },
    {
        productName: "Smoothie",
        price: 2200,
        img: "../IMG/imgtortas/cafeteria/cafeteria11.png",
        category: "Bebidas Frias"
    },
    {
        productName: "Liquado de banana",
        price: 2200,
        img: "../IMG/imgtortas/cafeteria/cafeteria12.jpg",
        category: "Bebidas Frias"
    },
    {
        productName: "Batido de Frutilla y Banana",
        price: 2200,
        img: "../IMG/imgtortas/cafeteria/cafeteria13.jpg",
        category: "Bebidas Frias"
    },
    {
        productName: "Batido de Mango y Maracuyá",
        price: 2200,
        img: "../IMG/imgtortas/cafeteria/cafeteria14.jpg",
        category: "Bebidas Frias"
    }
];

// Muestra todos los productos
function displayProducts() {
    const shopContent = document.getElementById("shopContent");
    shopContent.innerHTML = ""; // Limpiamos el contenido actual

    products.forEach(product => {
        const div = document.createElement("div");
        div.className = "card-products";
        div.innerHTML = `
            <img src="${product.img}" alt="${product.productName}">
            <h3>${product.productName}</h3>
            <p class="price">$${product.price}</p>
        `;
        shopContent.appendChild(div);
    });
}

// Resetea los textos de los botones
function resetearBotones() {
    bBebidasCalientes.textContent = "☐ Bebidas Calientes";
    bBebidasFrias.textContent = "☐ Bebidas Frias";
}

// Filtrar productos según categoría
function FiltrarProductos(productCategory) {
    const shopContent = document.getElementById("shopContent");
    shopContent.innerHTML = ""; // Limpiamos el contenido

    const filteredProducts = products.filter(product => product.category === productCategory);

    filteredProducts.forEach(product => {
        const div = document.createElement("div");
        div.className = "card-products";
        div.innerHTML = `
            <img src="${product.img}" alt="${product.productName}">
            <h3>${product.productName}</h3>
            <p class="price">$${product.price}</p>
        `;
        shopContent.appendChild(div);
    });
}

// Obtenemos la referencia de los botones
const bBebidasCalientes = document.getElementById("bBebidasCalientes");
const bBebidasFrias = document.getElementById("bBebidasFrias");
const bTodos = document.getElementById("bTodos");

// Agregamos los eventos a los botones
bBebidasCalientes.addEventListener("click", () => {
    resetearBotones();
    FiltrarProductos("Bebidas Calientes");
    bBebidasCalientes.textContent = "☑ Bebidas Calientes";
});

bBebidasFrias.addEventListener("click", () => {
    resetearBotones();
    FiltrarProductos("Bebidas Frias");
    bBebidasFrias.textContent = "☑ Bebidas Frias";
});

bTodos.addEventListener("click", () => {
    resetearBotones();
    displayProducts();
});

displayProducts();