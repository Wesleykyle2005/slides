// Configuración de Reveal.js con animaciones personalizadas
document.addEventListener('DOMContentLoaded', function() {
    // Configuración completa de Reveal.js
    Reveal.initialize({
        // Configuración de la presentación
        controls: true,          // Mostrar controles de navegación
        controlsTutorial: true,  // Mostrar indicaciones de navegación
        controlsLayout: 'edges', // Posición de los controles (edges, bottom-right)
        controlsBackArrows: 'faded', // Visibilidad de las flechas de navegación
        progress: true,          // Mostrar barra de progreso
        slideNumber: 'c/t',      // Mostrar número de diapositiva actual/total
        showSlideNumber: 'all',  // Mostrar número en todas las diapositivas
        hash: true,              // Actualizar URL con el hash de la diapositiva
        history: true,           // Agregar historial de navegación
        keyboard: true,          // Habilitar atajos de teclado
        overview: true,          // Mostrar vista general al presionar ESC
        center: true,            // Centrar las diapositivas verticalmente
        touch: true,             // Habilitar navegación táctil
        loop: false,             // No volver al inicio después de la última diapositiva
        rtl: false,              // No usar dirección de derecha a izquierda
        navigationMode: 'default', // Estilo de navegación
        shuffle: false,          // No mezclar las diapositivas
        fragments: true,         // Mostrar fragmentos de diapositivas
        fragmentInURL: false,    // No incluir fragmentos en la URL
        embedded: false,         // No está incrustado en otra página
        help: true,              // Mostrar ayuda al presionar ?
        showNotes: false,        // No mostrar notas del orador
        autoPlayMedia: null,     // Reproducir medios automáticamente
        preloadIframes: null,    // Precargar iframes
        autoAnimate: true,       // Habilitar animaciones automáticas
        autoAnimateMatcher: null,
        autoAnimateEasing: 'ease', // Efecto de animación
        autoAnimateDuration: 1.0, // Duración de la animación
        autoAnimateUnmatched: true, // Animar elementos no coincidentes
        autoAnimateStyles: [     // Estilos para animaciones automáticas
            'opacity',
            'color',
            'background-color',
            'padding',
            'font-size',
            'line-height',
            'letter-spacing',
            'border-width',
            'border-color',
            'border-radius',
            'outline',
            'outline-offset'
        ],
        // Transiciones
        transition: 'slide',     // none/fade/slide/convex/concave/zoom
        transitionSpeed: 'default', // default/fast/slow
        backgroundTransition: 'fade', // none/fade/slide/convex/concave/zoom
        // Tamaño de la presentación
        width: '100%',
        height: '100%',
        margin: 0.1,
        minScale: 0.1,
        maxScale: 2.0,
        // Plugins
        plugins: [ RevealZoom, RevealNotes, RevealMarkdown ],
        // Configuración de Markdown
        markdown: {
            smartypants: true,
            smartLists: true,
            separator: '^\\r?\\n---\\r?\\n$',
            separatorVertical: '^\\r?\\n--\\r?\\n$',
            notesSeparator: 'note:'
        },
        // Configuración de PDF
        pdfSeparateFragments: false,
        // Configuración de impresión
        pdfMaxPagesPerSlide: 1,
        // Configuración de la vista previa de impresión
        viewDistance: 3,
        // Configuración de móviles
        mobileViewDistance: 2,
        // Configuración de la rueda del ratón
        mouseWheel: false,
        // Ocultar el cursor
        hideInactiveCursor: true,
        // Tiempo para ocultar el cursor (ms)
        hideCursorTime: 2000
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

    // Función para aplicar patrones de fondo dinámicamente
    function applyPatternBackground(slideElement, patternImage, size = '50px', opacity = 0.1) {
        slideElement.style.backgroundImage = `linear-gradient(rgba(255, 255, 255, ${1 - opacity}), rgba(255, 255, 255, ${1 - opacity})), url('${patternImage}')`;
        slideElement.style.backgroundRepeat = 'repeat';
        slideElement.style.backgroundSize = size;
        slideElement.style.backgroundPosition = 'center';
    }

    // Aplicar patrones a diapositivas específicas
    Reveal.addEventListener('ready', function(event) {
        const slides = document.querySelectorAll('.reveal .slides section');
        
        slides.forEach((slide, index) => {
            // Aplicar patrón a diapositivas específicas
            if (index === 0) { // Primera diapositiva
                applyPatternBackground(slide, 'static/pattern-light.png', '40px', 0.05);
            } else if (index % 2 === 0) { // Diapositivas pares
                applyPatternBackground(slide, 'static/pattern-medium.png', '60px', 0.08);
            }
        });
    });

    // Eventos personalizados
    
    // Evento cuando cambia la diapositiva
    Reveal.addEventListener('slidechanged', function(event) {
        // Código que se ejecuta cuando cambia la diapositiva
        console.log('Cambiando a la diapositiva:', event.indexh);
    });

    // Evento cuando se completa la carga de la presentación
    Reveal.addEventListener('ready', function(event) {
        console.log('Presentación lista');
    });

    // Evento cuando se muestra un fragmento
    Reveal.addEventListener('fragmentshown', function(event) {
        console.log('Fragmento mostrado:', event.fragment);
    });

    // Evento cuando se oculta un fragmento
    Reveal.addEventListener('fragmenthidden', function(event) {
        console.log('Fragmento oculto:', event.fragment);
    });

    // Evento cuando se inicia la presentación en pantalla completa
    Reveal.addEventListener('fullscreen', function(event) {
        console.log('Pantalla completa:', event.isFullscreen);
    });
});
