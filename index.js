//bingo - 1 a 75
let v_numBingo;
let b_bingo;
let d_bingo;
let b_reset;
let t_numerosSorteados;

let max = 75;
let min = 1;

let a_numerosBingo = [];

// teste
// let cartelas = [];
// cartelas[0] = new bingo_cartela(1, "B");
// cartelas[0] = new bingo_cartela(1, "I");
let cartelas = criaCartelas(5);

// cartela = [
//   {1, 2, 3, 4, 5},
//   {6, 7, 8, 9, 10},
//   {6, 7, 8, 9, 10},
//   {6, 7, 8, 9, 10},
//   {6, 7, 8, 9, 10}
// ]

//

window.onload = function () {
  v_numBingo = document.getElementById("numBingo");
  b_bingo = document.getElementById("b_bingo");
  d_bingo = document.getElementById("descBingo");
  d_bingo.style.visibility = "hidden";
  b_reset = document.getElementById("b_reset");
  b_reset.style.display = "none";

  t_numerosSorteados = document.getElementById("t_num_sorteados");
  t_numerosSorteados.style.visibility = "hidden";

  b_bingo.addEventListener("click", clickBingo);
  b_reset.addEventListener("click", resetBingo);
  // console.log(v_numBingo);
};

// -----------------------

// function bingo_cartela(id) {
//   this.id = id;
//   this.cartela = [] //24

//   // this.gerarCartela = b_gerarNumerosCartela(this.cartela, "B");
//   this.gerarCartela = b_gerarNumerosCartela(this.cartela, "I");
// }

function bingo_cartela(id, tipo) {
  this.id = id;
  this.cartela = b_gerarNumerosCartela(tipo);
}

//  ---------------------

function clickBingo() {
  if (a_numerosBingo.length === max) {
    d_bingo.style.visibility = "visible";
    b_bingo.disabled = true;
    b_reset.style.display = "block";
  } else {
    v_numBingo.innerText = exibeBingoTela(gerarNumero());

    //melhorar depois
    t_numerosSorteados.style.visibility = "visible";
    t_numerosSorteados.innerHTML +=
      "<span class='n-sorteado'>" + v_numBingo.textContent + "</span>";

    console.log(a_numerosBingo);
  }
}

function exibeBingoTela(num_bingo) {
  if (num_bingo <= 15) return "B - " + num_bingo;
  else if (num_bingo <= 30) return "I - " + num_bingo;
  else if (num_bingo <= 45) return "N - " + num_bingo;
  else if (num_bingo <= 60) return "G - " + num_bingo;
  else if (num_bingo <= 75) return "O - " + num_bingo;
}

function resetBingo() {
  b_bingo.disabled = false;
  b_reset.style.display = "none";
  d_bingo.style.visibility = "hidden";
  v_numBingo.innerText = "X";

  t_numerosSorteados.style.visibility = "hidden";
  t_numerosSorteados.innerText = "";

  a_numerosBingo.length = 0;
}

function gerarNumero() {
  let b_sorteado;
  let d_bingo = true;
  while (d_bingo) {
    b_sorteado = Math.floor(Math.random() * (max + 1 - min)) + min;
    if (a_numerosBingo.indexOf(b_sorteado) === -1) {
      a_numerosBingo.push(b_sorteado);
      return b_sorteado;
    }
  }
}

// function gerarNumerosCartela(arrayCartela) {
//   let n_sorteado;
//   while (arrayCartela.length < 24) {
//     n_sorteado = Math.floor(Math.random() * (max + 1 - min)) + min;
//     if (arrayCartela.indexOf(n_sorteado) === -1) {
//       arrayCartela.push(n_sorteado);
//     }
//   }
// }

// function b_gerarNumerosCartela(arrayCartela, b_letra){
//   let c_max, c_min;
//   switch(b_letra){
//     case 'B':
//       c_max=15;
//       c_min=1;
//       break;
//     case 'I':
//       c_max=30;
//       c_min=16;
//       break;
//   }
//   while (arrayCartela.length < 5) {
//     n_sorteado = Math.floor(Math.random() * (c_max + 1 - c_min)) + c_min;
//     if (arrayCartela.indexOf(n_sorteado) === -1) {
//       arrayCartela.push(n_sorteado);
//     }
//   }

// }

function b_gerarNumerosCartela(b_letra) {
  let nova_cartela = [];
  let c_max, c_min;
  switch (b_letra) {
    case "B":
      c_max = 15;
      c_min = 1;
      break;
    case "I":
      c_max = 30;
      c_min = 16;
      break;
    case "N":
      c_max = 45;
      c_min = 31;
      break;
    case "G":
      c_max = 60;
      c_min = 46;
      break;
    case "O":
      c_max = 75;
      c_min = 61;
      break;
  }
  while (nova_cartela.length < 5) {
    n_sorteado = Math.floor(Math.random() * (c_max + 1 - c_min)) + c_min;
    if (nova_cartela.indexOf(n_sorteado) === -1) {
      nova_cartela.push(n_sorteado);
    }
  }
  return nova_cartela;
}



//arrumar a quantidade de cartelas feita pra mesma posicao do array, precisa ter as 5 sequencias dentro de cada
function criaCartelas(quantidade) {
  let array_cartelas = [];
  for (let i = 0; i < quantidade; i++) {
    if (i % 2 == 0) {
      array_cartelas.push(new bingo_cartela(i, "B"));
    } else {
      array_cartelas.push(new bingo_cartela(i, "I"));
    }
  }
  return array_cartelas;
}
