import { CSSProperties, FunctionComponent } from "react";
import StyleButtons from "./Css/Buttons.module.css";

type ButtonsType = {
  onClick? (): void;
  parText?: string | any;
  parType?:string;

  parIconEnd?: string;
  parIconStart?: string;

  parTextAlign?: "center" |"end" |"start"| string;
  parButtonColor?: string;
  parTextColor?: string;
  parBorderColor?: string;
  parBorderRadius?: number;
  parMaxWidth?: number;
  parMaxHeight?: number;

  parWidth?: number;
  parHeight?: number;
};

const Buttons: FunctionComponent<ButtonsType> = ({
  onClick,
  parText,
  parType,

  parIconEnd,
  parIconStart,

  parTextAlign,
  parButtonColor,
  parTextColor,
  parBorderColor,
  parBorderRadius,
  parMaxWidth,
  parMaxHeight,
  parWidth,
  parHeight
}) => {
  
  const newStylesButton: CSSProperties = {};
  const newStylesText: CSSProperties = {};
  let IconStart;
  let IconEnd;

  if(parBorderRadius != 0 && parBorderRadius != null){
    newStylesButton.borderRadius=  parBorderRadius;
  }
  if(parButtonColor !="" && parButtonColor != null){
    newStylesButton.backgroundColor = parButtonColor;
  }
  if(parTextAlign != "" && parTextAlign != null){
    newStylesButton.justifyContent = parTextAlign;
    newStylesText.justifyContent = parTextAlign;
  }

  if(parWidth != 0 && parWidth != null){
    newStylesButton.width = parWidth;
  }
  if(parHeight != 0 && parHeight != null){
    newStylesButton.height = parHeight;
  }  


  if(parMaxWidth!=0 && parMaxWidth!=null){
    newStylesButton.maxWidth = parMaxWidth;
  }
  if(parMaxHeight!=0 && parMaxHeight!=null){
    newStylesButton.maxHeight = parMaxHeight;
  }



  if(parTextColor !="" && parTextColor != null){
    newStylesText.color = parTextColor;
  }

  if(parIconStart != "" && parIconStart!= null){
    IconStart = (
    <div className={StyleButtons.iconstart}>
      <img className={StyleButtons.vectorIcon} alt="" src={parIconStart} />
    </div>)
  }
  
  if(parIconEnd!= "" && parIconEnd!= null){
    IconEnd = (
    <div className={StyleButtons.iconend}>
      <img className={StyleButtons.vectorIcon} alt="" src={parIconEnd} />
    </div>)
  }

  return (
    <div id="ButtonID" className={StyleButtons.button} style={newStylesButton} onClick={onClick}>
      {IconStart}      
      <div className={StyleButtons.text} style={newStylesText}>{parText}</div>
      {IconEnd}
    </div>
  );
};

export default Buttons;
