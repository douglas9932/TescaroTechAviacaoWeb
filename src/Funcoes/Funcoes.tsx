import { FunctionComponent } from "react";

const fs = require('fs').promises;

export async function listarArquivos(diretorio: any , arquivos: any){
    
  if(!arquivos){
    arquivos= [];
  }

  let listaDeArquivos = await fs.readdir(diretorio);
  console.log(listaDeArquivos);

}