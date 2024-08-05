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



/* MODAL */
