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
