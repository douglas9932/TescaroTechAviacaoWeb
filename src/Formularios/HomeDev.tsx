import { FunctionComponent, useEffect, useState } from 'react';
import Api from '../API/Api';
import { PessoaBO } from '../ClassBO/PessoaBO';
import TxbConsultaEmpresa from '../Consultas/ConsultaEmpresa/TxbConsultaEmpresa';
import TxbConsultaUsuario from '../Consultas/ConsultaUsuario/TxbConsultaUsuario';
import { Master } from './Bases/Master';

let users: PessoaBO[]= [];
function a ()
{    
  Api
  .get("/api/Usuario/GetUsuarios")
  .then((response) => users=(response.data))
  .catch((err) => {
    console.log("ops! ocorreu um erro" + err);
  });
  console.log(users)
  
  users[0].Nome = "TESTE";

  console.log(users)
  
  sessionStorage.setItem("User", "aaaaaa")
  sessionStorage.setItem("User2", "bbbbb")
}
function b ()
{  
 var a = sessionStorage.getItem("User")
 var b =sessionStorage.getItem("User2")
}
function c ()
{
  alert("AAAAAAAAAAAAAAAAA")
  sessionStorage.removeItem("User")
}

export const HomeDev: FunctionComponent = () => {
  return (
    <Master FechaMensagem={undefined} MostrarMensagem={false}>
      <a >HOMEEEEEEasdasdaasd</a>
      <button onClick={a}>BTN1</button>
      <button onClick={b}>BTN2</button>
      <button onClick={c}>BTN3</button>
      <br/>
      <div className="Linha">
        <TxbConsultaEmpresa Css="col_sm_12  col_md_6  col_lg_3 col_xl_2"/>
        <TxbConsultaUsuario Css="col_sm_12  col_md_6  col_lg_3 col_xl_3"/>
        <TxbConsultaEmpresa Css="col_sm_12  col_md_6  col_lg_3 col_xl_4"/>
        <TxbConsultaUsuario Css="col_sm_12  col_md_6  col_lg_3 col_xl_3"/>
      </div>
      <div></div>
      <div></div>
        <TxbConsultaUsuario Css="col_sm_12  col_md_6  col_lg_3  col_xl_2"/> 
        <TxbConsultaEmpresa Css="col_sm_12  col_md_6  col_lg_3  col_xl_2"/>      
        <TxbConsultaUsuario Css="col_sm_12  col_md_6  col_lg_3  col_xl_2"/>
      <br/>
      <div id="Conteudo">
        <a>ssssssss</a>  
      </div>
    </Master>
  );
};
