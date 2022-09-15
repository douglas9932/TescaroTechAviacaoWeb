import { FunctionComponent, useEffect } from "react";
import styles from "./Css/ModalEmpresa.module.css";
import CssModais from "../CssGeral/Modais.module.css";
import { TamanhoModais } from "../../Enuns/EnumTamanhoModal";

type ModalEmpresaType = {
  onClose?: () => void;
  TamanhoModail: TamanhoModais;
};

let LetModal = document.getElementById("Modal");

const ModalEmpresa: FunctionComponent<ModalEmpresaType> = ({ onClose }) => {
  useEffect(() => {

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
