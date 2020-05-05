const cargarPosts = document.querySelector('#cargar');

cargarPosts.addEventListener('click', function () {
    //Crea el objeto
    const xhr = new XMLHttpRequest();

    //Abrir la conexion
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)
    // Cargar y leer datos
    xhr.onload = function () {
        if (this.status === 200) {
            const respuesta = JSON.parse(this.responseText);

            let contenido = '';
            respuesta.forEach(function (post) {
                contenido += `<h3>${post.title}  </h3>
                <p>${post.body}</p>`

                //const bloque = document.getElementById('listado');
                //bloque.innerHTML += contenido;
                document.getElementById('listado').innerHTML = contenido;
            });
        }
    };
    // Enviar conexion
    xhr.send();
});