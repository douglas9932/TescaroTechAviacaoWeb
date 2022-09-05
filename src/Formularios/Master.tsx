
import { FunctionComponent } from "react";
import styles from "../Content/css/FrmMaster.module.css";
import { SideBar } from "./Arquivos/SideBar";

function MenuHamburguer_Click()
{

  let SideBar =document.getElementById("SideBar");

  if(SideBar!=null)
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
  return SideBar;
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
   </div>
  );
};
