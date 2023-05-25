import { CSSProperties, FunctionComponent } from "react";
import StyleButtons from "./Css/Buttons.module.css";

type ButtonsType = {
  onClick? (): void;
  Text?: string | any;
  type?:string;

  IconEnd?: string;
  IconStart?: string;

  TextAlign?: string;
  ButtonColor?: string;
  TextColor?: string;
  BorderColor?: string;
  BorderRadiusValue?: number;
  MaxWidth?: string;
};

const Buttons: FunctionComponent<ButtonsType> = ({
  onClick,
  Text,
  type,
  IconEnd,
  IconStart,
  TextAlign,
  ButtonColor,
  TextColor,
  BorderColor,
  BorderRadiusValue,
  MaxWidth
}) => {
  
  const styles: CSSProperties = {};
  let Icon1;
  let Icon2;
  if(BorderRadiusValue != 0 && BorderRadiusValue != null){
    styles.borderRadius=  BorderRadiusValue;
  }

  if(IconStart != "" && IconStart!= null){
    Icon1 = (
    <div className={StyleButtons.iconstart}>
      <img className={StyleButtons.vectorIcon} alt="" src={IconStart} />
    </div>)
  }
  
  if(IconEnd!= "" && IconEnd!= null){
    Icon2 = (
    <div className={StyleButtons.iconend}>
      <img className={StyleButtons.vectorIcon} alt="" src={IconEnd} />
    </div>)
  }

  return (
    <div id="ButtonID" className={StyleButtons.button} style={styles} onClick={onClick}>
      {Icon1}      
      <div className={StyleButtons.text}>{Text}</div>
      {Icon2}
    </div>
  );
};

export default Buttons;
