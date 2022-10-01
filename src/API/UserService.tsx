import Api from "./Api"

export default class UserServices {
  
  async login (parUsuario:string,parSenha:string) {
    const {data} = await Api.get("/api/Usuario/GetUsuarios")

    if (data) {
      localStorage.setItem("nome", data.user.nome)
      localStorage.setItem("email", data.user.email)
      localStorage.setItem("token", data.token.token)

      return true
    }

    return
  }
  async Validarlogin (parUsuario:string,parSenha:string) {
    const {data} = await Api.get(`/api/Usuario/ValidarUsuario?parLogin=${parUsuario}&parSenha=${parSenha}`)

    if (data) {      
      return data
    }
    return false;
  }

  async cadastrar (dados: any) {
    return Api.post('/user', dados)
  }

  usuarioAutenticado () {
    return localStorage.getItem("token") != undefined ? true : false
    // return typeof localStorage.getItem("token")
  }

  //Desafio ---> implemente um botão que chama essa função dentro da página Home
  async logout () {
    localStorage.removeItem("token")
    localStorage.removeItem("nome")
    localStorage.removeItem("email")
  }
}