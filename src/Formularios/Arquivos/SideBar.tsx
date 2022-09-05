import { FunctionComponent, useEffect, useRef, useState } from "react";
import styles from "../../Content/css/FrmMaster.module.css";

type Props = { css: string; label: string };

function onMouseEnter(){
  if(window.innerWidth > 700)
  {
    let SideBar =document.getElementById("SideBar");
    if(SideBar!=null)
    {
      if(SideBar.classList.contains(styles.SideBarDesktop.toString()))
      {
        if(SideBar.classList.contains(styles.menuRecolhido))
        {
          SideBar.classList.remove(styles.menuRecolhido);
          SideBar.classList.add(styles.menuAberto);
        }
      }
    }
  }
}
function onMouseLeave(){
  if(window.innerWidth > 700)
  {
    let SideBar =document.getElementById("SideBar");
    if(SideBar!=null)
    {
      if(SideBar.classList.contains(styles.SideBarDesktop.toString()))
      {
        if(SideBar.classList.contains(styles.menuAberto))
        {
          if(SideBar.classList.contains(styles.Close))
          {
            SideBar.classList.remove(styles.menuAberto);
            SideBar.classList.add(styles.menuRecolhido);
          }
        }
      }
    }
  }
}

function CorpoDaPaginaClick(){

  let SideBar =document.getElementById("SideBar");

  if(SideBar!=null)
  {
    if(window.innerWidth <= 700)
    {
      if(SideBar.classList.contains(styles.menuAberto))
      {
        SideBar.classList.remove(styles.menuAberto);
        SideBar.classList.add(styles.menuRecolhido);
      }
    }
  }
}

export const SideBar: FunctionComponent<Props>  =({ css, label, ...props }) => {

  return (     
      <div id="SideBar" className={css} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <div className={styles.frameDiv} />
          <div className={styles.frameDiv1} />
          <div className={styles.frameDiv2} />
      </div>  
  );
};