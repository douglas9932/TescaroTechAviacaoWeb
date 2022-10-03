import { FunctionComponent, useState } from "react";
import { TextField } from "@mui/material";
import styles from "../Content/css/FrmLogin.module.css";
import { useNavigate } from "react-router-dom";
import UserService from "../API/UserService";
import { validarUsuarioSenha } from "./Controllers/FrmLoginController";

const userService = new UserService()

export const FrmLogin: FunctionComponent = () => {  
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)

  const [Usuario, setUsuario] = useState("");
  const [Senha, setSenha] = useState("");
  
  const btnEntrarClick = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    try {
      if(validarUsuarioSenha(Usuario, Senha))
      {
        setLoading(true)
        const response = await userService.Validarlogin(Usuario,Senha)
        console.log('response do Login', response)
        if (response === true) 
        {
          navigate('/Home')
        }else
        {
          alert("Credenciais incorretas");
          navigate('/')
        }
        setLoading(false)
      }else
      {
        alert("Preencha o Usuario e Senha");
      }   
    }
    catch (err) {
      alert(err);
    }
  }

  return (
    <>
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
                value={Usuario}
                onChange={e=>setUsuario(e.target.value)}
              />
              <TextField
                className={styles.txtUsuarioTextField}
                color="primary"
                variant="standard"
                type="password"
                label="Senha"
                size="medium"
                margin="none"
                value={Senha}
                onChange={(e)=>setSenha(e.target.value)}
              />
                <button className={styles.btnEntrarButton} onClick={btnEntrarClick}>
                  <div className={styles.txtEntrarDiv}>{`Entrar `}</div>
                </button>
                <a className={styles.txtEsqueceuASenha}>Esqueci Minha Senha</a>
              </div>              
          </div> 
        </div> 
      </form>
    </div>    
    </>
  );
};
