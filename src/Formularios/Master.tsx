
import { FunctionComponent, useEffect } from "react";
import styles from "../Content/css/FrmMaster.module.css";
import { SideBar } from "./Arquivos/SideBar";

function MenuHamburguer_Click()
{
  let SideBar = document.getElementById("SideBar");
  let CorpoDaPagina = document.getElementById("CorpoDaPagina");

  if(SideBar!=null && CorpoDaPagina!=null)
  {
    if(window.innerWidth <= 700)
    {
      if(SideBar.classList.contains(styles.menuRecolhido))
      {
        SideBar.classList.add(styles.menuAberto);
        CorpoDaPagina.classList.add(styles.Blur);
        SideBar.classList.remove(styles.menuRecolhido);  
      }
    }
    else
    {      
      if(SideBar.classList.contains(styles.menuRecolhido))
      {      
        SideBar.classList.remove(styles.menuRecolhido);
        SideBar.classList.remove(styles.Close);
        SideBar.classList.add(styles.menuAberto);
        SideBar.classList.add(styles.Open);
      }
      else
      {
        SideBar.classList.remove(styles.menuAberto);
        SideBar.classList.remove(styles.Open);
        SideBar.classList.add(styles.menuRecolhido);
        SideBar.classList.add(styles.Close);
      }     
    }
  }
  return SideBar && CorpoDaPagina;
}


function FunctionSideBar (){
  let SideBar = document.getElementById("SideBar");
  let CorpoDaPagina = document.getElementById("CorpoDaPagina");

  if(CorpoDaPagina!= null && SideBar!= null)
  {
    if(CorpoDaPagina.classList.contains(styles.Blur))
    {
      SideBar.classList.add(styles.menuAberto);
      SideBar.classList.remove(styles.menuRecolhido);
      CorpoDaPagina.classList.remove(styles.Blur);
    }
  }
}

export const Master: FunctionComponent = ({
children
}) => {
  return (
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
      <script src="MasterPage.js"></script>
   </div>
  ); 
  
};

