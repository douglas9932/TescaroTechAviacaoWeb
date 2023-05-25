
import {FunctionComponent, useCallback, useEffect, useState } from "react";

import  '../../Content/css/CssBase.css';
import { CamposMensagemBO } from "../../ClassBO/CamposMensagemBO";
import PortalPopup from "../../Components/PortalPopup";
import Mensagem from "../Mensagem/Mensagem";

type ModalMsg = {
  MostrarMensagem: boolean;
  FechaMensagem?: () => void|undefined;
};

export const MasterVazio: FunctionComponent<ModalMsg> = ({FechaMensagem,
children , MostrarMensagem
}) => {  

  const [isMensagemNovaPopupOpen, setMensagemNovaPopupOpen] = useState(false);
  
  const closeMensagemNovaPopup = useCallback(() => {
    setMensagemNovaPopupOpen(false);

    if(FechaMensagem != null) {
      FechaMensagem();
    }
    CamposMensagemBO.LimparMensagens();
  }, []);

  if(!isMensagemNovaPopupOpen && (MostrarMensagem && !isMensagemNovaPopupOpen)){
    CamposMensagemBO.GetMessage();
    setMensagemNovaPopupOpen(true);
  }
  
  return (
    <>
    {children}
    {isMensagemNovaPopupOpen && (
          <PortalPopup
            overlayColor="rgba(113, 113, 113, 0.3)"
            placement="Centered"
            onOutsideClick={closeMensagemNovaPopup}
          >
            <Mensagem onClose={closeMensagemNovaPopup} Mensagem={CamposMensagemBO.prototype.Mensagem} TipoMensagem={CamposMensagemBO.prototype.TipoMensagem} />
          </PortalPopup>
        )}
   </>
  );   
};
