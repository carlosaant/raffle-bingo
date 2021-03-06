//bingo - 1 a 75
let v_numBingo;
let b_bingo;
let d_bingo;
let t_numerosSorteados;
let b_gerarCartela;
let a_Cartelas;
let b_reiniciar;

let max = 75;
let min = 1;

let a_numerosBingo = [];

let array_cartelas = [];
let idCartela = 1;

// teste
// let cartelas = [];
// cartelas[0] = new bingo_cartela(1, "B");
// cartelas[0] = new bingo_cartela(1, "I");
// let cartelas = criaCartelas(5);

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
  b_gerarCartela = document.getElementById("c_GerarCartelabingo");
  a_Cartelas = document.getElementById("a_Cartelas");
  b_reiniciar = document.getElementById("b_reiniciar");
  b_reiniciar.disabled = true;

  t_numerosSorteados = document.getElementById("t_num_sorteados");
  t_numerosSorteados.style.visibility = "hidden";

  b_bingo.addEventListener("click", clickBingo);
  b_reiniciar.addEventListener("click", reiniciarBingo);
  b_gerarCartela.addEventListener("click", gerarCartela);
  // console.log(v_numBingo);
};

// -----------------------

// function bingo_cartela(id) {
//   this.id = id;
//   this.cartela = [] //24

//   // this.gerarCartela = b_gerarNumerosCartela(this.cartela, "B");
//   this.gerarCartela = b_gerarNumerosCartela(this.cartela, "I");
// }

//  ---------------------

function clickBingo() {
  if (a_numerosBingo.length === max) {
    d_bingo.style.visibility = "visible";
    b_bingo.disabled = true;
  } else {
    if (array_cartelas.length != 0) {
      v_numBingo.innerText = exibeBingoTela(gerarNumero());

      //melhorar depois
      b_reiniciar.disabled = false;
      t_numerosSorteados.style.visibility = "visible";
      t_numerosSorteados.innerHTML +=
        "<span class='n-sorteado'>" + v_numBingo.textContent + "</span>";

      console.log(a_numerosBingo);
    } else {
      alert("Voce Precisa gerar uma cartela antes de iniciar o Bingo!");
    }
  }
}

function exibeBingoTela(num_bingo) {
  if (num_bingo <= 15) return "B - " + num_bingo;
  else if (num_bingo <= 30) return "I - " + num_bingo;
  else if (num_bingo <= 45) return "N - " + num_bingo;
  else if (num_bingo <= 60) return "G - " + num_bingo;
  else if (num_bingo <= 75) return "O - " + num_bingo;
}

function reiniciarBingo() {
  if (confirm("Deseja Reiniciar o Bingo?")) {
    b_bingo.disabled = false;
    d_bingo.style.visibility = "hidden";
    v_numBingo.innerText = "X";

    t_numerosSorteados.style.visibility = "hidden";
    t_numerosSorteados.innerText = "";

    a_numerosBingo.length = 0;
    array_cartelas.length = 0;
    idCartela = 1;
    a_Cartelas.innerHTML = "";

    b_reiniciar.disabled = true;
    alert("Bingo Reiniciado!");
  }
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

function gerarCartela() {
  let c_conf = confirm("Deseja Gerar uma Nova Cartela?");
  if (c_conf) {
    array_cartelas.push(new bingo_cartela(idCartela++));
    exibeCartela(array_cartelas[array_cartelas.length - 1]);
  }
}

function bingo_cartela(id) {
  this.id = id;
  this.cartelaB = b_gerarNumerosCartela("B");
  this.cartelaI = b_gerarNumerosCartela("I");
  this.cartelaN = b_gerarNumerosCartela("N");
  this.cartelaG = b_gerarNumerosCartela("G");
  this.cartelaO = b_gerarNumerosCartela("O");
}

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
  if (b_letra === "N") nova_cartela[2] = "X";
  return nova_cartela;
}

//arrumar a quantidade de cartelas feita pra mesma posicao do array, precisa ter as 5 sequencias dentro de cada
// function criaCartelas(quantidade) {
//   let array_cartelas = [];
//   for (let i = 0; i < quantidade; i++) {
//     if (i % 2 == 0) {
//       array_cartelas.push(new bingo_cartela(i, "B"));
//     } else {
//       array_cartelas.push(new bingo_cartela(i, "I"));
//     }
//   }
//   return array_cartelas;
// }

// function criaCartelas(quantidade) {
//   let array_cartelas = [];
//   for (let i = 0; i < quantidade; i++) {
//     array_cartelas.push(new bingo_cartela(i));
//   }
//   return array_cartelas;
// }

function exibeCartela(a_Cartela) {
  a_Cartelas.classList.add("tb-cartela");
  a_Cartelas.innerHTML +=
    `
            <table>
            <tr>
            <caption>Cartela: #` +
    a_Cartela.id +
    `</caption>
            </tr>
            <tr>
              <th>B</th>
              <th>I</th>
              <th>N</th>
              <th>G</th>
              <th>O</th>
            </tr>
              <tr>
                <td>` +
    a_Cartela.cartelaB[0] +
    `</td>
                <td>` +
    a_Cartela.cartelaI[0] +
    `</td>
                <td>` +
    a_Cartela.cartelaN[0] +
    `</td>
                <td>` +
    a_Cartela.cartelaG[0] +
    `</td>
                <td>` +
    a_Cartela.cartelaO[0] +
    `</td>
              </tr>
            <tr>
              <td>` +
    a_Cartela.cartelaB[1] +
    `</td>
              <td>` +
    a_Cartela.cartelaI[1] +
    `</td>
              <td>` +
    a_Cartela.cartelaN[1] +
    `</td>
              <td>` +
    a_Cartela.cartelaG[1] +
    `</td>
              <td>` +
    a_Cartela.cartelaO[1] +
    `</td>
            </tr>
            <tr>
              <td>` +
    a_Cartela.cartelaB[2] +
    `</td>
              <td>` +
    a_Cartela.cartelaI[2] +
    `</td>
              <td style="background-color: #8FBC8F;">` +
    a_Cartela.cartelaN[2] +
    `</td>
              <td>` +
    a_Cartela.cartelaG[2] +
    `</td>
              <td>` +
    a_Cartela.cartelaO[2] +
    `</td>
            </tr>
            <tr>
              <td>` +
    a_Cartela.cartelaB[3] +
    `</td>
              <td>` +
    a_Cartela.cartelaI[3] +
    `</td>
              <td>` +
    a_Cartela.cartelaN[3] +
    `</td>
              <td>` +
    a_Cartela.cartelaG[3] +
    `</td>
              <td>` +
    a_Cartela.cartelaO[3] +
    `</td>
            </tr>
            <tr>
              <td>` +
    a_Cartela.cartelaB[4] +
    `</td>
              <td>` +
    a_Cartela.cartelaI[4] +
    `</td>
              <td>` +
    a_Cartela.cartelaN[4] +
    `</td>
              <td>` +
    a_Cartela.cartelaG[4] +
    `</td>
              <td>` +
    a_Cartela.cartelaO[4] +
    `</td>
            </tr>
          </table>
  `;
}

// function carregaCasas(Array) {
//   for (let i = 0; i < Array.length; i++) {

//   }
// }
