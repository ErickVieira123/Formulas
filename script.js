function bhaskara() {
  window.location.href = "bhaskara.html";
}

function calcular() {
  const a = document.getElementById("a").value;
  const b = document.getElementById("b").value;
  const c = document.getElementById("c").value;

  let delta = b * b - 4 * a * c;
  if (delta < 0) {
    alert("Não existem raízes reais.");
    return;
  }
  let raiz = Math.sqrt(delta);

  let x1 = (-b + raiz) / (2 * a);
  let x2 = (-b - raiz) / (2 * a);

  document.getElementById("xi").innerText = "X¹ = " + x1;
  document.getElementById("xii").innerText = "X² = " + x2;

  if (a === "" || b === "" || c === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }
}

const btn = document.querySelector(".btn");
if (btn) {
  btn.addEventListener("click", calcular);
}

const voltar = document.getElementById("voltar");
if (voltar) {
  voltar.addEventListener("click", function () {
    window.location.href = "index.html";
  });
}

const limpar = document.querySelector(".limpar");
if (limpar) {
  limpar.addEventListener("click", function () {
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";
    document.getElementById("xi").innerText = "X¹ = X";
    document.getElementById("xii").innerText = "X² = X";
  });
}
