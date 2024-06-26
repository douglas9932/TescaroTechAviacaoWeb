import { FunctionComponent, useEffect } from "react";
import style from "./css/Mensagem.module.css"
import { ETipoMensagem } from "../../Enuns/ETipoMensagem";

type ModalMensagemType = {
  TipoMensagem: ETipoMensagem|undefined;
  Mensagem: string|undefined|unknown;
  onClose?: () => void|undefined;  
};

const ImegemDone = "./IconsMensagens/Done.svg"
const ImegemErro = "./IconsMensagens/Erro.svg"
const ImegemAviso = "./IconsMensagens/Aviso.svg"
const ImegemConfirmacao = "./IconsMensagens/Confirmacao.svg"
let Imagem: string | undefined;
let Botoes: {} | null | undefined;  
const Mensagem: FunctionComponent<ModalMensagemType> = ({onClose, Mensagem, TipoMensagem}) => {
          
    if(TipoMensagem === undefined)
    {
      Mensagem = "Atenção! Não foi passado nenhum Texto para essa mensagem!"
    }
    if(TipoMensagem === ETipoMensagem.Done)
    {
      Imagem = ImegemDone;  
      Botoes = (<button className={style.BotaoDone} onClick={onClose}>OK</button>)      
    }
    else if(TipoMensagem === ETipoMensagem.Erro)
    {
      Imagem = ImegemErro;
      Botoes = (<button className={style.BotaoErro} onClick={onClose}>OK</button>)
    }
    else if(TipoMensagem === ETipoMensagem.Aviso)
    {
      Imagem = ImegemAviso;
      Botoes = (<button className={style.BotaoAviso} onClick={onClose}>OK</button>)
    }
    else if(TipoMensagem === ETipoMensagem.Confirmacao)
    {
      Imagem = ImegemConfirmacao;
      Botoes = (<div className={style.BotoesConfirmacao}><button className={style.BotaoCancelar} onClick={onClose}>Cancelar</button> <button className={style.BotaoConfirmar} onClick={onClose}>Confirmar</button></div>)
    }

    useEffect(()=>{        
      let Icon = document.getElementById("Icon"); 
      
      if(Icon !=null)
      {
        if(TipoMensagem === ETipoMensagem.Done)
        {
          Icon.style.backgroundColor = "#82ce34";       
        }
        else if(TipoMensagem === ETipoMensagem.Erro)
        {
          Icon.style.backgroundColor = "#ef513a";
        }
        else if(TipoMensagem === ETipoMensagem.Aviso)
        {
          Icon.style.backgroundColor = "#f2b600";
        }
        else if(TipoMensagem === ETipoMensagem.Confirmacao)
        {
          Icon.style.backgroundColor = "#0055ff";            
        }
      }else{
        alert("GetById Error")
      }
    }, []);  
    
    return (  
      <>             
        <div className={style.Mensagem}>
          <div className={style.Body}>
            <div id="Icon" className={style.Icon + " " + style.ColorPadrao}>
              <img  className={style.Imagem} src={Imagem} />
            </div>
            <div className={style.TextoMensagem}>
              {Mensagem}
            </div>
            <div>
              {Botoes}                   
            </div>
          </div>
        </div>   
      </>
    ); 
};
export default Mensagem;
