let vetor = [];
let vetorTamanho = 0; 


function inserirNumero() {
    let numero = parseInt(document.getElementById("numberInput").value);
    
    if (!isNaN(numero)) {
        vetor[vetorTamanho] = numero; 
        vetorTamanho++; // Incrementa o tamanho do vetor
        
        mostrarVetor('listaOriginal', vetor); // Atualiza a exibição da lista original
        
        document.getElementById("numberInput").value = "";
        document.getElementById("numberInput").focus();
    } else {
        alert("Por favor, insira um número inteiro válido.");
    }
}


function ordenarVetor() {
    let n = vetorTamanho;
    let ordenado = [];
    
    // Copiar o vetor manualmente para não alterar o original
    for (let i = 0; i < n; i++) {
        ordenado[i] = vetor[i];
    }
    
    // Implementação do algoritmo de ordenação bolha
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (ordenado[j] > ordenado[j + 1]) {
                // Troca manual
                let temp = ordenado[j];
                ordenado[j] = ordenado[j + 1];
                ordenado[j + 1] = temp;
            }
        }
    }
    
    mostrarVetor('listaOrdenada', ordenado); // Atualiza a exibição da lista ordenada
}

// Função para mostrar o vetor em uma div
function mostrarVetor(divId, vetorParaMostrar) {
    let resultado = ""; // Variável para armazenar a string de exibição
    
  
    for (let i = 0; i < vetorTamanho; i++) {
        resultado += vetorParaMostrar[i];
        if (i < vetorTamanho - 1) {
            resultado += ", "; 
        }
    }
    
 
    document.getElementById(divId).innerText = resultado;
}
