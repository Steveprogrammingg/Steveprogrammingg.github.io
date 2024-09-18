document.addEventListener("DOMContentLoaded", function() {
    const frasesConImagenes = {
        "Motivación para el Éxito": [
            {
                frase: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
                imagen: "img/motivacion para el exito/pexels-shotpot-4046705.jpg"
            },
            {
                frase: "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.",
                imagen: "imagenes/url_imagen_exito2.jpg"
            }
        ],
        "Inspiración Diaria": [
            {
                frase: "Haz de cada día tu obra maestra.",
                imagen: "img/inspiracion diaria/pexels-shvetsa-5711879.jpg"
            },
            {
                frase: "Hoy es el mañana que tanto te preocupaba ayer.",
                imagen: "imagenes/url_imagen_inspiracion2.jpg"
            }
        ],

    };

    const categorias = document.querySelectorAll(".categoria");
    categorias.forEach(categoria => {
        const nombre = categoria.querySelector("h3").textContent;
        if (frasesConImagenes[nombre]) {
            const fraseAleatoria = frasesConImagenes[nombre][Math.floor(Math.random() * frasesConImagenes[nombre].length)];
            categoria.querySelector("p").textContent = fraseAleatoria.frase;
            categoria.querySelector("img").src = fraseAleatoria.imagen;
        }
    });

    document.getElementById("mostrar-libros").addEventListener("click", function() {
        const categoriasLibros = document.querySelector(".categorias-libros");
        const mensajeLibros = document.getElementById("mensaje-libros");
        categoriasLibros.style.display = 'grid';
        mensajeLibros.style.display = 'none';
    });

    function confirmarEdad() {
        const edad = prompt("Por favor, introduce tu edad:");
        if (edad >= 18) {
            document.getElementById('libros-18').style.display = 'block';
        } else {
            alert("Lo sentimos, debes ser mayor de 18 años para acceder a esta categoría.");
        }
    }

    document.addEventListener("DOMContentLoaded", function() {
        const adContainer = document.getElementById('adsense-ad-1');
        
        // Código del anuncio (ejemplo)
        const adScript = document.createElement('script');
        adScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        adScript.async = true;
        adContainer.appendChild(adScript);
        
        const adConfig = document.createElement('script');
        adConfig.textContent = `
            (adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: "ca-pub-XXXXXXXXXX", // Reemplaza con tu ID de cliente
                enable_page_level_ads: true
            });
        `;
        adContainer.appendChild(adConfig);
    });
});
