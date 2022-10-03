import { FunctionComponent, useState, useCallback, useEffect } from "react";
import ModalUsuario from "./ModalUsuario";
import PortalPopup from "../../Components/PortalPopup";
import styles from "../CssGeral/TxbConsultas.module.css";
import { TamanhoModais } from "../../Enuns/EnumTamanhoModal";

type PropsComponente = {
  Css: string;
}
const TxbConsultaUsuario: FunctionComponent<PropsComponente> = (Css) => {
  
  const [isModalUsuarioPopupOpen, setModalUsuarioPopupOpen] = useState(false);
  const [TxbUsuario, setUsuario] = useState("");

  const openModalUsuarioPopup = useCallback(() => {
    setModalUsuarioPopupOpen(true);
  }, []);

  const closeModalUsuarioPopup = useCallback(() => {
    setModalUsuarioPopupOpen(false);
  }, []);
  const ClearComponent = useCallback(() =>{
    setUsuario("");
  }, []);

  useEffect(() => {
      
  });
  return (
    <>    
    <div className={styles.PnlPainel + " " + Css.Css}>
      <a className={styles.Label}>Usuario</a>
      <div className={styles.TxbConsulta}>
        <div className={styles.Input}>
            <input type="" name="" value={TxbUsuario} onChange={e=>setUsuario(e.target.value)}/>
            <div className={styles.Buttons}>
                <button className={styles.Buscar} tabIndex={-1} onClick={openModalUsuarioPopup}><img src="./Buscar.svg" /></button>
                <button className={styles.Limpar} tabIndex={-1} onClick = {ClearComponent}><img src="./Clear.svg" /></button>
            </div>
        </div>	
      </div>	
    </div>
    
      {isModalUsuarioPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top center"
          onOutsideClick={closeModalUsuarioPopup}
        >
          <ModalUsuario onClose={closeModalUsuarioPopup} TamanhoModail={TamanhoModais.Medio}/>
        </PortalPopup>
      )}
    </>
  );
};

export default TxbConsultaUsuario;
