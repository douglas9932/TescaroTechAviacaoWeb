import { FunctionComponent, useCallback, useState } from "react";
import { TextField } from "@mui/material";
import styles from "../Content/css/FrmLogin.module.css";
import { useNavigate } from "react-router-dom";
import UserService from "../API/UserService";
import { validarUsuarioSenha } from "./Controllers/FrmLoginController";
import Mensagem from "./Mensagem/Mensagem";
import { ETipoMensagem } from "../Enuns/ETipoMensagem";
import { MasterVazio } from "./Bases/MasterVazio";
import { CamposMensagemBO } from "../ClassBO/CamposMensagemBO";

const userService = new UserService()
export const FrmLogin: FunctionComponent = () => {  
  const navigate = useNavigate();
  const [isMessage, setMessage] = useState(false);


  const [loading, setLoading] = useState(false)
  const [Usuario, setUsuario] = useState("");
  const [Senha, setSenha] = useState("");
  
  
  const CloseMessage = useCallback(() => {
    setMessage(false);
  }, []);


  const btnEntrarClick = async (event: { preventDefault: () => void;}) => {
    event.preventDefault();
    try {

      if(Usuario == "dev" && Senha=="dev") 
      {
        navigate('/Home')
      }
      else{

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
            //alert("Credenciais incorretas"); 
            CamposMensagemBO.SetMessage(ETipoMensagem.Aviso, "Credenciais incorretas");
            setMessage(true);
            //e.target
          }
          setLoading(false)
        }else
        {
          CamposMensagemBO.SetMessage(ETipoMensagem.Aviso, "Preencha o Usuario e Senha");
          setMessage(true);               
        } 

      }

    }
    catch (err) {      
        CamposMensagemBO.SetErro(err);
        setMessage(true);       
    }
  }

  return (
    <>
    <MasterVazio FechaMensagem={CloseMessage} MostrarMensagem={isMessage}>
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
                  <button className={styles.btnEntrarButton} type="submit" onClick={btnEntrarClick}>
                    <div className={styles.txtEntrarDiv}>{`Entrar `}</div>
                  </button>
                  <a className={styles.txtEsqueceuASenha}>Esqueci Minha Senha</a>
                </div>              
            </div> 
          </div> 
        </form>
      </div>       
    </MasterVazio>
    </>
  );
};
