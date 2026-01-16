// const body = document.querySelector('body');


// document.querySelectorAll('.things').forEach( cosa => {
//     cosa.addEventListener('click', () =>{
//         body.style.paddingTop = '1vh';
//     })
// })

// document.querySelector('.principal').addEventListener('click', () => {
//     body.style.paddingTop = '12.5vh';
// })

var temp = 400;
var footTemp = 1500;
var titleFadeDelay = 300; 

var AbaB = document.querySelectorAll('.AbaB');
var Aba = document.querySelectorAll('.aba');
var programmAll = document.querySelectorAll('.programmContentor');

var headerSocial = document.querySelector('.headerSocial');
var footerSocial = document.querySelector('.footerSocial');
var footerLogos = document.querySelector('.footerLogos');
var vazio = document.getElementById('vazio');
var headerNav = document.querySelector('.headerNav');

var abaActual = 1;
var footerTimeout = null;
var backgroundTimeout = null;

function isDesktop() {
    return window.innerWidth >= 1025;
}

function clearInlineSocialStyles() {
    if (!headerSocial || !footerSocial || !footerLogos || !vazio) return;
    headerSocial.style.display = 'none';
    footerSocial.style.display = 'none';
    headerSocial.style.removeProperty('opacity');
    headerSocial.style.removeProperty('pointer-events');
    footerSocial.style.removeProperty('opacity');
    footerSocial.style.removeProperty('pointer-events');
    footerLogos.style.removeProperty('background');
    vazio.style.removeProperty('background');
    if (headerNav) {
        headerNav.style.removeProperty('opacity');
    }
    clearTimeout(backgroundTimeout);
}

function goToHome() {
    if (!headerSocial || !footerSocial || !footerLogos || !vazio) return;
    if (!isDesktop()) {
        clearInlineSocialStyles();
        return;
    }
    if (headerNav) {
        headerNav.style.opacity = '1';
    }
    headerSocial.style.display = 'flex';
    footerSocial.style.display = 'flex';
    footerLogos.style.opacity = '1';
    
    headerSocial.style.opacity = '1';
    headerSocial.style.pointerEvents = 'auto';
    
    footerSocial.style.opacity = '0';
    footerSocial.style.pointerEvents = 'none';
    
    clearTimeout(backgroundTimeout);
    footerLogos.style.transition = 'opacity 650ms ease, background 650ms ease';
    footerLogos.style.background = 'transparent';
    vazio.style.transition = 'background 650ms ease';
    vazio.style.background = 'transparent';
}


function leaveHome() {
    if (!headerSocial || !footerSocial || !footerLogos || !vazio) return;
    if (!isDesktop()) {
        clearInlineSocialStyles();
        return;
    }
    if (headerNav) {
        headerNav.style.opacity = '1';
    }
    headerSocial.style.display = 'flex';
    footerSocial.style.display = 'flex';
    footerLogos.style.opacity = '1';
    
    headerSocial.style.opacity = '0';
    headerSocial.style.pointerEvents = 'none';
    
    footerSocial.style.opacity = '1';
    footerSocial.style.pointerEvents = 'auto';
    
    clearTimeout(backgroundTimeout);
    backgroundTimeout = setTimeout(function () {
        footerLogos.style.background = '#00E2FD';
        vazio.style.background = '#00E2FD';
    }, 800);
}

document.getElementById('AbaB1').addEventListener('click', function () {
    clearTimeout(footerTimeout);
    trocaAba(1);
    abaButtons(1);
    abaActual = 1;
    goToHome();
    document.body.style.overflowY = 'hidden';
});

document.getElementById('AbaB2').addEventListener('click', function () {
    clearTimeout(footerTimeout);
    if (abaActual !== 2) {
        trocaAba(2);
        abaButtons(2);
        trocaProgramm(15);
    }
    leaveHome();
    abaActual = 2;
    document.body.style.overflowY = '';
});

document.getElementById('AbaB3').addEventListener('click', function () {
    clearTimeout(footerTimeout);
    trocaAba(3);
    abaButtons(3);
    leaveHome();
    abaActual = 3;
    document.body.style.overflowY = '';
});

document.getElementById('AbaB4').addEventListener('click', function () {
    clearTimeout(footerTimeout);
    trocaAba(4);
    abaButtons(4);
    leaveHome();
    abaActual = 4;
    document.body.style.overflowY = '';
});

window.addEventListener('resize', function () {
    if (abaActual === 1) {
        goToHome();
    } else {
        leaveHome();
    }
});

if (abaActual === 1) {
    goToHome();
} else {
    leaveHome();
}

function abaButtons(id){
    if (abaActual != id){
        AbaB.forEach(function (b) {
            b.classList.remove('isActive');
        });
        document.getElementById('AbaB' + id).classList.add('isActive')
    }
}


function trocaAba(id){
    var choice = document.querySelectorAll('.aba' + id);

    choice.forEach(function (c) {
        if(c.style.display == 'none'){
            Aba.forEach(function (a) {
                a.style.opacity = 0

                setTimeout(function () {
                    a.style.display = 'none'
                }, temp)
            })

            setTimeout(function () {
                choice.forEach(function (abaSelected) {
                    if (id === 1 && (abaSelected.id === 'app' || abaSelected.id === 'appMobile' || abaSelected.id === 'appTablet')) {
                        abaSelected.style.display = '';
                    } else {
                        abaSelected.style.display = 'flex';
                    }
                    abaSelected.style.opacity = '0';
                    
                    if (abaSelected.id && abaSelected.id.slice(-5) === 'Title') {
                        abaSelected.classList.remove('show-title');
                    }
                })

                setTimeout(function () {
                    choice.forEach(function (abaSelected) {
                        abaSelected.style.opacity = '1';
                    })
                    
                    setTimeout(function () {
                        choice.forEach(function (abaSelected) {
                            if (abaSelected.id && abaSelected.id.slice(-5) === 'Title') {
                                abaSelected.classList.add('show-title');
                            }
                        })
                    }, titleFadeDelay);
                }, 10);
            }, temp)
        }
    })
}

document.getElementById('buttom15').addEventListener('click', function () {
    trocaProgramm(15);
});

document.getElementById('buttom16').addEventListener('click', function () {
    trocaProgramm(16);
});

document.getElementById('buttom17').addEventListener('click', function () {
    trocaProgramm(17);
});

document.getElementById('buttom18').addEventListener('click', function () {
    trocaProgramm(18);
});


function trocaProgramm(id){
    var choice = document.getElementById('programmDay' + id);

    if (choice.style.display !== 'flex') {
        programmAll.forEach(function (programm) {
            programm.style.opacity = '0';

            setTimeout(function () {
                programm.style.display = 'none';
            }, temp);
        });

        setTimeout(function () {
            choice.style.display = 'flex';
            choice.style.opacity = '0';

            setTimeout(function () {
                choice.style.opacity = '1';
            }, 10);

        }, temp);
    }
}

