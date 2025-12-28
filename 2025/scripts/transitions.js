
// const body = document.querySelector('body');

// document.querySelectorAll('.things').forEach( cosa => {
//     cosa.addEventListener('click', () =>{
//         body.style.paddingTop = '1vh';
//     })
// })

// document.querySelector('.principal').addEventListener('click', () => {
//     body.style.paddingTop = '12.5vh';
// })

const programmAll = document.querySelectorAll('.programmContentor') 





document.getElementById('buttom15').addEventListener('click', () => {
    console.log('carregou no 15')
    trocaProgramm(15);
})

document.getElementById('buttom16').addEventListener('click', () => {
    trocaProgramm(16);
    console.log('carregou no 16')
})

document.getElementById('buttom17').addEventListener('click', () => {
    trocaProgramm(17);
    console.log('carregou no 17')
})

document.getElementById('buttom18').addEventListener('click', () => {
    trocaProgramm(16);
    console.log('carregou no 18')
})



function trocaProgramm(id){
    const choice = document.getElementById(`programmDay${id}`);

    if (choice.style.display !== 'flex') {
        programmAll.forEach(programm => {
            programm.style.opacity = '0';

            setTimeout(() => {
                programm.style.display = 'none';
            }, 400);
        });

        setTimeout(() => {
            choice.style.display = 'flex';
            choice.style.opacity = '0';

            setTimeout(() => {
                choice.style.opacity = '1';
            }, 10);

        }, 400);
    }
}


console.log(programmAll);