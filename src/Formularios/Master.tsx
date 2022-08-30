
import { FunctionComponent } from "react";
import styles from "../Content/css/FrmMaster.module.css";
import { SideBar } from "./Arquivos/SideBar";

function MenuHamburguer_Click()
{
  var a =document.getElementById("SideBar");
  if(a!=null)
  {
    if(a.className == styles.menuRecolhido)
    {
      a.className = (styles.menuAberto);
    }
    else
    {
      a.className = (styles.menuRecolhido);
    }
  }
  return a;
}


export const Master: FunctionComponent = ({
children
}) => {
  return (
     <div className={styles.frmMasterDiv}>
     <SideBar css={styles.menuAberto.toString()} label={""} />
     <div className={styles.bodyDiv}>
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
