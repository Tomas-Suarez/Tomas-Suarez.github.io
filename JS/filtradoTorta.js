const products = [
    {
        productName: "Tarta de Cereza",
        price: 2000,
        img: "../img/imgtortas/tortas/torta1.jpg",
        category: "Tartas de Frutas"
    },
    {
        productName: "Pastel de Chocolate con Fresas",
        price: 1900,
        img: "../img/imgtortas/tortas/torta2.jpg",
        category: "Pasteles de Chocolate"
    },
    {
        productName: "Pastel de Durazno y Crema",
        price: 2900,
        img: "../img/imgtortas/tortas/torta3.jpg",
        category: "Pasteles con Crema"
    },
    {
        productName: "Chocotorta",
        price: 1500,
        img: "../img/imgtortas/tortas/torta4.jpg",
        category: "Pasteles de Chocolate"
    },
    {
        productName: "Pastel de Chocolate Clásico",
        price: 2200,
        img: "../img/imgtortas/tortas/torta5.jpg",
        category: "Pasteles de Chocolate"
    },
    {
        productName: "Tarta de Limón con Merengue",
        price: 2200,
        img: "../img/imgtortas/tortas/torta6.jpg",
        category: "Tartas con Merengue"
    },
    {
        productName: "Cheesecake de Frutos Rojos",
        price: 2200,
        img: "../img/imgtortas/tortas/torta7.jpg",
        category: "Tartas de Frutas"
    },
    {
        productName: "Pastel de Fresas con Crema",
        price: 2200,
        img: "../img/imgtortas/tortas/torta8.webp",
        category: "Tartas de Frutas"
    },
    {
        productName: "Torta de Tres Chocolate",
        price: 2200,
        img: "../img/imgtortas/tortas/torta9.jpg",
        category: "Pasteles de Chocolate"
    },
    {
        productName: "Tarta de Chocolate con Merengue",
        price: 2200,
        img: "../img/imgtortas/tortas/torta10.jpg",
        category: "Tartas con Merengue"
    },
    {
        productName: "Pastel de Zanahoria con Nueces",
        price: 2200,
        img: "../img/imgtortas/tortas/torta11.jpg",
        category: "Pasteles y Tartas de Nuez o Zanahoria"
    },
    {
        productName: "Tarta de Frutas Frescas",
        price: 2200,
        img: "../img/imgtortas/tortas/torta12.jpg",
        category: "Tartas de Frutas"
    }
];

function displayProducts() {
    const shopContent = document.getElementById("shopContent");
    shopContent.innerHTML = "";  // Limpiamos el contenido actual

    // Usamos un bucle for con la variable i
    for (let i = 0; i < products.length; i++) {

        const div = document.createElement("div");
        div.className = "card-products"; // Añadimos la clase "producto" a cada div

        div.innerHTML = `
        <img src="${products[i].img}" alt="${products[i].productName}">
        <h3>${products[i].productName}</h3>
        <p class="price">$${products[i].price}</p>
        `;

        shopContent.appendChild(div);
    }
}
//Obtenemos la referencia de los botones
const bTartasFrutas = document.getElementById("bTartasFrutas");
const bPastelesChocolate = document.getElementById("bPastelesChocolate");
const bTartasMerengue = document.getElementById("bTartasMerengue");
const bPastelesNuezZanahoria = document.getElementById("bPastelesNuezZanahoria");
const bPastelesCrema = document.getElementById("bPastelesCrema");
const bTodos = document.getElementById("bTodos");

//Agregamos los eventos a los botones
bTartasFrutas.addEventListener("click", () => FiltrarProductos("Tartas de Frutas"));
bPastelesChocolate.addEventListener("click", () => FiltrarProductos("Pasteles de Chocolate"));
bTartasMerengue.addEventListener("click", () => FiltrarProductos("Tartas con Merengue"));
bPastelesNuezZanahoria.addEventListener("click", () => FiltrarProductos("Pasteles y Tartas de Nuez o Zanahoria"));
bPastelesCrema.addEventListener("click", () => FiltrarProductos("Pasteles con Crema"));
bTodos.addEventListener("click", () => displayProducts());

//Filtrado de productos
function FiltrarProductos(productCategory){
    const shopContent = document.getElementById("shopContent")
    shopContent.innerHTML = ""; //Borramos el contenido

    //Recorre a los productos para filtrarlos
    for(let i =0; i<products.length; i++){
        if(products[i].category == productCategory){
            const div = document.createElement("div");
            div.className = "card-products"; // Añadimos la clase "producto" a cada div
    
            div.innerHTML = `
            <img src="${products[i].img}" alt="${products[i].productName}">
            <h3>${products[i].productName}</h3>
            <p class="price">$${products[i].price}</p>
            `;
            shopContent.appendChild(div);
        }
    }
}

displayProducts();