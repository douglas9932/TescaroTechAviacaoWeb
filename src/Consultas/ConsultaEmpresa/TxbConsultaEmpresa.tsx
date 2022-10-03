import { FunctionComponent, useState, useCallback } from "react";
import ModalEmpresa from "./ModalEmpresa";
import PortalPopup from "../../Components/PortalPopup";
import styles from "../CssGeral/TxbConsultas.module.css";
import { TamanhoModais } from "../../Enuns/EnumTamanhoModal";

type PropsComponente = {
  Css: string;
}
const TxbConsultaEmpresa: FunctionComponent<PropsComponente> = (Css) => {
  const [isModalEmpresaPopupOpen, setModalEmpresaPopupOpen] = useState(false);

  const [TxbEmpresa, setEmpresa] = useState("");

  const openModalEmpresaPopup = useCallback(() => {
    setModalEmpresaPopupOpen(true);
  }, []);

  const closeModalEmpresaPopup = useCallback(() => {
    setModalEmpresaPopupOpen(false);
  }, []);

  const ClearComponent = useCallback(() =>{
    setEmpresa("");
  }, []);

  return (
    <>    
    <div className={styles.PnlPainel + " " + Css.Css}>
      <a className={styles.Label}>Empresa</a>
      <div className={styles.TxbConsulta}>
          <div className={styles.Input}>
              <input type="" name="" value={TxbEmpresa} onChange={e=>setEmpresa(e.target.value)}/>
              <div className={styles.Buttons}>
                  <button className={styles.Buscar} tabIndex={-1} onClick={openModalEmpresaPopup}><img src="./Buscar.svg" /></button>
                  <button className={styles.Limpar} tabIndex={-1} onClick={ClearComponent}><img src="./Clear.svg" /></button>
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
