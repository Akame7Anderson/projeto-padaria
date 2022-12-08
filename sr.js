//SCROLL REVEAL
window.sr = ScrollReveal({reset: true});

sr.reveal('.divSRCopoComTexto', {
    origin: 'left',
    distance: '890px',
    duration: 2000
});

sr.reveal('.divCopoComTexto', {
    origin: 'right',
    distance: '890px',
    duration: 2000
});

sr.reveal('#srUm', {
    rotate: {x: 80, y: 0, z: 0},
    duration: 2000
}); 

sr.reveal('#srDois', {
    rotate: {x: 80, y: 0, z: 0},
    duration: 4000
}); 

sr.reveal('#srTres', {
    rotate: {x: 80, y: 0, z: 0},
    duration: 6000
}); 
//ACABA O SCROLL REVEAL