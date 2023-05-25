import Api from "../API/Api";


export function GetError(error: any) {
  let mensagem = "";
  
  if(error.message ==="Network Error"){
    mensagem += "Erro ao conectar com o WebApi! \n\n\n Mensagem: " + error.message;
  }
  else
  {
    mensagem += "Erro! Mensagem: " + error.message 
  }
    return (
      mensagem
    );
  }