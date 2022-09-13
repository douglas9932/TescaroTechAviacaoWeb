import { FunctionComponent, useState, useCallback } from "react";
import ModalUsuario from "./ModalUsuario";
import PortalPopup from "../PortalPopup";
import styles from "./Css/BtnOpenModalUsuario.module.css";

const BtnOpenModalUsuario: FunctionComponent = () => {
  const [isModalUsuarioPopupOpen, setModalUsuarioPopupOpen] = useState(false);

  const openModalUsuarioPopup = useCallback(() => {
    setModalUsuarioPopupOpen(true);
  }, []);

  const closeModalUsuarioPopup = useCallback(() => {
    setModalUsuarioPopupOpen(false);
  }, []);

  return (
    <>
      <div
        className={styles.btnOpenModalUsuarioDiv}
        onClick={openModalUsuarioPopup}
      >
        <div className={styles.txtOpenModalDiv}>Open modal Usuario</div>
      </div>
      {isModalUsuarioPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeModalUsuarioPopup}
        >
          <ModalUsuario onClose={closeModalUsuarioPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default BtnOpenModalUsuario;
