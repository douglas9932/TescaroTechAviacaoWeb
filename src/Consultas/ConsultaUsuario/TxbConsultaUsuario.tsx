import { FunctionComponent, useState, useCallback } from "react";
import ModalUsuario from "./ModalUsuario";
import PortalPopup from "../PortalPopup";
import styles from "../CssGeral/TxbConsultas.module.css";
import { TamanhoModais } from "../../Enuns/EnumTamanhoModal";

const TxbConsultaUsuario: FunctionComponent = () => {
  const [isModalUsuarioPopupOpen, setModalUsuarioPopupOpen] = useState(false);

  const openModalUsuarioPopup = useCallback(() => {
    setModalUsuarioPopupOpen(true);
  }, []);

  const closeModalUsuarioPopup = useCallback(() => {
    setModalUsuarioPopupOpen(false);
  }, []);

  return (
    <>
    <div className={styles.TxbConsulta}>
        <div className={styles.Input}>
            <input type="" name="" />
            <div className={styles.Buttons}>
                <button className={styles.Buscar} tabIndex={-1} onClick={openModalUsuarioPopup}><img src="./Buscar.svg" /></button>
                <button className={styles.Limpar} tabIndex={-1}><img src="./Clear.svg" /></button>
            </div>
        </div>		
    </div>
      {isModalUsuarioPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeModalUsuarioPopup}
        >
          <ModalUsuario onClose={closeModalUsuarioPopup} TamanhoModail={TamanhoModais.Medio}/>
        </PortalPopup>
      )}
    </>
  );
};

export default TxbConsultaUsuario;