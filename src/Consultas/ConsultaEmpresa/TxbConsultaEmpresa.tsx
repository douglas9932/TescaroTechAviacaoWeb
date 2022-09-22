import { FunctionComponent, useState, useCallback } from "react";
import ModalEmpresa from "./ModalEmpresa";
import PortalPopup from "../PortalPopup";
import styles from "../CssGeral/TxbConsultas.module.css";
import { TamanhoModais } from "../../Enuns/EnumTamanhoModal";

const TxbConsultaEmpresa: FunctionComponent = () => {
  const [isModalEmpresaPopupOpen, setModalEmpresaPopupOpen] = useState(false);

  const openModalEmpresaPopup = useCallback(() => {
    setModalEmpresaPopupOpen(true);
  }, []);

  const closeModalEmpresaPopup = useCallback(() => {
    setModalEmpresaPopupOpen(false);
  }, []);

  return (
    <>    
    <div className={styles.PnlPainel}>
      <a className={styles.Label}>Empresa</a>
      <div className={styles.TxbConsulta}>
          <div className={styles.Input}>
              <input type="" name="" />
              <div className={styles.Buttons}>
                  <button className={styles.Buscar} tabIndex={-1} onClick={openModalEmpresaPopup}><img src="./Buscar.svg" /></button>
                  <button className={styles.Limpar} tabIndex={-1}><img src="./Clear.svg" /></button>
              </div>
          </div>	
      </div>
    </div>
      {isModalEmpresaPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top center"
          onOutsideClick={closeModalEmpresaPopup}
        >
          <ModalEmpresa onClose={closeModalEmpresaPopup} TamanhoModail={TamanhoModais.Grande}/>
        </PortalPopup>
      )}
    </>
  );
};

export default TxbConsultaEmpresa;
