import { FunctionComponent } from 'react';
import Style from './Css/Button.module.css';

type PropsButton = { 
    css: string | undefined ;
    label: string | undefined;
};

export const Button: FunctionComponent<PropsButton>  =({ css, label, ...props }) => {

  return (    
    <div className={Style.Button} id='Button'>
      <div>
        <span>
          <img src='./Icon.svg'></img>
        </span>
      </div> 
      <div>
        <label>{label}</label>   
      </div>
    </div>
  );
};


