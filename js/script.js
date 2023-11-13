// let buttonCopy = document.querySelector('#copy-button');

// buttonCopy.addEventListener("click", function copiarTexto() {
//     let textoCopiar = document.getElementById("email").textContent;
//     // Retorno:
//     console.log('Email Copiado com sucesso');
//     window.alert('Email copiado!');
//     navigator.clipboard.writeText(textoCopiar);
// });

let buttonCopy = document.querySelector('#copy-button');

buttonCopy.addEventListener("click", function copiarTexto() {
  let textoCopiar = document.getElementById("email").textContent;

  // Tentar copiar para a área de transferência
  navigator.clipboard.writeText(textoCopiar)
    .then(() => {
      console.log('Email Copiado com sucesso');
      window.alert('Email copiado!');
    })
    .catch((err) => {
      console.error('Erro ao copiar para a área de transferência', err);
      fallbackCopyTextToClipboard(textoCopiar);
    });
});

function fallbackCopyTextToClipboard(textoCopiar) {
  // Caso a API de Clipboard não seja suportada, oferecemos uma alternativa
  let textArea = document.createElement("textarea");
  textArea.value = textoCopiar;

  // Adiciona o textarea ao corpo do documento
  document.body.appendChild(textArea);

  // Seleciona e copia o texto no textarea
  textArea.select();
  document.execCommand('copy');

  // Remove o textarea após a cópia
  document.body.removeChild(textArea);

  console.log('Email Copiado com sucesso (fallback)');
  window.alert('Email copiado! (fallback)');

}