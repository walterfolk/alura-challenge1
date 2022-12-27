const encriptar = document.getElementById('encriptar');
const desencriptar = document.getElementById('desencriptar');
const copiar = document.getElementById('copiar');
const pegar = document.getElementById('pegar');
const borrar = document.getElementById('borrar');
const resultado = document.getElementById('textoEncriptado');


function encrypt() {
  let string = document.getElementById('texto').value;
  let arr = string.toLowerCase().split("");
  resultado.style.color = "#fff";
  resultado.value = arr.map((x) =>
  x == "a"
    ? x.replace("a", "ai")
    : x == "e"
      ? x.replace("e", "enter")
      : x == "i"
        ? x.replace("i", "imes")
        : x == "o"
          ? x.replace("o", "ober")
          : x == "u"
            ? x.replace("u", "ufat")
            : x
)
  .join("");
  limpiar();
}


function decrypt() {
  let texto = document.getElementById('texto').value;
  resultado.style.color = "#fff";
  texto = texto.replaceAll("enter", "e");
  texto = texto.replaceAll("imes", "i");
  texto = texto.replaceAll("ai", "a");
  texto = texto.replaceAll("ober", "o");
  texto = texto.replaceAll("ufat", "u")
  limpiar()
  return resultado.value = texto
}


function copy() {
  document.getElementById("texto").placeholder = "Ingrese el texto aqui \n Solo letras en minúsculas sin acentos";
  let copia = resultado;
  copia.select();
  document.execCommand("copy");
  document.getElementById("texto").value = "";
  resultado.value = "";
  document.getElementById("texto").placeholder = "Ingrese el texto aqui \n Solo letras en minúsculas sin acentos";
  resultado.placeholder = "Texto copiado"
  
}

function borrarTodo() {
  document.getElementById("texto").placeholder = "Ingrese el texto aqui \n Solo letras en minúsculas sin acentos";
  resultado.placeholder = "";
  resultado.value = "";
  limpiar();
}

function limpiar() {
  document.getElementById("texto").value = "";
  document.getElementById("texto").placeholder = "Ingrese el texto aqui \n Solo letras en minúsculas sin acentos";  
}

encriptar.addEventListener('click', encrypt );
desencriptar.addEventListener('click', decrypt);
copiar.addEventListener('click', copy);
borrar.addEventListener('click', borrarTodo);
