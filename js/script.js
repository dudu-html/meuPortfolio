let buttonCopy = document.querySelector('#copy-button');

buttonCopy.addEventListener("click", function copiarTexto() {
    let textoCopiar = document.getElementById("email").textContent;
    // Retorno:
    console.log('Email Copiado com sucesso');
    window.alert('copia');
    navigator.clipboard.writeText(textoCopiar);
});

