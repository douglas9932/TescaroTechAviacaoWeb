import { FunctionComponent, useCallback } from "react";
import { TextField } from "@mui/material";
import styles from "../Content/css/FrmLogin.module.css";
import { useNavigate } from "react-router-dom";


export const FrmLogin: FunctionComponent = () => {
  
      const navigate = useNavigate();

      const  ClickBtn = useCallback(()=>{
        navigate("/Home");
      }, [navigate]);

  return (
    <div className={styles.frmLoginDiv}>
      <form className={styles.loginContentDivForm}>   
      <div className={styles.divimg}>
         <img
          className={styles.ImagemFundo}
          alt=""
          src="ipanema.svg"
        /> 
        </div>     
       
        <div className={styles.cardLoginDiv}>          
            <div className={styles.cardLogincontentDiv}>

              <div className={styles.bloco1}>
                <b className={styles.txtNomeEmpresaB}>TescaroTech</b>
                <p className={styles.txtLoginP}>LOGIN</p>
              </div>
              <div className={styles.bloco2}>
                <TextField
                  className={styles.txtUsuarioTextField}
                  color="primary"
                  variant="standard"
                  type="text"
                  label="Usuário"
                  size="medium"
                  margin="none"
                />
                <TextField
                  className={styles.txtUsuarioTextField}
                  variant="standard"
                  label="Senha"
                />
                <button className={styles.btnEntrarButton} onClick={ClickBtn}>
                  <div className={styles.txtEntrarDiv}>{`Entrar `}</div>
                </button>
                <a className={styles.txtEsqueceuASenha}>Esqueci Minha Senha</a>
              </div>
              
          </div> 
        </div> 
      </form>
    </div>
  );
};
