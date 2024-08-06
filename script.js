document.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function (event) {
        //Eliminar clase active
        document.querySelectorAll('.nav-link').forEach(function (item) {
            item.classList.remove('active');
        });

        // Agregar clase active al nuevo
        this.classList.add('active');
    });
});


/* ANIMATIONS */
/*window.addEventListener('load', function () {
    const mision_anim = document.getElementById('MissionAnim');
    const pauseFrame = 50;

    if (mision_anim) {
        const animation = mision_anim.getLottie();
        if (animation) {

            animation.play();

            const interval = setInterval(function () {
                if (animation.currentFrame >= pauseFrame) {
                    animation.goToAndStop(pauseFrame, true);
                    clearInterval(interval);
                }
            }, 100); // ms de animacion
        } else {
            console.error('La animación no se ha cargado correctamente.');
        }
    } else {
        console.error('El elemento con id "MissionAnim" no se encuentra.');
    }
});*/



/* CONTACT FORM */
$(document).ready(function(){
    $('#contactForm').submit(function(event){
        event.preventDefault(); // Previene el envío del formulario por defecto

        // Recoge los datos del formulario
        var formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val()
        };

        // Validación básica
        if (formData.name === "" || formData.email === "" || formData.message === "") {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Por favor, complete todos los campos.'
            });
            return;
        }

        // Enviar los datos al servidor usando AJAX
        $.ajax({
            type: 'POST',
            url: 'https://formspree.io/f/mwpebeer', // La URL de Formspree
            data: $(this).serialize(),
            dataType: 'json',
            success: function(response){
                Swal.fire({
                    icon: 'success',
                    title: '¡Éxito!',
                    text: 'Mensaje enviado con éxito.'
                });
                
                $('#contactForm')[0].reset();

            },
            error: function(jqXHR, textStatus, errorThrown){
                console.error("Error en AJAX:", textStatus, errorThrown);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Hubo un error al enviar el mensaje.'
                });
            }
        });
    });
});

