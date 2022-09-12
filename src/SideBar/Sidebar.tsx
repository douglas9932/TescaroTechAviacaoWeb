import { FunctionComponent, useEffect, useRef, useState } from "react";
import styles from "../Content/css/FrmMaster.module.css";
import Style from "./css/SideBar.module.css";
import { Cadastros } from "./SubMenus/Cadastros";

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

  let SideBar = document.getElementById("SideBar");
  let Body = document.getElementById("BodyDivSideBar");
 
  if(SideBar!=null)
  {
    if(window.innerWidth <= 700)
    {
      if(Body?.classList.contains(styles.Blur))
      {
        if(SideBar.classList.contains(styles.menuAberto))
        {
          SideBar.classList.remove(styles.menuAberto);
          SideBar.classList.add(styles.menuRecolhido);
        }
      }
    }
  }
}

export const SideBar: FunctionComponent<Props>  =({ css, label, ...props }) => {
  useEffect(() => {

    let CorpoDaPagina = document.getElementById("BodyDivSideBar");

    if(CorpoDaPagina != null)
    {
      CorpoDaPagina.addEventListener("click", CorpoDaPaginaClick);
    }

    function handleResize() {
      console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
    }
    
    window.addEventListener('resize', handleResize)

  });

  return (  
    <div className={styles.DivSideBar}>
      <div id="SideBar" className={css} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className={styles.frameDiv} />
        <div className={styles.frameDiv1}>
          <ul>- Menu -
            <li><a className={Style.navlink}>
                      <i className={Style.navicon}>
                        <img  id='img2' src='./Icon.png' />
                      </i>                      
                      <p>1 nomeeee asdasa</p>
                      <i className={Style.IconOpenClose}><img src="./IconCloseMenu.svg"></img></i>
                  </a>
              <ul>
                <li>1.1</li>
                <li>1.2</li>
              </ul>
            </li>
            <li>2</li>
            <li>3
              <ul>
                <li>3.1</li>
                <li>3.2</li>
              </ul>
            </li>
            <Cadastros/>
          </ul>
        </div>
        <div className={styles.frameDiv2} />
      </div> 
      <div id="BodyDivSideBar" className={styles.BodyDivSideBar}>
      </div>
    </div>
         
    );
};