// Configuración de Reveal.js con animaciones personalizadas
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar Reveal.js con configuración
    Reveal.initialize({
        // Configuración básica
        controls: true,
        progress: true,
        center: true,
        hash: true,
        slideNumber: 'c/t',
        transition: 'fade', // Transición base entre diapositivas
        backgroundTransition: 'fade', // Transición de fondo
        margin: 0.00,
        width: 1000,
        height: 1000,
        
        // Configuración de plugins
        plugins: [ RevealZoom, RevealNotes, RevealMarkdown ],
        
        // Configuración de transiciones personalizadas
        transitionSpeed: 'fast', // Velocidad de transición
        transition: 'slide', // Transición por defecto
        
        // Habilitar navegación por teclado
        keyboard: {
            38: 'prev', // flecha arriba
            40: 'next'  // flecha abajo
        },
        
        // Optimización para pantallas grandes
        mobileView: 'mobile',
        touch: true,
        hideInactiveCursor: true,
        hideCursorTime: 1000
    });


    // Aplicar clases de animación a las diapositivas
    Reveal.addEventListener('ready', function(event) {
        // Aplicar animación a la diapositiva actual
        applyAnimation(event.currentSlide);
    });


    // Aplicar animación cuando cambia la diapositiva
    Reveal.addEventListener('slidechanged', function(event) {
        // Remover clases de animación de la diapositiva anterior
        const previousSlide = event.previousSlide;
        if (previousSlide) {
            removeAnimations(previousSlide);
        }
        
        // Aplicar animación a la nueva diapositiva
        applyAnimation(event.currentSlide);
    });

    // Función para aplicar animaciones a una diapositiva
    function applyAnimation(slide) {
        if (!slide) return;
        
        // Determinar el índice de la diapositiva
        const slideIndex = Array.from(slide.parentNode.children).indexOf(slide);
        
        // Seleccionar una animación basada en el índice de la diapositiva
        const animations = ['slide-zoom-in', 'slide-zoom-out', 'slide-rotate-in', 'slide-fade-up', 'slide-fade-down'];
        const animationClass = animations[slideIndex % animations.length];
        
        // Aplicar la clase de animación
        slide.classList.add(animationClass);
        
        // Aplicar animaciones a los elementos dentro de la diapositiva
        const elements = slide.querySelectorAll('h1, h2, h3, p, ul, ol, img, table');
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = `all 0.6s cubic-bezier(0.7,0.2,0.2,1) ${0.1 * (index + 1)}s`;
            
            // Forzar reflow para reiniciar la animación
            void element.offsetWidth;
            
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    }
    
    // Función para remover animaciones
    function removeAnimations(slide) {
        if (!slide) return;
        
        // Remover clases de animación
        const animations = ['slide-zoom-in', 'slide-zoom-out', 'slide-rotate-in', 'slide-fade-up', 'slide-fade-down'];
        animations.forEach(animation => {
            slide.classList.remove(animation);
        });
        
        // Resetear estilos de animación en los elementos
        const elements = slide.querySelectorAll('h1, h2, h3, p, ul, ol, img, table');
        elements.forEach(element => {
            element.style.opacity = '';
            element.style.transform = '';
            element.style.transition = '';
        });
    }
});
