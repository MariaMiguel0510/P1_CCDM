
document.addEventListener('DOMContentLoaded', function() {
  var image1 = document.getElementById('S_sobre_C');
  var image2 = document.getElementById('O_sobre_C');
  var image3 = document.getElementById('B_sobre_C');
  var image4 = document.getElementById('R_sobre_C');
  var image5 = document.getElementById('E_sobre_C');
  var imageContainer = document.getElementById('Sobre_box');
  var imageContainer2 = document.getElementById('Sobre_box2');
  var imageContainer3 = document.getElementById('LOCAL_box');

  var image6 = document.getElementById('O_sobre_C2');
  var image7 = document.getElementById('R_sobre_C2');
  var image8 = document.getElementById('A_sobre_C2');
  var image9 = document.getElementById('D_sobre_C2');
  var image10 = document.getElementById('O_sobre_C3');
  var image11 = document.getElementById('R_sobre_C3');
  var image12 = document.getElementById('E_sobre_C2');
  var image13 = document.getElementById('S_sobre_C2');



  var image14 = document.getElementById('L_sobre_C');
  var image15 = document.getElementById('O_sobre_C4');
  var image16 = document.getElementById('C_sobre_C');
  var image17 = document.getElementById('A_sobre_C3');
  var image18 = document.getElementById('L_sobre_C2');

  var windowWidth = window.innerWidth;


  function animateImage(image) {
    image.style.transitionProperty = 'opacity, transform';
    image.style.transitionDuration = '2s, 2s';
    image.style.opacity = '1';
    image.style.transform = 'translate(0px, 0px)';
  }


  window.addEventListener('scroll', function() {
    var rect = imageContainer.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;


    if (rect.top <= windowHeight && rect.bottom >= 0) {
      animateImage(image1);
      animateImage(image2);
      animateImage(image3);
      animateImage(image4);
      animateImage(image5);
      window.removeEventListener('scroll', arguments.callee);
    }
  });

  window.addEventListener('scroll', function() {
    var rect2 = imageContainer2.getBoundingClientRect();
    var windowHeight2 = window.innerHeight || document.documentElement.clientHeight;

    if (rect2.top <= windowHeight2 && rect2.bottom >= 0) {
      animateImage(image6);
      animateImage(image7);
      animateImage(image8);
      animateImage(image9);
      animateImage(image10);
      animateImage(image11);
      animateImage(image12);
      animateImage(image13);
      window.removeEventListener('scroll', arguments.callee);
    }
  });

  window.addEventListener('scroll', function() {
    var rect3 = imageContainer3.getBoundingClientRect();
    var windowHeight2 = window.innerHeight || document.documentElement.clientHeight;

    if (rect3.top <= windowHeight2 && rect3.bottom >= 0) {
      animateImage(image14);
      animateImage(image15);
      animateImage(image16);
      animateImage(image17);
      animateImage(image18);
      window.removeEventListener('scroll', arguments.callee);
    }
  });
});

var medidMax, medidMin;

document.addEventListener('DOMContentLoaded', function() {
  var image_Susana = document.getElementById('IMG_S');
  var image_Rejane = document.getElementById('IMG_R');
  var image_Camila = document.getElementById('IMG_C');
  var image_Braulio = document.getElementById('IMG_B');

  var caixa_Susana = document.getElementById('Susana_box');
  var caixa_Rejane = document.getElementById('Rejane_box');
  var caixa_Camila = document.getElementById('Camila_box');
  var caixa_Braulio = document.getElementById('Braulio_box');

  var Cont_Susana = document.getElementById('Cont_Susana');
  var Cont_Rejane = document.getElementById('Cont_Rejane');
  var Cont_Camila = document.getElementById('Cont_Camila');
  var Cont_Braulio = document.getElementById('Cont_Braulio');

  var caixaP = document.getElementById('Cont_3');

  var windowWidth = window.innerWidth;

  var SusanaSelect = false;
  var RejaneSelect = false;
  var CamilaSelect = false;
  var BraulioSelect = false;

  if (windowWidth > 1500 && windowWidth < 2000) {
    medidMax = 15;
    medidMin = 0;
  } else if (windowWidth > 1200 && windowWidth < 1500) {
    medidMax = 30;
    medidMin = 20;
  }

  console.log(windowWidth);

  caixa_Susana.addEventListener('click', function() {

    if (SusanaSelect == false) {
      image_Susana.style.opacity = '1';
      image_Susana.style.transitionProperty = 'height, transform';
      image_Susana.style.transitionDuration = '1s, 1s';
      image_Susana.style.height = '100%';
      image_Susana.style.transform = 'translate(0px, 0px)';

      image_Rejane.style.transitionProperty = 'height, transform, opacity';
      image_Rejane.style.transitionDuration = '1s, 1s, 1s';
      image_Rejane.style.opacity = '0';
      image_Rejane.style.height = '70%';
      image_Rejane.style.transform = 'translate(5%, -37%)';

      image_Camila.style.transitionProperty = 'height, transform, opacity';
      image_Camila.style.transitionDuration = '1s, 1s, 1s';
      image_Camila.style.opacity = '0';
      image_Camila.style.height = '50%';
      image_Camila.style.transform = 'translate(-50%, 30%)';

      image_Braulio.style.transitionProperty = 'height, transform, opacity';
      image_Braulio.style.transitionDuration = '1s, 1s, 1s';
      image_Braulio.style.opacity = '0';
      image_Braulio.style.height = '53%';
      image_Braulio.style.transform = 'translate(20%,29%)';

      SusanaSelect = true;
      RejaneSelect = false;
      CamilaSelect = false;
      BraulioSelect = false;

      Cont_Susana.style.display = 'block';
      Cont_Rejane.style.display = 'none';
      Cont_Camila.style.display = 'none';
      Cont_Braulio.style.display = 'none';

      caixaP.style.transform = "translate(0%," + medidMin + "%)";
    } else if (SusanaSelect) {
      image_Susana.style.opacity = '1';
      image_Susana.style.transitionProperty = 'height, transform';
      image_Susana.style.transitionDuration = '1s, 1s';
      image_Susana.style.height = '53%';
      image_Susana.style.transform = 'translate(-60%, -45%)';

      image_Rejane.style.transition = 'opacity 1s';
      image_Rejane.style.opacity = '1';

      image_Camila.style.transition = 'opacity 1s';
      image_Camila.style.opacity = '1';

      image_Braulio.style.transition = 'opacity 1s';
      image_Braulio.style.opacity = '1';

      SusanaSelect = false;
      Cont_Susana.style.display = 'none';
      caixaP.style.transform = "translate(0%," + medidMax + "%)";
    }
  });
  caixa_Rejane.addEventListener('click', function() {
    if (RejaneSelect == false) {
      image_Rejane.style.opacity = '1';
      image_Rejane.style.transitionProperty = 'height, transform';
      image_Rejane.style.transitionDuration = '1s, 1s';
      image_Rejane.style.height = '130%';
      image_Rejane.style.transform = 'translate(-60px, 0px)';

      image_Susana.style.transitionProperty = 'height, transform, opacity';
      image_Susana.style.transitionDuration = '1s, 1s, 1s';
      image_Susana.style.opacity = '0';
      image_Susana.style.height = '53%';
      image_Susana.style.transform = 'translate(-60%, -45%)';

      image_Camila.style.transitionProperty = 'height, transform, opacity';
      image_Camila.style.transitionDuration = '1s, 1s, 1s';
      image_Camila.style.opacity = '0';
      image_Camila.style.height = '50%';
      image_Camila.style.transform = 'translate(-50%, 30%)';

      image_Braulio.style.transitionProperty = 'height, transform, opacity';
      image_Braulio.style.transitionDuration = '1s, 1s, 1s';
      image_Braulio.style.opacity = '0';
      image_Braulio.style.height = '53%';
      image_Braulio.style.transform = 'translate(20%,29%)';

      SusanaSelect = false;
      RejaneSelect = true;
      CamilaSelect = false;
      BraulioSelect = false;

      Cont_Susana.style.display = 'none';
      Cont_Rejane.style.display = 'block';
      Cont_Camila.style.display = 'none';
      Cont_Braulio.style.display = 'none';

      caixaP.style.transform = "translate(0%," + medidMin + "%)";
    } else if (RejaneSelect) {
      image_Rejane.style.transitionProperty = 'height, transform, opacity';
      image_Rejane.style.transitionDuration = '1s, 1s, 1s';
      image_Rejane.style.opacity = '1';
      image_Rejane.style.height = '70%';
      image_Rejane.style.transform = 'translate(5%, -37%)';

      image_Susana.style.transitionProperty = 'height, transform, opacity';
      image_Susana.style.transitionDuration = '1s, 1s, 1s';
      image_Susana.style.opacity = '1';
      image_Susana.style.height = '53%';
      image_Susana.style.transform = 'translate(-60%, -45%)';

      image_Camila.style.transitionProperty = 'height, transform, opacity';
      image_Camila.style.transitionDuration = '1s, 1s, 1s';
      image_Camila.style.opacity = '1';
      image_Camila.style.height = '50%';
      image_Camila.style.transform = 'translate(-50%, 30%)';

      image_Braulio.style.transitionProperty = 'height, transform, opacity';
      image_Braulio.style.transitionDuration = '1s, 1s, 1s';
      image_Braulio.style.opacity = '1';
      image_Braulio.style.height = '53%';
      image_Braulio.style.transform = 'translate(20%,29%)';

      RejaneSelect = false;
      Cont_Rejane.style.display = 'none';

      caixaP.style.transform = "translate(0%," + medidMax + "%)";
    }
  });

  caixa_Camila.addEventListener('click', function() {
    if (CamilaSelect == false) {
      image_Camila.style.transitionProperty = 'height, transform, opacity';
      image_Camila.style.transitionDuration = '1s, 1s, 1s';
      image_Camila.style.opacity = '1';
      image_Camila.style.height = '90%';
      image_Camila.style.transform = 'translate(0%, 0%)';

      image_Rejane.style.transitionProperty = 'height, transform, opacity';
      image_Rejane.style.transitionDuration = '1s, 1s, 1s';
      image_Rejane.style.opacity = '0';
      image_Rejane.style.height = '70%';
      image_Rejane.style.transform = 'translate(5%, -37%)';

      image_Susana.style.transitionProperty = 'height, transform, opacity';
      image_Susana.style.transitionDuration = '1s, 1s, 1s';
      image_Susana.style.opacity = '0';
      image_Susana.style.height = '53%';
      image_Susana.style.transform = 'translate(-60%, -45%)';

      image_Braulio.style.transitionProperty = 'height, transform, opacity';
      image_Braulio.style.transitionDuration = '1s, 1s, 1s';
      image_Braulio.style.opacity = '0';
      image_Braulio.style.height = '53%';
      image_Braulio.style.transform = 'translate(20%,29%)';


      SusanaSelect = false;
      RejaneSelect = false;
      CamilaSelect = true;
      BraulioSelect = false;

      Cont_Susana.style.display = 'none';
      Cont_Rejane.style.display = 'none';
      Cont_Camila.style.display = 'block';
      Cont_Braulio.style.display = 'none';

      caixaP.style.transform = "translate(0%," + medidMin + "%)";
    } else if (CamilaSelect) {
      image_Rejane.style.transitionProperty = 'height, transform, opacity';
      image_Rejane.style.transitionDuration = '1s, 1s, 1s';
      image_Rejane.style.opacity = '1';
      image_Rejane.style.height = '70%';
      image_Rejane.style.transform = 'translate(5%, -37%)';

      image_Susana.style.transitionProperty = 'height, transform, opacity';
      image_Susana.style.transitionDuration = '1s, 1s, 1s';
      image_Susana.style.opacity = '1';
      image_Susana.style.height = '53%';
      image_Susana.style.transform = 'translate(-60%, -45%)';

      image_Camila.style.transitionProperty = 'height, transform, opacity';
      image_Camila.style.transitionDuration = '1s, 1s, 1s';
      image_Camila.style.opacity = '1';
      image_Camila.style.height = '50%';
      image_Camila.style.transform = 'translate(-50%, 30%)';

      image_Braulio.style.transitionProperty = 'height, transform, opacity';
      image_Braulio.style.transitionDuration = '1s, 1s, 1s';
      image_Braulio.style.opacity = '1';
      image_Braulio.style.height = '53%';
      image_Braulio.style.transform = 'translate(20%,29%)';

      CamilaSelect = false;
      Cont_Camila.style.display = 'none';

      caixaP.style.transform = "translate(0%," + medidMax + "%)";
    }
  });


  caixa_Braulio.addEventListener('click', function() {
    if (BraulioSelect == false) {
      image_Braulio.style.transitionProperty = 'height, transform, opacity';
      image_Braulio.style.transitionDuration = '1s, 1s, 1s';
      image_Braulio.style.opacity = '1';
      image_Braulio.style.height = '100%';
      image_Braulio.style.transform = 'translate(0%,0%)';

      image_Camila.style.transitionProperty = 'height, transform, opacity';
      image_Camila.style.transitionDuration = '1s, 1s, 1s';
      image_Camila.style.opacity = '0';
      image_Camila.style.height = '50%';
      image_Camila.style.transform = 'translate(-50%, 30%)';

      image_Rejane.style.transitionProperty = 'height, transform, opacity';
      image_Rejane.style.transitionDuration = '1s, 1s, 1s';
      image_Rejane.style.opacity = '0';
      image_Rejane.style.height = '70%';
      image_Rejane.style.transform = 'translate(5%, -37%)';

      image_Susana.style.transitionProperty = 'height, transform, opacity';
      image_Susana.style.transitionDuration = '1s, 1s, 1s';
      image_Susana.style.opacity = '0';
      image_Susana.style.height = '53%';
      image_Susana.style.transform = 'translate(-60%, -45%)';

      SusanaSelect = false;
      RejaneSelect = false;
      CamilaSelect = false;
      BraulioSelect = true;

      Cont_Susana.style.display = 'none';
      Cont_Rejane.style.display = 'none';
      Cont_Camila.style.display = 'none';
      Cont_Braulio.style.display = 'block';

      caixaP.style.transform = "translate(0%," + medidMin + "%)";
    } else if (BraulioSelect) {
      image_Rejane.style.transitionProperty = 'height, transform, opacity';
      image_Rejane.style.transitionDuration = '1s, 1s, 1s';
      image_Rejane.style.opacity = '1';
      image_Rejane.style.height = '70%';
      image_Rejane.style.transform = 'translate(5%, -37%)';

      image_Susana.style.transitionProperty = 'height, transform, opacity';
      image_Susana.style.transitionDuration = '1s, 1s, 1s';
      image_Susana.style.opacity = '1';
      image_Susana.style.height = '53%';
      image_Susana.style.transform = 'translate(-60%, -45%)';

      image_Camila.style.transitionProperty = 'height, transform, opacity';
      image_Camila.style.transitionDuration = '1s, 1s, 1s';
      image_Camila.style.opacity = '1';
      image_Camila.style.height = '50%';
      image_Camila.style.transform = 'translate(-50%, 30%)';

      image_Braulio.style.transitionProperty = 'height, transform, opacity';
      image_Braulio.style.transitionDuration = '1s, 1s, 1s';
      image_Braulio.style.opacity = '1';
      image_Braulio.style.height = '53%';
      image_Braulio.style.transform = 'translate(20%,29%)';

      BraulioSelect = false;
      Cont_Braulio.style.display = 'none';

      caixaP.style.transform = "translate(0%," + medidMax + "%)";
    }
  });
  const elemento = document.querySelector('#Logo_box>div>img');
  const valorDeScrollParaTransicao = 700; // Defina o valor desejado
  let adicionouClasse = false;

  function atualizarClasseVisivel() {
    const scrollY = window.scrollY;

    if (scrollY >= valorDeScrollParaTransicao && !adicionouClasse) {
      console.log('Adicionando classe visível');
      elemento.classList.add('visivel');
      elemento.classList.remove('invisivel');
      adicionouClasse = true;
    } else if (scrollY < valorDeScrollParaTransicao && adicionouClasse) {
      console.log('Removendo classe visível');
      elemento.classList.remove('visivel');
      elemento.classList.add('invisivel');
      adicionouClasse = false;
    }
  }

  window.addEventListener('scroll', function() {
    atualizarClasseVisivel();
  });
  atualizarClasseVisivel();
});

