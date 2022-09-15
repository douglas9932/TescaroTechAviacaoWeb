import { FunctionComponent, useState, useCallback } from "react";
import ModalEmpresa from "./ModalEmpresa";
import PortalPopup from "../PortalPopup";
import styles from "./Css/BtnOpenModalEmpresa.module.css";
import { TamanhoModais } from "../../Enuns/EnumTamanhoModal";

const BtnOpenModalEmpresa: FunctionComponent = () => {
  const [isModalEmpresaPopupOpen, setModalEmpresaPopupOpen] = useState(false);

  const openModalEmpresaPopup = useCallback(() => {
    setModalEmpresaPopupOpen(true);
  }, []);

  const closeModalEmpresaPopup = useCallback(() => {
    setModalEmpresaPopupOpen(false);
  }, []);

  return (
    <>
      <div
        className={styles.btnOpenModalEmpresaDiv}
        onClick={openModalEmpresaPopup}
      >
        <div className={styles.txtOpenModalDiv}>Open modal Empresa</div>
      </div>
      {isModalEmpresaPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeModalEmpresaPopup}
        >
          <ModalEmpresa onClose={closeModalEmpresaPopup} TamanhoModail={TamanhoModais.Grande}/>
        </PortalPopup>
      )}
    </>
  );
};

export default BtnOpenModalEmpresa;
