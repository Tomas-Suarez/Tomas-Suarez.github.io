document.addEventListener('DOMContentLoaded', function () {
	// Selecciona todos los botones para alternar las respuestas
	const replyToggles = document.querySelectorAll('.reply-toggle');

	replyToggles.forEach((toggle) => {
		toggle.addEventListener('click', function () {
			// Encuentra el contenedor de respuestas más cercano al botón
			const repliesContainer = this.parentElement.nextElementSibling;

			// Verifica si el contenedor está oculto
			if (
				repliesContainer.style.display === 'none' ||
				repliesContainer.style.display === ''
			) {
				repliesContainer.style.display = 'block'; // Muestra las respuestas
				this.textContent = 'Ocultar respuestas ▲'; // Cambia el texto del botón
			} else {
				repliesContainer.style.display = 'none'; // Oculta las respuestas
				this.textContent = 'Ver las respuestas ▼'; // Cambia el texto del botón
			}
		});
	});

	function incrementCounter(button, counterClass) {
		button.addEventListener('click', function () {
			// Selecciona el span dentro del botón que contiene el contador
			let counter = this.querySelector(counterClass);
			// Incrementa el valor actual del contador
			let count = parseInt(counter.textContent);
			counter.textContent = count + 1;
		});
	}

	// Obtener todos los botones de me gusta, no me gusta y corazón
	const likeButtons = document.querySelectorAll('.like-btn');
	const dislikeButtons = document.querySelectorAll('.dislike-btn');
	const heartButtons = document.querySelectorAll('.heart-btn');

	// Añadir la funcionalidad a cada botón
	likeButtons.forEach((button) => incrementCounter(button, '.like-count'));
	dislikeButtons.forEach((button) =>
		incrementCounter(button, '.dislike-count')
	);
	heartButtons.forEach((button) => incrementCounter(button, '.heart-count'));

	const replyButtons = document.querySelectorAll('.reply-btn');

	replyButtons.forEach((button) => {
		button.addEventListener('click', function () {
			// Verifica si ya existe un campo de respuesta
			if (!this.parentElement.querySelector('.reply-input')) {
				// Crea un contenedor para el campo de respuesta
				const replyInputContainer = document.createElement('div');
				replyInputContainer.classList.add('reply-input');

				// Crea un textarea para que el usuario escriba la respuesta
				const textarea = document.createElement('textarea');
				textarea.placeholder = 'Escribe tu respuesta aquí...';
				replyInputContainer.appendChild(textarea);

				// Crea un botón para enviar la respuesta
				const submitButton = document.createElement('button');
				submitButton.textContent = 'Enviar';
				replyInputContainer.appendChild(submitButton);

				// Añade el contenedor al final del comentario
				this.parentElement.appendChild(replyInputContainer);

				// Función para enviar la respuesta
				submitButton.addEventListener('click', () => {
					const replyText = textarea.value.trim();
					if (replyText !== '') {
						const newReply = document.createElement('div');
						newReply.classList.add('reply');
						newReply.innerHTML = `
                            <div class="comment-header">
                                <div class="avatar">T</div>
                                <div class="comment-info">
                                    <strong>Tu Nombre</strong> <span class="time">Hace unos segundos</span>
                                </div>
                            </div>
                            <div class="comment-body">
                                <p>${replyText}</p>
                            </div>
                        `;
						// Inserta la respuesta debajo de los comentarios
						let repliesContainer = this.parentElement.nextElementSibling;
						if (repliesContainer) {
							repliesContainer.appendChild(newReply);
						} else {
							// Si no existe contenedor de respuestas, lo crea
							repliesContainer = document.createElement('div');
							repliesContainer.classList.add('replies-container');
							repliesContainer.appendChild(newReply);
							this.parentElement.parentElement.appendChild(repliesContainer);
						}

						// Asegura que el botón de "Ver las respuestas" aparezca si hay respuestas
						const replyToggle =
							this.parentElement.querySelector('.reply-toggle');
						if (!replyToggle) {
							const newReplyToggle = document.createElement('span');
							newReplyToggle.classList.add('reply-toggle');
							newReplyToggle.textContent = 'Ocultar respuestas ▲';
							this.parentElement.appendChild(newReplyToggle);

							// Añade evento para alternar la visibilidad de las respuestas
							newReplyToggle.addEventListener('click', function () {
								if (
									repliesContainer.style.display === 'none' ||
									repliesContainer.style.display === ''
								) {
									repliesContainer.style.display = 'block';
									newReplyToggle.textContent = 'Ocultar respuestas ▲';
								} else {
									repliesContainer.style.display = 'none';
									newReplyToggle.textContent = 'Ver las respuestas ▼';
								}
							});
						}

						// Limpia el campo de texto y oculta el input de respuesta
						replyInputContainer.remove();
					}
				});
			}
		});
	});
});
