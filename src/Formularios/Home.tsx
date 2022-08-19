import React, { FunctionComponent } from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';
import { Master } from './Master';
import Teste from './Teste';
function a ()
{
     var div = document.getElementById("Conteudo")

      var a = Teste

      var b = document.getElementById("Corpo")
      
      if(div != null)
      {
        div.innerHTML = "<a></a>";
      }

}

export const Home: FunctionComponent = () => {
  return (
    <Master>
      <a >HOMEEEEEEasdasdaasd</a>
      <button onClick={a}>BTN</button>
      <div id="Conteudo">
        <a>ssssssss</a>
      </div>
    </Master>
  );
};


