// Esperar a que el documento cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Lógica para los botones "Comprar"
    const botonesComprar = document.querySelectorAll('.btn-comprar');
    const badgeCarrito = document.querySelector('.badge'); // El numerito rojo del carrito
    let contadorCarrito = 0;

    botonesComprar.forEach(boton => {
        boton.addEventListener('click', function() {
            // Aumentar contador
            contadorCarrito++;
            badgeCarrito.textContent = contadorCarrito;
            
            // Animación visual del botón
            let textoOriginal = this.textContent;
            this.textContent = "¡Agregado!";
            this.classList.replace('btn-primary', 'btn-dark');
            this.classList.replace('btn-success', 'btn-dark');

            // Volver al estado original después de 1 segundo
            setTimeout(() => {
                this.textContent = textoOriginal;
                this.classList.remove('btn-dark');
                // Restaurar color original según el botón
                if(textoOriginal.includes('Oferta')) {
                    this.classList.add('btn-success');
                } else {
                    this.classList.add('btn-primary');
                }
            }, 1000);
        });
    });

    // 2. Lógica para el Formulario de Registro
    const formulario = document.getElementById('registroForm');
    
    formulario.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita que la página se recargue real
        
        // Simular envío
        alert("¡Registro Exitoso!\n\nGracias por unirte a UrbanStyle. Te hemos enviado un correo de confirmación.");
        
        // Limpiar formulario
        formulario.reset();
    });
});