import { FunctionComponent, useCallback, useState } from 'react';
import { Button } from 'semantic-ui-react';
import { ETipoMensagem } from '../Enuns/ETipoMensagem';
import { Master } from './Master';
import Mensagem from './Mensagem/Mensagem';
import { CamposMensagemBO } from '../ClassBO/CamposMensagemBO';


let msg: JSX.Element;

export const Home: FunctionComponent = () => {

  const [isMessage, setMessage] = useState(false)
  
  const CloseMessage = useCallback(() => {
    setMessage(false);
  }, []);
  
  function BtnAlerta ()
  { 
    CamposMensagemBO.SetMessage(ETipoMensagem.Aviso, "Mensagem de Aviso");
    setMessage(true);
  }
  function BtnErro ()
  {
    CamposMensagemBO.SetMessage(ETipoMensagem.Erro, "Mensagem de Erro");
    setMessage(true)
  }
  function BtnDone ()
  {
    CamposMensagemBO.SetMessage(ETipoMensagem.Done, "Mensagem de OK");
    setMessage(true)
  }
  function BtnConfirm()
  {       
    CamposMensagemBO.SetMessage(ETipoMensagem.Confirmacao, "Mensagem de Confirmação");
    setMessage(true)
  }
  return (
    <>
      <Master FechaMensagem={CloseMessage} MostrarMensagem={isMessage} TextMensagem={undefined} TipoMensagem={undefined}> 
        <button onClick={BtnAlerta} type="submit">Alerta</button>        
        <button onClick={BtnErro} type="submit">Erro</button> 
        <button onClick={BtnDone} type="submit">OK</button> 
        <button onClick={BtnConfirm} type="submit">Confirma</button>  
      </Master>
    </>
  );
};


