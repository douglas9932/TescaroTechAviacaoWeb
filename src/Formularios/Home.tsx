import { FunctionComponent } from 'react';
import { Button } from 'semantic-ui-react';
import { ETipoMensagem } from '../Enuns/ETipoMensagem';
import { Master } from './Master';
import Mensagem from './Mensagem/Mensagem';

function a ()
{ 
  <Mensagem Mensagem={"err"} TipoMensagem={ETipoMensagem.Erro}/>
  sessionStorage.setItem("User", "aaaaaa")
  sessionStorage.setItem("User2", "bbbbb")
}
function b ()
{
  
 var a = sessionStorage.getItem("User")
 var b =sessionStorage.getItem("User2")
}
function c ()
{
  alert("AAAAAAAAAAAAAAAAA")
  sessionStorage.removeItem("User")
}

export const Home: FunctionComponent = () => {
  return (
    <Master>     
      <Mensagem Mensagem={"err"} TipoMensagem={ETipoMensagem.Erro}/> 
    </Master>
  );
};


