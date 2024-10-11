/* Probando agregar otras cosas 
    Seria una version 2
*/

const products = [
    {
        productName: "Box regalo#1",
        price: 2000,
        img: "../IMG/imgtortas/desayunos/desayuno1.jpeg",
        category: "bDesayunoMerienda"
    },
    {
        productName: "Box regalo#2",
        price: 1900,
        img: "../IMG/imgtortas/desayunos/desayuno2.jpg",
        category: "bBoxTematico"
    },
    {
        productName: "Box regalo#3",
        price: 2900,
        img: "../IMG/imgtortas/desayunos/desayuno3.jpg",
        category: "bDesayunoMerienda"
    },
    {
        productName: "Box regalo#4",
        price: 1500,
        img: "../IMG/imgtortas/desayunos/desayuno4.jpg",
        category: "bBoxTematico"
    },
    {
        productName: "Box regalo#5",
        price: 2200,
        img: "../IMG/imgtortas/desayunos/desayuno5.jpg",
        category: "bBoxTematico"
    },
    {
        productName: "Box regalo#6",
        price: 2200,
        img: "../IMG/imgtortas/desayunos/desayuno6.jpg",
        category: "bDesayunoMerienda"
    },
    {
        productName: "Box regalo#7",
        price: 2200,
        img: "../IMG/imgtortas/desayunos/desayuno7.jpg",
        category: "bBoxTematico"
    },
    {
        productName: "Box regalo#8",
        price: 2200,
        img: "../IMG/imgtortas/desayunos/desayuno8.jpg",
        category: "bPostresGourmet"
    },
    {
        productName: "Box regalo#9",
        price: 2200,
        img: "../IMG/imgtortas/desayunos/desayuno9.jpg",
        category: "bPostresGourmet"
    },
    {
        productName: "Box regalo#10",
        price: 2200,
        img: "../IMG/imgtortas/desayunos/desayuno10.jpg",
        category: "bDesayunoMerienda"
    },
    {
        productName: "Box regalo#11",
        price: 2200,
        img: "../IMG/imgtortas/desayunos/desayuno11.jpg",
        category: "bBoxTematico"
    },
    {
        productName: "Box regalo#12",
        price: 2200,
        img: "../IMG/imgtortas/desayunos/desayuno12.jpg",
        category: "bBoxTematico"
    },
    {
        productName: "Box regalo#13",
        price: 2200,
        img: "../IMG/imgtortas/desayunos/desayuno13.jpg",
        category: "bPostresGourmet"
    },
    {
        productName: "Box regalo#14",
        price: 2200,
        img: "../IMG/imgtortas/desayunos/desayuno14.jpg",
        category: "bPostresGourmet"
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
//Volvemos a su estado original los botones
function resetearBotones() {
    bDesayunoMerienda.textContent = "☐ Box de Desayuno y Merienda";
    bPostresGourmet.textContent = "☐ Box de Postres";
    bBoxTematico.textContent = "☐ Box Temáticos";
}

// Obtenemos la referencia de los botones
const bDesayunoMerienda = document.getElementById("bDesayunoMerienda");
const bPostresGourmet = document.getElementById("bPostresGourmet");
const bBoxTematico = document.getElementById("bBoxTematico");
const bTodos = document.getElementById("bTodos");

// Agregamos los eventos a los botones
bDesayunoMerienda.addEventListener("click", () => {
    resetearBotones(); 
    FiltrarProductos("bDesayunoMerienda");
    bDesayunoMerienda.textContent = "☑ Box de Desayuno y Merienda";
});

bPostresGourmet.addEventListener("click", () => {
    resetearBotones();
    FiltrarProductos("bPostresGourmet");
    bPostresGourmet.textContent = "☑ Box de Postres";
});

bBoxTematico.addEventListener("click", () => {
    resetearBotones();
    FiltrarProductos("bBoxTematico");
    bBoxTematico.textContent = "☑ Box Temáticos";
});

bTodos.addEventListener("click", () => {
    resetearBotones(); 
    displayProducts(); 
});

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