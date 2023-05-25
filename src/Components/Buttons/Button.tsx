import { FunctionComponent } from 'react';
import StyleButton from './Css/Button.module.css';

type PropsButton = { 
    onClick? (): void;
    css?: string | any;
    text?: string | any;
    type?:string;

    IconEnd?: string;
    IconStart?: string;

    TextAlign?: string;
    ButtonColor?: string;
    TextColor?: string;
    BorderCollor?: string;
    BorderRadius?: number;
    MaxHeidt?: string;
};

export const Button: FunctionComponent<PropsButton>  =({onClick,css,text}) => {

  let cssBotao = "";

  if(css != "" && css != null){
    cssBotao = css;
  }else{
    cssBotao = StyleButton.Button;
  }

  return (    
    <div className={cssBotao} onClick={onClick} id='Button'>
      <div>
        <span>
          <img src='./Icon.svg'></img>
        </span>
      </div> 
      <div>
        <label>{text}</label>   
      </div>
    </div>
  );
};


