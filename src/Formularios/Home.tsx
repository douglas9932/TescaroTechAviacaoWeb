import { FunctionComponent, useState } from 'react';
import { Button } from 'semantic-ui-react';
import { ETipoMensagem } from '../Enuns/ETipoMensagem';
import { Master } from './Master';
import Mensagem from './Mensagem/Mensagem';


let msg: JSX.Element;
export const Home: FunctionComponent = () => {
  const [isMessage, setMessage] = useState(false)
  
  function BtnAlerta ()
  { 
    msg = <Mensagem Mensagem={"Mensagem de Aviso"} TipoMensagem={ETipoMensagem.Aviso}/>
    setMessage(true)
  }
  function BtnErro ()
  {
    msg = <Mensagem Mensagem={"Mensagem de Erro"} TipoMensagem={ETipoMensagem.Erro}/>
    setMessage(true)
  }
  function BtnDone ()
  {
    msg = <Mensagem Mensagem={"Mensagem de Certo"} TipoMensagem={ETipoMensagem.Done}/>
    setMessage(true)
  }
  function BtnConfirm()
  {
    msg = <Mensagem Mensagem={"Mensagem de Confirmação"} TipoMensagem={ETipoMensagem.Confirmacao}/>
    setMessage(true)
  }
  return (
    <>
      <Master> 
        <button onClick={BtnConfirm} type="submit">Click</button>
      </Master>
      {isMessage? {msg}:null}
    </>
  );
};


