import React, { FunctionComponent } from 'react';
import { Button } from '../Components/Buttons/Button';
import BtnOpenModalEmpresa from '../Consultas/ConsultaEmpresa/BtnOpenModalEmpresa';
import BtnOpenModalUsuario from '../Consultas/ConsultaPessoa/BtnOpenModalUsuario';
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
      <BtnOpenModalUsuario/>
      <input></input>
      <div id="Conteudo">
        <a>ssssssss</a>
      </div>
    </Master>
  );
};


