import { FunctionComponent, useEffect } from "react";
import styles from "./Css/ModalUsuario.module.css";
import CssModais from "../CssGeral/Modais.module.css";
import { TamanhoModais } from "../../Enuns/EnumTamanhoModal";

type ModalUsuarioType = {
  onClose?: () => void;  
  TamanhoModail: TamanhoModais;
};

let LetModal = document.getElementById("Modal");

const ModalUsuario: FunctionComponent<ModalUsuarioType> = ({ onClose }) => {
  useEffect(() => {
    
  });
  
  return (
    <div id="Modal" className={styles.modalUsuarioDiv + " " + CssModais.ModalPequeno}>
      <button className={styles.closeButton} onClick={onClose}>
        <button className={styles.xButton} onClick={onClose}>
          X
        </button>
      </button>
    </div>
  );
};

export default ModalUsuario;
