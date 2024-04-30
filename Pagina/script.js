document.addEventListener("DOMContentLoaded", function() {
    const productos = [
        { nombre: "Marco Clásico", precio: "$15.00", imagen: "marco-clasico.jpg" },
        { nombre: "Marco Moderno", precio: "$17.00", imagen: "marco-moderno.jpg" },
        { nombre: "Marco Vintage", precio: "$20.00", imagen: "marco-vintage.jpg" },
        { nombre: "Marco Elegante", precio: "$25.00", imagen: "marco-elegante.jpg" }
              // Puedes seguir añadiendo más productos aquí
    ];

    cargarProductos(productos);
});

function cargarProductos(productos) {
    const contenedor = document.getElementById('lista-productos');
    productos.forEach(producto => {
        contenedor.innerHTML += `
            <div class="producto" onclick="agregarAlCarrito('${producto.nombre}')">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>${producto.precio}</p>
            </div>
        `;
    });
}

function agregarAlCarrito(producto) {
    alert("Agregaste " + producto + " al carrito!");
}
