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

var footerLogos = document.querySelector('.footerLogos');
var vazio = document.getElementById('vazio');

var abaActual = 1;
var footerTimeout = null;
var backgroundTimeout = null;

document.getElementById('AbaB1').addEventListener('click', function () {
    clearTimeout(footerTimeout);
    clearTimeout(backgroundTimeout);
    trocaAba(1);
    abaButtons(1);
    abaActual = 1;
    document.body.style.overflowY = 'hidden';
    
    if (footerLogos) {
        footerLogos.style.transition = 'opacity 650ms ease, background-color 650ms ease';
        footerLogos.style.backgroundColor = '';
    }
    if (vazio) {
        vazio.style.transition = 'background-color 650ms ease';
        vazio.style.backgroundColor = '';
    }
});

document.getElementById('AbaB2').addEventListener('click', function () {
    clearTimeout(footerTimeout);
    if (abaActual !== 2) {
        trocaAba(2);
        abaButtons(2);
        trocaProgramm(15);
        
        setTimeout(function() {
            var dateContentor = document.querySelector('.dateContentor');
            if (dateContentor && window.startNumberAnimation) {
                window.startNumberAnimation(dateContentor);
            }
        }, temp + 50);
    }
    abaActual = 2;
    document.body.style.overflowY = '';
    
    clearTimeout(backgroundTimeout);
    if (footerLogos) {
        footerLogos.style.transition = 'opacity 650ms ease, background-color 650ms ease 800ms';
        //footerLogos.style.backgroundColor = '#00E2FD';
    }
    if (vazio) {
        vazio.style.transition = 'background-color 650ms ease 800ms';
        //vazio.style.backgroundColor = '#00E2FD';
    }
});

document.getElementById('AbaB3').addEventListener('click', function () {
    clearTimeout(footerTimeout);
    trocaAba(3);
    abaButtons(3);
    abaActual = 3;
    document.body.style.overflowY = '';
    
    clearTimeout(backgroundTimeout);
    if (footerLogos) {
        footerLogos.style.transition = 'opacity 650ms ease, background-color 650ms ease 800ms';
        //footerLogos.style.backgroundColor = '#00E2FD';
    }
    if (vazio) {
        vazio.style.transition = 'background-color 650ms ease 800ms';
        //vazio.style.backgroundColor = '#00E2FD';
    }
});

document.getElementById('AbaB4').addEventListener('click', function () {
    clearTimeout(footerTimeout);
    trocaAba(4);
    abaButtons(4);
    abaActual = 4;
    document.body.style.overflowY = '';
    
    clearTimeout(backgroundTimeout);
    if (footerLogos) {
        footerLogos.style.transition = 'opacity 650ms ease, background-color 650ms ease 800ms';
        //footerLogos.style.backgroundColor = '#00E2FD';
    }
    if (vazio) {
        vazio.style.transition = 'background-color 650ms ease 800ms';
        //vazio.style.backgroundColor = '#00E2FD';
    }
});

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
    setActiveDate(this);
});

document.getElementById('buttom16').addEventListener('click', function () {
    trocaProgramm(16);
    setActiveDate(this);
});

document.getElementById('buttom17').addEventListener('click', function () {
    trocaProgramm(17);
    setActiveDate(this);
});

document.getElementById('buttom18').addEventListener('click', function () {
    trocaProgramm(18);
    setActiveDate(this);
});

function setActiveDate(element) {
    document.querySelectorAll('.dateContentor .dateBox').forEach(function(box) {
        box.classList.remove('active');
    });
    element.classList.add('active');
}


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

