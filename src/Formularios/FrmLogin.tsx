import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon } from "@mui/material";
import styles from "../Content/css/FrmLogin.module.css";

export const FrmLogin: FunctionComponent = () => {
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
                <button className={styles.btnEntrarButton}>
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
