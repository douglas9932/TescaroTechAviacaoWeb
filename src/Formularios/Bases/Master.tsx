
import {FunctionComponent, useCallback, useEffect, useState } from "react";
import styles from "../../Content/css/FrmMaster.module.css";
import  '../../Content/css/CssBase.css';
import { SideBar } from "../../SideBar/Sidebar";
import { CamposMensagemBO } from "../../ClassBO/CamposMensagemBO";
import PortalPopup from "../../Components/PortalPopup";
import Mensagem from "../Mensagem/Mensagem";

function MenuHamburguer_Click()
{
  const ConstSideBar = document.getElementById("SideBar");
  const ConstCorpoDaPagina = document.getElementById("BodyDivSideBar");

  if(ConstSideBar!=null && ConstCorpoDaPagina!=null)
  {
    if(window.innerWidth <= 700)
    {
      if(ConstSideBar.classList.contains(styles.menuRecolhido))
      {
        ConstSideBar.classList.add(styles.menuAberto);
        ConstCorpoDaPagina.classList.add(styles.Blur);
        ConstSideBar.classList.remove(styles.menuRecolhido);  
      }
    }
    else
    {      
      if(ConstSideBar.classList.contains(styles.menuRecolhido))
      {      
        ConstSideBar.classList.remove(styles.menuRecolhido);
        ConstSideBar.classList.remove(styles.Close);
        ConstSideBar.classList.add(styles.menuAberto);
        ConstSideBar.classList.add(styles.Open);
      }
      else
      {
        ConstSideBar.classList.remove(styles.menuAberto);
        ConstSideBar.classList.remove(styles.Open);
        ConstSideBar.classList.add(styles.menuRecolhido);
        ConstSideBar.classList.add(styles.Close);
      }     
    }
  }
  return ConstSideBar && ConstCorpoDaPagina;
}

function FunctionSideBar (){
  const ConstSideBar = document.getElementById("SideBar");
  const ConstCorpoDaPagina = document.getElementById("BodyDivSideBar");
  if(ConstCorpoDaPagina!= null && ConstSideBar!= null)
  {
    if(window.innerWidth <= 700)
    {
      if(ConstCorpoDaPagina.classList.contains(styles.Blur))
      {
        ConstSideBar.classList.remove(styles.menuAberto);
        ConstCorpoDaPagina.classList.remove(styles.Blur);
        ConstSideBar.classList.add(styles.menuRecolhido);
      }
    }
  }
}

type ModalMsg = {
  MostrarMensagem: boolean;
  FechaMensagem?: () => void|undefined;    
};

export const Master: FunctionComponent<ModalMsg> = ({FechaMensagem,
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
  
  useEffect(() => {

    function Page_OnLoad() 
    {
      if(window.innerWidth <= 700)
      { 
        let LetSideBar = document.getElementById("SideBar");
        let LetCorpoDaPagina = document.getElementById("BodyDivSideBar");
                
        if(LetSideBar != null && LetCorpoDaPagina !=null)
        {         
          LetSideBar.classList.remove(styles.menuAberto);
          LetCorpoDaPagina.classList.remove(styles.Blur);
          LetSideBar.classList.add(styles.menuRecolhido);
        }
      }
    }

    function Page_OnResize() 
    {
      let LetSideBar = document.getElementById("SideBar");
      let LetCorpoDaPagina = document.getElementById("CorpoDaPagina");
      if(LetSideBar != null && LetCorpoDaPagina !=null)
      {
        if(window.innerWidth <= 700)
        {           
          LetSideBar.classList.remove(styles.menuAberto);
          LetCorpoDaPagina.classList.remove(styles.Blur);
          LetSideBar.classList.add(styles.menuRecolhido);
        }
        else
        {

        }
      }
    }

    window.addEventListener('load', Page_OnLoad)
    window.addEventListener('resize', Page_OnResize)
    document.getElementById('BodyDivSideBar')?.addEventListener("click",FunctionSideBar)
    
    Page_OnLoad()

  });


  return (
    <>
     <div className={styles.frmMasterDiv}>

      <SideBar css={styles.SideBarDesktop.toString() + " " + styles.Open + " " + styles.menuAberto.toString()} label={""} />
      
      <div id="CorpoDaPagina" className={styles.bodyDiv}>
        <div className={styles.pnlTopDiv}>
          <button className={styles.btnHamburguerButton} onClick={MenuHamburguer_Click}/>
        </div>
        <div className={styles.corpoDiv}>
          {children}
        </div>
      </div>
   </div>
   {isMensagemNovaPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top center"
          onOutsideClick={closeMensagemNovaPopup}
        >
          <Mensagem onClose={closeMensagemNovaPopup} Mensagem={CamposMensagemBO.prototype.Mensagem} TipoMensagem={CamposMensagemBO.prototype.TipoMensagem} />
        </PortalPopup>
      )}
   </>
  );   
};
