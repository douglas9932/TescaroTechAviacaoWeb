import React, { FunctionComponent } from 'react';
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
  sessionStorage.removeItem("User")
}

export const Home: FunctionComponent = () => {
  return (
    <Master>
      <a >HOMEEEEEEasdasdaasd</a>
      <button onClick={a}>BTN1</button>
      <button onClick={b}>BTN2</button>
      <button onClick={c}>BTN3</button>
      <div id="Conteudo">
        <a>ssssssss</a>
      </div>
    </Master>
  );
};


