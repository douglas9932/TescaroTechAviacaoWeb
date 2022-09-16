import { FunctionComponent, useEffect } from "react";
import styles from "./Css/ModalEmpresa.module.css";
import CssModais from "../CssGeral/Modais.module.css";
import { TamanhoModais } from "../../Enuns/EnumTamanhoModal";

type ModalEmpresaType = {
  onClose?: () => void;
  TamanhoModail: TamanhoModais;
};



const ModalEmpresa: FunctionComponent<ModalEmpresaType> = ({ onClose ,TamanhoModail}) => {

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
    <div id="Modal" className={styles.modalEmpresaDiv + " " + CssModais.ModalGrande}>
      <button className={styles.closeButton} onClick={onClose}>
        <button className={styles.xButton} onClick={onClose}>
          X
        </button>
      </button>
    </div>
  );
};

export default ModalEmpresa;
