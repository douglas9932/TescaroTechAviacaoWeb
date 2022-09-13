import { FunctionComponent } from "react";
import styles from "./Css/ModalEmpresa.module.css";

type ModalEmpresaType = {
  onClose?: () => void;
};

const ModalEmpresa: FunctionComponent<ModalEmpresaType> = ({ onClose }) => {
  return (
    <div className={styles.modalEmpresaDiv}>
      <button className={styles.closeButton} onClick={onClose}>
        <button className={styles.xButton} onClick={onClose}>
          X
        </button>
      </button>
    </div>
  );
};

export default ModalEmpresa;
