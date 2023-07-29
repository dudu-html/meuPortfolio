let buttonCopy = document.querySelector('#copy-button');

buttonCopy.addEventListener("click", function copiarTexto() {
    let textoCopiar = document.getElementById("email").textContent;
    console.log('Email Copiado com sucesso');
    navigator.clipboard.writeText(textoCopiar);
});

