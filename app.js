let txtarea_encryptar = document.getElementById("txtarea");
let txt_desencryptado = document.getElementById("txt");
let substitutions = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

function encryptar() {
  let texto = txtarea_encryptar.value.trim();
  if (texto === "") {
    alert("Por favor, ingrese un texto para encriptar.");
    return;
  }

  let texto_encriptado = texto
    .split("")
    .map((char) => substitutions[char] || char)
    .join("");

  txt_desencryptado.innerText = texto_encriptado;
  txtarea_encryptar.value = "";
  copyBtn.style.display = "block";
}

function desencryptar() {
  let texto = txt_desencryptado.innerText.trim(); // Use innerText here
  if (texto === "") {
    alert("No hay texto encriptado para desencriptar.");
    return;
  }

  let texto_desencriptado = texto;
  for (let [key, value] of Object.entries(substitutions).sort(
    (a, b) => b[1].length - a[1].length
  )) {
    texto_desencriptado = texto_desencriptado.replace(
      new RegExp(value, "g"),
      key
    );
  }

  txtarea_encryptar.value = texto_desencriptado;
  txt_desencryptado.innerText = "";
  copyBtn.style.display = "none"; // Ocultar el botón de copiar cuando se desencripta
}

function copiarTexto() {
  let texto = txt_desencryptado.innerText;
  navigator.clipboard.writeText(texto).then(
    function () {
      alert("Texto copiado al portapapeles.");
    },
    function (err) {
      alert("Error al copiar el texto: ", err);
    }
  );
}
