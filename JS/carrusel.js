//Creamos un arreglo de objetos
const imageCarrusel = [
    {
        img: "IMG/imgtortas/carrusel/mini tarta.jpg",
        promo: "2x1 en minitartas",
        nombre: "oferta 1"
    },
    {
        img: "IMG/imgtortas/carrusel/tarta combinada.jpg",
        promo: "Tarta combinada 20% off",
        nombre: "oferta 2"
    },
    {
        img: "IMG/imgtortas/carrusel/desayuno.jpg",
        promo: "Descuentos en desayunos 15% off",
        nombre: "oferta 3"
    },
    {
        img: "IMG/imgtortas/carrusel/desayuno 2.jpg",
        promo: "Descuentos en desayunos 15% off",
        nombre: "oferta 4"
    },
    {
        img: "IMG/imgtortas/carrusel/torta.png",
        promo: "Pasteles personalizados 10% off",
        nombre: "oferta 5"
    },
    {
        img: "IMG/imgtortas/carrusel/torta 2.jpg",
        promo: "Pasteles personalizados 10% off",
        nombre: "oferta 6"
    }
];

    let index = 0;
    let intervalId;

    // Esta funcion nos sirve para mostrar el contenido del carrusel
    function createImage(index){
        const contentCarrusel = document.getElementById("contenidoCarrusel"); //Obtenemos el contenido por su ID
        contentCarrusel.innerHTML = ""; // Limpiamos el contenido actual
    
        //Creamos un elemento elemento <div> para insertar los elementos del arreglo {objetos}
        const div = document.createElement("div"); 
        div.className = "Carrusel";
    
        //Insertamos los elementos HTML, con los objetos del arreglo
        div.innerHTML = `
        <img src="${imageCarrusel[index].img}" alt="${imageCarrusel[index].nombre}" />
        <h5>${imageCarrusel[index].promo}</h5>
        `;
        
        //Agregamos el <div> creado
        contentCarrusel.appendChild(div);
    }
    
    // Esta funcion nos sirve para avanzar a la siguiente imagen
    function nextButton() {
        index++;
        if (index === imageCarrusel.length) { //Establecemos una condición
            index = 0; //Cuando estamos en el principio, volvemos al final
        }
        createImage(index); //Utizamos la anterior funcion, con el indice de esta funcion
    }

    // Esta funcion nos sirve para volver a la imagen anterior
    function backButton() {
        index--;
        if (index < 0) { //Establecemos una condición
            index = imageCarrusel.length - 1; //Cuando estamos en el principio, volvemos al final
        }
        createImage(index); //Utizamos la anterior funcion, con el indice de esta funcion
    }

    // Esta funcion nos sirve para cambiar la imagen automaticamente
    function changeImage(){
        if(!intervalId){ //Si la funcion, no es definida (Devuelve True)
            intervalId = setInterval(nextButton, 5000); //Cuando pasen 5 segundos, se usara la funcion nextButton
        }
    }

    // Esta funcion nos sirve para reiniciar el intervalo de tiempo que cambia la imagen (Funciona cuando le damos click al boton)
    function resetInterval() {
        clearInterval(intervalId); //Detenemos el intervalo establecido anteriormente (Tiempo)
        intervalId = null; //Vuelve a establecer el nuevo intervalo
        changeImage(); // Volvemos a llamar la funciom, con un nuevo intervalo
    }

    // Iniciamos el carrusel
    createImage(index);
    changeImage();

    // Asignamos eventos a los botones de navegación
    document.querySelector('.nextButton button').addEventListener('click', () => { //Al darle click al botón, llama a las funciones
        resetInterval();
        nextButton();
    });
    
    document.querySelector('.backButton button').addEventListener('click', () => { //Al darle click al botón, llama a las funciones
        resetInterval();
        backButton();
    });
