import React, { FunctionComponent } from 'react';
import { Button } from '../Components/Buttons/Button';
import TxbConsultaEmpresa from '../Consultas/ConsultaEmpresa/TxbConsultaEmpresa';
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
      
    </Master>
  );
};


