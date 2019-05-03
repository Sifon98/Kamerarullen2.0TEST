window.sr = ScrollReveal();

    sr.reveal('.sr-left', {
        mobile: false,
        duration: 2000,
        origin: 'left',
        distance: '150px',
        delay: 100,
        viewFactor: 0.6
    });

    sr.reveal('.sr-right', {
        mobile: false,
        duration: 2000,
        origin: 'right',
        distance: '150px',
        delay: 100,
        viewFactor: 0.6
    });

    sr.reveal('.sr-header', {
        duration: 2000,
        origin: 'bottom',
        scale: 0.5
    });

    sr.reveal('.sr-youtube', {
        duration: 2000,
        origin: 'top',
        delay: 500
    });