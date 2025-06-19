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
        autoAnimateMatcher: null, // Selector para animaciones automáticas
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