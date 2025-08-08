'use client'

import { useState } from 'react';


export default function ConfigPage() {

  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = () => {
    if (file) {
      // Exibe o nome do arquivo em um alerta
      alert(`Arquivo selecionado: ${file.name}`);
    }
  };


  return (
      <main className="sm:ml-40 p-5 mt-20 flex-1">
        <section className="h-20 border-2 border-green-500">
          <div className="flex items-center justify-center h-full">
            <h1 className="text-4xl">Analisar</h1>
          </div>
        </section>

        <section className="h-20 border-2 border-green-500 mt-5">
          <div className="grid grid-cols-4 h-full">
            <div className="flex items-center justify-center border-r border-green-300">
              <p>Selecione o Arquivo :</p>
            </div>
            <div className="flex flex-col items-center justify-center border-r border-green-300 col-span-2">
              <input
                type="file"
                accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                className="mt-2 border border-gray-300 p-1 rounded"
                onChange={handleFileChange}
              />
            </div>
            <div className="flex items-center justify-center border-r border-green-300">
              <button
                onClick={handleSubmit}
                className={`mt-2 p-2 text-white rounded ${file ? 'bg-green-500' : 'bg-gray-500'}`} 
                disabled={!file}>
                Enviar Arquivo
              </button>
            </div>
          </div>
        </section>
      </main>
  );
}


Aqui vão 2 prompts bem elaborados para testar uma LLM nas três frentes que você citou — raciocínio lógico, cálculo matemático e inferência — cada um com um nível crescente de complexidade.

Prompt 1 – Enigma lógico-matemático
Você tem 3 caixas fechadas:

Uma caixa contém apenas maçãs.

Outra contém apenas laranjas.

A terceira contém maçãs e laranjas misturadas.

As etiquetas nas caixas estão todas erradas.
Você pode abrir apenas uma caixa e pegar apenas uma fruta de dentro para identificar corretamente o conteúdo das três caixas.

Pergunta:
Qual caixa você abre e como você deduz o conteúdo correto de todas as caixas?
Explique passo a passo sua lógica e, no final, escreva a resposta final em uma única frase.

Prompt 2 – Inferência numérica complexa
Três amigos — Ana, Bruno e Carla — somaram suas idades e obtiveram 78 anos no total.

A idade de Ana é o dobro da de Bruno.

A soma da idade de Bruno com 5 anos no futuro e a de Carla é igual a 65.

Daqui a 3 anos, a soma da idade de Ana e Carla será exatamente o dobro da idade de Bruno naquele momento.

Pergunta:
Qual é a idade de cada um hoje?
Explique como chegou ao resultado e verifique a consistência com todas as condições.

Se quiser, posso também criar uma versão “armadilha” desses prompts, onde as informações são propositalmente ambíguas ou redundantes para testar a capacidade da LLM de detectar inconsistências.
Quer que eu já faça essa variação?
