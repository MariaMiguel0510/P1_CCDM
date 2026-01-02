// const body = document.querySelector('body');


// document.querySelectorAll('.things').forEach( cosa => {
//     cosa.addEventListener('click', () =>{
//         body.style.paddingTop = '1vh';
//     })
// })

// document.querySelector('.principal').addEventListener('click', () => {
//     body.style.paddingTop = '12.5vh';
// })

const temp = 400;

const AbaB = document.querySelectorAll('.AbaB')
const Aba = document.querySelectorAll('.aba')
const programmAll = document.querySelectorAll('.programmContentor') 

let abaActual = 1; 

document.getElementById('AbaB1').addEventListener('click', () => {
    trocaAba(1);
    abaButtons(1);
    abaActual = 1;
})

document.getElementById('AbaB2').addEventListener('click', () => {
    if(abaActual !== 2){
        trocaAba(2);
        abaButtons(2);
        trocaProgramm(15)
    }
    
    abaActual = 2;
})

document.getElementById('AbaB3').addEventListener('click', () => {
    trocaAba(3);
    abaButtons(3);
    abaActual = 3;
})

document.getElementById('AbaB4').addEventListener('click', () => {
    trocaAba(4);
    abaButtons(4);
    abaActual = 4;
})

function abaButtons(id){
    if (abaActual != id){
        AbaB.forEach(b => {
            b.classList.remove('isActive')
        })
        document.getElementById(`AbaB${id}`).classList.add('isActive')
    }
}


function trocaAba(id){
    const choice = document.querySelectorAll(`.aba${id}`)

    choice.forEach(c => {
        if(c.style.display == 'none'){
            Aba.forEach(a => {
                a.style.opacity = 0

                setTimeout(() => {
                    a.style.display = 'none'
                }, temp)
            })

            setTimeout(() => {
                choice.forEach(abaSelected => {
                    abaSelected.style.display = 'flex';
                    abaSelected.style.opacity = '0';
                })

                setTimeout(() => {
                    choice.forEach(abaSelected => {
                        abaSelected.style.opacity = '1';
                    })
                }, 10);
            }, temp)
        }
    })
}

document.getElementById('buttom15').addEventListener('click', () => {
    trocaProgramm(15);
})

document.getElementById('buttom16').addEventListener('click', () => {
    trocaProgramm(16);
})

document.getElementById('buttom17').addEventListener('click', () => {
    trocaProgramm(17);
})

document.getElementById('buttom18').addEventListener('click', () => {
    trocaProgramm(18);
})


function trocaProgramm(id){
    const choice = document.getElementById(`programmDay${id}`);

    if (choice.style.display !== 'flex') {
        programmAll.forEach(programm => {
            programm.style.opacity = '0';

            setTimeout(() => {
                programm.style.display = 'none';
            }, temp);
        });

        setTimeout(() => {
            choice.style.display = 'flex';
            choice.style.opacity = '0';

            setTimeout(() => {
                choice.style.opacity = '1';
            }, 10);

        }, temp);
    }
}

