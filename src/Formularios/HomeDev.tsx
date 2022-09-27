import { info } from 'console';
import { FunctionComponent, useEffect, useState } from 'react';
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

export const HomeDev: FunctionComponent = () => {
  const [Users, setUsers] = useState({});
  const [Text, setText] = useState("");

  useEffect(()=>{
    fetch('https://localhost:44333/api/Usuario/GetUsuarios')
    .then((response) =>  alert(response))
    .then((response) => console.log(response))

    alert(Users)
  },[]);

  return (
    <Master>
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
