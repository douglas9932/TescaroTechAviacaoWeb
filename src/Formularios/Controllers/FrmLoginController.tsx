

export class FrmLoginController{
 
}
const validarEmail = (email: { toString: () => string | string[] }) => {
  return email?.toString().includes('@') && email?.toString().includes('.')
}

const validarSenha = (senha: { toString: () => { (): any; new(): any; length: number } }) => {
  return senha?.toString().length > 6
}

const validarNome = (nome: { toString: () => { (): any; new(): any; length: number } }) => {
  return nome?.toString().length > 2
}

const validarTelefone = (telefone: { toString: () => { (): any; new(): any; length: number } }) => {
  return telefone?.toString().length >= 8
}

const validarConfirmarSenha = (senha: any, confirmarSenha: any) => {
  return validarSenha(senha) && senha === confirmarSenha
}
const validarUsuarioSenha=(parUsuario:string,parSenha:string)=>{
  if(parUsuario==="" || parUsuario===null){
    return false;
  }
  if( parSenha ==="" || parSenha ===null)
  {
    return false;
  }
  return true;
}

export {
  validarEmail,
  validarSenha,
  validarNome,
  validarTelefone,
  validarConfirmarSenha,
  validarUsuarioSenha
}