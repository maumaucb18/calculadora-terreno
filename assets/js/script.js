

function preco(){

let n1 = parseFloat(document.getElementById('larg').value);
let n2 = parseFloat (document.getElementById('comp').value);
let m2 = parseFloat(document.getElementById('met').value);


let valor = (n1*n2)*m2;

document.getElementById('res').innerHTML = valor

  // Armazena um item no localStorage 
 localStorage.setItem(valor);
// Recupera o item adicionado  
  document.getElementById("res") .innerHTML  =  localStorage .getItem(valor); 

}

document.getElementById('calc').addEventListener("click",preco
);

