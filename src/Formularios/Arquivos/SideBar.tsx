import { FunctionComponent } from "react";
import styles from "../../Content/css/FrmMaster.module.css";


type Props = { css: string; label: string };

export const SideBar: FunctionComponent<Props>  =({ css, label, ...props }) => {
      return (
        <div id="SideBar" className={css}>
            <div className={styles.frameDiv} />
            <div className={styles.frameDiv1} />
            <div className={styles.frameDiv2} />  
        </div>
      );
    };