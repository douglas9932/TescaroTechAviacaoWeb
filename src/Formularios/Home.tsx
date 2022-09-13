import React, { FunctionComponent } from 'react';
import { Button } from '../Components/Buttons/Button';
import BtnOpenModalEmpresa from '../Consultas/ConsultaEmpresa/BtnOpenModalEmpresa';
import TxbConsultaEmpresa from '../Consultas/ConsultaEmpresa/TxbConsultaEmpresa';
import BtnOpenModalUsuario from '../Consultas/ConsultaUsuario/BtnOpenModalUsuario';
import TxbConsultaUsuario from '../Consultas/ConsultaUsuario/TxbConsultaUsuario';
import { Master } from './Master';

function a ()
{ 
 
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

export const Home: FunctionComponent = () => {
  return (
    <Master>
      <a >HOMEEEEEEasdasdaasd</a>
      <button onClick={a}>BTN1</button>
      <button onClick={b}>BTN2</button>
      <button onClick={c}>BTN3</button>
      <BtnOpenModalEmpresa/>
      <br/>
      <BtnOpenModalUsuario/>
      <br/>
      <TxbConsultaEmpresa/>
      <br/>
      <TxbConsultaUsuario/>
      <br/>
      <div id="Conteudo">
        <a>ssssssss</a>
      </div>
    </Master>
  );
};


