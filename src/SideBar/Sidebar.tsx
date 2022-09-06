import { FunctionComponent, useEffect, useRef, useState } from "react";
import styles from "../Content/css/FrmMaster.module.css";

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
  useEffect(() => {

    let CorpoDaPagina = document.getElementById("CorpoDaPaginaClick");
    const Menu = document.getElementById('SideBar');

    // if(CorpoDaPagina != null)
    // {
    //   CorpoDaPagina.addEventListener("click", CorpoDaPaginaClick);
    // }

    function handleResize() {
      console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
    }
    
    window.addEventListener('resize', handleResize)

    
    document.addEventListener("mouseup",e =>{
      const x = e
      if(x!= null && Menu != null)
      {        
      if(!(Menu == x.target)){
        Menu.classList.remove(styles.menuAberto);
        Menu.classList.add(styles.menuRecolhido);
      }      
    }
    });
  });

  return (    
      <div id="SideBar" className={css} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <div className={styles.frameDiv} />
          <div className={styles.frameDiv1} />
          <div className={styles.frameDiv2} />
      </div>  
  );
};