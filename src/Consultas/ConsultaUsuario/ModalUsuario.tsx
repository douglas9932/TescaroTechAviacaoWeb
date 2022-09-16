import { FunctionComponent, useEffect } from "react";
import styles from "./Css/ModalUsuario.module.css";
import CssModais from "../CssGeral/Modais.module.css";
import { TamanhoModais } from "../../Enuns/EnumTamanhoModal";

type ModalUsuarioType = {
  onClose?: () => void;  
  TamanhoModail: TamanhoModais;
};



const ModalUsuario: FunctionComponent<ModalUsuarioType> = ({ onClose ,TamanhoModail}) => {

  useEffect(() => {

    let LetModal = document.getElementById("Modal");
    
    if(LetModal !=null)
    {      
      if(TamanhoModail == TamanhoModais.Grande)
      {
        LetModal.classList.remove(CssModais.Modal);
        LetModal.classList.add(CssModais.ModalGrande);
      }
      else if(TamanhoModail == TamanhoModais.Medio)
      {
        LetModal.classList.remove(CssModais.Modal);
        LetModal.classList.add(CssModais.ModalMedio);
      }
      else if(TamanhoModail == TamanhoModais.Pequeno)
      {
        LetModal.classList.remove(CssModais.Modal);
        LetModal.classList.add(CssModais.ModalPequeno);
      }    
    }
  });
  return (
    <div id="Modal" className={styles.modalUsuarioDiv + " " + CssModais.Modal}>
      <button className={styles.closeButton} onClick={onClose}>
        <button className={styles.xButton} onClick={onClose}>
          X
        </button>
      </button>
    </div>
  ); 
  
};

export default ModalUsuario;
