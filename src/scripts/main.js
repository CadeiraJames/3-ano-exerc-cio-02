document.addEventListener('DOMContentLoaded', () => {
    const formSorteador = document.getElementById('form-sorteador');
    const resultadoValor = document.getElementById('resultado-valor');
    const resultadoContainer = document.querySelector('.resultado');
    const numeroMaximoInput = document.getElementById('numero-maximo');
    formSorteador.addEventListener('submit', (evento) => {
        evento.preventDefault();
        const numeroMaximo = parseInt(numeroMaximoInput.value);
        const numeroSorteado = Math.floor(Math.random() * numeroMaximo) + 1;
        resultadoValor.innerText = numeroSorteado;
        resultadoContainer.style.display = 'block';
    });
});
