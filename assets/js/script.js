

function preco(){

let n1 = parseFloat(document.getElementById('larg').value);
let n2 = parseFloat (document.getElementById('comp').value);
let m2 = parseFloat(document.getElementById('met').value);


let valor = (n1*n2)*m2;
let input = document.createElement("input");
  input.value = valor;

  document.body.appendChild(input)
  let inputRes = document.getElementById('res');
  document.body.insertBefore(input,inputRes)
}

document.getElementById('calc').addEventListener("click",preco);

