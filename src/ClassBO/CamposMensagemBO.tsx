import { ETipoMensagem } from "../Enuns/ETipoMensagem";
import { GetError } from "./GetError";

export class CamposMensagemBO{
    TipoMensagem: ETipoMensagem | undefined;
    Mensagem: string | undefined;

    MetodoCancelar?: ()=> void|undefined;
    MetodoConfirmar?: ()=> void|undefined;
    MetodoOK?: ()=> void|undefined;

    static SetMessage(parTipoMensagem: ETipoMensagem | undefined , parMensagem: string | undefined){
       this.prototype.TipoMensagem = parTipoMensagem;
       this.prototype.Mensagem = parMensagem;
    }

    static SetErro(parMensagem: unknown){
        this.prototype.TipoMensagem = ETipoMensagem.Erro; 
        this.prototype.Mensagem = GetError(parMensagem);
     }

    static GetMessage(){
        return this.prototype.TipoMensagem , this.prototype.Mensagem;
    }

    static LimparMensagens(){
        this.prototype.TipoMensagem = undefined;
        this.prototype.Mensagem = undefined;
    }
   }