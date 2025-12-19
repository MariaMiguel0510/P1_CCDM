document.addEventListener('DOMContentLoaded', function () {
  var gruposDeImagens = [
    ['C_0_0', 'C_0_1', 'C_0_2', 'C_0_3'],
    ['I_0_0', 'I_0_1', 'I_0_2'],
    ['C_1_0', 'C_1_1', 'C_1_2', 'C_1_3'],
    ['L_0_0', 'L_0_1', 'L_0_2'],
    ['O_0_0', 'O_0_1'],

    ['D_0_0','D_0_1','D_0_2'],
    ['E_0_0','E_0_1','E_0_2','E_0_3','E_0_4'],

    ['C_2_0', 'C_2_1', 'C_2_2', 'C_2_3'],
    ['O_1_0', 'O_1_1'],
    ['N_0_0', 'N_0_1'],
    ['V_0_0', 'V_0_1'],
    ['E_1_0','E_1_1','E_1_2','E_1_3','E_1_4'],
    ['R_0_0', 'R_0_1'],
    ['S_0_0', 'S_0_1', 'S_0_2', 'S_0_3'],
    ['A_0_0', 'A_0_1', 'A_0_2'],
    ['S_1_0', 'S_1_1', 'S_1_2', 'S_1_3'],

    ['D_1_0','D_1_1','D_1_2'],
    ['E_2_0','E_2_1','E_2_2','E_2_3','E_2_4'],
    ['S_2_0', 'S_2_1', 'S_2_2', 'S_2_3'],
    ['I_1_0', 'I_1_1', 'I_1_2'],
    ['G_0_0', 'G_0_1'],
    ['N_1_0', 'N_1_1'],
    ['+_0_0', '+_0_1', '+_0_2'],

    ['M_0_0', 'M_0_1', 'M_0_2', 'M_0_3'], 
    ['U_0_0', 'U_0_1'],
    ['L_1_0', 'L_1_1', 'L_1_2'],   
    ['T_0_0', 'T_0_1'], 
    ['I_2_0', 'I_2_1', 'I_2_2'],
    ['M_1_0', 'M_1_1', 'M_1_2', 'M_1_3'], 
    ['E_3_0','E_3_1','E_3_2','E_3_3','E_3_4'], 
    ['D_2_0','D_2_1','D_2_2'],
    ['I_3_0', 'I_3_1', 'I_3_2'],
    ['A_1_0', 'A_1_1', 'A_1_2'],

    ['C_3_0', 'C_3_1', 'C_3_2', 'C_3_3'],
    ['C_4_0', 'C_4_1', 'C_4_2', 'C_4_3'],
    ['D_3_0','D_3_1','D_3_2'],
    ['M_2_0', 'M_2_1', 'M_2_2', 'M_2_3'], 

  ];

  var sufixosDeImagem = ['F', 'C'];
  var intervalIDs = [];

  function alternarImagens(grupo, sufixo, indiceMostrar) {
    for (var i = 0; i < grupo.length; i++) {
      var elemento = document.getElementById(grupo[i] + sufixo);
      if (elemento) {
        elemento.style.display = i === indiceMostrar ? 'block' : 'none';
      }
    }
  }

  function trocarImagem(grupo, sufixos) {
    var dec = Math.floor(Math.random() * sufixos.length);
    alternarImagens(grupo, sufixos[0], dec);
    alternarImagens(grupo, sufixos[1], dec);
  }

  function iniciarTroca(grupo, sufixos) {
    var intervalID = setInterval(function () {
      trocarImagem(grupo, sufixos);
    }, 3000);
    intervalIDs.push(intervalID);
  }

  function adicionarEventos(grupo, sufixos, j) {
    var elemento = document.getElementById(grupo[j] + sufixos[1]);
    if (elemento) {
      elemento.addEventListener('mouseenter', function () {
        clearInterval(intervalIDs[gruposDeImagens.indexOf(grupo)]);
      });

      elemento.addEventListener('mouseleave', function () {
        iniciarTroca(grupo, sufixos);
      });
    }
  }

  for (let i = 0; i < gruposDeImagens.length; i++) {
    let grupo = gruposDeImagens[i];
    let sufixos = sufixosDeImagem;

    for (let j = 0; j < grupo.length; j++) {
      adicionarEventos(grupo, sufixos, j);
    }

    iniciarTroca(grupo, sufixos);
  }
});