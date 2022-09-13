import { FunctionComponent } from "react";
import styles from "./Css/ModalUsuario.module.css";

type ModalUsuarioType = {
  onClose?: () => void;
};

const ModalUsuario: FunctionComponent<ModalUsuarioType> = ({ onClose }) => {
  return (
    <div className={styles.modalUsuarioDiv}>
      <button className={styles.closeButton} onClick={onClose}>
        <button className={styles.xButton} onClick={onClose}>
          X
        </button>
      </button>
    </div>
  );
};

export default ModalUsuario;
