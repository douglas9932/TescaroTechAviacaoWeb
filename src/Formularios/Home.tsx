import { FunctionComponent, useCallback, useState } from 'react';

import { ETipoMensagem } from '../Enuns/ETipoMensagem';
import { Master } from './Bases/Master';
import Mensagem from './Mensagem/Mensagem';
import { CamposMensagemBO } from '../ClassBO/CamposMensagemBO';
import { Button } from '../Components/Buttons/Button';
import Buttons from '../Components/Buttons/Buttons';


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
      <Master FechaMensagem={CloseMessage} MostrarMensagem={isMessage}> 
        <Buttons 
        onClick={BtnAlerta} 
        type="submit" 
        Text={"Alerta"} 
        BorderRadiusValue={25}
        IconStart={"./vector1.svg"}
        IconEnd={"./vector.svg"}/> 

        {/* <Button onClick={BtnErro} type="submit" text={"Erro"}/> 
        <Button onClick={BtnDone} type="submit" text={"OK"}/> 
        <Button onClick={BtnConfirm} type="submit" css={"undefined"} text={"Confirmação"}/>   */}
      </Master>
    </>
  );
};


